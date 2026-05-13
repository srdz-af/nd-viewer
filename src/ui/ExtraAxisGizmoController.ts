import type { RotND } from '../RotND';
import { AXIS_PALETTE, MAX_N } from '../constants';
import type { AxisMap } from '../geometry/projectionUtils';
import {
  axisLabel,
  EXTRA_AXIS_AUTO_ROTATE_SPEED,
  EXTRA_GIZMO_BASE_ANGLE,
  extraAxisGizmoCenter,
  extraAxisGizmoRadius,
  GIZMO_VIEWBOX_SIZE,
  normalizeSignedAngleDelta,
  pointerAngleInExtraAxisGizmo,
} from './axisGizmoShared';

type ExtraAxisParams = {
  axesX: number;
  axesY: number;
  axesZ: number;
};

type ExtraAxisGizmoPlane = {
  planeAxis: number;
  depthDim: number;
};

type ExtraAxisGizmoUI = {
  root: HTMLDivElement;
  line: SVGLineElement;
  negButton: HTMLButtonElement;
  posButton: HTMLButtonElement;
  angleReadout: HTMLDivElement;
  planeButtons: Map<number, HTMLButtonElement>;
  autoToggleButton: HTMLButtonElement;
  perspectiveToggleButton: HTMLButtonElement;
  centerButton: HTMLButtonElement;
};

const AUTO_ROTATE_SPEED_MULTIPLIERS = [0, 1, 2, 3] as const;
const AUTO_ROTATE_BUTTON_ICONS = ['play_arrow', 'speed_1_5x', 'speed_2x', 'stop'] as const;
const AUTO_ROTATE_BUTTON_ACTIONS = [
  'Start auto-rotate',
  'Set auto-rotate 1.5x',
  'Set auto-rotate 2x',
  'Stop auto-rotate',
] as const;
const DEFAULT_PERSPECTIVE_DIMS = Array.from({ length: MAX_N }, (_, dim) => dim);

type ExtraAxisGizmoControllerOptions = {
  rootEl: HTMLDivElement | null;
  getVisibleDims: () => number;
  getParams: () => ExtraAxisParams;
  getRot: () => RotND;
  applySceneBackground: () => void;
  projectAndRenderAll: () => void;
  markProjectionDirty?: () => void;
  updateProjectedAxisDropTarget: (clientX: number, clientY: number, ghostRect: DOMRectReadOnly | null) => void;
  takeProjectedAxisDropTarget: () => 0 | 1 | 2 | null;
  clearProjectedAxisDropTarget: () => void;
  swapExtraAxisWithProjection: (depthDim: number, targetSlot: 0 | 1 | 2) => void;
  onStateChange?: () => void;
};

export type ExtraAxisGizmoState = {
  perspectiveDims: number[];
  disabledPerspectiveDims?: number[];
  autoRotateSpeeds: Array<[number, number]>;
  pausedAutoRotateSpeeds: Array<[number, number]>;
  angles: Array<[number, number]>;
  planeAxes?: Array<[number, number]>;
};

type ExtraAxisOrderDragState = {
  pointerId: number;
  pointerType: string;
  startX: number;
  startY: number;
  grabOffsetX: number;
  grabOffsetY: number;
  lastX: number;
  lastY: number;
  active: boolean;
  sourceDim: number;
  source: HTMLDivElement | null;
  ghost: HTMLDivElement | null;
};

