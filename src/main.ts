
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import { Pane, type SliderInputBindingApi, type TpChangeEvent } from 'tweakpane';
import { RotND, Plane } from './RotND';
import { pcaTopK } from './PCA';
import { buildPrimitive, NDProjector, canonicalP, HypercubeRenderer, type PrimitiveKind } from './HypercubeScene';

type ProjMode = 'Canonico' | 'PCA';
type PrimitiveMode = PrimitiveKind;

const app = document.getElementById('app')!;
const paneContainer = document.getElementById('panel-container')!;
const fileInput = document.getElementById('file-input') as HTMLInputElement | null;
const tooltipEl = document.getElementById('tooltip') as HTMLDivElement | null;
const ctxMenu = document.getElementById('context-menu') as HTMLDivElement | null;
const viewToggle = document.getElementById('view-toggle') as HTMLDivElement | null;

// --- Three.js setup ---
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
app.appendChild(renderer.domElement);
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.1;
renderer.useLegacyLights = false;
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

const scene = new THREE.Scene();
const baseBackground = new THREE.Color(0x10141a);
const editBackground = new THREE.Color(0x141414);
scene.background = baseBackground.clone();
renderer.setClearColor(scene.background);
const pmrem = new THREE.PMREMGenerator(renderer);
const environmentMap = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
pmrem.dispose();
scene.environment = environmentMap;
(renderer as any).environment = environmentMap;

const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.01, 100);
camera.position.set(2.6, 1.8, 2.6);
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;

const raycaster = new THREE.Raycaster();
const ndc = new THREE.Vector2();
const clickPlane = new THREE.Plane();
const clickPoint = new THREE.Vector3();

const light = new THREE.DirectionalLight(0xffffff, 1.0);
light.position.set(2, 3, 4);
const ambient = new THREE.AmbientLight(0xffffff, 0.3);
const hemi = new THREE.HemisphereLight(0x88aaff, 0x090b12, 0.6);
scene.add(ambient, hemi, light);
const axes = new THREE.AxesHelper(1000);
axes.position.set(0, -0.6, 0);
scene.add(axes);
const gridMaterial = new THREE.LineBasicMaterial({ color: 0x3a414f, opacity: 0.4, transparent: true });
const gridGroup = new THREE.Group();
gridGroup.position.y = -0.6;
const gridSize = 30;
const gridDiv = 60;
const step = (gridSize * 2) / gridDiv;
for (let i = -gridDiv; i <= gridDiv; i++) {
  const geomX = new THREE.BufferGeometry().setFromPoints([
    new THREE.Vector3(-gridSize, 0, i * step),
    new THREE.Vector3(gridSize, 0, i * step),
  ]);
  const lineX = new THREE.Line(geomX, gridMaterial);
  gridGroup.add(lineX);
  const geomZ = new THREE.BufferGeometry().setFromPoints([
    new THREE.Vector3(i * step, 0, -gridSize),
    new THREE.Vector3(i * step, 0, gridSize),
  ]);
  const lineZ = new THREE.Line(geomZ, gridMaterial);
  gridGroup.add(lineZ);
}
scene.add(gridGroup);
const vertexMat = new THREE.MeshBasicMaterial({ color: 0xffd166 });
const vertexGeo = new THREE.SphereGeometry(0.012, 8, 8);
const axisPalette = ['#ff6b6b', '#4caf50', '#2196f3', '#f0c674', '#9b59b6', '#1abc9c', '#e67e22', '#ecf0f1'];

// --- Estado N‑D ---
const MAX_N = 8;
let N = MAX_N;
let X = new Float32Array();
let E = new Uint32Array();
let M = 0;
let rot = new RotND(N);
let projector = new NDProjector(N, rot.matrix, canonicalP(N));
let Y = new Float32Array();
let dataSource: 'primitive' | 'custom' = 'primitive';
const edgesFallback = new Uint32Array([0, 0]);
const tmpVec = new THREE.Vector3();
const tmpOffset = new THREE.Vector3();
const tmpN = new Float32Array(32);
const tmpCenter = new THREE.Vector3();
let pcaCache: Float32Array | null = null;
let projectionDirty = true;
let setViewMode: (mode: 'wireframe' | 'transparent' | 'solid') => void;
const setUIEnabled = (enabled: boolean) => {
  try { (pane as any).disabled = !enabled; } catch {}
  if (viewToggle) {
    viewToggle.style.pointerEvents = enabled ? 'auto' : 'none';
    viewToggle.style.opacity = enabled ? '1' : '0.5';
  }
};
const objList = document.getElementById('object-list') as HTMLDivElement | null;
const axisLegend = document.getElementById('axis-legend') as HTMLDivElement | null;
const axisList = document.getElementById('axis-list') as HTMLDivElement | null;
const statusBar = document.getElementById('status-bar') as HTMLDivElement | null;
let lastPointer = { x: window.innerWidth - 180, y: window.innerHeight - 80 };
type SceneSnapshot = {
  N: number;
  X: Float32Array;
  M: number;
  axes: { x: number; y: number; z: number };
  baseTransform: { pos: THREE.Vector3; rot: THREE.Vector3; scale: THREE.Vector3 };
  baseOrigN: number;
};
const undoStack: SceneSnapshot[] = [];
const redoStack: SceneSnapshot[] = [];
const MAX_HISTORY = 20;
let baseLabel = 'Hipercubo';
let selectedInstance: number = -1; // -1 base, >=0 extra
let selectedVertex: number = -1;
let selectionOutline: THREE.LineSegments | null = null;
let vertexMarker: THREE.Mesh | null = null;
let vertexCloud: THREE.InstancedMesh | null = null;
let axisGuide: THREE.Line | null = null;
let wGuide: THREE.Line | null = null;
let deletePending = false;
const baseTransform = { pos: new THREE.Vector3(), rot: new THREE.Vector3(), scale: new THREE.Vector3(1,1,1) };
let baseOriginalN = 0;
const transformUI = { posX: 0, posY: 0, posZ: 0, rotX: 0, rotY: 0, rotZ: 0, scale: 1 };
type TransformMode = 'none' | 'move' | 'rotate' | 'scale';
type ProjectionAxes = { x: number; y: number; z: number };
const transformOp = {
  mode: 'none' as TransformMode,
  instIdx: -1,
  targetVertex: -1,
  startPos: new THREE.Vector3(),
  startRot: new THREE.Vector3(),
  startScale: 1,
  startMouse: new THREE.Vector2(),
  vertexStart: new THREE.Vector3(),
  axis: new THREE.Vector3(),
  plane: new THREE.Plane(),
  planeHitStart: new THREE.Vector3(),
  lastHit: new THREE.Vector3(),
  vertexDataStart: null as Float32Array | null,
  lockAxis: -1 as -1 | 0 | 1 | 2, // 0=x,1=y,2=z in current projected axes
  objectDataStart: null as Float32Array | null,
  wPlane: false,
  moveOffset: new THREE.Vector3(),
};
const playState = {
  active: false,
  savedProj: 'Canonico' as ProjMode,
  savedAxes: { x: 0, y: 1, z: 2 },
  savedRot: new Float32Array(),
  spinPhase: 0,
};
const axisDrag = { active: false, lastX: 0, accum: 0, prevZoom: controls.enableZoom, prevPan: controls.enablePan };
let axesOrder: number[] = Array.from({ length: N }, (_, i) => i);
let axesOffset = 0;

const visibleDims = () => Math.max(3, Math.min(PARAMS.N, MAX_N));

function embedToMax(localVerts: Float32Array, localN: number, axesSeq: number[], offset: number) {
  const V = localVerts.length / localN;
  const out = new Float32Array(MAX_N * V);
  for (let d = 0; d < localN; d++) {
    const dim = axesSeq[(offset + d) % MAX_N];
    for (let v = 0; v < V; v++) {
      out[dim * V + v] = localVerts[d * V + v];
    }
  }
  return out;
}

function setProjectionAxes({ x, y, z }: ProjectionAxes) {
  const nVis = visibleDims();
  const list = axesOrder.slice(0, nVis);
  const clamp = (v: number) => {
    const idx = list.indexOf(v);
    return idx >= 0 ? v : list[0] ?? 0;
  };
  PARAMS.axesX = clamp(x);
  PARAMS.axesY = clamp(y);
  PARAMS.axesZ = clamp(z);
  const idx = list.indexOf(PARAMS.axesX);
  if (idx >= 0) axesOffset = idx;
  projectionDirty = true;
  transformOp.lockAxis = -1;
  clearAxisGuide();
  updateAxisLegend();
  renderAxisList();
  projectAndRenderAll();
}

function pushUndoSnapshot() {
  const snap: SceneSnapshot = {
    N,
    X: new Float32Array(X),
    M,
    axes: { x: PARAMS.axesX, y: PARAMS.axesY, z: PARAMS.axesZ },
    baseTransform: {
      pos: baseTransform.pos.clone(),
      rot: baseTransform.rot.clone(),
      scale: baseTransform.scale.clone(),
    },
    baseOrigN: baseOriginalN,
  };
  undoStack.push(snap);
  if (undoStack.length > MAX_HISTORY) undoStack.shift();
  redoStack.length = 0;
}

function applySnapshot(snap: SceneSnapshot) {
  const rebuiltEdges = edgesFallback;
  rebuildState(snap.N, snap.X, rebuiltEdges, dataSource, snap.baseOrigN);
  M = snap.M;
  PARAMS.axesX = snap.axes.x; PARAMS.axesY = snap.axes.y; PARAMS.axesZ = snap.axes.z;
  baseTransform.pos.copy(snap.baseTransform.pos);
  baseTransform.rot.copy(snap.baseTransform.rot);
  baseTransform.scale.copy(snap.baseTransform.scale);
  projectionDirty = true;
  projectAndRenderAll();
  applySliceFilter();
  pane.refresh();
}
function resolvePlayButtonEl() { return null; }
function updatePlayButtonLabel() {}
function cycleAxes(step: number) {
  if (playState.active) return;
  const n = visibleDims();
  if (n < 3) return;
  axesOffset = (((axesOffset + step) % n) + n) % n;
  if (!playState.active && PARAMS.proyeccion !== 'Canonico') {
    PARAMS.proyeccion = 'Canonico';
    projectionDirty = true;
    pane.refresh();
  }
  setProjectionAxes({
    x: axesOrder[axesOffset % n],
    y: axesOrder[(axesOffset + 1) % n],
    z: axesOrder[(axesOffset + 2) % n],
  });
}
const dragState: { active: boolean; instIdx: number; vertex: number; plane: THREE.Plane; lastPoint: THREE.Vector3; } = {
  active: false,
  instIdx: -1,
  vertex: -1,
  plane: new THREE.Plane(),
  lastPoint: new THREE.Vector3(),
};

