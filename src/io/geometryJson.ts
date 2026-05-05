export type ParsedGeometryJson = {
  N: number;
  X: Float32Array;
  edges: Uint32Array;
};

const DIM_KEY_RE = /^d(\d+)$/i;

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function orderedPointKeys(point: Record<string, unknown>): string[] {
  const keys = Object.keys(point);
  if (keys.every(key => DIM_KEY_RE.test(key))) {
    return keys.sort((a, b) => Number(a.match(DIM_KEY_RE)![1]) - Number(b.match(DIM_KEY_RE)![1]));
  }

  if (keys.every(key => Number.isInteger(Number(key)))) {
    return keys.sort((a, b) => Number(a) - Number(b));
  }

  return keys;
}

function normalizeEdge(a: number, b: number, count: number): string | null {
  if (!Number.isInteger(a) || !Number.isInteger(b)) return null;
  if (a < 0 || b < 0 || a >= count || b >= count || a === b) return null;
  return a < b ? `${a}:${b}` : `${b}:${a}`;
}

function edgeSetToArray(edgeSet: Set<string>): Uint32Array {
  const edges: number[] = [];
  for (const key of edgeSet) {
    const [a, b] = key.split(':').map(Number);
    edges.push(a, b);
  }
  return new Uint32Array(edges);
}

export function parseGeometryJson(text: string): ParsedGeometryJson {
  const obj: unknown = JSON.parse(text);
  const points = Array.isArray(obj)
    ? obj
    : isRecord(obj) && Array.isArray(obj.points)
      ? obj.points
      : null;

  if (!points?.length) throw new Error('JSON must include a non-empty points array');

  const first = points[0] as unknown;
  const useArrayPoints = Array.isArray(first);
  const pointKeys = Array.isArray(first)
    ? null
    : isRecord(first)
      ? orderedPointKeys(first)
      : null;

  if (!useArrayPoints && !pointKeys) {
    throw new Error('Points must be arrays or objects');
  }

  const D = useArrayPoints ? (first as unknown[]).length : pointKeys!.length;
  if (D < 3 || D > 32) throw new Error('JSON must have between 3 and 32 dimensions');

  const rows: number[][] = [];
  for (let i = 0; i < points.length; i++) {
    const point = points[i] as unknown;
    const values = useArrayPoints
      ? Array.isArray(point) ? point : null
      : isRecord(point) ? pointKeys!.map(key => point[key]) : null;

    if (!values || values.length !== D) {
      throw new Error(`Point ${i + 1} has inconsistent dimensionality`);
    }

    const row = values.map(Number);
    for (let d = 0; d < D; d++) {
      if (!Number.isFinite(row[d])) {
        throw new Error(`Non-numeric value at point ${i + 1}, dimension ${d + 1}`);
      }
    }
    rows.push(row);
  }

  const M = rows.length;
  const X = new Float32Array(D * M);
  for (let r = 0; r < M; r++) {
    for (let d = 0; d < D; d++) {
      X[d * M + r] = rows[r][d];
    }
  }

  const edgeSet = new Set<string>();
  if (isRecord(obj) && Array.isArray(obj.edges)) {
    for (const pair of obj.edges) {
      if (!Array.isArray(pair) || pair.length < 2) continue;
      const key = normalizeEdge(Number(pair[0]), Number(pair[1]), M);
      if (key) edgeSet.add(key);
    }
  }

  if (edgeSet.size === 0 && isRecord(obj) && isRecord(obj.adjacency)) {
    for (const [from, rawTargets] of Object.entries(obj.adjacency)) {
      if (!Array.isArray(rawTargets)) continue;
      for (const to of rawTargets) {
        const key = normalizeEdge(Number(from), Number(to), M);
        if (key) edgeSet.add(key);
      }
    }
  }

  return { N: D, X, edges: edgeSetToArray(edgeSet) };
}

export function serializeGeometryJson(Xsrc: Float32Array, count: number, dimensions: number, Esrc?: Uint32Array): string {
  const points: Record<string, number>[] = [];
  for (let r = 0; r < count; r++) {
    const row: Record<string, number> = {};
    for (let d = 0; d < dimensions; d++) row[`d${d}`] = Xsrc[d * count + r];
    points.push(row);
  }

  const edges: number[][] = [];
  if (Esrc && Esrc.length > 1) {
    for (let i = 0; i < Esrc.length; i += 2) {
      const a = Esrc[i];
      const b = Esrc[i + 1];
      if (a !== b && a >= 0 && b >= 0 && a < count && b < count) {
        edges.push([a, b]);
      }
    }
  }

  const adjacency: Record<number, number[]> = {};
  for (const [a, b] of edges) {
    (adjacency[a] ??= []).push(b);
    (adjacency[b] ??= []).push(a);
  }

  return JSON.stringify({ points, edges, adjacency }, null, 2);
}
