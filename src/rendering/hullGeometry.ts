import * as THREE from 'three';
import { ConvexHull, type Face } from 'three/examples/jsm/math/ConvexHull.js';

export type VertexPoint = THREE.Vector3 & { __vertexId: number };

type HullFaceInfo = {
  face: Face;
  vertexIds: number[];
  planeConstant: number;
};

const COPLANAR_NORMAL_EPS = 1e-4;
const COPLANAR_CONST_EPS = 1e-4;
const HULL_POINT_EPS_SCALE = 1e-6;
const FACET_SATURATION = 0.92;
const FACET_HUE_STOPS = [0, 20, 40, 55, 80, 105, 130, 155, 180, 205, 230, 255, 280, 305, 330];
const FACET_LIGHTNESS_STOPS = [0.40, 0.54, 0.68];
const FACET_COLOR_CANDIDATES = (() => {
  const colors: THREE.Color[] = [];
  for (const lightness of FACET_LIGHTNESS_STOPS) {
    for (const hue of FACET_HUE_STOPS) {
      let l = lightness;
      if (hue >= 45 && hue <= 75) l = Math.max(0.34, l - 0.08);
      colors.push(new THREE.Color().setHSL(hue / 360, FACET_SATURATION, l));
    }
  }
  return colors;
})();

export class HullGeometryBuilder {
  private regionColorByKey = new Map<string, THREE.Color>();
  private regionColorBank: THREE.Color[] = [];
  private hypercubeDimension = 0;

  reset(vertexCount = 0, edges: Uint32Array<ArrayBufferLike> = new Uint32Array()) {
    this.regionColorByKey = new Map<string, THREE.Color>();
    this.regionColorBank = [];
    this.hypercubeDimension = this.detectHypercubeDimension(vertexCount, edges);
  }

  build(points: VertexPoint[]): THREE.BufferGeometry {
    if (!this.hasNonDegenerateHull(points)) return new THREE.BufferGeometry();

    let hull: ConvexHull;
    try {
      hull = new ConvexHull().setFromPoints(points);
    } catch {
      return new THREE.BufferGeometry();
    }
    const faceInfos = hull.faces.map(face => this.collectHullFaceInfo(face));
    if (!faceInfos.length) return new THREE.BufferGeometry();

    const faceColors = this.buildCoplanarFaceColors(faceInfos);
    const vertices: number[] = [];
    const normals: number[] = [];
    const colors: number[] = [];

    for (let faceIdx = 0; faceIdx < faceInfos.length; faceIdx++) {
      const info = faceInfos[faceIdx];
      const faceColor = faceColors[faceIdx];
      const polygon = this.collectFacePolygon(info.face);
      if (polygon.length < 3) continue;

      const anchor = polygon[0];
      for (let i = 1; i < polygon.length - 1; i++) {
        const b = polygon[i];
        const c = polygon[i + 1];
        vertices.push(anchor.x, anchor.y, anchor.z, b.x, b.y, b.z, c.x, c.y, c.z);
        normals.push(
          info.face.normal.x, info.face.normal.y, info.face.normal.z,
          info.face.normal.x, info.face.normal.y, info.face.normal.z,
          info.face.normal.x, info.face.normal.y, info.face.normal.z,
        );
        colors.push(
          faceColor.r, faceColor.g, faceColor.b,
          faceColor.r, faceColor.g, faceColor.b,
          faceColor.r, faceColor.g, faceColor.b,
        );
      }
    }

    if (vertices.length < 9) return new THREE.BufferGeometry();

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
    geometry.setAttribute('normal', new THREE.Float32BufferAttribute(normals, 3));
    geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
    return geometry;
  }

  private hasNonDegenerateHull(points: VertexPoint[]): boolean {
    if (points.length < 4) return false;

    const min = new THREE.Vector3(Infinity, Infinity, Infinity);
    const max = new THREE.Vector3(-Infinity, -Infinity, -Infinity);
    for (const p of points) {
      min.min(p);
      max.max(p);
    }
    const diag = Math.max(max.distanceTo(min), 1);
    const pointEps = diag * HULL_POINT_EPS_SCALE;
    const pointEpsSq = pointEps * pointEps;

    const anchor = points[0];
    let b: VertexPoint | null = null;
    for (let i = 1; i < points.length; i++) {
      if (anchor.distanceToSquared(points[i]) > pointEpsSq) {
        b = points[i];
        break;
      }
    }
    if (!b) return false;

    const ab = new THREE.Vector3().subVectors(b, anchor);
    const abLen = Math.max(ab.length(), pointEps);
    const lineNormal = new THREE.Vector3();
    const offset = new THREE.Vector3();
    let c: VertexPoint | null = null;
    for (const candidate of points) {
      offset.subVectors(candidate, anchor);
      lineNormal.crossVectors(ab, offset);
      if (lineNormal.lengthSq() > (pointEps * abLen) * (pointEps * abLen)) {
        c = candidate;
        break;
      }
    }
    if (!c) return false;

    offset.subVectors(c, anchor);
    const planeNormal = new THREE.Vector3().crossVectors(ab, offset);
    const planeNormalLen = Math.max(planeNormal.length(), pointEps);
    for (const candidate of points) {
      offset.subVectors(candidate, anchor);
      const planeDistance = Math.abs(planeNormal.dot(offset)) / planeNormalLen;
      if (planeDistance > pointEps) return true;
    }

    return false;
  }

  private collectFacePolygon(face: Face): VertexPoint[] {
    const polygon: VertexPoint[] = [];
    let edge = face.edge;
    do {
      polygon.push(edge.head().point as VertexPoint);
      edge = edge.next;
    } while (edge !== face.edge);
    return polygon;
  }