function updateTransformFromUI() {
  const degToRad = Math.PI / 180;
  const rot = new THREE.Vector3(transformUI.rotX * degToRad, transformUI.rotY * degToRad, transformUI.rotZ * degToRad);
  const scale = new THREE.Vector3(transformUI.scale, transformUI.scale, transformUI.scale);
  if (selectedInstance === -1) {
    baseTransform.pos.set(transformUI.posX, transformUI.posY, transformUI.posZ);
    baseTransform.rot.copy(rot);
    baseTransform.scale.copy(scale);
  } else {
    const inst = extraInstances[selectedInstance];
    inst.transform.pos.set(transformUI.posX, transformUI.posY, transformUI.posZ);
    inst.transform.rot.copy(rot);
    inst.transform.scale.copy(scale);
  }
  projectAndRenderAll();
  applySliceFilter();
  updateSelectionOutline();
}

function syncTransformUIFromSelection() {
  const deg = 180 / Math.PI;
  const t = selectedInstance === -1 ? baseTransform : extraInstances[selectedInstance]?.transform;
  if (!t) return;
  transformUI.posX = t.pos.x;
  transformUI.posY = t.pos.y;
  transformUI.posZ = t.pos.z;
  transformUI.rotX = t.rot.x * deg;
  transformUI.rotY = t.rot.y * deg;
  transformUI.rotZ = t.rot.z * deg;
  transformUI.scale = t.scale.x;
  pane.refresh();
}

function updateObjectList() {
  if (!objList) return;
  const items = [];
  if (M > 0) items.push(`${baseLabel} (N=${baseOriginalN || PARAMS.N})`);
  items.push(...extraInstances.map(inst => `${inst.label} (N=${inst.originalN})`));
  objList.innerHTML = `<h4>Objetos</h4><ul>${items.map((it, idx) => {
    const dataIdx = M > 0 ? idx - 1 : idx - 0;
    const active = dataIdx === selectedInstance;
    return `<li data-idx="${dataIdx}" class="${active ? 'active' : ''}">${it}</li>`;
  }).join('')}</ul>`;
  objList.querySelectorAll('li').forEach(li => {
    li.addEventListener('click', () => {
      const v = Number((li as HTMLElement).dataset.idx);
      selectObject(v);
    });
  });
  updateAxisLegend();
}

function updateAxesHelperColors() {
  const colorAttr = axes.geometry.getAttribute('color') as THREE.BufferAttribute | undefined;
  if (!colorAttr) return;
  const cX = new THREE.Color(axisPalette[PARAMS.axesX % axisPalette.length]);
  const cY = new THREE.Color(axisPalette[PARAMS.axesY % axisPalette.length]);
  const cZ = new THREE.Color(axisPalette[PARAMS.axesZ % axisPalette.length]);
  // AxesHelper stores colors in pairs [origin, tip] for X,Y,Z
  colorAttr.setXYZ(0, cX.r, cX.g, cX.b);
  colorAttr.setXYZ(1, cX.r, cX.g, cX.b);
  colorAttr.setXYZ(2, cY.r, cY.g, cY.b);
  colorAttr.setXYZ(3, cY.r, cY.g, cY.b);
  colorAttr.setXYZ(4, cZ.r, cZ.g, cZ.b);
  colorAttr.setXYZ(5, cZ.r, cZ.g, cZ.b);
  colorAttr.needsUpdate = true;
}

function updateAxisLegend() {
  updateAxesHelperColors();
  if (!axisLegend) return;
  const nVis = visibleDims();
  const badges = Array.from({ length: nVis }).map((_, i) => {
    const color = axisPalette[i % axisPalette.length];
    return `<span class="badge" style="background:${color};">d${i}</span>`;
  }).join('');
  axisLegend.innerHTML = `<h4 style="margin:0 0 6px 0; font-size:12px; color:#e6ecf5;">Ejes</h4><div>${badges}</div>`;
}
function renderAxisList() {
  if (!axisList) return;
  const nVis = visibleDims();
  if (nVis < 1) { axisList.innerHTML = ''; return; }
  const list = axesOrder.slice(0, nVis);
  const activeDims = new Set([
    list[(axesOffset + 0) % nVis],
    list[(axesOffset + 1) % nVis],
    list[(axesOffset + 2) % nVis],
  ]);
  const items = list.map((dim, idx) => {
    const color = axisPalette[dim % axisPalette.length];
    const active = activeDims.has(dim);
    return `<li draggable="true" data-idx="${idx}" class="${active ? 'active' : ''}" style="border-left:4px solid ${color};">${`d${dim}`}</li>`;
  }).join('');
  axisList.innerHTML = `<h4>Orden de ejes</h4><ul>${items}</ul>`;
  axisList.querySelectorAll('li').forEach(li => {
    li.addEventListener('dragstart', (ev) => {
      ev.dataTransfer?.setData('text/plain', (li as HTMLElement).dataset.idx || '');
    });
    li.addEventListener('dragover', (ev) => ev.preventDefault());
    li.addEventListener('drop', (ev) => {
      ev.preventDefault();
      const from = Number(ev.dataTransfer?.getData('text/plain') ?? -1);
      const to = Number((li as HTMLElement).dataset.idx ?? -1);
      if (from < 0 || to < 0 || from === to) return;
      const moved = axesOrder.splice(from, 1)[0];
      axesOrder.splice(to, 0, moved);
      // keep current leading axis if possible
      const newOffset = axesOrder.slice(0, visibleDims()).indexOf(PARAMS.axesX);
      axesOffset = newOffset >= 0 ? newOffset : 0;
      setProjectionAxes({
        x: axesOrder[axesOffset % visibleDims()],
        y: axesOrder[(axesOffset + 1) % visibleDims()],
        z: axesOrder[(axesOffset + 2) % visibleDims()],
      });
      renderAxisList();
    });
  });
}

function selectObject(idx: number) {
  selectedInstance = idx;
  selectedVertex = -1;
  deletePending = false;
  updateObjectList();
  if (selectionOutline) { scene.remove(selectionOutline); selectionOutline = null; }
  const buildOutline = (geom: THREE.BufferGeometry) => {
    const mat = new THREE.LineBasicMaterial({ color: 0xffa64d, transparent: true, opacity: 1, depthTest: false, depthWrite: false });
    const outline = new THREE.LineSegments(geom, mat);
    outline.renderOrder = 10;
    return outline;
  };
  if (idx === -1) {
    if (M > 0) selectionOutline = buildOutline(rendererND.line.geometry);
  } else {
    const inst = extraInstances[idx];
    selectionOutline = buildOutline(inst.renderer.line.geometry);
  }
  if (selectionOutline && !PARAMS.editMode) {
    scene.add(selectionOutline);
  }
  if (PARAMS.editMode) {
    scene.background = editBackground.clone();
  } else {
    scene.background = baseBackground.clone();
  }
  renderer.setClearColor(scene.background);
  if (vertexMarker) { scene.remove(vertexMarker); vertexMarker = null; }
  if (vertexCloud) { scene.remove(vertexCloud); vertexCloud = null; }
  if (PARAMS.editMode && idx !== null) updateVertexCloud(idx);
  syncTransformUIFromSelection();
}

function updateSelectionOutline() {
  if (!selectionOutline) return;
  if (PARAMS.editMode) {
    scene.remove(selectionOutline); selectionOutline = null;
    return;
  }
  if (!scene.children.includes(selectionOutline)) scene.add(selectionOutline);
}

function clearAxisGuide() {
  if (axisGuide) { scene.remove(axisGuide); axisGuide.geometry.dispose(); axisGuide = null; }
  if (wGuide) { scene.remove(wGuide); wGuide.geometry.dispose(); wGuide = null; }
}

function computeCenterFromPositions(positions: Float32Array, count: number) {
  if (!count) return new THREE.Vector3();
  let sumX = 0, sumY = 0, sumZ = 0;
  for (let i = 0; i < count; i++) {
    const pIdx = i * 3;
    sumX += positions[pIdx];
    sumY += positions[pIdx + 1];
    sumZ += positions[pIdx + 2];
  }
  return new THREE.Vector3(sumX / count, sumY / count, sumZ / count);
}

function updateAxisGuide() {
  clearAxisGuide();
  if (transformOp.mode === 'none') return;
  const hasAxis = transformOp.lockAxis !== -1;
  const axisIdx = hasAxis ? transformOp.lockAxis : 0;
  const dir = new THREE.Vector3(
    axisIdx === 0 ? 1 : 0,
    axisIdx === 1 ? 1 : 0,
    axisIdx === 2 ? 1 : 0,
  );
  if (!hasAxis && !transformOp.wPlane) return;

  let center = new THREE.Vector3();
  if (transformOp.targetVertex >= 0) {
    const inst = transformOp.instIdx === -1 ? null : extraInstances[transformOp.instIdx];
    const posArr = inst ? inst.renderer.positions : rendererND.positions;
    const idx = transformOp.targetVertex * 3;
    center.set(posArr[idx], posArr[idx+1], posArr[idx+2]);
  } else {
    if (transformOp.instIdx === -1 && M > 0) {
      center = computeCenterFromPositions(rendererND.positions, M);
    } else if (transformOp.instIdx >= 0) {
      const inst = extraInstances[transformOp.instIdx];
      center = computeCenterFromPositions(inst.renderer.positions, inst.M);
    }
  }
  const len = 3;
  const points = [
    center.clone().addScaledVector(dir, -len),
    center.clone().addScaledVector(dir, len),
  ];
  if (hasAxis) {
    const geom = new THREE.BufferGeometry().setFromPoints(points);
    const mat = new THREE.LineBasicMaterial({ color: 0xffa64d, linewidth: 2, depthTest: false, transparent: true, opacity: 0.9 });
    axisGuide = new THREE.Line(geom, mat);
    axisGuide.renderOrder = 30;
    scene.add(axisGuide);
  }
  if (transformOp.wPlane) {
    const wDir = new THREE.Vector3(0, 0, 0);
    wDir.copy(dir).cross(camera.getWorldDirection(tmpVec).normalize()).normalize();
    if (wDir.lengthSq() === 0) wDir.copy(camera.up).normalize();
    const wLen = 2;
    const wPoints = [
      center.clone().addScaledVector(wDir, -wLen),
      center.clone().addScaledVector(wDir, wLen),
    ];
    const wGeom = new THREE.BufferGeometry().setFromPoints(wPoints);
    const wMat = new THREE.LineBasicMaterial({ color: 0xc084fc, linewidth: 2, depthTest: false, transparent: true, opacity: 0.9 });
    wGuide = new THREE.Line(wGeom, wMat);
    wGuide.renderOrder = 31;
    scene.add(wGuide);
  }
}

