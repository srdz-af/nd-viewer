import type { SurfaceMaterial } from '../rendering/HypercubeRenderer';

export type SurfaceState = SurfaceMaterial;

export const DEFAULT_SURFACE: SurfaceState = {
  color: 0xbfc7d5,
  metalness: 1,
  roughness: 0.05,
  alpha: 1,
};

export const clamp01 = (value: number) => Math.max(0, Math.min(1, value));

export const normalizeSurface = (surface: Partial<SurfaceState> | undefined): SurfaceState => ({
  color: Math.max(0, Math.min(0xffffff, (surface?.color ?? DEFAULT_SURFACE.color) >>> 0)),
  metalness: clamp01(surface?.metalness ?? DEFAULT_SURFACE.metalness),
  roughness: clamp01(surface?.roughness ?? DEFAULT_SURFACE.roughness),
  alpha: clamp01(surface?.alpha ?? DEFAULT_SURFACE.alpha),
});

export const cloneSurface = (surface: SurfaceState): SurfaceState => ({ ...surface });

export const surfacesEqual = (a: SurfaceState, b: SurfaceState) => (
  a.color === b.color
  && Math.abs(a.metalness - b.metalness) <= 1e-6
  && Math.abs(a.roughness - b.roughness) <= 1e-6
  && Math.abs(a.alpha - b.alpha) <= 1e-6
);

export function toColorHex(color: number) {
  return `#${Math.max(0, Math.min(0xffffff, color >>> 0)).toString(16).padStart(6, '0')}`;
}
