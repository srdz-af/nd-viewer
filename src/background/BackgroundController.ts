import * as THREE from 'three';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js';
import type { ViewMode } from '../constants';

const HDR_BACKGROUND_SELECTION_KEY = 'blend.hdriSelection.v1';
const HDR_BACKGROUND_BLUR_KEY = 'blend.hdriBlur.v1';
const HDR_BACKGROUND_LIGHTNESS_KEY = 'blend.hdriLightness.v1';
const HDR_BACKGROUND_BLUR_DEFAULT = 0.35;
const HDR_BACKGROUND_LIGHTNESS_DEFAULT = 1.0;
const PLAIN_BACKGROUND_KEY = 'plain' as const;
const DEFAULT_SOLID_BACKGROUND_KEY = 'ferndale' as const;

const VITE_BASE_URL = (() => {
  const env = (import.meta as { env?: { BASE_URL?: unknown } }).env;
  if (typeof env?.BASE_URL !== 'string') return '';
  const trimmed = env.BASE_URL.trim();
  if (!trimmed) return '';
  const withLeadingSlash = trimmed.startsWith('/') ? trimmed : `/${trimmed}`;
  return withLeadingSlash.endsWith('/') ? withLeadingSlash : `${withLeadingSlash}/`;
})();

const APP_BASE_URL = (() => {
  if (VITE_BASE_URL) return VITE_BASE_URL;
  try {
    const path = new URL('.', document.baseURI).pathname;
    return path.endsWith('/') ? path : `${path}/`;
  } catch {
    return '/';
  }
})();

const HDR_BACKGROUND_OPTIONS = [
  {
    key: 'ferndale',
    label: 'Ferndale studio',
    preview: 'hdri/previews/ferndale_studio_12_1k.webp',
    urls: [
      '/hdri/ferndale_studio_12_1k.hdr',
      '/ferndale_studio_12_1k.hdr',
      '/hdri/ferndale-studio-12-1k.hdr',
      '/ferndale-studio-12-1k.hdr',
    ],
  },
  {
    key: 'monochrome',
    label: 'Monochrome studio',
    preview: 'hdri/previews/monochrome_studio_02_1k.webp',
    urls: [
      '/hdri/monochrome_studio_02_1k.hdr',
      '/monochrome_studio_02_1k.hdr',
      '/hdri/monochrome-studio-02-1k.hdr',
      '/monochrome-studio-02-1k.hdr',
    ],
  },
  {
    key: 'sundowner',
    label: 'Sundowner deck',
    preview: 'hdri/previews/sundowner_deck_1k.webp',
    urls: [
      '/hdri/sundowner_deck_1k.hdr',
      '/sundowner_deck_1k.hdr',
      '/hdri/sundowner-deck-1k.hdr',
      '/sundowner-deck-1k.hdr',
    ],
  },
  {
    key: 'grasslands',
    label: 'Grasslands sunset',
    preview: 'hdri/previews/grasslands_sunset_1k.webp',
    urls: [
      '/hdri/grasslands_sunset_1k.hdr',
      '/grasslands_sunset_1k.hdr',
      '/hdri/grasslands-sunset-1k.hdr',
      '/grasslands-sunset-1k.hdr',
    ],
  },
] as const;

type HdriBackgroundOption = (typeof HDR_BACKGROUND_OPTIONS)[number];
type HdriBackgroundKey = HdriBackgroundOption['key'];
type BackgroundKey = HdriBackgroundKey | typeof PLAIN_BACKGROUND_KEY;
type BackgroundOption = HdriBackgroundOption | { key: typeof PLAIN_BACKGROUND_KEY; label: 'Plain background'; };

type BackgroundControllerOptions = {
  scene: THREE.Scene;
  renderer: THREE.WebGLRenderer;
  pmrem: THREE.PMREMGenerator;
  fallbackEnvironmentTarget: THREE.WebGLRenderTarget;
  baseBackground: THREE.Color;
  editBackground: THREE.Color;
  selectorEl: HTMLDivElement | null;
  swatchButtons: HTMLButtonElement[];
  blurInput: HTMLInputElement | null;
  blurValue: HTMLOutputElement | null;
  lightnessInput: HTMLInputElement | null;
  lightnessValue: HTMLOutputElement | null;
  controlsEl: HTMLDivElement | null;
  getRenderMode: () => ViewMode;
  getEditMode: () => boolean;
};