function updateVertexCloud(instIdx: number) {
  if (!PARAMS.editMode) {
    if (vertexCloud) { scene.remove(vertexCloud); vertexCloud = null; }
    if (vertexMarker) { scene.remove(vertexMarker); vertexMarker = null; }
    return;
  }
  const rendererRef = instIdx === -1 ? rendererND : extraInstances[instIdx].renderer;
  const count = instIdx === -1 ? M : extraInstances[instIdx].M;
  if (!rendererRef || count <= 0) return;
  if (vertexCloud) { scene.remove(vertexCloud); vertexCloud = null; }
  const mat = new THREE.MeshBasicMaterial({ color: 0xbfc7d5 });
  vertexCloud = new THREE.InstancedMesh(vertexGeo, mat, count);
  const dummy = new THREE.Object3D();
  const posArr = rendererRef.positions;
  for (let i = 0; i < count; i++) {
    const pIdx = i * 3;
    dummy.position.set(posArr[pIdx], posArr[pIdx + 1], posArr[pIdx + 2]);
    dummy.updateMatrix();
    vertexCloud.setMatrixAt(i, dummy.matrix);
  }
  vertexCloud.instanceMatrix.needsUpdate = true;
  vertexCloud.renderOrder = 5;
  scene.add(vertexCloud);
  if (selectedVertex >= 0) placeVertexMarker(instIdx, selectedVertex);
}

function placeVertexMarker(instIdx: number, vIdx: number) {
  if (!vertexMarker) {
    const mat = new THREE.MeshBasicMaterial({ color: 0xffa64d, depthTest: false });
    vertexMarker = new THREE.Mesh(vertexGeo, mat);
    vertexMarker.renderOrder = 20;
  }
  vertexMarker.scale.setScalar(1.35);
  const rendererRef = instIdx === -1 ? rendererND : extraInstances[instIdx].renderer;
  const posArr = rendererRef.positions;
  const pIdx = vIdx * 3;
  vertexMarker.position.set(posArr[pIdx], posArr[pIdx + 1], posArr[pIdx + 2]);
  scene.add(vertexMarker);
}

function deleteSelected() {
  if (selectedInstance === -1) return;
  pushUndoSnapshot();
  const inst = extraInstances[selectedInstance];
  inst.renderer.dispose();
  extraInstances.splice(selectedInstance, 1);
  selectedInstance = -1;
  if (selectionOutline) { scene.remove(selectionOutline); selectionOutline = null; }
  deletePending = false;
  projectAndRenderAll();
  applySliceFilter();
  updateObjectList();
  syncTransformUIFromSelection();
}

type Instance = {
  renderer: HypercubeRenderer;
  Y: Float32Array;
  X: Float32Array;
  E: Uint32Array;
  M: number;
  offset: THREE.Vector3;
  label: string;
  kind: PrimitiveKind;
  transform: { pos: THREE.Vector3; rot: THREE.Vector3; scale: THREE.Vector3; };
  originalN: number;
};

const extraInstances: Instance[] = [];

const rendererND = new HypercubeRenderer(scene);
if (M > 0) {
  rendererND.build(M, E);
  rendererND.setMode('wireframe');
}
let paneVisible = true;

// --- UI (Tweakpane) ---
const pane = new Pane({ container: paneContainer }) as any;
const PARAMS = {
  N: 4,
  primitive: 'hypercube' as PrimitiveMode,
  proyeccion: 'Canonico' as ProjMode,
  autoReortho: false,
  perspMode: false,
  // Slicing
  sliceDim: -1,
  sliceMin: -0.5,
  sliceMax: 0.5,
  renderMode: 'wireframe' as 'wireframe' | 'transparent' | 'solid',
  editMode: false,
  autoSpin: false,
  axesX: 0,
  axesY: 1,
  axesZ: 2,
};

const clonePlane = (p: Plane) => ({ ...p, _lastTheta: p._lastTheta ?? 0 });
const DEFAULT_PLANES: Plane[] = [
  { i: 0, j: 1, theta: 0, auto: false, speed: 0 },
  { i: 2, j: 3, theta: 0, auto: false, speed: 0 },
  { i: 4, j: 5, theta: 0, auto: false, speed: 0 },
];
// Planos (hasta 3)
const planes: Plane[] = DEFAULT_PLANES.map(clonePlane);
const planeBindings: { i: SliderInputBindingApi<number>; j: SliderInputBindingApi<number>; }[] = [];
let sliceDimBinding!: SliderInputBindingApi<number>;
function refreshPlaneOptions() {
  // Asegura que los índices i,j estén dentro de [0, N-1]
  planes.forEach(p => {
    p.i = Math.min(p.i, N-1);
    p.j = Math.min(p.j, N-1);
    p.theta = 0;
    p._lastTheta = 0;
  });
}

function applyProjectionMatrix() {
  if (PARAMS.proyeccion === 'Canonico' || M === 0) {
    const nVis = visibleDims();
    const axes = [PARAMS.axesX % nVis, PARAMS.axesY % nVis, PARAMS.axesZ % nVis].map(v => Math.max(0, Math.min(nVis - 1, v)));
    const P = new Float32Array(3 * N);
    P[0 * N + axes[0]] = 1;
    P[1 * N + axes[1]] = 1;
    P[2 * N + axes[2]] = 1;
    projector.setCustomP(P);
    pcaCache = null;
  } else {
    if (!pcaCache || projectionDirty) {
      const { P } = pcaTopK(X, N, M, 3);
      pcaCache = P;
      projectionDirty = false;
    }
    projector.setCustomP(pcaCache!);
    if (M > 0) {
      const chooseMaxDim = (row: number) => {
        let best = 0, bestVal = -Infinity;
        for (let k = 0; k < N; k++) {
          const val = Math.abs(pcaCache![row * N + k]);
          if (val > bestVal) { bestVal = val; best = k; }
        }
        return best;
      };
      const newAxes = { x: chooseMaxDim(0), y: chooseMaxDim(1), z: chooseMaxDim(2) };
      if (newAxes.x !== PARAMS.axesX || newAxes.y !== PARAMS.axesY || newAxes.z !== PARAMS.axesZ) {
        PARAMS.axesX = newAxes.x; PARAMS.axesY = newAxes.y; PARAMS.axesZ = newAxes.z;
        axesOffset = axesOrder.indexOf(PARAMS.axesX);
        updateAxisLegend();
        renderAxisList();
      }
    }
  }
}

function applySliceFilter() {
  if (M > 0 && rendererND.geometry) {
    rendererND.filterEdgesByDimRange(X, N, M, PARAMS.sliceDim, PARAMS.sliceMin, PARAMS.sliceMax);
  }
  extraInstances.forEach(inst => {
    inst.renderer.filterEdgesByDimRange(inst.X, N, inst.M, PARAMS.sliceDim, PARAMS.sliceMin, PARAMS.sliceMax);
  });
  updateSelectionOutline();
  if (PARAMS.editMode) {
    scene.background = editBackground.clone();
  } else {
    scene.background = baseBackground.clone();
  }
  renderer.setClearColor(scene.background);
  if (PARAMS.editMode) {
    updateVertexCloud(selectedInstance);
  } else {
    if (vertexCloud) { scene.remove(vertexCloud); vertexCloud = null; }
  }
}

function recenterProjected(Yarr: Float32Array, Mloc: number) {
  if (Mloc === 0) return tmpCenter.set(0,0,0);
  let sumX = 0, sumY = 0, sumZ = 0;
  for (let i = 0; i < Mloc; i++) {
    sumX += Yarr[i];
    sumY += Yarr[Mloc + i];
    sumZ += Yarr[2 * Mloc + i];
  }
  const cx = sumX / Mloc, cy = sumY / Mloc, cz = sumZ / Mloc;
  for (let i = 0; i < Mloc; i++) {
    Yarr[i] -= cx;
    Yarr[Mloc + i] -= cy;
    Yarr[2 * Mloc + i] -= cz;
  }
  return tmpCenter.set(cx, cy, cz);
}

function projectAndRenderAll() {
  const usePerspective = (playState.active || PARAMS.perspMode) && N >= 4;
  if (usePerspective) {
    const axes = [PARAMS.axesX % N, PARAMS.axesY % N, PARAMS.axesZ % N].map(v => Math.max(0, Math.min(N - 1, v)));
    const k = 0.6;
    const projectOne = (Xsrc: Float32Array, Mloc: number, Ydst: Float32Array, transform: { pos: THREE.Vector3; rot: THREE.Vector3; scale: THREE.Vector3; }, renderer: HypercubeRenderer) => {
      if (Mloc === 0) return;
      const n = N;
      const R = rot.matrix;
      for (let m = 0; m < Mloc; m++) {
        // rotate into tmpN
        for (let d = 0; d < n; d++) {
          let acc = 0;
          for (let a = 0; a < n; a++) acc += R[d * n + a] * Xsrc[a * Mloc + m];
          tmpN[d] = acc;
        }
        const w = tmpN[n - 1] ?? 0;
        const scale = 1 / Math.max(0.05, (1 - k * w));
        Ydst[0 * Mloc + m] = tmpN[axes[0]] * scale;
        Ydst[1 * Mloc + m] = tmpN[axes[1]] * scale;
        Ydst[2 * Mloc + m] = tmpN[axes[2]] * scale;
      }
      const center = recenterProjected(Ydst, Mloc);
      const tpos = tmpVec.set(transform.pos.x + center.x, transform.pos.y + center.y, transform.pos.z + center.z);
      renderer.setTransform(tpos, new THREE.Euler(transform.rot.x, transform.rot.y, transform.rot.z), transform.scale);
      renderer.writeInterleavedFrom(Ydst);
      renderer.refreshSurface();
    };
    if (M > 0 && rendererND.geometry) {
      projectOne(X, M, Y, baseTransform, rendererND);
    }
    extraInstances.forEach(inst => {
      projectOne(inst.X, inst.M, inst.Y, inst.transform, inst.renderer);
    });
  } else {
    applyProjectionMatrix();
    if (M > 0 && rendererND.geometry) {
      projector.project(X, M, Y);
      const center = recenterProjected(Y, M);
      const tpos = tmpVec.set(baseTransform.pos.x + center.x, baseTransform.pos.y + center.y, baseTransform.pos.z + center.z);
      rendererND.setTransform(tpos, new THREE.Euler(baseTransform.rot.x, baseTransform.rot.y, baseTransform.rot.z), baseTransform.scale);
      rendererND.writeInterleavedFrom(Y);
      rendererND.refreshSurface();
    }
    extraInstances.forEach(inst => {
      projector.project(inst.X, inst.M, inst.Y);
      const center = recenterProjected(inst.Y, inst.M);
      const tpos = tmpVec.set(inst.transform.pos.x + center.x, inst.transform.pos.y + center.y, inst.transform.pos.z + center.z);
      inst.renderer.setTransform(tpos, new THREE.Euler(inst.transform.rot.x, inst.transform.rot.y, inst.transform.rot.z), inst.transform.scale);
      inst.renderer.writeInterleavedFrom(inst.Y);
      inst.renderer.refreshSurface();
    });
  }
  updateSelectionOutline();
  if (PARAMS.editMode) updateVertexCloud(selectedInstance);
  updateAxisGuide();
}

