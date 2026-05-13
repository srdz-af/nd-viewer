export const GIZMO_VIEWBOX_SIZE = 86;
export const axisGizmoCenter = GIZMO_VIEWBOX_SIZE * 0.5;
export const axisGizmoRadius = 28;
export const extraAxisGizmoCenter = GIZMO_VIEWBOX_SIZE * 0.5;
export const extraAxisGizmoRadius = 28;
export const EXTRA_GIZMO_BASE_ANGLE = -Math.PI / 2;
export const EXTRA_AXIS_AUTO_ROTATE_SPEED = 0.45;

export function normalizeSignedAngleDelta(value: number) {
  let delta = value;
  while (delta > Math.PI) delta -= Math.PI * 2;
  while (delta < -Math.PI) delta += Math.PI * 2;
  return delta;
}

export function pointerAngleInExtraAxisGizmo(ev: PointerEvent, gizmoEl: HTMLDivElement) {
  const rect = gizmoEl.getBoundingClientRect();
  const cx = rect.left + rect.width * 0.5;
  const cy = rect.top + rect.height * 0.5;
  const dx = ev.clientX - cx;
  const dy = ev.clientY - cy;
  if ((dx * dx) + (dy * dy) < 16) return null;
  return Math.atan2(dy, dx);
}

export function axisLabel(dim: number) {
  return ['X', 'Y', 'Z', 'W', 'V', 'U', 'T', 'S'][dim] ?? `D${dim}`;
}