export class ExtraAxisGizmoController {
  private readonly uis = new Map<number, ExtraAxisGizmoUI>();
  private readonly angles = new Map<string, number>();
  private readonly selectedPlaneAxes = new Map<number, number>();
  private readonly selectedPerspectiveDims = new Set<number>(DEFAULT_PERSPECTIVE_DIMS);
  private readonly disabledPerspectiveDims = new Set<number>();
  private readonly autoRotateSpeeds = new Map<number, number>();
  private readonly pausedAutoRotateSpeeds = new Map<number, number>();
  private readonly drag = {
    active: false,
    moved: false,
    pointerId: -1,
    lastAngle: 0,
    planeAxis: -1,
    depthAxis: -1,
    target: null as HTMLDivElement | null,
  };
  private readonly orderDrag: ExtraAxisOrderDragState = {
    pointerId: -1,
    pointerType: '',
    startX: 0,
    startY: 0,
    grabOffsetX: 0,
    grabOffsetY: 0,
    lastX: 0,
    lastY: 0,
    active: false,
    sourceDim: -1,
    source: null,
    ghost: null,
  };
  private readonly scrollBarEl = document.getElementById('extra-axis-scrollbar') as HTMLDivElement | null;
  private readonly scrollThumbEl = document.getElementById('extra-axis-scrollbar-thumb') as HTMLDivElement | null;
  private readonly scrollDrag = {
    pointerId: -1,
    startX: 0,
    startScrollLeft: 0,
    maxScroll: 0,
    trackTravel: 0,
  };
  private readonly orderAutoScroll = {
    frame: 0,
    lastTs: 0,
  };
  private readonly handleOrderPointerMove = (ev: PointerEvent) => {
    if (ev.pointerId !== this.orderDrag.pointerId || !this.orderDrag.source) return;
    ev.preventDefault();
    this.orderDrag.lastX = ev.clientX;
    this.orderDrag.lastY = ev.clientY;
    if (!this.orderDrag.active) {
      const dx = ev.clientX - this.orderDrag.startX;
      const dy = ev.clientY - this.orderDrag.startY;
      if ((dx * dx) + (dy * dy) < 16) return;
      this.beginOrderDragPreview(ev);
      return;
    }
    this.updateOrderGhostPosition(ev.clientX, ev.clientY);
    this.updateProjectedAxisDropTarget(ev.clientX, ev.clientY);
    this.updateOrderAutoScroll(ev.clientX);
  };
  private readonly stepOrderAutoScroll = (ts: number) => {
    this.orderAutoScroll.frame = 0;
    if (!this.options.rootEl || !this.orderDrag.active) return;

    const direction = this.orderAutoScrollDirection(this.orderDrag.lastX);
    if (direction === 0) return;

    const dt = Math.min(40, Math.max(0, ts - (this.orderAutoScroll.lastTs || ts)));
    this.orderAutoScroll.lastTs = ts;
    const maxScroll = Math.max(0, this.options.rootEl.scrollWidth - this.options.rootEl.clientWidth);
    this.options.rootEl.scrollLeft = clamp(
      this.options.rootEl.scrollLeft + (direction * dt * 0.85),
      0,
      maxScroll,
    );
    this.syncScrollIndicator();
    this.updateProjectedAxisDropTarget(this.orderDrag.lastX, this.orderDrag.lastY);
    this.orderAutoScroll.frame = requestAnimationFrame(this.stepOrderAutoScroll);
  };
  private readonly handleOrderPointerUp = (ev: PointerEvent) => {
    if (ev.pointerId !== this.orderDrag.pointerId) return;
    const wasTap = !this.orderDrag.active;
    const sourceDim = this.orderDrag.sourceDim;
    const pointerType = this.orderDrag.pointerType;
    const wasOpen = this.touchPlanePickerDepthDim === sourceDim;
    if (this.orderDrag.active) this.updateProjectedAxisDropTarget(ev.clientX, ev.clientY);
    this.endOrderDrag(true);
    if (wasTap && sourceDim >= 0 && this.isTouchRevealPointer(pointerType)) {
      ev.preventDefault();
      ev.stopPropagation();
      if (wasOpen) this.closeTouchPlanePicker();
      else this.openTouchPlanePicker(sourceDim);
    }
  };
  private readonly handleOrderPointerCancel = (ev: PointerEvent) => {
    if (ev.pointerId !== this.orderDrag.pointerId) return;
    this.endOrderDrag(false);
  };
  private readonly handleBandScroll = () => this.syncScrollIndicator();
  private readonly handleScrollBarPointerDown = (ev: PointerEvent) => {
    if (ev.button !== 0) return;
    const metrics = this.scrollMetrics();
    if (!metrics) return;
    ev.preventDefault();
    ev.stopPropagation();

    const target = ev.target as Node | null;
    if (target && !this.scrollThumbEl?.contains(target)) {
      const centeredX = ev.clientX - metrics.trackStart - (metrics.thumbWidth * 0.5);
      this.options.rootEl!.scrollLeft = clamp(
        (centeredX / metrics.trackTravel) * metrics.maxScroll,
        0,
        metrics.maxScroll,
      );
    }

    const nextMetrics = this.scrollMetrics();
    if (!nextMetrics) return;
    this.scrollDrag.pointerId = ev.pointerId;
    this.scrollDrag.startX = ev.clientX;
    this.scrollDrag.startScrollLeft = this.options.rootEl!.scrollLeft;
    this.scrollDrag.maxScroll = nextMetrics.maxScroll;
    this.scrollDrag.trackTravel = nextMetrics.trackTravel;
    window.addEventListener('pointermove', this.handleScrollBarPointerMove, { passive: false });
    window.addEventListener('pointerup', this.handleScrollBarPointerUp);
    window.addEventListener('pointercancel', this.handleScrollBarPointerUp);
  };
  private readonly handleScrollBarPointerMove = (ev: PointerEvent) => {
    if (ev.pointerId !== this.scrollDrag.pointerId || !this.options.rootEl) return;
    ev.preventDefault();
    const dx = ev.clientX - this.scrollDrag.startX;
    this.options.rootEl.scrollLeft = clamp(
      this.scrollDrag.startScrollLeft + ((dx / this.scrollDrag.trackTravel) * this.scrollDrag.maxScroll),
      0,
      this.scrollDrag.maxScroll,
    );
  };
  private readonly handleScrollBarPointerUp = (ev: PointerEvent) => {
    if (ev.pointerId !== this.scrollDrag.pointerId) return;
    window.removeEventListener('pointermove', this.handleScrollBarPointerMove);
    window.removeEventListener('pointerup', this.handleScrollBarPointerUp);
    window.removeEventListener('pointercancel', this.handleScrollBarPointerUp);
    this.scrollDrag.pointerId = -1;
  };
  private touchPlanePickerDepthDim = -1;
  private readonly handleDocumentPointerDown = (ev: PointerEvent) => {
    if (this.touchPlanePickerDepthDim < 0) return;
    const ui = this.uis.get(this.touchPlanePickerDepthDim);
    const target = ev.target as Node | null;
    if (ui?.root && target && ui.root.contains(target)) return;
    this.closeTouchPlanePicker();
  };

  constructor(private readonly options: ExtraAxisGizmoControllerOptions) {
    this.options.rootEl?.addEventListener('scroll', this.handleBandScroll, { passive: true });
    this.scrollBarEl?.addEventListener('pointerdown', this.handleScrollBarPointerDown);
    window.addEventListener('pointerdown', this.handleDocumentPointerDown, { capture: true });
    window.addEventListener('resize', this.handleBandScroll);
    requestAnimationFrame(this.handleBandScroll);
  }

  private setAttr(el: Element, name: string, value: string) {
    if (el.getAttribute(name) !== value) el.setAttribute(name, value);
  }

  private setText(el: HTMLElement, value: string) {
    if (el.textContent !== value) el.textContent = value;
  }

  private setStyle(el: HTMLElement | SVGElement, property: string, value: string) {
    if (el.style.getPropertyValue(property) !== value) el.style.setProperty(property, value);
  }

  private setTitle(el: HTMLElement, title: string) {
    if (el.title !== title) el.title = title;
    this.setAttr(el, 'aria-label', title);
  }

  private syncGizmoDomOrder(orderedRoots: HTMLDivElement[]) {
    const root = this.options.rootEl;
    if (!root) return;
    const current = Array.from(root.children).filter((child): child is HTMLDivElement => (
      child instanceof HTMLDivElement && child.classList.contains('extra-axis-gizmo')
    ));
    for (let idx = 0; idx < orderedRoots.length; idx++) {
      const desired = orderedRoots[idx];
      if (current[idx] === desired) continue;
      root.insertBefore(desired, current[idx] ?? null);
      const existingIndex = current.indexOf(desired);
      if (existingIndex >= 0) current.splice(existingIndex, 1);
      current.splice(idx, 0, desired);
    }
  }

  clearDynamicState() {
    this.autoRotateSpeeds.clear();
    this.pausedAutoRotateSpeeds.clear();
    this.angles.clear();
    this.selectedPlaneAxes.clear();
  }

  getState(): ExtraAxisGizmoState {
    const sortedEntries = (source: Map<number, number>) => (
      Array.from(source.entries()).sort((a, b) => a[0] - b[0]) as Array<[number, number]>
    );
    return {
      perspectiveDims: Array.from(this.selectedPerspectiveDims).sort((a, b) => a - b),
      disabledPerspectiveDims: Array.from(this.disabledPerspectiveDims).sort((a, b) => a - b),
      autoRotateSpeeds: sortedEntries(this.autoRotateSpeeds),
      pausedAutoRotateSpeeds: sortedEntries(this.pausedAutoRotateSpeeds),
      angles: [],
      planeAxes: sortedEntries(this.selectedPlaneAxes),
    };
  }

