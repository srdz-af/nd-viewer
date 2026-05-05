export type PrimitiveKind = 'hypercube' | 'cross' | 'simplex' | 'simplexPrism';

export type PrimitiveGeometry = {
  verts: Float32Array;
  edges: Uint32Array;
  V: number;
};

export function hypercubeEdges(N: number): PrimitiveGeometry {
  const V = 1 << N;
  const verts = new Float32Array(N * V);

  for (let v = 0; v < V; v++) {
    for (let d = 0; d < N; d++) {
      verts[d * V + v] = ((v >> d) & 1) ? 0.5 : -0.5;
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

export function crossPolytopeEdges(N: number): PrimitiveGeometry {
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
      if (Math.floor(a / 2) !== Math.floor(b / 2)) edges.push(a, b);
    }
  }

  return { verts, edges: new Uint32Array(edges), V };
}

export function simplexEdges(N: number): PrimitiveGeometry {
  const V = N + 1;
  const verts = new Float32Array(N * V);

  for (let axis = 0; axis < N; axis++) {
    verts[axis * V + axis + 1] = 1;
  }

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

  let maxAbs = 0;
  for (let i = 0; i < verts.length; i++) {
    maxAbs = Math.max(maxAbs, Math.abs(verts[i]));
  }

  const scale = maxAbs > 0 ? 0.5 / maxAbs : 1;
  for (let i = 0; i < verts.length; i++) verts[i] *= scale;

  const edges: number[] = [];
  for (let a = 0; a < V; a++) {
    for (let b = a + 1; b < V; b++) edges.push(a, b);
  }

  return { verts, edges: new Uint32Array(edges), V };
}

export function simplexPrismEdges(N: number): PrimitiveGeometry {
  const baseDim = Math.max(2, N - 1);
  const base = simplexEdges(baseDim);
  const baseV = base.V;
  const V = baseV * 2;
  const verts = new Float32Array(N * V);
  const extrudeDim = Math.min(N - 1, baseDim);

  for (let v = 0; v < baseV; v++) {
    for (let d = 0; d < baseDim; d++) {
      const val = base.verts[d * baseV + v];
      verts[d * V + v] = val;
      verts[d * V + v + baseV] = val;
    }

    verts[extrudeDim * V + v] = -0.4;
    verts[extrudeDim * V + v + baseV] = 0.4;
  }

  const edges: number[] = [];
  for (let e = 0; e < base.edges.length; e += 2) {
    const a = base.edges[e];
    const b = base.edges[e + 1];
    edges.push(a, b, a + baseV, b + baseV);
  }

  for (let v = 0; v < baseV; v++) edges.push(v, v + baseV);

  return { verts, edges: new Uint32Array(edges), V };
}

export function buildPrimitive(kind: PrimitiveKind, N: number): PrimitiveGeometry {
  switch (kind) {
    case 'hypercube':
      return hypercubeEdges(N);
    case 'cross':
      return crossPolytopeEdges(N);
    case 'simplex':
      return simplexEdges(N);
    case 'simplexPrism':
      return simplexPrismEdges(N);
  }
}
