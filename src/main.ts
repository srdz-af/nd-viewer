
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
const paneContainer = document.getElementById('pane')!;
const paneToggleBtn = document.getElementById('menu-toggle') as HTMLButtonElement | null;
const fileInput = document.getElementById('file-input') as HTMLInputElement | null;
const tooltipEl = document.getElementById('tooltip') as HTMLDivElement | null;

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
scene.background = new THREE.Color(0x10141a);
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

const light = new THREE.DirectionalLight(0xffffff, 1.0);
light.position.set(2, 3, 4);
const ambient = new THREE.AmbientLight(0xffffff, 0.3);
const hemi = new THREE.HemisphereLight(0x88aaff, 0x090b12, 0.6);
scene.add(ambient, hemi, light);

const axes = new THREE.AxesHelper(1.0);
scene.add(axes);

// --- Estado N‑D ---
let N = 4;
let { verts: X, edges: E, V: M } = buildPrimitive('hypercube', N);
let rot = new RotND(N);
let projector = new NDProjector(N, rot.matrix, canonicalP(N));
let Y = new Float32Array(3 * M);
let dataSource: 'primitive' | 'custom' = 'primitive';
const edgesFallback = new Uint32Array([0, 0]);
const tmpVec = new THREE.Vector3();

const rendererND = new HypercubeRenderer(scene);
rendererND.build(M, E);
rendererND.setMode('wireframe');
let paneVisible = true;

// --- UI (Tweakpane) ---
const pane = new Pane({ container: paneContainer }) as any;
const PARAMS = {
  N,
  primitive: 'hypercube' as PrimitiveMode,
  proyeccion: 'PCA' as ProjMode,
  autoReortho: false,
  // Slicing
  sliceDim: -1,
  sliceMin: -0.5,
  sliceMax: 0.5,
  modoSolido: false,
};

const clonePlane = (p: Plane) => ({ ...p, _lastTheta: p._lastTheta ?? 0 });
const DEFAULT_PLANES: Plane[] = [
  { i: 0, j: 1, theta: 0, auto: true,  speed: 0.7 },
  { i: 2, j: 3, theta: 0, auto: false, speed: 0.4 },
  { i: 4, j: 5, theta: 0, auto: false, speed: 0.25 },
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
  if (PARAMS.proyeccion === 'Canonico') {
    projector.setCanonicalP();
  } else {
    const { P } = pcaTopK(X, N, M, 3);
    projector.setCustomP(P);
  }
}

function rebuildState(newN: number, newX: Float32Array, newE: Uint32Array, source: 'primitive' | 'custom') {
  dataSource = source;
  N = newN;
  PARAMS.N = newN;
  X = new Float32Array(newX);
  E = newE.length ? new Uint32Array(newE) : edgesFallback;
  M = newX.length / newN;
  rot = new RotND(newN);
  projector = new NDProjector(newN, rot.matrix, canonicalP(newN));
  Y = new Float32Array(3 * M);
  refreshPlaneOptions();
  planeBindings.forEach(({ i, j }, idx) => {
    const plane = planes[idx];
    i.max = newN - 1;
    j.max = newN - 1;
    plane.i = Math.min(plane.i, newN - 1);
    plane.j = Math.min(plane.j, newN - 1);
    i.value = plane.i;
    j.value = plane.j;
    i.refresh();
    j.refresh();
  });
  if (sliceDimBinding) {
    sliceDimBinding.max = newN - 1;
    if (PARAMS.sliceDim >= newN) PARAMS.sliceDim = newN - 1;
    sliceDimBinding.value = PARAMS.sliceDim;
    sliceDimBinding.refresh();
  }
  rendererND.build(M, E);
  rendererND.setMode(PARAMS.modoSolido ? 'solid' : 'wireframe');
  applyProjectionMatrix();
  projector.project(X, M, Y);
  rendererND.writeInterleavedFrom(Y);
  rendererND.filterEdgesByDimRange(X, N, M, PARAMS.sliceDim, PARAMS.sliceMin, PARAMS.sliceMax);
  pane.refresh();
}