  applyState(state: Partial<ExtraAxisGizmoState> | null | undefined) {
    if (!state) return;
    const normalizeDim = (value: number) => (
      Number.isInteger(value) && value >= 0 && value < this.options.getVisibleDims() ? value : -1
    );
    const normalizePersistentDim = (value: number) => (
      Number.isInteger(value) && value >= 0 && value < MAX_N ? value : -1
    );
    const normalizeSpeed = (value: number) => (
      Number.isFinite(value) ? Math.max(0, Math.min(3, Math.round(value))) : 0
    );

    this.selectedPerspectiveDims.clear();
    this.disabledPerspectiveDims.clear();
    if (state.disabledPerspectiveDims) {
      DEFAULT_PERSPECTIVE_DIMS.forEach(dim => this.selectedPerspectiveDims.add(dim));
      for (const dim of state.disabledPerspectiveDims) {
        const normalized = normalizePersistentDim(dim);
        if (normalized < 0) continue;
        this.selectedPerspectiveDims.delete(normalized);
        this.disabledPerspectiveDims.add(normalized);
      }
    } else {
      for (const dim of state.perspectiveDims ?? DEFAULT_PERSPECTIVE_DIMS) {
        const normalized = normalizePersistentDim(dim);
        if (normalized >= 0) this.selectedPerspectiveDims.add(normalized);
      }
    }

    this.autoRotateSpeeds.clear();
    for (const [dim, speed] of state.autoRotateSpeeds ?? []) {
      const normalizedDim = normalizeDim(dim);
      const normalizedSpeed = normalizeSpeed(speed);
      if (normalizedDim >= 0 && normalizedSpeed > 0) this.autoRotateSpeeds.set(normalizedDim, normalizedSpeed);
    }

    this.pausedAutoRotateSpeeds.clear();
    for (const [dim, speed] of state.pausedAutoRotateSpeeds ?? []) {
      const normalizedDim = normalizeDim(dim);
      const normalizedSpeed = normalizeSpeed(speed);
      if (normalizedDim >= 0 && normalizedSpeed > 0) {
        this.pausedAutoRotateSpeeds.set(normalizedDim, normalizedSpeed);
      }
    }

    this.selectedPlaneAxes.clear();
    for (const [dim, planeAxis] of state.planeAxes ?? []) {
      const normalizedDim = normalizeDim(dim);
      const normalizedAxis = normalizeDim(planeAxis);
      if (normalizedDim >= 0 && normalizedAxis >= 0 && normalizedAxis !== normalizedDim) {
        this.selectedPlaneAxes.set(normalizedDim, normalizedAxis);
      }
    }

    this.angles.clear();

    this.sync();
  }

  perspectiveDimsFor(localN: number, axisMap: AxisMap): number[] {
    if (localN < 4) return [];
    const extraSet = new Set(this.currentExtraDims());
    const available = new Set<number>(axisMap.slice(0, localN));
    return Array.from(this.selectedPerspectiveDims).filter(
      dim => extraSet.has(dim) && available.has(dim),
    );
  }

  applyAutoRotation(dt: number) {
    const extraDims = this.currentExtraDims();
    if (!extraDims.length || this.autoRotateSpeeds.size === 0) return false;

    let rotated = false;
    for (const depthDim of extraDims) {
      const speed = this.autoRotateSpeeds.get(depthDim) ?? 0;
      const multiplier = AUTO_ROTATE_SPEED_MULTIPLIERS[speed] ?? 0;
      if (multiplier <= 0) continue;
      const plane = this.autoRotationPlaneForDepth(depthDim);
      if (plane.planeAxis < 0 || plane.planeAxis === plane.depthDim) continue;
      const delta = EXTRA_AXIS_AUTO_ROTATE_SPEED * multiplier * dt;
      this.options.getRot().applyGivensLeft(plane.planeAxis, plane.depthDim, delta);
      this.offsetAngle(plane, delta);
      rotated = true;
    }

    if (!rotated) return false;
    this.syncPlaneAngleDisplays();
    this.options.applySceneBackground();
    return true;
  }

  toggleActiveAutoRotations() {
    const extraDims = this.currentExtraDims();
    if (!extraDims.length) return;

    const activeDims = extraDims.filter(dim => (this.autoRotateSpeeds.get(dim) ?? 0) > 0);
    if (activeDims.length) {
      this.pausedAutoRotateSpeeds.clear();
      for (const dim of activeDims) {
        this.pausedAutoRotateSpeeds.set(dim, this.autoRotateSpeeds.get(dim) ?? 1);
      }
      for (const dim of extraDims) this.setAutoRotateSpeed(dim, 0);
      this.options.onStateChange?.();
      return;
    }

    const hasPausedSpeed = extraDims.some(dim => (this.pausedAutoRotateSpeeds.get(dim) ?? 0) > 0);
    for (const dim of extraDims) {
      const speed = hasPausedSpeed ? this.pausedAutoRotateSpeeds.get(dim) ?? 0 : 1;
      this.setAutoRotateSpeed(dim, speed);
    }
    this.pausedAutoRotateSpeeds.clear();
    this.options.onStateChange?.();
  }

  syncRotationAngles() {
    const planes = this.currentExtraDims().map(dim => this.autoRotationPlaneForDepth(dim));
    if (planes.length < 2) return;

    const targetAngle = this.getAngle(planes[0]);
    let rotated = false;
    for (const plane of planes.slice(1)) {
      if (plane.planeAxis < 0 || plane.planeAxis === plane.depthDim) continue;
      const currentAngle = this.getAngle(plane);
      const delta = normalizeSignedAngleDelta(targetAngle - currentAngle);
      this.setAngle(plane, targetAngle);
      if (Math.abs(delta) < 1e-4) continue;
      this.options.getRot().applyGivensLeft(plane.planeAxis, plane.depthDim, delta);
      rotated = true;
    }

    this.sync();
    if (!rotated) return;
    this.options.applySceneBackground();
    this.options.projectAndRenderAll();
    this.options.onStateChange?.();
  }

  resetRotations() {
    this.options.getRot().reset();
    this.angles.clear();
    this.sync();
    this.options.applySceneBackground();
    this.options.projectAndRenderAll();
    this.options.onStateChange?.();
  }