const backgroundOptionByKey = new Map<BackgroundKey, BackgroundOption>([
  [PLAIN_BACKGROUND_KEY, { key: PLAIN_BACKGROUND_KEY, label: 'Plain background' }],
  ...HDR_BACKGROUND_OPTIONS.map(option => [option.key, option] as const),
]);

const hdrBackgroundOptionByKey = new Map<HdriBackgroundKey, HdriBackgroundOption>(
  HDR_BACKGROUND_OPTIONS.map(option => [option.key, option]),
);

const clamp01 = (value: number) => Math.max(0, Math.min(1, value));

function clampHdrLightness(value: number) {
  return Math.max(0.2, Math.min(2.0, value));
}

function readStoredNumber(key: string, fallback: number) {
  try {
    const raw = window.localStorage.getItem(key);
    if (raw == null) return fallback;
    const parsed = Number.parseFloat(raw);
    return Number.isFinite(parsed) ? parsed : fallback;
  } catch {
    return fallback;
  }
}

function isHdriBackgroundKey(key: BackgroundKey): key is HdriBackgroundKey {
  return key !== PLAIN_BACKGROUND_KEY;
}

function normalizeSolidBackgroundKey(value: string | null | undefined): HdriBackgroundKey {
  if (!value) return DEFAULT_SOLID_BACKGROUND_KEY;
  const match = HDR_BACKGROUND_OPTIONS.find(option => option.key === value);
  return match?.key ?? DEFAULT_SOLID_BACKGROUND_KEY;
}

function normalizeBackgroundKey(value: string | null | undefined): BackgroundKey {
  if (value === PLAIN_BACKGROUND_KEY) return PLAIN_BACKGROUND_KEY;
  return normalizeSolidBackgroundKey(value);
}

function hdrCandidateUrls(rawPath: string) {
  const clean = rawPath.replace(/^\/+/, '');
  const primary = `${APP_BASE_URL}${clean}`;
  if (APP_BASE_URL === '/') return [primary];
  return [primary, `/${clean}`];
}

export class BackgroundController {
  private readonly scene: THREE.Scene;
  private readonly renderer: THREE.WebGLRenderer;
  private readonly pmrem: THREE.PMREMGenerator;
  private readonly fallbackEnvironmentTarget: THREE.WebGLRenderTarget;
  private readonly baseBackground: THREE.Color;
  private readonly editBackground: THREE.Color;
  private readonly selectorEl: HTMLDivElement | null;
  private readonly swatchButtons: HTMLButtonElement[];
  private readonly blurInput: HTMLInputElement | null;
  private readonly blurValue: HTMLOutputElement | null;
  private readonly lightnessInput: HTMLInputElement | null;
  private readonly lightnessValue: HTMLOutputElement | null;
  private readonly controlsEl: HTMLDivElement | null;
  private readonly getRenderMode: () => ViewMode;
  private readonly getEditMode: () => boolean;
  private readonly hdrLoader = new RGBELoader();
  private readonly hdrBackgroundTextureCache = new Map<HdriBackgroundKey, THREE.Texture>();
  private readonly hdrEnvironmentTargetCache = new Map<HdriBackgroundKey, THREE.WebGLRenderTarget>();
  private readonly sceneBackgroundHsl = { h: 0, s: 0, l: 0 };
  private readonly sceneBackgroundColor = new THREE.Color();
  private readonly backgroundBlueHue = 0.61;
  private hdrBackgroundTexture: THREE.Texture | null = null;
  private activeBackgroundKey: BackgroundKey | null = null;
  private hdrBackgroundLoadingKey: HdriBackgroundKey | null = null;
  private hdrBackgroundBlur = HDR_BACKGROUND_BLUR_DEFAULT;
  private hdrBackgroundLightness = HDR_BACKGROUND_LIGHTNESS_DEFAULT;

  constructor(options: BackgroundControllerOptions) {
    this.scene = options.scene;
    this.renderer = options.renderer;
    this.pmrem = options.pmrem;
    this.fallbackEnvironmentTarget = options.fallbackEnvironmentTarget;
    this.baseBackground = options.baseBackground;
    this.editBackground = options.editBackground;
    this.selectorEl = options.selectorEl;
    this.swatchButtons = options.swatchButtons;
    this.blurInput = options.blurInput;
    this.blurValue = options.blurValue;
    this.lightnessInput = options.lightnessInput;
    this.lightnessValue = options.lightnessValue;
    this.controlsEl = options.controlsEl;
    this.getRenderMode = options.getRenderMode;
    this.getEditMode = options.getEditMode;
    this.hdrBackgroundBlur = clamp01(readStoredNumber(HDR_BACKGROUND_BLUR_KEY, this.hdrBackgroundBlur));
    this.hdrBackgroundLightness = clampHdrLightness(
      readStoredNumber(HDR_BACKGROUND_LIGHTNESS_KEY, this.hdrBackgroundLightness),
    );
    this.syncRenderControls();
  }

