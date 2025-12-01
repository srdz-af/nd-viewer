
import * as THREE from 'three';
import { ConvexHull } from 'three/examples/jsm/math/ConvexHull.js';

// Genera hipercubo en N dimensiones: vértices y aristas.
export type PrimitiveKind = 'hypercube' | 'cross' | 'simplex';

export function hypercubeEdges(N: number) {
  const V = 1 << N; // número de vértices
  const verts = new Float32Array(N * V); // X[d*V + v]
  for (let v = 0; v < V; v++) {
    for (let d = 0; d < N; d++) {
      const bit = (v >> d) & 1;
      verts[d * V + v] = bit ? 0.5 : -0.5;
    }
  }
  const edges: number[] = [];
  for (let v = 0; v < V; v++) {
    for (let d = 0; d < N; d++) {
      const u = v ^ (1 << d);
      if (u > v) edges.push(v, u);
    }
  }
  return { verts, edges: new Uint32Array(edges), V };
}

export function crossPolytopeEdges(N: number) {
  const V = 2 * N;
  const verts = new Float32Array(N * V);
  for (let axis = 0; axis < N; axis++) {
    const idxPos = 2 * axis;
    const idxNeg = idxPos + 1;
    for (let d = 0; d < N; d++) {
      const val = d === axis ? 0.5 : 0;
      verts[d * V + idxPos] = val;
      verts[d * V + idxNeg] = -val;
    }
  }
  const edges: number[] = [];
  for (let a = 0; a < V; a++) {
    for (let b = a + 1; b < V; b++) {
      const axisA = Math.floor(a / 2);
      const axisB = Math.floor(b / 2);
      if (axisA === axisB) continue; // opuestos
      edges.push(a, b);
    }
  }
  return { verts, edges: new Uint32Array(edges), V };
}

export function simplexEdges(N: number) {
  const V = N + 1;
  const verts = new Float32Array(N * V);
  // Vertex 0 at origin; vertices 1..N on axes.
  for (let axis = 0; axis < N; axis++) {
    const idx = axis + 1;
    verts[axis * V + idx] = 1;
  }
  // Center at origin
  const centroid = new Float32Array(N);
  for (let d = 0; d < N; d++) {
    let sum = 0;
    for (let v = 0; v < V; v++) sum += verts[d * V + v];
    centroid[d] = sum / V;
  }
  for (let d = 0; d < N; d++) {
    const c = centroid[d];
    for (let v = 0; v < V; v++) verts[d * V + v] -= c;
  }
  // Scale to fit roughly in [-0.5,0.5]
  let maxAbs = 0;
  for (let i = 0; i < verts.length; i++) maxAbs = Math.max(maxAbs, Math.abs(verts[i]));
  const scale = maxAbs > 0 ? 0.5 / maxAbs : 1;
  for (let i = 0; i < verts.length; i++) verts[i] *= scale;

  const edges: number[] = [];
  for (let a = 0; a < V; a++) {
    for (let b = a + 1; b < V; b++) edges.push(a, b);
  }
  return { verts, edges: new Uint32Array(edges), V };
}

export function buildPrimitive(kind: PrimitiveKind, N: number) {
  switch (kind) {
    case 'hypercube': return hypercubeEdges(N);
    case 'cross': return crossPolytopeEdges(N);
    case 'simplex': return simplexEdges(N);
    default: throw new Error(`Tipo de primitiva no soportado: ${kind}`);
  }
}

// Proyección N→3: Y = P (3×N) * R (N×N) * X (N×M)
export class NDProjector {
  N: number;
  P: Float32Array; // 3×N
  R: Float32Array; // N×N
  private tmp!: Float32Array; // N×M

  constructor(N: number, R: Float32Array, P?: Float32Array) {
    this.N = N;
    this.R = R;
    this.P = P ?? canonicalP(N);
  }

  resizeBuffers(M: number) {
    if (!this.tmp || this.tmp.length !== this.N * M) {
      this.tmp = new Float32Array(this.N * M);
    }
  }

  setCanonicalP() {
    this.P = canonicalP(this.N);
  }

  setCustomP(P: Float32Array) {
    if (P.length !== 3 * this.N) throw new Error('P debe ser 3×N');
    this.P = P;
  }