  sync() {
    if (!this.options.rootEl) return;
    const extraDims = this.currentExtraDims();
    const activeDepthDims = new Set(extraDims);
    const freezeDomOrder = this.orderDrag.active;
    const orderedRoots: HTMLDivElement[] = [];

    for (const [depthDim, ui] of this.uis) {
      if (!activeDepthDims.has(depthDim)) {
        if (this.drag.active && this.drag.depthAxis === depthDim) this.resetDragState();
        if (this.orderDrag.sourceDim === depthDim) this.endOrderDrag(false);
        ui.root.remove();
        this.uis.delete(depthDim);
        this.selectedPlaneAxes.delete(depthDim);
        this.deleteAnglesForDepth(depthDim);
        if (this.touchPlanePickerDepthDim === depthDim) this.touchPlanePickerDepthDim = -1;
      }
    }

    for (const depthDim of extraDims) {
      let ui = this.uis.get(depthDim);
      if (!ui) {
        ui = this.createUI(depthDim);
        this.uis.set(depthDim, ui);
      }
      orderedRoots.push(ui.root);
      if (freezeDomOrder && !ui.root.parentElement && ui.root !== this.orderDrag.source) {
        this.options.rootEl.appendChild(ui.root);
      }
    }
    if (!freezeDomOrder) this.syncGizmoDomOrder(orderedRoots);

    for (const depthDim of extraDims) {
      const ui = this.uis.get(depthDim);
      if (!ui) continue;
      const color = AXIS_PALETTE[depthDim % AXIS_PALETTE.length];
      const depthLabel = axisLabel(depthDim);
      this.setStyle(ui.root, '--extra-axis-color', color);
      this.setTitle(ui.root, `${depthLabel} plane rotation controls`);
      ui.root.classList.remove('disabled');
      if (ui.posButton.disabled) ui.posButton.disabled = false;
      if (ui.negButton.disabled) ui.negButton.disabled = false;
      this.setText(ui.centerButton, depthLabel);
      this.setTitle(ui.centerButton, `Drag ${depthLabel} to a projected axis`);
      this.syncPlaneButtons(ui, depthDim);
      this.syncActivePlaneLine(ui, depthDim);
      this.setAutoRotateSpeed(depthDim, this.autoRotateSpeeds.get(depthDim) ?? 0);
      this.setPerspectiveDepth(depthDim, this.selectedPerspectiveDims.has(depthDim));
    }
    this.syncScrollIndicator();
  }

  private orderedVisibleDims() {
    const nVis = this.options.getVisibleDims();
    if (nVis <= 0) return [];
    return Array.from({ length: nVis }, (_value, dim) => dim);
  }

  private currentActiveDims() {
    const ordered = this.orderedVisibleDims();
    const active = [this.options.getParams().axesX, this.options.getParams().axesY, this.options.getParams().axesZ];
    return active.filter(dim => ordered.includes(dim));
  }

  private currentExtraDims() {
    const activeSet = new Set(this.currentActiveDims());
    return this.orderedVisibleDims().filter(dim => !activeSet.has(dim));
  }

  private planesForDepth(depthDim: number): ExtraAxisGizmoPlane[] {
    return this.orderedVisibleDims()
      .filter(planeAxis => planeAxis !== depthDim)
      .map(planeAxis => ({ planeAxis, depthDim }));
  }

  private autoRotationPlaneForDepth(depthDim: number): ExtraAxisGizmoPlane {
    const selected = this.selectedPlaneAxes.get(depthDim);
    if (typeof selected === 'number' && selected >= 0 && selected !== depthDim) {
      return { planeAxis: selected, depthDim };
    }
    const active = this.currentActiveDims().find(dim => dim !== depthDim);
    if (typeof active === 'number') return { planeAxis: active, depthDim };
    const fallback = this.orderedVisibleDims().find(dim => dim !== depthDim) ?? -1;
    return { planeAxis: fallback, depthDim };
  }

  private getAngle(plane: ExtraAxisGizmoPlane) {
    const key = this.planeKey(plane);
    const existing = this.angles.get(key);
    if (typeof existing === 'number') return existing;

    const mirrorKey = this.planeKey(this.mirrorPlane(plane));
    const mirrorExisting = this.angles.get(mirrorKey);
    if (typeof mirrorExisting === 'number') {
      const angle = this.mirrorAngle(mirrorExisting);
      this.angles.set(key, angle);
      return angle;
    }

    const rot = this.options.getRot();
    const angle = this.angleFromRotationMatrix(plane, rot.matrix, rot.N);
    this.setAngle(plane, angle);
    return angle;
  }

  private planeKey(plane: ExtraAxisGizmoPlane) {
    return `${plane.planeAxis}:${plane.depthDim}`;
  }

  private mirrorPlane(plane: ExtraAxisGizmoPlane): ExtraAxisGizmoPlane {
    return { planeAxis: plane.depthDim, depthDim: plane.planeAxis };
  }

  private angleFromRotationMatrix(plane: ExtraAxisGizmoPlane, R: Float32Array, N: number) {
    const x = R[plane.planeAxis * N + plane.planeAxis] ?? 1;
    const y = R[plane.depthDim * N + plane.planeAxis] ?? 0;
    return normalizeSignedAngleDelta(EXTRA_GIZMO_BASE_ANGLE + Math.atan2(y, x));
  }

  private mirrorAngle(angle: number) {
    const deltaFromBase = normalizeSignedAngleDelta(angle - EXTRA_GIZMO_BASE_ANGLE);
    return normalizeSignedAngleDelta(EXTRA_GIZMO_BASE_ANGLE - deltaFromBase);
  }

  private setAngle(plane: ExtraAxisGizmoPlane, angle: number) {
    const normalizedAngle = normalizeSignedAngleDelta(angle);
    this.angles.set(this.planeKey(plane), normalizedAngle);
    if (plane.planeAxis !== plane.depthDim) {
      this.angles.set(this.planeKey(this.mirrorPlane(plane)), this.mirrorAngle(normalizedAngle));
    }
  }

  private offsetAngle(plane: ExtraAxisGizmoPlane, delta: number) {
    this.setAngle(plane, this.getAngle(plane) + delta);
  }

  private dialDegrees(angle: number) {
    const clockwise = ((angle - EXTRA_GIZMO_BASE_ANGLE) % (Math.PI * 2) + (Math.PI * 2)) % (Math.PI * 2);
    const rounded = Math.round((clockwise * 180 / Math.PI) * 10) / 10;
    return rounded >= 360 ? 0 : rounded;
  }

  private formatDialAngle(angle: number) {
    return `${this.dialDegrees(angle).toFixed(1)}deg`;
  }

  private deleteAnglesForDepth(depthDim: number) {
    for (const key of Array.from(this.angles.keys())) {
      const [a, b] = key.split(':').map(value => Number(value));
      if (a === depthDim || b === depthDim) this.angles.delete(key);
    }
  }