function showDeleteConfirm(ev?: MouseEvent) {
  if (!ctxMenu) return;
  deletePending = true;
  ctxMenu.innerHTML = '';
  const title = document.createElement('div');
  title.textContent = '¿Eliminar?';
  title.style.padding = '8px 12px';
  title.style.fontWeight = '700';
  ctxMenu.appendChild(title);
  const confirm = document.createElement('button');
  confirm.textContent = 'Confirmar';
  confirm.onclick = () => {
    ctxMenu.style.display = 'none';
    deletePending = false;
    deleteSelected();
  };
  const cancel = document.createElement('button');
  cancel.textContent = 'Cancelar';
  cancel.onclick = () => {
    deletePending = false;
    ctxMenu.style.display = 'none';
  };
  ctxMenu.appendChild(confirm);
  ctxMenu.appendChild(cancel);
  const x = ev?.clientX ?? lastPointer.x;
  const y = ev?.clientY ?? lastPointer.y;
  ctxMenu.style.left = `${x}px`;
  ctxMenu.style.top = `${y}px`;
  ctxMenu.style.display = 'block';
}

function clearExtraInstances() {
  extraInstances.forEach(inst => inst.renderer.dispose());
  extraInstances.length = 0;
  selectedInstance = -1;
}

function addInstanceAt(offset: THREE.Vector3) {
  let data: { verts: Float32Array; edges: Uint32Array; V: number; kind: PrimitiveKind };
  if (M > 0) {
    data = { verts: new Float32Array(X), edges: new Uint32Array(E), V: M, kind: PARAMS.primitive };
  } else {
    const local = buildPrimitive(PARAMS.primitive, PARAMS.N);
    const embedded = embedToMax(local.verts, PARAMS.N, axesOrder, axesOffset);
    data = { verts: embedded, edges: local.edges, V: local.V, kind: PARAMS.primitive };
  }
  const instRenderer = new HypercubeRenderer(scene);
  instRenderer.build(data.V, data.edges);
  const Yloc = new Float32Array(3 * data.V);
  const label = `${data.kind} #${extraInstances.length + 1}`;
  const t = { pos: offset.clone(), rot: new THREE.Vector3(), scale: new THREE.Vector3(1,1,1) };
  const originalN = M > 0 ? baseOriginalN || PARAMS.N : PARAMS.N;
  extraInstances.push({ renderer: instRenderer, Y: Yloc, X: data.verts, E: data.edges, M: data.V, offset: offset.clone(), label, kind: data.kind, transform: t, originalN });
  projector.project(data.verts, data.V, Yloc);
  instRenderer.setTransform(t.pos, new THREE.Euler(t.rot.x, t.rot.y, t.rot.z), t.scale);
  instRenderer.writeInterleavedFrom(Yloc);
  instRenderer.filterEdgesByDimRange(data.verts, MAX_N, data.V, PARAMS.sliceDim, PARAMS.sliceMin, PARAMS.sliceMax);
  instRenderer.setMode(PARAMS.renderMode);
  projectAndRenderAll();
  applySliceFilter();
  if (setViewMode) setViewMode(PARAMS.renderMode);
  updateObjectList();
}

function rebuildState(newN: number, newX: Float32Array, newE: Uint32Array, source: 'primitive' | 'custom', localN?: number) {
  if (playState.active) { playState.active = false; }
  playState.savedRot = new Float32Array();
  playState.savedAxes = { x: 0, y: 1, z: 2 };
  playState.spinPhase = 0;
  axisDrag.active = false;
  controls.enableZoom = true;
  controls.enablePan = true;
  controls.enableRotate = true;
  controls.enabled = true;
  controls.reset();
  camera.position.set(2.6, 1.8, 2.6);
  // ensure render mode persists
  const currentMode = PARAMS.renderMode;
  dataSource = source;
  const ambientN = MAX_N;
  N = ambientN;
  PARAMS.N = Math.min(PARAMS.N, MAX_N);
  X = new Float32Array(newX);
  E = newE.length ? new Uint32Array(newE) : edgesFallback;
  M = ambientN > 0 ? Math.floor(newX.length / ambientN) : 0;
  rot = new RotND(ambientN);
  projector = new NDProjector(ambientN, rot.matrix, canonicalP(ambientN));
  Y = new Float32Array(3 * M);
  pcaCache = null;
  projectionDirty = true;
  clearExtraInstances();
  baseTransform.pos.set(0,0,0);
  baseTransform.rot.set(0,0,0);
  baseTransform.scale.set(1,1,1);
  baseOriginalN = localN ?? visibleDims();
  axesOrder = Array.from({ length: N }, (_, i) => i);
  axesOffset = 0;
  PARAMS.axesX = axesOrder[0] ?? 0;
  PARAMS.axesY = axesOrder[1] ?? 1;
  PARAMS.axesZ = axesOrder[2] ?? 2;
  refreshPlaneOptions();
  planeBindings.forEach(({ i, j }, idx) => {
    const plane = planes[idx];
    i.max = ambientN - 1;
    j.max = ambientN - 1;
    plane.i = Math.min(plane.i, ambientN - 1);
    plane.j = Math.min(plane.j, ambientN - 1);
    i.value = plane.i;
    j.value = plane.j;
    i.refresh();
    j.refresh();
  });
  if (sliceDimBinding) {
    sliceDimBinding.max = ambientN - 1;
    if (PARAMS.sliceDim >= ambientN) PARAMS.sliceDim = ambientN - 1;
    sliceDimBinding.value = PARAMS.sliceDim;
    sliceDimBinding.refresh();
  }
  if (M > 0) {
    rendererND.build(M, E);
    rendererND.setMode(PARAMS.renderMode);
    if (setViewMode) setViewMode(currentMode);
    projectAndRenderAll();
    applySliceFilter();
  } else {
    // no base geometry
    rendererND.dispose?.();
  }
  pane.refresh();
  baseLabel = source === 'custom' ? 'Custom' : 'Hipercubo';
  updateObjectList();
  selectObject(-1);
  updateAxisLegend();
  renderAxisList();
}

function splitNumericLine(line: string) {
  return line.split(/[, \t;]+/).filter(Boolean).map(Number);
}

function parseJSONData(text: string) {
  const obj = JSON.parse(text);
  const points: any[] = Array.isArray(obj) ? obj : obj?.points;
  if (!Array.isArray(points) || !points.length) throw new Error('JSON debe tener un array de puntos');
  const D = Array.isArray(points[0]) ? points[0].length : Object.keys(points[0]).length;
  if (D < 3 || D > 32) throw new Error('JSON debe tener entre 3 y 32 dimensiones');
  const rows: number[][] = [];
  for (let i = 0; i < points.length; i++) {
    const p = points[i];
    const arr = Array.isArray(p) ? p : Object.values(p);
    if (arr.length !== D) throw new Error(`Punto ${i+1} no coincide en dimensionalidad`);
    rows.push(arr.map(Number));
  }
  const Mloc = rows.length;
  const flat = new Float32Array(D * Mloc);
  for (let r = 0; r < Mloc; r++) {
    for (let d = 0; d < D; d++) {
      const v = rows[r][d];
      if (!Number.isFinite(v)) throw new Error(`Valor no numérico en punto ${r+1}, dim ${d+1}`);
      flat[d * Mloc + r] = v;
    }
  }
  let edges = edgesFallback;
  const rawEdges: any[] = Array.isArray(obj.edges) ? obj.edges : [];
  if (rawEdges.length >= 2 && Array.isArray(rawEdges[0])) {
    const list: number[] = [];
    for (const pair of rawEdges) {
      if (!Array.isArray(pair) || pair.length < 2) continue;
      const [a, b] = pair.map(Number);
      if (Number.isInteger(a) && Number.isInteger(b)) {
        list.push(a, b);
      }
    }
    if (list.length >= 2) edges = new Uint32Array(list);
  } else if (obj.adjacency && typeof obj.adjacency === 'object') {
    const list: number[] = [];
    for (const [k, vals] of Object.entries(obj.adjacency)) {
      const a = Number(k);
      if (!Number.isInteger(a)) continue;
      if (Array.isArray(vals)) {
        for (const bVal of vals) {
          const b = Number(bVal);
          if (Number.isInteger(b)) list.push(a, b);
        }
      }
    }
    if (list.length >= 2) edges = new Uint32Array(list);
  }
  return { N: D, X: flat, edges };
}

function downloadText(name: string, text: string, mime = 'text/plain') {
  const blob = new Blob([text], { type: mime });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = name;
  a.click();
  URL.revokeObjectURL(url);
}

async function handleImport(file: File) {
  try {
    const text = await file.text();
    const parsed = parseJSONData(text);
    pushUndoSnapshot();
    if (parsed.N < 3 || parsed.N > 8) {
      alert('Solo se admiten datasets de entre 3 y 8 dimensiones para visualizar.');
      return;
    }
    PARAMS.N = parsed.N;
    const embedded = embedToMax(parsed.X, parsed.N, axesOrder, axesOffset);
    const edges = parsed.edges ?? edgesFallback;
    rebuildState(MAX_N, embedded, edges, 'custom', parsed.N);
  } catch (err) {
    console.error(err);
    alert(`Error al importar: ${(err as Error).message}`);
  } finally {
    if (fileInput) fileInput.value = '';
  }
}

function exportProjectionJSON() {
  const { Xsrc, count, Esrc } = getCurrentExportData();
  if (count === 0) { alert('No hay datos para exportar'); return; }
  const pts: Record<string, number>[] = [];
  for (let r = 0; r < count; r++) {
    const row: Record<string, number> = {};
    for (let d = 0; d < N; d++) row[`d${d}`] = Xsrc[d * count + r];
    pts.push(row);
  }
  let edges: number[][] = [];
  if (Esrc && Esrc.length > 1) {
    edges = [];
    for (let i = 0; i < Esrc.length; i += 2) {
      edges.push([Esrc[i], Esrc[i + 1]]);
    }
  }
  // adjacency list
  const adjacency: Record<number, number[]> = {};
  edges.forEach(([a, b]) => {
    (adjacency[a] ??= []).push(b);
    (adjacency[b] ??= []).push(a);
  });
  downloadText('data.json', JSON.stringify({ points: pts, edges, adjacency }, null, 2), 'application/json');
}