  project(X: Float32Array, M: number, out3: Float32Array) {
    this.resizeBuffers(M);
    const N = this.N, tmp = this.tmp, R = this.R, P = this.P;
    // tmp = R * X
    for (let m = 0; m < M; m++) {
      for (let r = 0; r < N; r++) {
        let acc = 0;
        for (let k = 0; k < N; k++) acc += R[r * N + k] * X[k * M + m];
        tmp[r * M + m] = acc;
      }
    }
    // out = P * tmp
    for (let m = 0; m < M; m++) {
      for (let r3 = 0; r3 < 3; r3++) {
        let acc = 0;
        for (let k = 0; k < N; k++) acc += P[r3 * N + k] * tmp[k * M + m];
        out3[r3 * M + m] = acc;
      }
    }
  }
}

export function canonicalP(N: number) {
  const P = new Float32Array(3 * N);
  P[0 * N + 0] = 1;
  if (N > 1) P[1 * N + 1] = 1;
  if (N > 2) P[2 * N + 2] = 1;
  return P;
}

export class HypercubeRenderer {
  scene: THREE.Scene;
  group: THREE.Group;
  geometry!: THREE.BufferGeometry;
  line!: THREE.LineSegments;
  mesh?: THREE.Mesh<THREE.BufferGeometry, THREE.MeshStandardMaterial>;
  positions!: Float32Array;
  M!: number;
  allEdges!: Uint32Array;
  visibleEdges!: Uint32Array;
  private lineMaterial: THREE.LineBasicMaterial;
  private solidMaterial: THREE.MeshStandardMaterial;
  private mode: 'wireframe' | 'solid' = 'wireframe';
  private hullNeedsUpdate = false;
  private points: (THREE.Vector3 & { __vertexId: number })[] = [];
  private visibleVertexMask?: Uint8Array;
  offset: THREE.Vector3 = new THREE.Vector3();
  private transform = new THREE.Matrix4();
  private tmp = new THREE.Vector3();

  constructor(scene: THREE.Scene) {
    this.scene = scene;
    this.group = new THREE.Group();
    this.scene.add(this.group);
    this.lineMaterial = new THREE.LineBasicMaterial({ color: 0xe5efff, transparent: true, opacity: 0.95 });
    this.solidMaterial = new THREE.MeshStandardMaterial({
      color: 0x4f86ff,
      metalness: 0.8,
      roughness: 0.08,
      transparent: true,
      opacity: 0.28,
      envMapIntensity: 1.6,
      side: THREE.DoubleSide,
      depthWrite: false,
      vertexColors: false,
    });
  }

  build(M: number, edges: Uint32Array) {
    this.dispose();
    this.M = M;
    this.allEdges = edges;
    this.visibleEdges = edges; // por defecto
    this.geometry = new THREE.BufferGeometry();
    this.positions = new Float32Array(3 * M);
    const posAttr = new THREE.BufferAttribute(this.positions, 3);
    // Nota: BufferAttribute espera (x,y,z) consecutivo por vértice.
    // Nuestra Y está empaquetada como [xxx... yyy... zzz...], convertimos al vuelo en update().
    // Para simplicidad, mantenemos un buffer "positions" (x,y,z por vértice).
    this.geometry.setAttribute('position', posAttr);
    this.setIndexAttribute(this.visibleEdges);
    this.line = new THREE.LineSegments(this.geometry, this.lineMaterial);
    this.line.visible = this.mode === 'wireframe';
    this.group.add(this.line);
    this.points = Array.from({ length: M }, (_, idx) => {
      const v = new THREE.Vector3() as THREE.Vector3 & { __vertexId: number };
      v.__vertexId = idx;
      return v;
    });
    this.mesh = new THREE.Mesh(new THREE.BufferGeometry(), this.solidMaterial);
    this.mesh.visible = this.mode === 'solid';
    this.group.add(this.mesh);
    this.hullNeedsUpdate = true;
    this.visibleVertexMask = undefined;
  }

  setTransform(position: THREE.Vector3, rotation: THREE.Euler, scale: THREE.Vector3) {
    const q = new THREE.Quaternion().setFromEuler(rotation);
    this.transform.compose(position, q, scale);
  }

  // Convierte Y (3×M) a buffer intercalado (x,y,z)*M
  writeInterleavedFrom(Y: Float32Array) {
    const M = this.M;
    const positions = this.positions;
    const xs = Y.subarray(0, M);
    const ys = Y.subarray(M, 2 * M);
    const zs = Y.subarray(2 * M, 3 * M);
    const mat = this.transform;
    let p = 0;
    for (let i = 0; i < M; i++) {
      this.tmp.set(xs[i], ys[i], zs[i]).applyMatrix4(mat);
      positions[p++] = this.tmp.x;
      positions[p++] = this.tmp.y;
      positions[p++] = this.tmp.z;
      this.points[i].copy(this.tmp);
    }
    (this.geometry.getAttribute('position') as THREE.BufferAttribute).needsUpdate = true;
    this.geometry.computeBoundingSphere();
    this.geometry.computeBoundingBox();
    if (this.mode === 'solid') {
      this.hullNeedsUpdate = true;
      this.updateHullGeometry();
    }
  }