  private planeLabel(plane: ExtraAxisGizmoPlane) {
    return `${axisLabel(plane.planeAxis)}${axisLabel(plane.depthDim)}`;
  }

  private syncPlaneButtons(ui: ExtraAxisGizmoUI, depthDim: number) {
    const planes = this.planesForDepth(depthDim);
    const activeAxes = new Set(planes.map(plane => plane.planeAxis));
    const buttonScale = (ui.root.clientWidth || GIZMO_VIEWBOX_SIZE) / GIZMO_VIEWBOX_SIZE;
    const hidden = this.drag.active && this.drag.depthAxis === depthDim;

    for (const [planeAxis, button] of ui.planeButtons) {
      if (!activeAxes.has(planeAxis)) {
        button.remove();
        ui.planeButtons.delete(planeAxis);
      }
    }

    planes.forEach((plane, index) => {
      let button = ui.planeButtons.get(plane.planeAxis);
      if (!button) {
        button = this.createPlaneButton(ui.root, plane);
        ui.planeButtons.set(plane.planeAxis, button);
      }
      const selectorAngle = EXTRA_GIZMO_BASE_ANGLE + ((index / Math.max(1, planes.length)) * Math.PI * 2);
      const x = extraAxisGizmoCenter + Math.cos(selectorAngle) * extraAxisGizmoRadius;
      const y = extraAxisGizmoCenter + Math.sin(selectorAngle) * extraAxisGizmoRadius;
      const planeAngle = this.getAngle(plane);
      const dotRadius = 8.5;
      const label = axisLabel(plane.planeAxis);
      this.setPlaneButtonLabel(button, label);
      this.setTitle(button, `Rotate ${this.planeLabel(plane)} (${this.formatDialAngle(planeAngle)})`);
      this.setStyle(button, '--plane-axis-color', AXIS_PALETTE[plane.planeAxis % AXIS_PALETTE.length]);
      this.setPlaneButtonIndicator(button, Math.cos(planeAngle) * dotRadius, Math.sin(planeAngle) * dotRadius);
      this.setStyle(button, 'left', `${x * buttonScale}px`);
      this.setStyle(button, 'top', `${y * buttonScale}px`);
      button.classList.toggle('selected', this.selectedPlaneAxes.get(depthDim) === plane.planeAxis);
      button.hidden = hidden;
    });
  }

  private syncPlaneAngleDisplays() {
    for (const depthDim of this.currentExtraDims()) {
      const ui = this.uis.get(depthDim);
      if (!ui) continue;
      this.syncPlaneButtons(ui, depthDim);
      this.syncActivePlaneLine(ui, depthDim);
    }
  }

  private setPlaneButtonLabel(button: HTMLButtonElement, label: string) {
    const labelEl = button.querySelector<HTMLSpanElement>('.plane-label');
    if (labelEl) this.setText(labelEl, label);
  }

  private setPlaneButtonIndicator(button: HTMLButtonElement, x: number, y: number) {
    const indicator = button.querySelector<HTMLSpanElement>('.plane-angle-indicator');
    if (!indicator) return;
    this.setStyle(indicator, 'transform', `translate3d(${x}px, ${y}px, 0)`);
  }

  private syncActivePlaneLine(ui: ExtraAxisGizmoUI, depthDim: number) {
    const active = this.drag.active && this.drag.depthAxis === depthDim && this.drag.planeAxis >= 0;
    ui.root.classList.toggle('plane-active', active);
    ui.line.style.display = active ? '' : 'none';
    ui.negButton.hidden = !active;
    ui.posButton.hidden = !active;
    ui.angleReadout.hidden = !active;
    if (!active) return;

    const plane = { planeAxis: this.drag.planeAxis, depthDim };
    const buttonScale = (ui.root.clientWidth || GIZMO_VIEWBOX_SIZE) / GIZMO_VIEWBOX_SIZE;
    const angle = this.getAngle(plane);
    const dx = Math.cos(angle);
    const dy = Math.sin(angle);
    const startX = extraAxisGizmoCenter - dx * extraAxisGizmoRadius;
    const startY = extraAxisGizmoCenter - dy * extraAxisGizmoRadius;
    const endX = extraAxisGizmoCenter + dx * extraAxisGizmoRadius;
    const endY = extraAxisGizmoCenter + dy * extraAxisGizmoRadius;
    const label = this.planeLabel(plane);
    const formattedAngle = this.formatDialAngle(angle);

    this.setText(ui.posButton, label);
    this.setText(ui.negButton, label);
    this.setText(ui.angleReadout, formattedAngle);
    this.setTitle(ui.posButton, `Rotate ${label}`);
    this.setTitle(ui.negButton, `Rotate ${label}`);
    this.setTitle(ui.angleReadout, `${label} angle ${formattedAngle}`);
    this.setAttr(ui.line, 'x1', `${startX}`);
    this.setAttr(ui.line, 'y1', `${startY}`);
    this.setAttr(ui.line, 'x2', `${endX}`);
    this.setAttr(ui.line, 'y2', `${endY}`);
    this.setStyle(ui.line, 'opacity', '0.9');
    this.setStyle(ui.negButton, 'left', `${startX * buttonScale}px`);
    this.setStyle(ui.negButton, 'top', `${startY * buttonScale}px`);
    this.setStyle(ui.posButton, 'left', `${endX * buttonScale}px`);
    this.setStyle(ui.posButton, 'top', `${endY * buttonScale}px`);
    ui.posButton.classList.remove('back');
    ui.negButton.classList.remove('back');
    this.setStyle(ui.posButton, 'z-index', '2');
    this.setStyle(ui.negButton, 'z-index', '1');
  }

  private setAutoRotateSpeed(depthDim: number, speed: number) {
    const normalizedSpeed = Number.isFinite(speed) ? Math.max(0, Math.min(3, Math.round(speed))) : 0;
    if (normalizedSpeed > 0) this.autoRotateSpeeds.set(depthDim, normalizedSpeed);
    else this.autoRotateSpeeds.delete(depthDim);

    const ui = this.uis.get(depthDim);
    if (!ui) return;

    const active = normalizedSpeed > 0;
    ui.autoToggleButton.classList.toggle('active', active);
    const speedKey = String(normalizedSpeed);
    if (ui.autoToggleButton.dataset.autoSpeed !== speedKey) {
      ui.autoToggleButton.dataset.autoSpeed = speedKey;
      ui.autoToggleButton.replaceChildren();
      const icon = document.createElement('span');
      icon.className = 'material-symbols-rounded';
      icon.setAttribute('aria-hidden', 'true');
      icon.textContent = AUTO_ROTATE_BUTTON_ICONS[normalizedSpeed] ?? AUTO_ROTATE_BUTTON_ICONS[0];
      ui.autoToggleButton.appendChild(icon);
    }
    const label = this.planeLabel(this.autoRotationPlaneForDepth(depthDim));
    const action = AUTO_ROTATE_BUTTON_ACTIONS[normalizedSpeed] ?? AUTO_ROTATE_BUTTON_ACTIONS[0];
    const title = `${action} ${label}`;
    this.setTitle(ui.autoToggleButton, title);
    this.setAttr(ui.autoToggleButton, 'aria-pressed', String(active));
  }