function exportProjectionCSV() {
  const { Xsrc, count } = getCurrentExportData();
  if (count === 0) { alert('No hay datos para exportar'); return; }
  const headers = Array.from({ length: N }, (_, d) => `d${d}`).join(',');
  const lines = [headers];
  for (let r = 0; r < count; r++) {
    const row: string[] = [];
    for (let d = 0; d < N; d++) row.push(`${Xsrc[d * count + r]}`);
    lines.push(row.join(','));
  }
  downloadText('data.csv', lines.join('\n'), 'text/csv');
}

function getCurrentExportData() {
  if (selectedInstance >= 0 && extraInstances[selectedInstance]) {
    const inst = extraInstances[selectedInstance];
    return { Xsrc: inst.X, count: inst.M, Esrc: inst.E };
  }
  if (M > 0) return { Xsrc: X, count: M, Esrc: E };
  return { Xsrc: new Float32Array(), count: 0, Esrc: new Uint32Array() };
}

function formatCoords(Nloc: number, coords: Float32Array, idx: number) {
  const parts: string[] = [];
  for (let d = 0; d < Nloc; d++) {
    const v = coords[d * M + idx];
    parts.push(`d${d}: ${v.toFixed(3)}`);
  }
  return parts;
}

function pickPointOnTargetPlane(ev: PointerEvent) {
  const rect = renderer.domElement.getBoundingClientRect();
  ndc.set(
    ((ev.clientX - rect.left) / rect.width) * 2 - 1,
    -((ev.clientY - rect.top) / rect.height) * 2 + 1,
  );
  clickPlane.setFromNormalAndCoplanarPoint(camera.getWorldDirection(tmpVec).normalize(), controls.target);
  raycaster.setFromCamera(ndc, camera);
  const hit = raycaster.ray.intersectPlane(clickPlane, clickPoint);
  return hit ? clickPoint.clone() : controls.target.clone();
}

function handleHover(ev: PointerEvent) {
  if (!tooltipEl) return;
  const rect = renderer.domElement.getBoundingClientRect();
  const mx = ev.clientX - rect.left;
  const my = ev.clientY - rect.top;
  const w = rect.width;
  const h = rect.height;
  let best = -1;
  let bestDist2 = Number.POSITIVE_INFINITY;
  const considerPoint = (px: number, py: number, pz: number, idx: number, instIdx: number) => {
    tmpVec.set(px, py, pz).project(camera);
    const sx = (tmpVec.x * 0.5 + 0.5) * w;
    const sy = (-tmpVec.y * 0.5 + 0.5) * h;
    const dx = sx - mx;
    const dy = sy - my;
    const d2 = dx * dx + dy * dy;
    if (d2 < bestDist2) {
      bestDist2 = d2;
      best = idx;
      selectedHoverInst = instIdx;
    }
  };
  let selectedHoverInst = -1;
  for (let i = 0; i < M; i++) {
    const pIdx = i * 3;
    considerPoint(rendererND.positions[pIdx], rendererND.positions[pIdx + 1], rendererND.positions[pIdx + 2], i, -1);
  }
  extraInstances.forEach(inst => {
    const pos = inst.renderer.positions;
    for (let i = 0; i < inst.M; i++) {
      const pIdx = i * 3;
      considerPoint(pos[pIdx], pos[pIdx + 1], pos[pIdx + 2], i, extraInstances.indexOf(inst));
    }
  });
  const thresh2 = 30 * 30; // pixels^2
  if (best >= 0 && bestDist2 < thresh2) {
    const lines = formatCoords(N, X, best);
    tooltipEl.innerHTML = `<div style="font-weight:600;margin-bottom:4px;">v${best}</div><div>${lines.join('<br>')}</div>`;
    tooltipEl.style.left = `${ev.clientX}px`;
    tooltipEl.style.top = `${ev.clientY}px`;
    tooltipEl.classList.add('visible');
  } else {
    tooltipEl.classList.remove('visible');
  }

  // status bar when idle
  if (statusBar && transformOp.mode === 'none') {
    const ndcX = ((ev.clientX - rect.left) / rect.width) * 2 - 1;
    const ndcY = -((ev.clientY - rect.top) / rect.height) * 2 + 1;
    statusBar.textContent = `Cursor NDC: (${ndcX.toFixed(3)}, ${ndcY.toFixed(3)})`;
  }
}
function resetToIsometric() {
  const targetN = 6;
  PARAMS.N = targetN;
  PARAMS.primitive = 'hypercube';
  PARAMS.proyeccion = 'PCA';
  PARAMS.autoReortho = false;
  PARAMS.renderMode = 'wireframe';
  PARAMS.sliceDim = -1;
  PARAMS.sliceMin = -0.5;
  PARAMS.sliceMax = 0.5;

  const rebuilt = buildPrimitive(PARAMS.primitive, targetN);
  const embedded = embedToMax(rebuilt.verts, targetN, axesOrder, axesOffset);
  rebuildState(MAX_N, embedded, rebuilt.edges, 'primitive', targetN);

  DEFAULT_PLANES.forEach((base, idx) => {
    const clone = clonePlane(base);
    clone.i = Math.min(clone.i, targetN - 1);
    clone.j = Math.min(clone.j, targetN - 1);
    Object.assign(planes[idx], clone, { _lastTheta: clone.theta });
  });

  controls.reset();
  camera.position.set(2.6, 1.8, 2.6);
}
projectAndRenderAll();
applySliceFilter();
updateAxisLegend();
renderAxisList();
scene.background = PARAMS.editMode ? editBackground.clone() : baseBackground.clone();
renderer.setClearColor(scene.background);

pane.addBinding(PARAMS, 'editMode', { label: 'Modo edición' });
if (viewToggle) {
  const btns = Array.from(viewToggle.querySelectorAll('button')) as HTMLButtonElement[];
  const syncButtons = () => {
    btns.forEach(btn => btn.classList.toggle('active', (btn.dataset.mode === PARAMS.renderMode)));
  };
  setViewMode = (mode: 'wireframe' | 'transparent' | 'solid') => {
    if (playState.active) return;
    PARAMS.renderMode = mode;
    rendererND.setMode(mode);
    rendererND.refreshSurface();
    extraInstances.forEach(inst => {
      inst.renderer.setMode(mode);
      inst.renderer.refreshSurface();
    });
    syncButtons();
  };
  btns.forEach(btn => {
    btn.addEventListener('click', () => setViewMode(btn.dataset.mode as any));
  });
  syncButtons();
}

if (fileInput) {
  fileInput.addEventListener('change', () => {
    const file = fileInput.files?.[0];
    if (file) handleImport(file);
  });
}

const fData = pane.addFolder({ title: 'Datos' });
fData.addButton({ title: 'Importar (JSON)' }).on('click', () => fileInput?.click());
fData.addButton({ title: 'Exportar datos JSON' }).on('click', () => exportProjectionJSON());

const fDims = pane.addFolder({ title: 'Dimensiones' });
fDims.addBinding(PARAMS, 'N', { min: 3, max: MAX_N, step: 1, label: 'N (para nuevas primitivas)' }).on('change', () => {
  // Solo actualiza el valor para nuevas primitivas; no toca escena existente ni cámara.
  PARAMS.N = Math.min(PARAMS.N, MAX_N);
  const nVis = visibleDims();
  if (axesOffset >= nVis) axesOffset = 0;
  PARAMS.axesX = axesOrder[axesOffset] ?? 0;
  PARAMS.axesY = axesOrder[axesOffset + 1] ?? 1;
  PARAMS.axesZ = axesOrder[axesOffset + 2] ?? 2;
  renderAxisList();
  updateAxisLegend();
});

const fProj = pane.addFolder({ title: 'Proyección' });
fProj.addBinding(PARAMS, 'perspMode', { label: 'Perspectiva' }).on('change', () => {
  projectAndRenderAll();
});
fProj.addBinding(PARAMS, 'autoReortho', { label: 'Re‑ortonormalizar' }).on('change', () => {
  // nada inmediato; se evalúa en runtime
});