  applySceneBackground(useEditMode: boolean) {
    if (this.hdrBackgroundTexture) {
      this.scene.background = this.hdrBackgroundTexture;
      this.scene.backgroundBlurriness = this.hdrBackgroundBlur;
      this.scene.backgroundIntensity = this.hdrBackgroundLightness;
      return;
    }

    const source = useEditMode ? this.editBackground : this.baseBackground;
    source.getHSL(this.sceneBackgroundHsl);
    const saturationFloor = useEditMode ? 0.02 : 0.03;
    const saturationScale = useEditMode ? 0.22 : 0.26;
    const saturation = Math.max(this.sceneBackgroundHsl.s * saturationScale, saturationFloor);
    this.sceneBackgroundColor.setHSL(this.backgroundBlueHue, saturation, this.sceneBackgroundHsl.l);
    this.scene.background = this.sceneBackgroundColor;
    this.scene.backgroundBlurriness = 0;
    this.scene.backgroundIntensity = 1;
    this.renderer.setClearColor(this.sceneBackgroundColor);
  }

  initializeRenderControls() {
    this.syncRenderControls();
    this.blurInput?.addEventListener('input', () => {
      if (!this.blurInput) return;
      const next = clamp01(Number.parseFloat(this.blurInput.value));
      this.hdrBackgroundBlur = next;
      if (this.blurValue) this.blurValue.textContent = next.toFixed(2);
      this.applySceneBackground(this.getEditMode());
      this.storeRenderSettings();
    });

    this.lightnessInput?.addEventListener('input', () => {
      if (!this.lightnessInput) return;
      const next = clampHdrLightness(Number.parseFloat(this.lightnessInput.value));
      this.hdrBackgroundLightness = next;
      if (this.lightnessValue) this.lightnessValue.textContent = next.toFixed(2);
      this.applySceneBackground(this.getEditMode());
      this.storeRenderSettings();
    });
  }

  async initializeSelector() {
    if (!this.selectorEl || this.swatchButtons.length === 0) return;

    this.swatchButtons.forEach(button => {
      const key = normalizeBackgroundKey(button.dataset.hdri);
      const option = backgroundOptionByKey.get(key);
      if (option) {
        button.title = option.label;
        button.setAttribute('aria-label', option.label);
        if ('preview' in option) {
          button.style.setProperty('--swatch-image', `url('${APP_BASE_URL}${option.preview}')`);
        } else {
          button.style.removeProperty('--swatch-image');
        }
      }
      button.addEventListener('click', () => {
        void this.setActiveBackground(key);
      });
    });

    this.updateSwatchUI();

    if (this.getRenderMode() !== 'solid') {
      await this.setActiveBackground(PLAIN_BACKGROUND_KEY);
      return;
    }

    const preferred = this.getStoredHdrBackgroundKey();
    if (await this.setActiveBackground(preferred)) {
      return;
    }

    for (const option of HDR_BACKGROUND_OPTIONS) {
      if (option.key === preferred) continue;
      if (await this.setActiveBackground(option.key)) return;
    }
  }

  syncForRenderMode() {
    const plainOnly = this.getRenderMode() !== 'solid';
    if (plainOnly) {
      if (this.activeBackgroundKey !== PLAIN_BACKGROUND_KEY) {
        void this.setActiveBackground(PLAIN_BACKGROUND_KEY);
        return;
      }
      this.updateSwatchUI();
      return;
    }

    if (this.activeBackgroundKey == null || this.activeBackgroundKey === PLAIN_BACKGROUND_KEY) {
      void this.setActiveBackground(this.getStoredHdrBackgroundKey());
      return;
    }
    this.updateSwatchUI();
  }

  private syncRenderControls() {
    if (this.blurInput) this.blurInput.value = this.hdrBackgroundBlur.toFixed(2);
    if (this.blurValue) this.blurValue.textContent = this.hdrBackgroundBlur.toFixed(2);
    if (this.lightnessInput) this.lightnessInput.value = this.hdrBackgroundLightness.toFixed(2);
    if (this.lightnessValue) this.lightnessValue.textContent = this.hdrBackgroundLightness.toFixed(2);
  }