  setMode(mode: 'wireframe' | 'solid') {
    this.mode = mode;
    // Always keep wireframe lines visible to reveal interior structure
    if (this.line) this.line.visible = true;
    if (this.mesh) this.mesh.visible = mode === 'solid' && this.mesh.geometry.attributes.position !== undefined;
    this.hullNeedsUpdate = mode === 'solid';
    if (mode === 'solid') this.updateHullGeometry();
  }

  // Filtrado simple por dimensión: mantiene vértices cuyo X[k] ∈ [min,max].
  filterEdgesByDimRange(X: Float32Array, N: number, M: number, dim: number, minV: number, maxV: number) {
    if (dim < 0 || dim >= N) {
      this.setIndexAttribute(this.allEdges);
      this.visibleEdges = this.allEdges;
      this.visibleVertexMask = undefined;
      if (this.mode === 'solid') {
        this.hullNeedsUpdate = true;
        this.updateHullGeometry();
      }
      return;
    }
    const keep = new Uint8Array(M);
    const base = dim * M;
    for (let m = 0; m < M; m++) {
      const v = X[base + m];
      keep[m] = (v >= minV && v <= maxV) ? 1 : 0;
    }
    const arr: number[] = [];
    const E = this.allEdges;
    for (let e = 0; e < E.length; e += 2) {
      const a = E[e], b = E[e + 1];
      if (keep[a] && keep[b]) { arr.push(a, b); }
    }
    this.visibleEdges = new Uint32Array(arr.length ? arr : [0,0]); // evita vacío total (algunos drivers fallan)
    this.setIndexAttribute(this.visibleEdges);
    this.geometry.index!.needsUpdate = true;
    this.visibleVertexMask = keep;
    if (this.mode === 'solid') {
      this.hullNeedsUpdate = true;
      this.updateHullGeometry();
    }
  }

  dispose() {
    if (this.line) {
      this.group.remove(this.line);
      this.line.geometry.dispose();
    }
    if (this.mesh) {
      this.group.remove(this.mesh);
      this.mesh.geometry.dispose();
      this.mesh = undefined;
    }
    this.geometry = undefined as unknown as THREE.BufferGeometry;
  }

  private setIndexAttribute(array: Uint32Array) {
    this.geometry.setIndex(new THREE.BufferAttribute(array, 1));
  }

  private updateHullGeometry() {
    if (!this.mesh || !this.hullNeedsUpdate || this.mode !== 'solid') return;
    const mask = this.visibleVertexMask;
    const indices = mask
      ? this.points.reduce<number[]>((acc, _p, idx) => {
          if (mask[idx] === 1) acc.push(idx);
          return acc;
        }, [])
      : this.points.map((_p, idx) => idx);
    if (!indices.length || indices.length < 4) {
      this.mesh.visible = false;
      this.hullNeedsUpdate = false;
      return;
    }
    const sourcePoints = indices.map(idx => this.points[idx]);
    if (!sourcePoints.length || sourcePoints.length < 4) {
      this.mesh.visible = false;
      this.hullNeedsUpdate = false;
      return;
    }
    const geometry = this.buildColoredHull(sourcePoints);
    geometry.computeVertexNormals();
    geometry.computeBoundingSphere();
    this.mesh.geometry.dispose();
    this.mesh.geometry = geometry;
    this.mesh.visible = true;
    this.hullNeedsUpdate = false;
  }

  private buildColoredHull(points: (THREE.Vector3 & { __vertexId: number })[]) {
    const hull = new ConvexHull().setFromPoints(points);
    const faces = hull.faces;
    const vertices: number[] = [];
    const normals: number[] = [];

    for (let i = 0; i < faces.length; i++) {
      const face = faces[i];
      let edge = face.edge;
      do {
        const point = edge.head().point as THREE.Vector3 & { __vertexId: number };
        vertices.push(point.x, point.y, point.z);
        normals.push(face.normal.x, face.normal.y, face.normal.z);
        edge = edge.next;
      } while (edge !== face.edge);
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
    geometry.setAttribute('normal', new THREE.Float32BufferAttribute(normals, 3));
    return geometry;
  }
}
