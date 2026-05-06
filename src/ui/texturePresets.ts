export const TEXTURE_PRESETS_STORAGE_KEY = 'blend.texturePresets.v1';

export type TexturePreset<TSurface> = {
  id: string;
  name: string;
  surface: TSurface;
};

type TexturePresetStoreOptions<TSurface> = {
  storageKey?: string;
  normalizeSurface: (surface: Partial<TSurface> | undefined) => TSurface;
  surfacesEqual: (a: TSurface, b: TSurface) => boolean;
};

export function texturePresetLabel(name: string, idx: number) {
  const clean = name.trim();
  if (clean.length > 0) return clean;
  return `Texture ${idx + 1}`;
}

function createTexturePresetId() {
  return `tx_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 8)}`;
}

export class TexturePresetStore<TSurface> {
  private readonly storageKey: string;
  private readonly normalizeSurface: (surface: Partial<TSurface> | undefined) => TSurface;
  private readonly surfacesEqual: (a: TSurface, b: TSurface) => boolean;
  private presets: TexturePreset<TSurface>[] = [];

  constructor(options: TexturePresetStoreOptions<TSurface>) {
    this.storageKey = options.storageKey ?? TEXTURE_PRESETS_STORAGE_KEY;
    this.normalizeSurface = options.normalizeSurface;
    this.surfacesEqual = options.surfacesEqual;
  }

  get all() {
    return this.presets;
  }

  get size() {
    return this.presets.length;
  }

  load() {
    try {
      const raw = window.localStorage.getItem(this.storageKey);
      if (!raw) {
        this.presets = [];
        return this.presets;
      }
      const parsed = JSON.parse(raw);
      if (!Array.isArray(parsed)) {
        this.presets = [];
        return this.presets;
      }

      const presets: TexturePreset<TSurface>[] = [];
      parsed.forEach((entry, idx) => {
        if (!entry || typeof entry !== 'object') return;
        const record = entry as { id?: unknown; name?: unknown; surface?: Partial<TSurface> | undefined; };
        const name = typeof record.name === 'string' ? record.name : '';
        const id = typeof record.id === 'string' && record.id.length > 0 ? record.id : createTexturePresetId();
        presets.push({
          id,
          name: texturePresetLabel(name, idx),
          surface: this.normalizeSurface(record.surface),
        });
      });
      this.presets = presets;
      return this.presets;
    } catch {
      this.presets = [];
      return this.presets;
    }
  }

  findById(id: string) {
    return this.presets.find(preset => preset.id === id) ?? null;
  }

  findMatchingId(surface: TSurface | null) {
    if (!surface) return '';
    const match = this.presets.find(preset => this.surfacesEqual(preset.surface, surface));
    return match?.id ?? '';
  }

  upsert(name: string, surface: TSurface) {
    const cleanName = name.trim();
    if (!cleanName) return null;

    const existingIdx = this.presets.findIndex(preset => preset.name.toLowerCase() === cleanName.toLowerCase());
    if (existingIdx >= 0) {
      this.presets[existingIdx] = {
        ...this.presets[existingIdx],
        name: cleanName,
        surface,
      };
      this.persist();
      return this.presets[existingIdx];
    }

    const nextPreset: TexturePreset<TSurface> = {
      id: createTexturePresetId(),
      name: cleanName,
      surface,
    };
    this.presets.push(nextPreset);
    this.persist();
    return nextPreset;
  }

  private persist() {
    try {
      window.localStorage.setItem(this.storageKey, JSON.stringify(this.presets));
    } catch {
      // Storage may be unavailable in private sessions.
    }
  }
}