// --- Animación ---
const clock = new THREE.Clock();
renderer.domElement.addEventListener('pointermove', handleHover);
renderer.domElement.addEventListener('pointermove', (ev) => {
  lastPointer = { x: ev.clientX, y: ev.clientY };
  if (transformOp.mode === 'none') return;
  ev.preventDefault();
  const dx = ev.clientX - transformOp.startMouse.x;
  const dy = ev.clientY - transformOp.startMouse.y;
  if (transformOp.targetVertex >= 0) {
    const inst = transformOp.instIdx === -1 ? null : extraInstances[transformOp.instIdx];
    const posArr = inst ? inst.renderer.positions : rendererND.positions;
    const idx = transformOp.targetVertex * 3;
    const rect = renderer.domElement.getBoundingClientRect();
    ndc.set(((ev.clientX - rect.left) / rect.width) * 2 - 1, -((ev.clientY - rect.top) / rect.height) * 2 + 1);
    raycaster.setFromCamera(ndc, camera);
    // plane always facing camera through start point to follow cursor
    transformOp.plane.setFromNormalAndCoplanarPoint(camera.getWorldDirection(tmpVec).normalize(), transformOp.planeHitStart);
    const hit = raycaster.ray.intersectPlane(transformOp.plane, tmpVec);
    if (!hit) return;
    if (transformOp.mode === 'move') {
      const locked = transformOp.lockAxis;
      posArr[idx] = locked === 1 || locked === 2 ? transformOp.vertexStart.x : hit.x;
      posArr[idx+1] = locked === 0 || locked === 2 ? transformOp.vertexStart.y : hit.y;
      posArr[idx+2] = locked === 0 || locked === 1 ? transformOp.vertexStart.z : hit.z;
      transformOp.lastHit.copy(hit);
    } else if (transformOp.mode === 'scale') {
      const fromOrigin = hit.clone().sub(transformOp.planeHitStart);
      const base = transformOp.vertexStart.clone().sub(transformOp.planeHitStart);
      const baseLen = base.length();
      const newLen = fromOrigin.length();
      const s = baseLen > 1e-6 ? newLen / baseLen : 1;
      const scaled = base.multiplyScalar(s).add(transformOp.planeHitStart);
      posArr[idx] = scaled.x;
      posArr[idx+1] = scaled.y;
      posArr[idx+2] = scaled.z;
      transformOp.lastHit.copy(scaled);
    } else if (transformOp.mode === 'rotate') {
      const base = transformOp.vertexStart.clone().sub(transformOp.planeHitStart);
      const cur = hit.clone().sub(transformOp.planeHitStart);
      const angle = Math.atan2(cur.y, cur.x) - Math.atan2(base.y, base.x);
      const q = new THREE.Quaternion().setFromAxisAngle(transformOp.axis, angle);
      base.applyQuaternion(q).add(transformOp.planeHitStart);
      posArr[idx] = base.x;
      posArr[idx+1] = base.y;
      posArr[idx+2] = base.z;
      transformOp.lastHit.copy(base);
    }
    const targetRenderer = inst ? inst.renderer : rendererND;
    // Bake back into source data mapped to current projection axes
    const local = new THREE.Vector3(posArr[idx], posArr[idx+1], posArr[idx+2]);
    if (inst) {
      const mat = new THREE.Matrix4().compose(inst.transform.pos, new THREE.Quaternion().setFromEuler(new THREE.Euler(inst.transform.rot.x, inst.transform.rot.y, inst.transform.rot.z)), inst.transform.scale).invert();
      local.applyMatrix4(mat);
      const axes = [PARAMS.axesX, PARAMS.axesY, PARAMS.axesZ];
      for (let c = 0; c < 3; c++) {
        const dim = axes[c] % N;
        inst.X[dim * inst.M + transformOp.targetVertex] = local.getComponent(c);
      }
      projector.project(inst.X, inst.M, inst.Y);
      inst.renderer.writeInterleavedFrom(inst.Y);
      inst.renderer.refreshSurface();
      inst.renderer.filterEdgesByDimRange(inst.X, N, inst.M, PARAMS.sliceDim, PARAMS.sliceMin, PARAMS.sliceMax);
    } else {
      const mat = new THREE.Matrix4().compose(baseTransform.pos, new THREE.Quaternion().setFromEuler(new THREE.Euler(baseTransform.rot.x, baseTransform.rot.y, baseTransform.rot.z)), baseTransform.scale).invert();
      local.applyMatrix4(mat);
      const axes = [PARAMS.axesX, PARAMS.axesY, PARAMS.axesZ];
      for (let c = 0; c < 3; c++) {
        const dim = axes[c] % N;
        X[dim * M + transformOp.targetVertex] = local.getComponent(c);
      }
      projector.project(X, M, Y);
      rendererND.writeInterleavedFrom(Y);
      rendererND.refreshSurface();
      rendererND.filterEdgesByDimRange(X, N, M, PARAMS.sliceDim, PARAMS.sliceMin, PARAMS.sliceMax);
    }
    if (vertexMarker) vertexMarker.position.set(posArr[idx], posArr[idx+1], posArr[idx+2]);
    if (statusBar) statusBar.textContent = `Vértice (${transformOp.targetVertex}): (${posArr[idx].toFixed(3)}, ${posArr[idx+1].toFixed(3)}, ${posArr[idx+2].toFixed(3)})`;
    } else {
    const target = transformOp.instIdx === -1 ? baseTransform : extraInstances[transformOp.instIdx].transform;
    if (transformOp.mode === 'move') {
      const src = transformOp.instIdx === -1 ? X : extraInstances[transformOp.instIdx].X;
      const baseData = transformOp.objectDataStart;
      const count = transformOp.instIdx === -1 ? M : extraInstances[transformOp.instIdx].M;
      if (baseData && count > 0) {
        const rect = renderer.domElement.getBoundingClientRect();
        ndc.set(((ev.clientX - rect.left) / rect.width) * 2 - 1, -((ev.clientY - rect.top) / rect.height) * 2 + 1);
        raycaster.setFromCamera(ndc, camera);
        const hit = raycaster.ray.intersectPlane(transformOp.plane, tmpVec);
        if (!hit) return;
        const delta = hit.clone().add(transformOp.moveOffset).sub(transformOp.planeHitStart);
        if (transformOp.lockAxis === 0) {
          delta.y = 0;
          delta.z = 0;
        } else if (transformOp.lockAxis === 1) {
          delta.x = 0;
          delta.z = 0;
        } else if (transformOp.lockAxis === 2) {
          delta.x = 0;
          delta.y = 0;
        }
        const axes = [PARAMS.axesX, PARAMS.axesY, PARAMS.axesZ];
        for (let i = 0; i < count; i++) {
          for (let c = 0; c < 3; c++) {
            const dim = axes[c] % N;
            const idxD = dim * count + i;
            src[idxD] = baseData[idxD] + delta.getComponent(c);
          }
        }
        transformOp.lastHit.copy(hit);
        projectionDirty = true;
      }
    } else if (transformOp.mode === 'rotate') {
      if (transformOp.wPlane && transformOp.objectDataStart) {
        const src = transformOp.instIdx === -1 ? X : extraInstances[transformOp.instIdx].X;
        const baseData = transformOp.objectDataStart;
        const count = transformOp.instIdx === -1 ? M : extraInstances[transformOp.instIdx].M;
        if (count > 0) {
          const axes = [PARAMS.axesX, PARAMS.axesY, PARAMS.axesZ];
          const dimA = axes[Math.max(0, transformOp.lockAxis)] % N;
          const dimB = N - 1;
          const angle = (dx - dy) * 0.01;
          const c = Math.cos(angle), s = Math.sin(angle);
          for (let i = 0; i < count; i++) {
            const a0 = baseData[dimA * count + i];
            const b0 = baseData[dimB * count + i];
            src[dimA * count + i] = a0 * c - b0 * s;
            src[dimB * count + i] = a0 * s + b0 * c;
          }
          projectionDirty = true;
        }
      } else {
        const deltaX = dx * 0.005;
        const deltaY = dy * 0.005;
        const lx = transformOp.startRot.x;
        const ly = transformOp.startRot.y;
        const lz = transformOp.startRot.z;
        if (transformOp.lockAxis === 0) {
          target.rot.set(lx + deltaY, ly, lz);
        } else if (transformOp.lockAxis === 1) {
          target.rot.set(lx, ly + deltaX, lz);
        } else if (transformOp.lockAxis === 2) {
          target.rot.set(lx, ly, lz + deltaX);
        } else {
          target.rot.set(lx + deltaY, ly + deltaX, lz);
        }
      }
    } else if (transformOp.mode === 'scale') {
      const delta = (dx - dy) * 0.005;
      const s = Math.max(0.1, Math.min(5, transformOp.startScale + delta));
      target.scale.set(s, s, s);
    }
    syncTransformUIFromSelection();
    if (statusBar) statusBar.textContent = `Objeto: pos(${target.pos.x.toFixed(3)}, ${target.pos.y.toFixed(3)}, ${target.pos.z.toFixed(3)}) rot(${target.rot.x.toFixed(3)}, ${target.rot.y.toFixed(3)}, ${target.rot.z.toFixed(3)})`;
  }
  projectAndRenderAll();
  applySliceFilter();
  updateSelectionOutline();
  updateAxisGuide();
});
renderer.domElement.addEventListener('pointerleave', () => tooltipEl?.classList.remove('visible'));
renderer.domElement.addEventListener('contextmenu', (ev) => {
  if (!ctxMenu) return;
  ev.preventDefault();
  lastPointer = { x: ev.clientX, y: ev.clientY };
  deletePending = false;
  ctxMenu.innerHTML = '';
  const spawnPoint = pickPointOnTargetPlane(ev);
  if (PARAMS.editMode) {
    if (selectedVertex < 0) return;
    const actions: { label: string; mode?: TransformMode }[] = [
      { label: 'Mover vértice', mode: 'move' },
    ];
    actions.forEach(action => {
      const btn = document.createElement('button');
      btn.textContent = action.label;
      btn.onclick = () => {
        ctxMenu.style.display = 'none';
        startTransform(action.mode! as TransformMode, ev);
      };
      ctxMenu.appendChild(btn);
    });
  } else {
    const hasSelection = (selectedInstance === -1 && M > 0) || selectedInstance >= 0;
    if (!hasSelection) {
      const opts: { label: string; kind: PrimitiveKind }[] = [
        { label: 'Hipercubo', kind: 'hypercube' },
        { label: 'Cross polytope', kind: 'cross' },
        { label: 'Simplex', kind: 'simplex' },
        { label: 'Prisma de simplex', kind: 'simplexPrism' },
      ];
      opts.forEach(opt => {
        const btn = document.createElement('button');
        btn.textContent = `Añadir ${opt.label}`;
        btn.onclick = () => {
          ctxMenu.style.display = 'none';
          const data = buildPrimitive(opt.kind, PARAMS.N);
          const embedded = embedToMax(data.verts, PARAMS.N, axesOrder, axesOffset);
          const instRenderer = new HypercubeRenderer(scene);
          instRenderer.build(data.V, data.edges);
          tmpOffset.copy(spawnPoint);
          const Yloc = new Float32Array(3 * data.V);
          const label = `${opt.label} #${extraInstances.length + 1}`;
          const t = { pos: tmpOffset.clone(), rot: new THREE.Vector3(), scale: new THREE.Vector3(1,1,1) };
          extraInstances.push({ renderer: instRenderer, Y: Yloc, X: embedded, E: data.edges, M: data.V, offset: tmpOffset.clone(), label, kind: opt.kind, transform: t, originalN: PARAMS.N });
          projector.project(embedded, data.V, Yloc);
          instRenderer.setTransform(t.pos, new THREE.Euler(t.rot.x, t.rot.y, t.rot.z), t.scale);
          instRenderer.writeInterleavedFrom(Yloc);
          instRenderer.filterEdgesByDimRange(embedded, MAX_N, data.V, PARAMS.sliceDim, PARAMS.sliceMin, PARAMS.sliceMax);
          instRenderer.setMode(PARAMS.renderMode);
          projectAndRenderAll();
          applySliceFilter();
          if (setViewMode) setViewMode(PARAMS.renderMode);
          updateObjectList();
        };
        ctxMenu.appendChild(btn);
      });
    } else {
      const actions: { label: string; mode?: TransformMode; onClick?: () => void }[] = [
        { label: 'Mover', mode: 'move' },
        { label: 'Rotar', mode: 'rotate' },
        { label: 'Escalar', mode: 'scale' },
        { label: 'Eliminar', onClick: () => showDeleteConfirm(ev) },
      ];
      actions.forEach(action => {
        const btn = document.createElement('button');
        btn.textContent = action.label;
        btn.onclick = () => {
          ctxMenu.style.display = 'none';
          if (action.onClick) { action.onClick(); return; }
          startTransform(action.mode! as TransformMode, ev);
        };
        ctxMenu.appendChild(btn);
      });
    }
  }
  const x = Math.min(ev.clientX, window.innerWidth - 180);
  const y = Math.min(ev.clientY, window.innerHeight - 150);
  ctxMenu.style.left = `${x}px`;
  ctxMenu.style.top = `${y}px`;
  ctxMenu.style.display = ctxMenu.innerHTML ? 'block' : 'none';
});
window.addEventListener('click', () => {
  if (deletePending) return;
  if (ctxMenu) ctxMenu.style.display = 'none';
  deletePending = false;
});
renderer.domElement.addEventListener('wheel', (ev) => {
  if (!PARAMS.editMode) return;
  ev.preventDefault();
  const dir = ev.deltaY > 0 ? 1 : -1;
  let v = PARAMS.sliceDim + dir;
  v = Math.max(-1, Math.min(N - 1, v));
  PARAMS.sliceDim = v;
  if (sliceDimBinding) sliceDimBinding.value = v;
  applySliceFilter();
});
renderer.domElement.addEventListener('mousedown', (ev) => {
  if (ev.button === 1) {
    ev.preventDefault();
    ev.stopPropagation();
    axisDrag.active = true;
    axisDrag.lastX = ev.clientX;
    axisDrag.accum = 0;
    axisDrag.prevZoom = controls.enableZoom;
    axisDrag.prevPan = controls.enablePan;
    controls.enableZoom = false;
    controls.enablePan = false;
    return;
  }
}, { capture: true });
renderer.domElement.addEventListener('pointerdown', (ev) => {
  if (axisDrag.active) return;
  lastPointer = { x: ev.clientX, y: ev.clientY };
  if (PARAMS.editMode && dragState.active) return;
  if (transformOp.mode !== 'none') {
    if (ev.button === 0) {
      // rebase start point to current click for consistent deltas
      transformOp.startMouse.set(ev.clientX, ev.clientY);
      if (transformOp.targetVertex >= 0) {
        transformOp.planeHitStart.copy(transformOp.vertexStart);
        transformOp.plane.setFromNormalAndCoplanarPoint(camera.getWorldDirection(tmpVec).normalize(), transformOp.planeHitStart);
      }
      if (transformOp.targetVertex >= 0) {
        const instIdx = transformOp.instIdx;
        const inst = instIdx === -1 ? null : extraInstances[instIdx];
        const posArr = inst ? inst.renderer.positions : rendererND.positions;
        const idx = transformOp.targetVertex * 3;
        // Bake current indicator position (already locked) back to data
        const local = new THREE.Vector3(posArr[idx], posArr[idx+1], posArr[idx+2]);
        if (inst) {
          const mat = new THREE.Matrix4().compose(inst.transform.pos, new THREE.Quaternion().setFromEuler(new THREE.Euler(inst.transform.rot.x, inst.transform.rot.y, inst.transform.rot.z)), inst.transform.scale).invert();
          local.applyMatrix4(mat);
          for (let d = 0; d < Math.min(3, N); d++) inst.X[d * inst.M + transformOp.targetVertex] = local.getComponent(d);
        } else {
          const mat = new THREE.Matrix4().compose(baseTransform.pos, new THREE.Quaternion().setFromEuler(new THREE.Euler(baseTransform.rot.x, baseTransform.rot.y, baseTransform.rot.z)), baseTransform.scale).invert();
          local.applyMatrix4(mat);
          for (let d = 0; d < Math.min(3, N); d++) X[d * M + transformOp.targetVertex] = local.getComponent(d);
        }
      }
      transformOp.mode = 'none';
      transformOp.vertexDataStart = null;
      transformOp.lockAxis = -1;
      clearAxisGuide();
      projectAndRenderAll();
      applySliceFilter();
      if (PARAMS.editMode && selectedVertex >= 0) placeVertexMarker(selectedInstance, selectedVertex);
      updateSelectionOutline();
      if (statusBar) {
        if (transformOp.targetVertex >= 0) {
          const inst = transformOp.instIdx === -1 ? null : extraInstances[transformOp.instIdx];
          const posArr = inst ? inst.renderer.positions : rendererND.positions;
          const idx = transformOp.targetVertex * 3;
          statusBar.textContent = `Vértice (${transformOp.targetVertex}) commit: (${posArr[idx].toFixed(3)}, ${posArr[idx+1].toFixed(3)}, ${posArr[idx+2].toFixed(3)})`;
        } else {
          const target = transformOp.instIdx === -1 ? baseTransform : extraInstances[transformOp.instIdx].transform;
          statusBar.textContent = `Objeto commit: pos(${target.pos.x.toFixed(3)}, ${target.pos.y.toFixed(3)}, ${target.pos.z.toFixed(3)})`;
        }
      }
    } else if (ev.button === 2) {
      // cancel, revert
      if (transformOp.targetVertex >= 0) {
        const inst = transformOp.instIdx === -1 ? null : extraInstances[transformOp.instIdx];
        const posArr = inst ? inst.renderer.positions : rendererND.positions;
        const idx = transformOp.targetVertex * 3;
        posArr[idx] = transformOp.vertexStart.x;
        posArr[idx+1] = transformOp.vertexStart.y;
        posArr[idx+2] = transformOp.vertexStart.z;
        const targetRenderer = inst ? inst.renderer : rendererND;
        if (transformOp.vertexDataStart) {
          const src = inst ? inst.X : X;
          const mcount = inst ? inst.M : M;
          for (let d = 0; d < N; d++) src[d * mcount + transformOp.targetVertex] = transformOp.vertexDataStart[d];
        }
        if (inst) {
          projector.project(inst.X, inst.M, inst.Y);
          inst.renderer.writeInterleavedFrom(inst.Y);
          inst.renderer.filterEdgesByDimRange(inst.X, N, inst.M, PARAMS.sliceDim, PARAMS.sliceMin, PARAMS.sliceMax);
        } else {
          projector.project(X, M, Y);
          rendererND.writeInterleavedFrom(Y);
          rendererND.filterEdgesByDimRange(X, N, M, PARAMS.sliceDim, PARAMS.sliceMin, PARAMS.sliceMax);
        }
        (targetRenderer.geometry.getAttribute('position') as THREE.BufferAttribute).needsUpdate = true;
        targetRenderer.geometry.computeBoundingBox();
        targetRenderer.geometry.computeBoundingSphere();
        if (vertexMarker) vertexMarker.position.set(posArr[idx], posArr[idx+1], posArr[idx+2]);
      } else {
        const target = transformOp.instIdx === -1 ? baseTransform : extraInstances[transformOp.instIdx].transform;
        // revert object translation snapshot if it exists
        if (transformOp.objectDataStart) {
          const src = transformOp.instIdx === -1 ? X : extraInstances[transformOp.instIdx].X;
          src.set(transformOp.objectDataStart);
          projectionDirty = true;
        }
        target.pos.copy(transformOp.startPos);
        target.rot.copy(transformOp.startRot);
        target.scale.set(transformOp.startScale, transformOp.startScale, transformOp.startScale);
      }
      transformOp.mode = 'none';
      transformOp.vertexDataStart = null;
      transformOp.lockAxis = -1;
      transformOp.objectDataStart = null;
      clearAxisGuide();
      transformOp.moveOffset.set(0,0,0);
      syncTransformUIFromSelection();
      projectAndRenderAll();
      applySliceFilter();
      updateSelectionOutline();
    }
    ev.preventDefault();
    return;
  }
  if (ev.button !== 0) return;
  const rect = renderer.domElement.getBoundingClientRect();
  const mx = ev.clientX - rect.left;
  const my = ev.clientY - rect.top;
  const w = rect.width;
  const h = rect.height;

  const screenBounds = (positions: Float32Array, count: number) => {
    let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
    for (let i = 0; i < count; i++) {
      const pIdx = i * 3;
      tmpVec.set(positions[pIdx], positions[pIdx + 1], positions[pIdx + 2]).project(camera);
      const sx = (tmpVec.x * 0.5 + 0.5) * w;
      const sy = (-tmpVec.y * 0.5 + 0.5) * h;
      if (sx < minX) minX = sx; if (sx > maxX) maxX = sx;
      if (sy < minY) minY = sy; if (sy > maxY) maxY = sy;
    }
    return { minX, maxX, minY, maxY };
  };

  const candidates: { instIdx: number; contains: boolean; area: number; nearestDist2: number; }[] = [];

  if (M > 0) {
    const box = screenBounds(rendererND.positions, M);
    const contains = mx >= box.minX && mx <= box.maxX && my >= box.minY && my <= box.maxY;
    const area = (box.maxX - box.minX) * (box.maxY - box.minY);
    candidates.push({ instIdx: -1, contains, area, nearestDist2: Number.POSITIVE_INFINITY });
  }
  extraInstances.forEach((inst, idx) => {
    const box = screenBounds(inst.renderer.positions, inst.M);
    const contains = mx >= box.minX && mx <= box.maxX && my >= box.minY && my <= box.maxY;
    const area = (box.maxX - box.minX) * (box.maxY - box.minY);
    candidates.push({ instIdx: idx, contains, area, nearestDist2: Number.POSITIVE_INFINITY });
  });

  let bestInst = -1;
  // Prefer objects whose screen bbox contains the click; pick the smallest area
  const containing = candidates.filter(c => c.contains && isFinite(c.area));
  if (containing.length) {
    containing.sort((a, b) => a.area - b.area);
    bestInst = containing[0].instIdx;
  } else {
    // fallback to nearest vertex
    let bestDist2 = Number.POSITIVE_INFINITY;
    const consider = (px: number, py: number, pz: number, instIdx: number) => {
      tmpVec.set(px, py, pz).project(camera);
      const sx = (tmpVec.x * 0.5 + 0.5) * w;
      const sy = (-tmpVec.y * 0.5 + 0.5) * h;
      const dx = sx - mx;
      const dy = sy - my;
      const d2 = dx * dx + dy * dy;
      if (d2 < bestDist2) {
        bestDist2 = d2;
        bestInst = instIdx;
      }
    };
    for (let i = 0; i < M; i++) {
      const pIdx = i * 3;
      consider(rendererND.positions[pIdx], rendererND.positions[pIdx + 1], rendererND.positions[pIdx + 2], -1);
    }
    extraInstances.forEach((inst, idx) => {
      const pos = inst.renderer.positions;
      for (let i = 0; i < inst.M; i++) {
        const pIdx = i * 3;
        consider(pos[pIdx], pos[pIdx + 1], pos[pIdx + 2], idx);
      }
    });
    const thresh = 35 * 35;
    if (bestDist2 >= thresh) bestInst = -999; // none
  }

  if (bestInst !== -999) {
    selectObject(bestInst);
    if (PARAMS.editMode && ev.button === 0) {
      const targetRenderer = bestInst === -1 ? rendererND : extraInstances[bestInst].renderer;
      const posArr = targetRenderer.positions;
      let nearest = -1, nearestD2 = Number.POSITIVE_INFINITY;
      const count = bestInst === -1 ? M : extraInstances[bestInst].M;
      for (let i = 0; i < count; i++) {
        const pIdx = i * 3;
        tmpVec.set(posArr[pIdx], posArr[pIdx + 1], posArr[pIdx + 2]).project(camera);
        const sx = (tmpVec.x * 0.5 + 0.5) * w;
        const sy = (-tmpVec.y * 0.5 + 0.5) * h;
        const dx = sx - mx, dy = sy - my;
        const d2 = dx*dx + dy*dy;
        if (d2 < nearestD2) { nearestD2 = d2; nearest = i; }
      }
      selectedVertex = nearest;
      placeVertexMarker(bestInst, nearest);
    }
  } else {
    // click on empty space: clear selections
    selectObject(-1);
    selectedVertex = -1;
    if (vertexMarker) { scene.remove(vertexMarker); vertexMarker = null; }
    if (selectionOutline) { scene.remove(selectionOutline); selectionOutline = null; }
  }
});