  private advanceAutoRotate(depthDim: number) {
    const currentSpeed = this.autoRotateSpeeds.get(depthDim) ?? 0;
    const nextSpeed = currentSpeed >= 3 ? 0 : currentSpeed + 1;
    this.setAutoRotateSpeed(depthDim, nextSpeed);
    this.options.onStateChange?.();
  }

  private scrollMetrics() {
    const root = this.options.rootEl;
    if (!root || !this.scrollBarEl || !this.scrollThumbEl) return null;
    const maxScroll = root.scrollWidth - root.clientWidth;
    if (maxScroll <= 1) return null;

    const barRect = this.scrollBarEl.getBoundingClientRect();
    const trackInset = 18;
    const trackWidth = Math.max(1, barRect.width - (trackInset * 2));
    const thumbWidth = Math.max(28, Math.min(trackWidth, trackWidth * (root.clientWidth / root.scrollWidth)));
    const trackTravel = Math.max(1, trackWidth - thumbWidth);
    return {
      maxScroll,
      thumbWidth,
      trackTravel,
      trackStart: barRect.left + trackInset,
      trackInset,
    };
  }

  private syncScrollIndicator() {
    const root = this.options.rootEl;
    if (!root || !this.scrollBarEl || !this.scrollThumbEl) return;
    const metrics = this.scrollMetrics();
    if (!metrics) {
      this.scrollBarEl.classList.add('inactive');
      return;
    }

    this.scrollBarEl.classList.remove('inactive');
    const left = metrics.trackInset + ((root.scrollLeft / metrics.maxScroll) * metrics.trackTravel);
    this.setStyle(this.scrollThumbEl, 'width', `${metrics.thumbWidth}px`);
    this.setStyle(this.scrollThumbEl, 'left', `${left}px`);
  }

  private isTouchRevealPointer(pointerType: string) {
    return pointerType === 'touch' || pointerType === 'pen';
  }

  private openTouchPlanePicker(depthDim: number) {
    if (this.touchPlanePickerDepthDim >= 0 && this.touchPlanePickerDepthDim !== depthDim) {
      this.uis.get(this.touchPlanePickerDepthDim)?.root.classList.remove('plane-picker-open');
    }
    this.touchPlanePickerDepthDim = depthDim;
    this.uis.get(depthDim)?.root.classList.add('plane-picker-open');
  }

  private closeTouchPlanePicker() {
    if (this.touchPlanePickerDepthDim < 0) return;
    const root = this.uis.get(this.touchPlanePickerDepthDim)?.root;
    root?.classList.remove('plane-picker-open');
    if (root?.contains(document.activeElement)) {
      (document.activeElement as HTMLElement | null)?.blur?.();
    }
    this.touchPlanePickerDepthDim = -1;
  }

  private setPerspectiveDepth(depthDim: number, active: boolean) {
    if (active) {
      this.selectedPerspectiveDims.add(depthDim);
      this.disabledPerspectiveDims.delete(depthDim);
    } else {
      this.selectedPerspectiveDims.delete(depthDim);
      this.disabledPerspectiveDims.add(depthDim);
    }
    const ui = this.uis.get(depthDim);
    if (!ui) return;

    ui.perspectiveToggleButton.classList.toggle('active', active);
    const label = axisLabel(depthDim);
    const action = active ? 'Disable perspective depth' : 'Enable perspective depth';
    const title = `${action} for ${label} axis`;
    this.setTitle(ui.perspectiveToggleButton, title);
    this.setAttr(ui.perspectiveToggleButton, 'aria-pressed', String(active));
  }

  private resetDragState() {
    const target = this.drag.target;
    if (target && this.drag.pointerId >= 0 && target.hasPointerCapture(this.drag.pointerId)) {
      target.releasePointerCapture(this.drag.pointerId);
    }
    target?.classList.remove('dragging');
    target?.classList.remove('plane-active');
    if (this.drag.depthAxis >= 0) {
      const ui = this.uis.get(this.drag.depthAxis);
      if (ui) {
        ui.line.style.display = 'none';
        ui.negButton.hidden = true;
        ui.posButton.hidden = true;
        ui.angleReadout.hidden = true;
        for (const button of ui.planeButtons.values()) button.hidden = false;
      }
    }
    this.drag.active = false;
    this.drag.moved = false;
    this.drag.pointerId = -1;
    this.drag.lastAngle = 0;
    this.drag.planeAxis = -1;
    this.drag.depthAxis = -1;
    this.drag.target = null;
  }

  private beginDrag(ev: PointerEvent, plane: ExtraAxisGizmoPlane, gizmoEl: HTMLDivElement) {
    const angle = pointerAngleInExtraAxisGizmo(ev, gizmoEl);
    if (angle == null) return;

    this.drag.active = true;
    this.drag.moved = false;
    this.drag.pointerId = ev.pointerId;
    this.drag.lastAngle = angle;
    this.drag.planeAxis = plane.planeAxis;
    this.drag.depthAxis = plane.depthDim;
    this.drag.target = gizmoEl;
    this.selectedPlaneAxes.set(plane.depthDim, plane.planeAxis);
    this.setAngle(plane, this.angleFromRotationMatrix(plane, this.options.getRot().matrix, this.options.getRot().N));
    try {
      gizmoEl.setPointerCapture(ev.pointerId);
    } catch {
      // Some browsers are strict about capture when pointerdown starts on a child.
    }
    gizmoEl.classList.add('dragging');
    this.sync();
    this.options.onStateChange?.();
  }

  private endDrag(ev: PointerEvent) {
    if (ev.pointerId !== this.drag.pointerId) return;
    const moved = this.drag.moved;
    this.resetDragState();
    this.closeTouchPlanePicker();
    this.sync();
    if (moved) this.options.projectAndRenderAll();
  }