function splitNumericLine(line: string) {
  return line.split(/[, \t;]+/).filter(Boolean).map(Number);
}

function parseCSV(text: string) {
  const lines = text.split(/\r?\n/).map(l => l.trim()).filter(Boolean);
  if (!lines.length) throw new Error('Archivo CSV vacío');
  const first = splitNumericLine(lines[0]);
  const D = first.length;
  if (D < 3 || D > 32) throw new Error('CSV debe tener entre 3 y 32 dimensiones por fila');
  const rows: number[][] = [first];
  for (let i = 1; i < lines.length; i++) {
    const parts = splitNumericLine(lines[i]);
    if (!parts.length) continue;
    if (parts.length !== D) throw new Error(`Fila ${i+1} tiene ${parts.length} columnas, se esperaban ${D}`);
    rows.push(parts);
  }
  const Mloc = rows.length;
  const arr = new Float32Array(D * Mloc);
  for (let r = 0; r < Mloc; r++) {
    for (let d = 0; d < D; d++) {
      const v = rows[r][d];
      if (!Number.isFinite(v)) throw new Error(`Valor no numérico en fila ${r+1}, col ${d+1}`);
      arr[d * Mloc + r] = v;
    }
  }
  return { N: D, X: arr };
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
  return { N: D, X: flat };
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
    const lower = file.name.toLowerCase();
    const parsed = lower.endsWith('.csv') ? parseCSV(text) : parseJSONData(text);
    if (parsed.N < 3 || parsed.N > 8) {
      alert('Solo se admiten datasets de entre 3 y 8 dimensiones para visualizar.');
      return;
    }
    const edges = edgesFallback;
    rebuildState(parsed.N, parsed.X, edges, 'custom');
  } catch (err) {
    console.error(err);
    alert(`Error al importar: ${(err as Error).message}`);
  } finally {
    if (fileInput) fileInput.value = '';
  }
}

function exportProjectionJSON() {
  projector.project(X, M, Y);
  const pts = [];
  const xs = Y.subarray(0, M);
  const ys = Y.subarray(M, 2 * M);
  const zs = Y.subarray(2 * M, 3 * M);
  for (let i = 0; i < M; i++) pts.push({ x: xs[i], y: ys[i], z: zs[i] });
  downloadText('projection.json', JSON.stringify({ points: pts }, null, 2), 'application/json');
}

function exportProjectionCSV() {
  projector.project(X, M, Y);
  const xs = Y.subarray(0, M);
  const ys = Y.subarray(M, 2 * M);
  const zs = Y.subarray(2 * M, 3 * M);
  const lines = ['x,y,z'];
  for (let i = 0; i < M; i++) lines.push(`${xs[i]},${ys[i]},${zs[i]}`);
  downloadText('projection.csv', lines.join('\n'), 'text/csv');
}