window.addEventListener('pointermove', (ev) => {
  if (!axisDrag.active) return;
  ev.preventDefault();
  const dx = ev.clientX - axisDrag.lastX;
  axisDrag.lastX = ev.clientX;
  axisDrag.accum += dx;
  const threshold = 35;
  let steps = 0;
  while (axisDrag.accum > threshold) { steps++; axisDrag.accum -= threshold; }
  while (axisDrag.accum < -threshold) { steps--; axisDrag.accum += threshold; }
  if (steps !== 0) cycleAxes(steps);
});

window.addEventListener('pointerup', (ev) => {
  if (ev.button !== 1 || !axisDrag.active) return;
  axisDrag.active = false;
  axisDrag.accum = 0;
  controls.enableZoom = axisDrag.prevZoom;
  controls.enablePan = axisDrag.prevPan;
});

window.addEventListener('keydown', (ev) => {
  if (transformOp.mode === 'none') return;
  const key = ev.key.toLowerCase();
  if (key === 'w') {
    if (transformOp.mode === 'rotate') {
      ev.preventDefault();
      transformOp.wPlane = !transformOp.wPlane;
      updateAxisGuide();
    }
    return;
  }
  if (key === 'x' || key === 'y' || key === 'z') {
    transformOp.lockAxis = key === 'x' ? 0 : key === 'y' ? 1 : 2;
    updateAxisGuide();
  }
});