  private beginOrderHandleDrag(ev: PointerEvent, gizmoEl: HTMLDivElement, depthDim: number) {
    ev.preventDefault();
    ev.stopPropagation();
    if (ev.button !== 0 || this.orderDrag.pointerId !== -1) return;
    if (this.drag.active) this.resetDragState();
    this.orderDrag.pointerId = ev.pointerId;
    this.orderDrag.pointerType = ev.pointerType;
    this.orderDrag.startX = ev.clientX;
    this.orderDrag.startY = ev.clientY;
    this.orderDrag.lastX = ev.clientX;
    this.orderDrag.lastY = ev.clientY;
    this.orderDrag.sourceDim = depthDim;
    this.orderDrag.source = gizmoEl;
    this.orderDrag.active = false;
    window.addEventListener('pointermove', this.handleOrderPointerMove, { passive: false });
    window.addEventListener('pointerup', this.handleOrderPointerUp);
    window.addEventListener('pointercancel', this.handleOrderPointerCancel);
  }

  private beginOrderDragPreview(ev: PointerEvent) {
    if (!this.options.rootEl || !this.orderDrag.source) return;
    const sourceRect = this.orderDrag.source.getBoundingClientRect();
    this.closeTouchPlanePicker();
    this.orderDrag.active = true;
    this.orderDrag.grabOffsetX = ev.clientX - sourceRect.left;
    this.orderDrag.grabOffsetY = ev.clientY - sourceRect.top;
    this.orderDrag.lastX = ev.clientX;
    this.orderDrag.lastY = ev.clientY;

    this.orderDrag.source.classList.add('extra-axis-swap-source');
    this.orderDrag.source.style.display = 'none';

    this.orderDrag.ghost = this.orderDrag.source.cloneNode(true) as HTMLDivElement;
    this.orderDrag.ghost.classList.add('extra-axis-drag-ghost');
    this.orderDrag.ghost.style.display = '';
    this.orderDrag.ghost.style.width = `${sourceRect.width}px`;
    this.orderDrag.ghost.style.height = `${sourceRect.height}px`;
    document.body.appendChild(this.orderDrag.ghost);

    this.options.rootEl.classList.add('dragging');
    document.body.classList.add('extra-axis-swap-dragging');
    this.updateOrderGhostPosition(ev.clientX, ev.clientY);
    this.updateProjectedAxisDropTarget(ev.clientX, ev.clientY);
    this.updateOrderAutoScroll(ev.clientX);
  }

  private orderAutoScrollDirection(clientX: number) {
    const root = this.options.rootEl;
    if (!root || !this.orderDrag.active) return 0;
    const maxScroll = root.scrollWidth - root.clientWidth;
    if (maxScroll <= 1) return 0;

    const rect = root.getBoundingClientRect();
    const edge = Math.max(28, Math.min(56, rect.width * 0.22));
    const leftDistance = clientX - rect.left;
    const rightDistance = rect.right - clientX;

    if (leftDistance < edge && root.scrollLeft > 0) {
      return -Math.min(1, Math.max(0.18, (edge - leftDistance) / edge));
    }
    if (rightDistance < edge && root.scrollLeft < maxScroll) {
      return Math.min(1, Math.max(0.18, (edge - rightDistance) / edge));
    }
    return 0;
  }

  private updateOrderAutoScroll(clientX: number) {
    if (this.orderAutoScrollDirection(clientX) === 0) {
      this.stopOrderAutoScroll();
      return;
    }
    if (this.orderAutoScroll.frame) return;
    this.orderAutoScroll.lastTs = performance.now();
    this.orderAutoScroll.frame = requestAnimationFrame(this.stepOrderAutoScroll);
  }

  private stopOrderAutoScroll() {
    if (this.orderAutoScroll.frame) cancelAnimationFrame(this.orderAutoScroll.frame);
    this.orderAutoScroll.frame = 0;
    this.orderAutoScroll.lastTs = 0;
  }

  private updateProjectedAxisDropTarget(clientX: number, clientY: number) {
    this.options.updateProjectedAxisDropTarget(
      clientX,
      clientY,
      this.orderDrag.ghost?.getBoundingClientRect() ?? null,
    );
  }

  private updateOrderGhostPosition(clientX: number, clientY: number) {
    if (!this.orderDrag.ghost) return;
    this.orderDrag.ghost.style.left = `${clientX - this.orderDrag.grabOffsetX}px`;
    this.orderDrag.ghost.style.top = `${clientY - this.orderDrag.grabOffsetY}px`;
  }

  private clearOrderDragPreview() {
    if (this.orderDrag.ghost?.parentElement) this.orderDrag.ghost.parentElement.removeChild(this.orderDrag.ghost);
    if (this.orderDrag.source) {
      this.orderDrag.source.style.display = '';
      this.orderDrag.source.classList.remove('extra-axis-swap-source');
    }
    this.options.rootEl?.classList.remove('dragging');
    document.body.classList.remove('extra-axis-swap-dragging');
    this.orderDrag.ghost = null;
  }

  private endOrderDrag(commit: boolean) {
    this.stopOrderAutoScroll();
    window.removeEventListener('pointermove', this.handleOrderPointerMove);
    window.removeEventListener('pointerup', this.handleOrderPointerUp);
    window.removeEventListener('pointercancel', this.handleOrderPointerCancel);
    const needsResync = commit && this.orderDrag.active;
    const sourceDim = this.orderDrag.sourceDim;
    const targetSlot = needsResync ? this.options.takeProjectedAxisDropTarget() : null;
    if (!needsResync) this.options.clearProjectedAxisDropTarget();
    this.clearOrderDragPreview();
    this.orderDrag.pointerId = -1;
    this.orderDrag.pointerType = '';
    this.orderDrag.startX = 0;
    this.orderDrag.startY = 0;
    this.orderDrag.grabOffsetX = 0;
    this.orderDrag.grabOffsetY = 0;
    this.orderDrag.lastX = 0;
    this.orderDrag.lastY = 0;
    this.orderDrag.active = false;
    this.orderDrag.sourceDim = -1;
    this.orderDrag.source = null;
    if (targetSlot != null && sourceDim >= 0) {
      this.options.swapExtraAxisWithProjection(sourceDim, targetSlot);
    } else if (needsResync) {
      this.sync();
    }
  }