  private storeRenderSettings() {
    try {
      window.localStorage.setItem(HDR_BACKGROUND_BLUR_KEY, String(this.hdrBackgroundBlur));
      window.localStorage.setItem(HDR_BACKGROUND_LIGHTNESS_KEY, String(this.hdrBackgroundLightness));
    } catch {
      // Storage may be unavailable in private sessions.
    }
  }

  private getStoredHdrBackgroundKey(): HdriBackgroundKey {
    try {
      return normalizeSolidBackgroundKey(window.localStorage.getItem(HDR_BACKGROUND_SELECTION_KEY));
    } catch {
      return DEFAULT_SOLID_BACKGROUND_KEY;
    }
  }

  private storeHdrBackgroundKey(key: HdriBackgroundKey) {
    try {
      window.localStorage.setItem(HDR_BACKGROUND_SELECTION_KEY, key);
    } catch {
      // Storage may be unavailable in private sessions.
    }
  }

  private updateSwatchUI() {
    const plainOnly = this.getRenderMode() !== 'solid';
    const controlsEnabled = this.getRenderMode() === 'solid' && this.activeBackgroundKey !== PLAIN_BACKGROUND_KEY;
    this.selectorEl?.classList.toggle('plain-only', plainOnly);
    this.controlsEl?.classList.toggle('disabled', !controlsEnabled);
    if (this.blurInput) this.blurInput.disabled = !controlsEnabled;
    if (this.lightnessInput) this.lightnessInput.disabled = !controlsEnabled;

    this.swatchButtons.forEach(button => {
      const key = normalizeBackgroundKey(button.dataset.hdri);
      const available = !plainOnly || key === PLAIN_BACKGROUND_KEY;
      const loading = isHdriBackgroundKey(key) && key === this.hdrBackgroundLoadingKey;
      const active = key === this.activeBackgroundKey;
      button.classList.toggle('loading', loading);
      button.classList.toggle('active', active);
      button.disabled = !available || loading;
      button.setAttribute('aria-pressed', active ? 'true' : 'false');
    });
  }

  private async setActiveBackground(key: BackgroundKey) {
    const option = backgroundOptionByKey.get(key);
    if (!option) return false;

    if (!isHdriBackgroundKey(key)) {
      if (this.activeBackgroundKey === PLAIN_BACKGROUND_KEY && !this.hdrBackgroundTexture) return true;
      this.activeBackgroundKey = PLAIN_BACKGROUND_KEY;
      this.scene.environment = this.fallbackEnvironmentTarget.texture;
      this.hdrBackgroundTexture = null;
      this.applySceneBackground(this.getEditMode());
      this.updateSwatchUI();
      return true;
    }

    const hdriOption = hdrBackgroundOptionByKey.get(key);
    if (!hdriOption) return false;
    if (this.hdrBackgroundLoadingKey === key) return false;
    if (this.activeBackgroundKey === key && this.hdrBackgroundTexture) return true;

    this.hdrBackgroundLoadingKey = key;
    this.updateSwatchUI();
    try {
      let hdrTexture = this.hdrBackgroundTextureCache.get(key);
      if (!hdrTexture) {
        const candidates = new Set<string>();
        for (const rawPath of hdriOption.urls) {
          hdrCandidateUrls(rawPath).forEach(url => candidates.add(url));
        }
        for (const candidateUrl of candidates) {
          try {
            hdrTexture = await this.hdrLoader.loadAsync(candidateUrl);
            break;
          } catch {
            // Try next URL candidate.
          }
        }
        if (!hdrTexture) {
          return false;
        }
        hdrTexture.mapping = THREE.EquirectangularReflectionMapping;
        this.hdrBackgroundTextureCache.set(key, hdrTexture);
      }

      let environmentTarget = this.hdrEnvironmentTargetCache.get(key);
      if (!environmentTarget) {
        environmentTarget = this.pmrem.fromEquirectangular(hdrTexture);
        this.hdrEnvironmentTargetCache.set(key, environmentTarget);
      }

      this.activeBackgroundKey = key;
      this.scene.environment = environmentTarget.texture;
      this.hdrBackgroundTexture = hdrTexture;
      this.applySceneBackground(this.getEditMode());
      this.storeHdrBackgroundKey(key);
      return true;
    } catch {
      return false;
    } finally {
      this.hdrBackgroundLoadingKey = null;
      this.updateSwatchUI();
    }
  }
}