window.addEventListener('keydown', (ev) => {
  if (ev.key === 'Tab') {
    ev.preventDefault();
    PARAMS.editMode = !PARAMS.editMode;
    scene.background = PARAMS.editMode ? editBackground.clone() : baseBackground.clone();
    renderer.setClearColor(scene.background);
    pane.refresh();
    // clearing vertex selection on toggle
    selectedVertex = -1;
    if (vertexMarker) { scene.remove(vertexMarker); vertexMarker = null; }
    if (!PARAMS.editMode) {
      if (vertexCloud) { scene.remove(vertexCloud); vertexCloud = null; }
    } else {
      updateVertexCloud(selectedInstance);
    }
    updateSelectionOutline();
  }
  // Transform hotkeys
  if (transformOp.mode === 'none') {
    if (ev.key === 'g' || ev.key === 'r' || ev.key === 's') {
      if (playState.active) return;
      ev.preventDefault();
      const modeMap: Record<string, TransformMode> = { g: 'move', r: 'rotate', s: 'scale' };
      const fakeEvent = new PointerEvent('pointerdown', { clientX: lastPointer.x, clientY: lastPointer.y });
      startTransform(modeMap[ev.key], fakeEvent);
    } else if (ev.key.toLowerCase() === 'a' && ev.shiftKey) {
      ev.preventDefault();
      // open add-object menu at last pointer position
      if (!ctxMenu) return;
      ctxMenu.innerHTML = '';
      const opts: { label: string; kind: PrimitiveKind }[] = [
        { label: 'Hipercubo', kind: 'hypercube' },
        { label: 'Cross polytope', kind: 'cross' },
        { label: 'Simplex', kind: 'simplex' },
        { label: 'Prisma de simplex', kind: 'simplexPrism' },
      ];
      const spawnPoint = pickPointOnTargetPlane(new PointerEvent('pointerdown', { clientX: lastPointer.x, clientY: lastPointer.y }));
      opts.forEach(opt => {
        const btn = document.createElement('button');
        btn.textContent = `Añadir ${opt.label}`;
        btn.onclick = () => {
          ctxMenu.style.display = 'none';
          const data = buildPrimitive(opt.kind, PARAMS.N);
          const embedded = embedToMax(data.verts, PARAMS.N, axesOrder, axesOffset);
          const instRenderer = new HypercubeRenderer(scene);
          instRenderer.build(data.V, data.edges);
          tmpOffset.copy(spawnPoint);
          const Yloc = new Float32Array(3 * data.V);
          const label = `${opt.label} #${extraInstances.length + 1}`;
          const t = { pos: tmpOffset.clone(), rot: new THREE.Vector3(), scale: new THREE.Vector3(1,1,1) };
          extraInstances.push({ renderer: instRenderer, Y: Yloc, X: embedded, E: data.edges, M: data.V, offset: tmpOffset.clone(), label, kind: opt.kind, transform: t, originalN: PARAMS.N });
          projector.project(embedded, data.V, Yloc);
          instRenderer.setTransform(t.pos, new THREE.Euler(t.rot.x, t.rot.y, t.rot.z), t.scale);
          instRenderer.writeInterleavedFrom(Yloc);
          instRenderer.filterEdgesByDimRange(embedded, MAX_N, data.V, PARAMS.sliceDim, PARAMS.sliceMin, PARAMS.sliceMax);
          instRenderer.setMode(PARAMS.renderMode);
          projectAndRenderAll();
          applySliceFilter();
          updateObjectList();
        };
        ctxMenu.appendChild(btn);
      });
      ctxMenu.style.left = `${lastPointer.x}px`;
      ctxMenu.style.top = `${lastPointer.y}px`;
      ctxMenu.style.display = 'block';
    } else if (ev.key === 'w') {
      ev.preventDefault();
      PARAMS.perspMode = !PARAMS.perspMode;
      projectAndRenderAll();
      pane.refresh();
    } else if (ev.key === 'x') {
      ev.preventDefault();
      const hasSel = (selectedInstance === -1 && M > 0) || selectedInstance >= 0;
      if (!hasSel) return;
      if (deletePending) {
        deletePending = false;
        if (ctxMenu) ctxMenu.style.display = 'none';
        deleteSelected();
      } else {
        showDeleteConfirm();
      }
    } else if ((ev.ctrlKey || ev.metaKey) && ev.key.toLowerCase() === 'z') {
      ev.preventDefault();
      const snap = undoStack.pop();
      if (snap) {
        redoStack.push({
          N,
          X: new Float32Array(X),
          M,
          axes: { x: PARAMS.axesX, y: PARAMS.axesY, z: PARAMS.axesZ },
          baseTransform: {
            pos: baseTransform.pos.clone(),
            rot: baseTransform.rot.clone(),
            scale: baseTransform.scale.clone(),
          },
          baseOrigN: baseOriginalN,
        });
        applySnapshot(snap);
      }
    } else if ((ev.ctrlKey || ev.metaKey) && ev.key.toLowerCase() === 'y') {
      ev.preventDefault();
      const snap = redoStack.pop();
      if (snap) {
        undoStack.push({
          N,
          X: new Float32Array(X),
          M,
          axes: { x: PARAMS.axesX, y: PARAMS.axesY, z: PARAMS.axesZ },
          baseTransform: {
            pos: baseTransform.pos.clone(),
            rot: baseTransform.rot.clone(),
            scale: baseTransform.scale.clone(),
          },
          baseOrigN: baseOriginalN,
        });
        applySnapshot(snap);
      }
    }
  }
});

// vertex drag disabled; edit mode uses transform menu

function animate() {
  const dt = Math.min(clock.getDelta(), 0.05);
  // animation disabled
  if (PARAMS.autoReortho) rot.reorthonormalize();

  projectAndRenderAll();

  controls.update();
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}
animate();

function startTransform(mode: TransformMode, ev: PointerEvent) {
  transformOp.mode = mode;
  transformOp.instIdx = selectedInstance;
  transformOp.targetVertex = PARAMS.editMode ? selectedVertex : -1;
  transformOp.startMouse.set(ev.clientX, ev.clientY);
  if (transformOp.targetVertex >= 0) {
    if (transformOp.targetVertex < 0) { transformOp.mode = 'none'; return; }
    const inst = transformOp.instIdx === -1 ? null : extraInstances[transformOp.instIdx];
    const posArr = inst ? inst.renderer.positions : rendererND.positions;
    const idx = transformOp.targetVertex * 3;
    transformOp.vertexStart.set(posArr[idx], posArr[idx+1], posArr[idx+2]);
    const src = inst ? inst.X : X;
    transformOp.vertexDataStart = new Float32Array(N);
    for (let d = 0; d < N; d++) transformOp.vertexDataStart[d] = src[d * (inst ? inst.M : M) + transformOp.targetVertex];
    transformOp.startScale = 1;
    transformOp.plane.setFromNormalAndCoplanarPoint(camera.getWorldDirection(tmpVec).normalize(), transformOp.vertexStart);
    transformOp.planeHitStart.copy(transformOp.vertexStart);
    transformOp.lastHit.copy(transformOp.vertexStart);
    transformOp.lockAxis = -1;
    transformOp.wPlane = false;
  } else {
    const target = selectedInstance === -1 ? baseTransform : extraInstances[selectedInstance]?.transform;
    if (!target) return;
    transformOp.startPos.copy(target.pos);
    transformOp.startRot.copy(target.rot);
    transformOp.startScale = target.scale.x;
    transformOp.lockAxis = -1;
    transformOp.wPlane = false;
    if (mode === 'move' || mode === 'rotate') {
      const src = selectedInstance === -1 ? X : extraInstances[selectedInstance].X;
      const count = selectedInstance === -1 ? M : extraInstances[selectedInstance].M;
      transformOp.objectDataStart = new Float32Array(src.length);
      transformOp.objectDataStart.set(src);
      transformOp.lastHit.set(0,0,0);
      if (mode === 'move') {
        const positions = selectedInstance === -1 ? rendererND.positions : extraInstances[selectedInstance].renderer.positions;
        const ctr = computeCenterFromPositions(positions, count);
        transformOp.planeHitStart.copy(ctr);
        transformOp.plane.setFromNormalAndCoplanarPoint(camera.getWorldDirection(tmpVec).normalize(), ctr);
        // compute initial cursor offset so movement stays relative to click
        const rect = renderer.domElement.getBoundingClientRect();
        ndc.set(((ev.clientX - rect.left) / rect.width) * 2 - 1, -((ev.clientY - rect.top) / rect.height) * 2 + 1);
        raycaster.setFromCamera(ndc, camera);
        const hit = raycaster.ray.intersectPlane(transformOp.plane, tmpVec);
        if (hit) {
          transformOp.lastHit.copy(hit);
          transformOp.moveOffset.copy(transformOp.planeHitStart).sub(hit);
        } else {
          transformOp.lastHit.copy(ctr);
          transformOp.moveOffset.set(0,0,0);
        }
      }
    } else {
      transformOp.objectDataStart = null;
    }
  }
}

// --- Resize ---
window.addEventListener('resize', () => {
  const w = window.innerWidth, h = window.innerHeight;
  camera.aspect = w / h;
  camera.updateProjectionMatrix();
  renderer.setSize(w, h);
});