function formatCoords(Nloc: number, coords: Float32Array, idx: number) {
  const parts: string[] = [];
  for (let d = 0; d < Nloc; d++) {
    const v = coords[d * M + idx];
    parts.push(`d${d}: ${v.toFixed(3)}`);
  }
  return parts;
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
  const xs = Y.subarray(0, M);
  const ys = Y.subarray(M, 2 * M);
  const zs = Y.subarray(2 * M, 3 * M);
  for (let i = 0; i < M; i++) {
    tmpVec.set(xs[i], ys[i], zs[i]).project(camera);
    const sx = (tmpVec.x * 0.5 + 0.5) * w;
    const sy = (-tmpVec.y * 0.5 + 0.5) * h;
    const dx = sx - mx;
    const dy = sy - my;
    const d2 = dx * dx + dy * dy;
    if (d2 < bestDist2) {
      bestDist2 = d2;
      best = i;
    }
  }
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
}
function resetToIsometric() {
  const targetN = 6;
  PARAMS.N = targetN;
  PARAMS.primitive = 'hypercube';
  PARAMS.proyeccion = 'PCA';
  PARAMS.autoReortho = false;
  PARAMS.modoSolido = false;
  PARAMS.sliceDim = -1;
  PARAMS.sliceMin = -0.5;
  PARAMS.sliceMax = 0.5;

  const rebuilt = buildPrimitive(PARAMS.primitive, targetN);
  rebuildState(targetN, rebuilt.verts, rebuilt.edges, 'primitive');

  DEFAULT_PLANES.forEach((base, idx) => {
    const clone = clonePlane(base);
    clone.i = Math.min(clone.i, targetN - 1);
    clone.j = Math.min(clone.j, targetN - 1);
    Object.assign(planes[idx], clone, { _lastTheta: clone.theta });
  });

  controls.reset();
  camera.position.set(2.6, 1.8, 2.6);
}
applyProjectionMatrix();
projector.project(X, M, Y);
rendererND.writeInterleavedFrom(Y);
rendererND.filterEdgesByDimRange(X, N, M, PARAMS.sliceDim, PARAMS.sliceMin, PARAMS.sliceMax);

pane.addButton({ title: 'Reset isométrico' }).on('click', () => resetToIsometric());
if (paneToggleBtn) {
  const setPaneVisible = (visible: boolean) => {
    paneVisible = visible;
    paneContainer.style.display = visible ? 'block' : 'none';
    paneToggleBtn.setAttribute('aria-expanded', visible ? 'true' : 'false');
  };
  paneToggleBtn.addEventListener('click', () => setPaneVisible(!paneVisible));
  setPaneVisible(paneVisible);
}

if (fileInput) {
  fileInput.addEventListener('change', () => {
    const file = fileInput.files?.[0];
    if (file) handleImport(file);
  });
}

const fData = pane.addFolder({ title: 'Datos' });
fData.addButton({ title: 'Importar (CSV/JSON)' }).on('click', () => fileInput?.click());
fData.addButton({ title: 'Exportar proyección CSV' }).on('click', () => exportProjectionCSV());
fData.addButton({ title: 'Exportar proyección JSON' }).on('click', () => exportProjectionJSON());

const fDims = pane.addFolder({ title: 'Dimensiones' });
const primitiveOptions = {
  Hipercubo: 'hypercube',
  'Cross polytope': 'cross',
  Simplex: 'simplex',
} as const;
fDims.addBinding(PARAMS, 'primitive', { options: primitiveOptions, label: 'Primitiva' }).on('change', () => {
  const rebuilt = buildPrimitive(PARAMS.primitive, N);
  rebuildState(N, rebuilt.verts, rebuilt.edges, 'primitive');
});
fDims.addBinding(PARAMS, 'N', { min: 3, max: 8, step: 1, label: 'N' }).on('change', (ev: TpChangeEvent<number>) => {
  if (dataSource === 'custom') { PARAMS.N = N; return; }
  N = ev.value;
  const rebuilt = buildPrimitive(PARAMS.primitive, N);
  rebuildState(N, rebuilt.verts, rebuilt.edges, 'primitive');
});

const fProj = pane.addFolder({ title: 'Proyección' });
fProj.addBinding(PARAMS, 'proyeccion', { options: { 'Canónica': 'Canonico', 'PCA (top-3)': 'PCA' } }).on('change', () => {
  applyProjectionMatrix();
  projector.project(X, M, Y);
  rendererND.writeInterleavedFrom(Y);
});
fProj.addBinding(PARAMS, 'modoSolido', { label: 'Sólido' }).on('change', (ev: TpChangeEvent<boolean>) => {
  rendererND.setMode(ev.value ? 'solid' : 'wireframe');
});
fProj.addBinding(PARAMS, 'autoReortho', { label: 'Re‑ortonormalizar' }).on('change', () => {
  // nada inmediato; se evalúa en runtime
});