  private createUI(depthDim: number): ExtraAxisGizmoUI {
    const root = document.createElement('div');
    root.className = 'extra-axis-gizmo';
    root.dataset.depthDim = String(depthDim);

    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('viewBox', `0 0 ${GIZMO_VIEWBOX_SIZE} ${GIZMO_VIEWBOX_SIZE}`);
    svg.setAttribute('aria-hidden', 'true');
    const ring = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    ring.setAttribute('class', 'ring');
    ring.setAttribute('cx', `${extraAxisGizmoCenter}`);
    ring.setAttribute('cy', `${extraAxisGizmoCenter}`);
    ring.setAttribute('r', `${extraAxisGizmoRadius + 3}`);
    const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line.setAttribute('x1', `${extraAxisGizmoCenter}`);
    line.setAttribute('y1', `${extraAxisGizmoCenter}`);
    line.setAttribute('x2', `${extraAxisGizmoCenter}`);
    line.setAttribute('y2', `${extraAxisGizmoCenter}`);
    svg.append(ring, line);

    const negButton = document.createElement('button');
    negButton.type = 'button';
    negButton.className = 'negative';
    const posButton = document.createElement('button');
    posButton.type = 'button';
    posButton.className = 'positive';
    const angleReadout = document.createElement('div');
    angleReadout.className = 'angle-readout';
    angleReadout.hidden = true;
    const autoToggleButton = document.createElement('button');
    autoToggleButton.type = 'button';
    autoToggleButton.className = 'auto-toggle';
    autoToggleButton.innerHTML = `
      <span class="material-symbols-rounded" aria-hidden="true">play_arrow</span>
    `;
    const perspectiveToggleButton = document.createElement('button');
    perspectiveToggleButton.type = 'button';
    perspectiveToggleButton.className = 'perspective-toggle';
    perspectiveToggleButton.innerHTML = `
      <span class="material-symbols-rounded depth-icon" aria-hidden="true">vrpano</span>
    `;
    const centerButton = document.createElement('button');
    centerButton.type = 'button';
    centerButton.className = 'axis-swap-center';
    centerButton.setAttribute('aria-label', `Drag ${axisLabel(depthDim)} to a projected axis`);

    const planeButtons = new Map<number, HTMLButtonElement>();
    line.style.display = 'none';
    negButton.hidden = true;
    posButton.hidden = true;
    autoToggleButton.addEventListener('pointerdown', ev => {
      if (ev.pointerType !== 'mouse') ev.preventDefault();
      ev.stopPropagation();
      if (ev.button !== 0) return;
      this.advanceAutoRotate(depthDim);
    });
    autoToggleButton.addEventListener('keydown', ev => {
      if (ev.key !== 'Enter' && ev.key !== ' ') return;
      ev.preventDefault();
      this.advanceAutoRotate(depthDim);
    });
    autoToggleButton.addEventListener('pointerup', ev => {
      ev.preventDefault();
      ev.stopPropagation();
    });
    autoToggleButton.addEventListener('dblclick', ev => {
      ev.preventDefault();
      ev.stopPropagation();
    });
    perspectiveToggleButton.addEventListener('pointerdown', ev => {
      if (ev.pointerType !== 'mouse') ev.preventDefault();
      ev.stopPropagation();
      if (ev.button !== 0) return;
      this.setPerspectiveDepth(depthDim, !this.selectedPerspectiveDims.has(depthDim));
      this.options.projectAndRenderAll();
      this.options.onStateChange?.();
    });
    perspectiveToggleButton.addEventListener('keydown', ev => {
      if (ev.key !== 'Enter' && ev.key !== ' ') return;
      ev.preventDefault();
      this.setPerspectiveDepth(depthDim, !this.selectedPerspectiveDims.has(depthDim));
      this.options.projectAndRenderAll();
      this.options.onStateChange?.();
    });
    perspectiveToggleButton.addEventListener('pointerup', ev => {
      ev.preventDefault();
      ev.stopPropagation();
    });
    perspectiveToggleButton.addEventListener('dblclick', ev => {
      ev.preventDefault();
      ev.stopPropagation();
    });
    centerButton.addEventListener('pointerdown', ev => this.beginOrderHandleDrag(ev, root, depthDim));
    centerButton.addEventListener('click', ev => {
      ev.preventDefault();
      ev.stopPropagation();
    });
    centerButton.addEventListener('dblclick', ev => {
      ev.preventDefault();
      ev.stopPropagation();
    });

    root.addEventListener('pointermove', ev => this.handleDragMove(ev, root));
    root.addEventListener('pointerup', ev => {
      const wasDraggingThisGizmo = this.drag.active
        && ev.pointerId === this.drag.pointerId
        && this.drag.target === root;
      const movedWhileDragging = wasDraggingThisGizmo && this.drag.moved;
      this.endDrag(ev);
      if (movedWhileDragging) {
        ev.preventDefault();
        ev.stopPropagation();
      }
    });
    root.addEventListener('pointercancel', ev => this.endDrag(ev));

    root.append(svg, negButton, posButton, angleReadout, autoToggleButton, perspectiveToggleButton, centerButton);
    return {
      root,
      line,
      negButton,
      posButton,
      angleReadout,
      planeButtons,
      autoToggleButton,
      perspectiveToggleButton,
      centerButton,
    };
  }

  private createPlaneButton(root: HTMLDivElement, plane: ExtraAxisGizmoPlane) {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'plane-handle';
    const label = document.createElement('span');
    label.className = 'plane-label';
    const indicator = document.createElement('span');
    indicator.className = 'plane-angle-indicator';
    button.append(label, indicator);
    button.addEventListener('pointerdown', ev => {
      if (ev.pointerType !== 'mouse') ev.preventDefault();
      ev.stopPropagation();
      if (ev.button !== 0) return;
      this.beginDrag(ev, plane, root);
    });
    button.addEventListener('click', ev => {
      ev.preventDefault();
      ev.stopPropagation();
    });
    button.addEventListener('dblclick', ev => {
      ev.preventDefault();
      ev.stopPropagation();
    });
    root.appendChild(button);
    return button;
  }

  private handleDragMove(ev: PointerEvent, root: HTMLDivElement) {
    if (!this.drag.active || ev.pointerId !== this.drag.pointerId || this.drag.target !== root) return;
    ev.preventDefault();
    const angle = pointerAngleInExtraAxisGizmo(ev, root);
    if (angle == null) return;
    const delta = normalizeSignedAngleDelta(angle - this.drag.lastAngle);
    this.drag.lastAngle = angle;
    if (Math.abs(delta) < 1e-4) return;
    this.drag.moved = true;
    if (this.drag.planeAxis < 0 || this.drag.depthAxis < 0 || this.drag.planeAxis === this.drag.depthAxis) return;

    this.options.getRot().applyGivensLeft(this.drag.planeAxis, this.drag.depthAxis, delta);
    this.offsetAngle({ planeAxis: this.drag.planeAxis, depthDim: this.drag.depthAxis }, delta);
    this.sync();
    this.options.applySceneBackground();
    this.options.markProjectionDirty?.();
    this.options.onStateChange?.();
  }
}

function clamp(value: number, min: number, max: number) {
  return Math.max(min, Math.min(max, value));
}
