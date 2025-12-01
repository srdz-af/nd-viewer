
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
let N = 6;
let { verts: X, edges: E, V: M } = buildPrimitive('hypercube', N);
let rot = new RotND(N);
let projector = new NDProjector(N, rot.matrix, canonicalP(N));
let Y = new Float32Array(3 * M);

const rendererND = new HypercubeRenderer(scene);
rendererND.build(M, E);
rendererND.setMode('wireframe');

// --- UI (Tweakpane) ---
const pane = new Pane({ container: paneContainer }) as any;
const PARAMS = {
  N,
  primitive: 'hypercube' as PrimitiveMode,
  proyeccion: 'Canonico' as ProjMode,
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

function resetToIsometric() {
  const targetN = 6;
  PARAMS.N = targetN;
  PARAMS.primitive = 'hypercube';
  PARAMS.proyeccion = 'Canonico';
  PARAMS.autoReortho = false;
  PARAMS.modoSolido = false;
  PARAMS.sliceDim = -1;
  PARAMS.sliceMin = -0.5;
  PARAMS.sliceMax = 0.5;

  N = targetN;
  ({ verts: X, edges: E, V: M } = buildPrimitive(PARAMS.primitive, N));
  rot = new RotND(N);
  projector = new NDProjector(N, rot.matrix, canonicalP(N));
  Y = new Float32Array(3 * M);

  DEFAULT_PLANES.forEach((base, idx) => {
    const clone = clonePlane(base);
    clone.i = Math.min(clone.i, N - 1);
    clone.j = Math.min(clone.j, N - 1);
    Object.assign(planes[idx], clone, { _lastTheta: clone.theta });
  });

  planeBindings.forEach(({ i, j }, idx) => {
    const plane = planes[idx];
    i.max = N - 1;
    j.max = N - 1;
    i.value = plane.i;
    j.value = plane.j;
    i.refresh();
    j.refresh();
  });

  if (sliceDimBinding) {
    sliceDimBinding.max = N - 1;
    sliceDimBinding.value = PARAMS.sliceDim;
  }

  rendererND.build(M, E);
  rendererND.setMode('wireframe');
  applyProjectionMatrix();
  projector.project(X, M, Y);
  rendererND.writeInterleavedFrom(Y);
  rendererND.filterEdgesByDimRange(X, N, M, PARAMS.sliceDim, PARAMS.sliceMin, PARAMS.sliceMax);

  controls.reset();
  camera.position.set(2.6, 1.8, 2.6);
  pane.refresh();
}
applyProjectionMatrix();
projector.project(X, M, Y);
rendererND.writeInterleavedFrom(Y);
rendererND.filterEdgesByDimRange(X, N, M, PARAMS.sliceDim, PARAMS.sliceMin, PARAMS.sliceMax);

pane.addButton({ title: 'Reset isométrico' }).on('click', () => resetToIsometric());

const fDims = pane.addFolder({ title: 'Dimensiones' });
const primitiveOptions = {
  Hipercubo: 'hypercube',
  'Cross polytope': 'cross',
} as const;
fDims.addBinding(PARAMS, 'primitive', { options: primitiveOptions, label: 'Primitiva' }).on('change', () => {
  const rebuilt = buildPrimitive(PARAMS.primitive, N);
  X = rebuilt.verts; E = rebuilt.edges; M = rebuilt.V;
  Y = new Float32Array(3 * M);
  rendererND.build(M, E);
  rendererND.setMode(PARAMS.modoSolido ? 'solid' : 'wireframe');
  applyProjectionMatrix();
  projector.project(X, M, Y);
  rendererND.writeInterleavedFrom(Y);
  rendererND.filterEdgesByDimRange(X, N, M, PARAMS.sliceDim, PARAMS.sliceMin, PARAMS.sliceMax);
});
fDims.addBinding(PARAMS, 'N', { min: 3, max: 8, step: 1, label: 'N' }).on('change', (ev: TpChangeEvent<number>) => {
  N = ev.value;
  const rebuilt = buildPrimitive(PARAMS.primitive, N);
  X = rebuilt.verts; E = rebuilt.edges; M = rebuilt.V;
  rot = new RotND(N);
  projector = new NDProjector(N, rot.matrix, canonicalP(N));
  Y = new Float32Array(3 * M);
  refreshPlaneOptions();
  planeBindings.forEach(({ i, j }) => {
    i.max = N - 1;
    j.max = N - 1;
    i.refresh();
    j.refresh();
  });
  if (PARAMS.sliceDim >= N) {
    PARAMS.sliceDim = N - 1;
  }
  sliceDimBinding.max = N - 1;
  sliceDimBinding.refresh();
  rendererND.build(M, E);
  rendererND.setMode(PARAMS.modoSolido ? 'solid' : 'wireframe');
  applyProjectionMatrix();
  projector.project(X, M, Y);
  rendererND.writeInterleavedFrom(Y);
  rendererND.filterEdgesByDimRange(X, N, M, PARAMS.sliceDim, PARAMS.sliceMin, PARAMS.sliceMax);
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

const fPlanes = pane.addFolder({ title: 'Rotaciones (planos i,j)' });
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

const fSlice = pane.addFolder({ title: 'Slicing' });
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