const fAdvanced = pane.addFolder({ title: 'Avanzado', expanded: false });

const fPlanes = fAdvanced.addFolder({ title: 'Rotaciones (planos i,j)' });
planes.forEach((pl, idx) => {
  const f = fPlanes.addFolder({ title: `Plano ${idx+1}` });
  const iBinding = f.addBinding(planes[idx], 'i', { min: 0, max: N-1, step: 1 }) as SliderInputBindingApi<number>;
  const jBinding = f.addBinding(planes[idx], 'j', { min: 0, max: N-1, step: 1 }) as SliderInputBindingApi<number>;
  planeBindings[idx] = { i: iBinding, j: jBinding };
  f.addBinding(planes[idx], 'theta', { min: -Math.PI, max: Math.PI, step: 0.001, label: 'θ (manual)' })
   .on('change', (ev: TpChangeEvent<number>) => {
      const p = planes[idx];
      const dtheta = (p._lastTheta ?? 0) - ev.last;
      // revertir la rotación previa y aplicar la nueva incrementalmente:
      if (Math.abs(dtheta) > 1e-12) rot.applyGivensLeft(p.i, p.j, dtheta);
      const inc = ev.value - (p._lastTheta ?? 0);
      if (Math.abs(inc) > 1e-12) rot.applyGivensLeft(p.i, p.j, inc);
      p._lastTheta = ev.value;
   });
  f.addBinding(planes[idx], 'auto', { label: 'auto-spin' });
  f.addBinding(planes[idx], 'speed', { min: -3.0, max: 3.0, step: 0.01, label: 'vel (rad/s)' });
});

const fSlice = fAdvanced.addFolder({ title: 'Slicing' });
sliceDimBinding = fSlice.addBinding(PARAMS, 'sliceDim', { min: -1, max: N-1, step: 1, label: 'dim (−1=off)' }) as SliderInputBindingApi<number>;
sliceDimBinding.on('change', () => {
  rendererND.filterEdgesByDimRange(X, N, M, PARAMS.sliceDim, PARAMS.sliceMin, PARAMS.sliceMax);
});
fSlice.addBinding(PARAMS, 'sliceMin', { min: -1, max: 1, step: 0.01, label: 'min' }).on('change', () => {
  rendererND.filterEdgesByDimRange(X, N, M, PARAMS.sliceDim, PARAMS.sliceMin, PARAMS.sliceMax);
});
fSlice.addBinding(PARAMS, 'sliceMax', { min: -1, max: 1, step: 0.01, label: 'max' }).on('change', () => {
  rendererND.filterEdgesByDimRange(X, N, M, PARAMS.sliceDim, PARAMS.sliceMin, PARAMS.sliceMax);
});

// --- Animación ---
const clock = new THREE.Clock();
renderer.domElement.addEventListener('pointermove', handleHover);
renderer.domElement.addEventListener('pointerleave', () => tooltipEl?.classList.remove('visible'));

function animate() {
  const dt = clock.getDelta();
  // auto‑spin: incrementar θ de cada plano y aplicar incremental
  for (const p of planes) {
    if (!p.auto || Math.abs(p.speed) < 1e-6) continue;
    const d = p.speed * dt;
    rot.applyGivensLeft(p.i, p.j, d);
    p.theta = (p.theta ?? 0) + d;
    p._lastTheta = p.theta;
  }
  if (PARAMS.autoReortho) rot.reorthonormalize();

  projector.project(X, M, Y);
  rendererND.writeInterleavedFrom(Y);

  controls.update();
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}
animate();

// --- Resize ---
window.addEventListener('resize', () => {
  const w = window.innerWidth, h = window.innerHeight;
  camera.aspect = w / h;
  camera.updateProjectionMatrix();
  renderer.setSize(w, h);
});