  private collectHullFaceInfo(face: Face): HullFaceInfo {
    const polygon = this.collectFacePolygon(face);
    const vertexIds = polygon.map(point => point.__vertexId);
    const planeConstant = polygon.length > 0 ? face.normal.dot(polygon[0]) : 0;
    return { face, vertexIds, planeConstant };
  }

  private buildCoplanarFaceColors(faceInfos: HullFaceInfo[]): THREE.Color[] {
    const colors = Array.from({ length: faceInfos.length }, () => new THREE.Color(0xffffff));
    const assigned = new Uint8Array(faceInfos.length);

    for (let i = 0; i < faceInfos.length; i++) {
      if (assigned[i]) continue;
      assigned[i] = 1;
      const group = [i];
      for (let j = i + 1; j < faceInfos.length; j++) {
        if (assigned[j]) continue;
        if (!this.areCoplanar(faceInfos[i], faceInfos[j])) continue;
        assigned[j] = 1;
        group.push(j);
      }

      const regionIds = new Set<number>();
      for (const idx of group) {
        for (const id of faceInfos[idx].vertexIds) regionIds.add(id);
      }
      const regionKey = this.regionTopologyKey(regionIds);
      let faceColor = this.regionColorByKey.get(regionKey);
      if (!faceColor) {
        faceColor = this.selectDistinctRegionColor(regionKey, this.regionColorBank);
        this.regionColorByKey.set(regionKey, faceColor);
        this.regionColorBank.push(faceColor);
      }
      for (const idx of group) colors[idx] = faceColor;
    }
    return colors;
  }

  private detectHypercubeDimension(vertexCount: number, edges: Uint32Array<ArrayBufferLike>): number {
    if (vertexCount < 4 || (vertexCount & (vertexCount - 1)) !== 0) return 0;
    const dim = Math.log2(vertexCount);
    if (!Number.isInteger(dim) || dim <= 0) return 0;
    const expectedEdgeCount = (vertexCount * dim) / 2;
    if ((edges.length & 1) !== 0 || (edges.length / 2) !== expectedEdgeCount) return 0;

    const degree = new Uint16Array(vertexCount);
    for (let i = 0; i < edges.length; i += 2) {
      const a = edges[i];
      const b = edges[i + 1];
      if (a >= vertexCount || b >= vertexCount || a === b) return 0;
      const xor = a ^ b;
      if (xor === 0 || (xor & (xor - 1)) !== 0) return 0;
      degree[a]++;
      degree[b]++;
    }
    for (let i = 0; i < vertexCount; i++) {
      if (degree[i] !== dim) return 0;
    }
    return dim;
  }

  private regionTopologyKey(regionIds: Set<number>): string {
    const ids = Array.from(regionIds).sort((a, b) => a - b);
    if (!ids.length) return 'empty';

    if (this.hypercubeDimension > 0) {
      const fixedBitParts: string[] = [];
      const first = ids[0];
      for (let bit = 0; bit < this.hypercubeDimension; bit++) {
        const bitValue = (first >>> bit) & 1;
        let fixed = true;
        for (let i = 1; i < ids.length; i++) {
          if (((ids[i] >>> bit) & 1) !== bitValue) {
            fixed = false;
            break;
          }
        }
        if (fixed) fixedBitParts.push(`${bit}:${bitValue}`);
      }
      if (fixedBitParts.length > 0) return `h${this.hypercubeDimension}|${fixedBitParts.join('|')}`;
    }

    return `v|${ids.join(',')}`;
  }

  private areCoplanar(a: HullFaceInfo, b: HullFaceInfo): boolean {
    const normalDot = a.face.normal.dot(b.face.normal);
    if (Math.abs(normalDot) < (1 - COPLANAR_NORMAL_EPS)) return false;
    const scale = Math.max(1, Math.abs(a.planeConstant), Math.abs(b.planeConstant));
    if (normalDot >= 0) {
      return Math.abs(a.planeConstant - b.planeConstant) <= (COPLANAR_CONST_EPS * scale);
    }
    return Math.abs(a.planeConstant + b.planeConstant) <= (COPLANAR_CONST_EPS * scale);
  }

  private hashRegionKey(key: string): number {
    let hash = 2166136261 >>> 0;
    for (let i = 0; i < key.length; i++) {
      hash ^= key.charCodeAt(i);
      hash = Math.imul(hash, 16777619);
    }
    return hash >>> 0;
  }

  private selectDistinctRegionColor(key: string, usedColors: THREE.Color[]): THREE.Color {
    const hash = this.hashRegionKey(key);
    const paletteSize = FACET_COLOR_CANDIDATES.length;
    const start = hash % paletteSize;
    let bestIdx = start;
    let bestScore = -1;
    let bestTie = Number.POSITIVE_INFINITY;

    for (let offset = 0; offset < paletteSize; offset++) {
      const idx = (start + offset) % paletteSize;
      const candidate = FACET_COLOR_CANDIDATES[idx];
      let minDistSq = Number.POSITIVE_INFINITY;
      for (const used of usedColors) {
        const dr = candidate.r - used.r;
        const dg = candidate.g - used.g;
        const db = candidate.b - used.b;
        const distSq = (dr * dr) + (dg * dg) + (db * db);
        if (distSq < minDistSq) minDistSq = distSq;
      }
      const score = usedColors.length ? minDistSq : 1;
      const tie = Math.abs(((idx - start) + paletteSize) % paletteSize);
      if (score > bestScore || (Math.abs(score - bestScore) < 1e-12 && tie < bestTie)) {
        bestScore = score;
        bestIdx = idx;
        bestTie = tie;
      }
    }
    return FACET_COLOR_CANDIDATES[bestIdx].clone();
  }
}
