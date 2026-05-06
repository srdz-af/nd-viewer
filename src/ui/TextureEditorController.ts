import * as THREE from 'three';
import type { HypercubeRenderer } from '../rendering/HypercubeRenderer';
import {
  DEFAULT_SURFACE,
  cloneSurface,
  normalizeSurface,
  toColorHex,
  type SurfaceState,
} from '../scene/surface';
import { TexturePresetStore, texturePresetLabel } from './texturePresets';

type SurfaceTarget = { surface: SurfaceState; renderer: HypercubeRenderer };

type TextureEditorControllerOptions = {
  renderer: THREE.WebGLRenderer;
  scene: THREE.Scene;
  light: THREE.DirectionalLight;
  ambient: THREE.AmbientLight;
  hemi: THREE.HemisphereLight;
  getSurfaceTarget: () => SurfaceTarget | null;
  applySurfaceToTarget: (surface: SurfaceState, recordUndo: boolean) => boolean;
};

export class TextureEditorController {
  private readonly panel = document.getElementById('texture-panel') as HTMLDivElement | null;
  private readonly previewCanvas = document.getElementById('texture-preview') as HTMLCanvasElement | null;
  private readonly baseColorInput = document.getElementById('texture-base-color') as HTMLInputElement | null;
  private readonly baseColorValue = document.getElementById('texture-base-color-value') as HTMLOutputElement | null;
  private readonly metallicInput = document.getElementById('texture-metallic') as HTMLInputElement | null;
  private readonly metallicValue = document.getElementById('texture-metallic-value') as HTMLOutputElement | null;
  private readonly roughnessInput = document.getElementById('texture-roughness') as HTMLInputElement | null;
  private readonly roughnessValue = document.getElementById('texture-roughness-value') as HTMLOutputElement | null;
  private readonly alphaInput = document.getElementById('texture-alpha') as HTMLInputElement | null;
  private readonly alphaValue = document.getElementById('texture-alpha-value') as HTMLOutputElement | null;
  private readonly presetSelect = document.getElementById('texture-preset-select') as HTMLSelectElement | null;
  private readonly presetSaveButton = document.getElementById('texture-preset-save') as HTMLButtonElement | null;
  private readonly presetStore = new TexturePresetStore<SurfaceState>({
    normalizeSurface: surface => normalizeSurface(surface),
    surfacesEqual: (a, b) => (
      a.color === b.color
      && Math.abs(a.metalness - b.metalness) <= 1e-6
      && Math.abs(a.roughness - b.roughness) <= 1e-6
      && Math.abs(a.alpha - b.alpha) <= 1e-6
    ),
  });
  private syncingTextureUI = false;
  private syncingTexturePresetUI = false;
  private previewRenderer: THREE.WebGLRenderer | null = null;
  private previewScene: THREE.Scene | null = null;
  private previewCamera: THREE.PerspectiveCamera | null = null;
  private previewCube: THREE.Mesh<THREE.BoxGeometry, THREE.MeshStandardMaterial> | null = null;

  constructor(private readonly options: TextureEditorControllerOptions) {}

  initialize() {
    this.presetStore.load();
    this.updateTexturePresetSelect();
    this.bindControls();
    this.updatePanel();
  }

  updatePanel() {
    if (!this.panel) return;

    const target = this.options.getSurfaceTarget();
    const editable = !!target;
    this.panel.classList.toggle('empty', !target);
    this.panel.classList.toggle('disabled', !editable);
    this.setTextureInputsEnabled(editable);

    if (target) {
      this.syncTextureControls(target.surface);
      this.renderTexturePreview(target.surface);
      this.syncTexturePresetSelection(target.surface);
    } else {
      this.syncTextureControls(DEFAULT_SURFACE);
      this.renderTexturePreview(DEFAULT_SURFACE);
      this.syncTexturePresetSelection(null);
    }
  }

  private updateTexturePresetSelect(selectedId = '') {
    if (!this.presetSelect) return;
    const previous = selectedId || this.presetSelect.value;
    this.syncingTexturePresetUI = true;
    this.presetSelect.replaceChildren();

    const placeholder = document.createElement('option');
    placeholder.value = '';
    placeholder.textContent = 'Select preset...';
    this.presetSelect.appendChild(placeholder);

    this.presetStore.all.forEach((preset, idx) => {
      const option = document.createElement('option');
      option.value = preset.id;
      option.textContent = texturePresetLabel(preset.name, idx);
      this.presetSelect?.appendChild(option);
    });

    this.presetSelect.value = this.presetStore.findById(previous) ? previous : '';
    this.syncingTexturePresetUI = false;
  }

  private syncTexturePresetSelection(surface: SurfaceState | null) {
    if (!this.presetSelect) return;
    const matchingId = this.presetStore.findMatchingId(surface);
    if (this.presetSelect.value === matchingId) return;
    this.syncingTexturePresetUI = true;
    this.presetSelect.value = matchingId;
    this.syncingTexturePresetUI = false;
  }

  private setTextureInputsEnabled(enabled: boolean) {
    if (this.baseColorInput) this.baseColorInput.disabled = !enabled;
    if (this.metallicInput) this.metallicInput.disabled = !enabled;
    if (this.roughnessInput) this.roughnessInput.disabled = !enabled;
    if (this.alphaInput) this.alphaInput.disabled = !enabled;
    if (this.presetSaveButton) this.presetSaveButton.disabled = !enabled;
    if (this.presetSelect) this.presetSelect.disabled = !enabled || this.presetStore.size === 0;
  }

  private syncTextureControls(surface: SurfaceState) {
    if (!this.baseColorInput || !this.metallicInput || !this.roughnessInput || !this.alphaInput) return;
    this.syncingTextureUI = true;
    this.baseColorInput.value = toColorHex(surface.color);
    this.metallicInput.value = `${surface.metalness}`;
    this.roughnessInput.value = `${surface.roughness}`;
    this.alphaInput.value = `${surface.alpha}`;
    if (this.baseColorValue) this.baseColorValue.textContent = this.baseColorInput.value;
    if (this.metallicValue) this.metallicValue.textContent = surface.metalness.toFixed(3);
    if (this.roughnessValue) this.roughnessValue.textContent = surface.roughness.toFixed(3);
    if (this.alphaValue) this.alphaValue.textContent = surface.alpha.toFixed(3);
    this.syncingTextureUI = false;
  }

  private ensureTexturePreview() {
    if (!this.previewCanvas || this.previewRenderer) return;

    const rendererRef = new THREE.WebGLRenderer({
      canvas: this.previewCanvas,
      antialias: true,
      alpha: true,
    });
    rendererRef.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    rendererRef.outputColorSpace = THREE.SRGBColorSpace;
    rendererRef.toneMapping = this.options.renderer.toneMapping;
    rendererRef.toneMappingExposure = this.options.renderer.toneMappingExposure;
    rendererRef.setClearColor(0x000000, 0);

    const sceneRef = new THREE.Scene();
    sceneRef.environment = this.options.scene.environment;

    const cameraRef = new THREE.PerspectiveCamera(36, 1, 0.1, 10);
    cameraRef.position.set(1.8, 1.35, 1.9);
    cameraRef.lookAt(0, 0, 0);

    const cubeMaterial = new THREE.MeshStandardMaterial({
      color: DEFAULT_SURFACE.color,
      metalness: DEFAULT_SURFACE.metalness,
      roughness: DEFAULT_SURFACE.roughness,
      transparent: false,
      opacity: DEFAULT_SURFACE.alpha,
      envMapIntensity: 1.8,
      side: THREE.DoubleSide,
    });
    const cube = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), cubeMaterial);
    cube.rotation.set(0.45, 0.68, 0);
    sceneRef.add(cube);

    const previewLight = new THREE.DirectionalLight(0xffffff, this.options.light.intensity);
    previewLight.position.copy(this.options.light.position);
    const previewAmbient = new THREE.AmbientLight(0xffffff, this.options.ambient.intensity);
    const previewHemi = new THREE.HemisphereLight(
      this.options.hemi.color.getHex(),
      this.options.hemi.groundColor.getHex(),
      this.options.hemi.intensity,
    );
    sceneRef.add(previewAmbient, previewHemi, previewLight);

    this.previewRenderer = rendererRef;
    this.previewScene = sceneRef;
    this.previewCamera = cameraRef;
    this.previewCube = cube;
  }

  private renderTexturePreview(surface: SurfaceState | null) {
    this.ensureTexturePreview();
    if (!this.previewRenderer || !this.previewScene || !this.previewCamera || !this.previewCube || !this.previewCanvas) return;

    const width = Math.max(1, this.previewCanvas.clientWidth);
    const height = Math.max(1, this.previewCanvas.clientHeight);
    this.previewRenderer.setSize(width, height, false);
    this.previewCamera.aspect = width / height;
    this.previewCamera.updateProjectionMatrix();

    if (!surface) {
      this.previewRenderer.clear();
      return;
    }

    const material = this.previewCube.material;
    material.color.setHex(surface.color);
    material.metalness = surface.metalness;
    material.roughness = surface.roughness;
    material.transparent = surface.alpha < 0.999;
    material.opacity = surface.alpha;
    material.depthWrite = !material.transparent;
    material.needsUpdate = true;

    this.previewRenderer.render(this.previewScene, this.previewCamera);
  }

  private readSurfaceFromTextureInputs() {
    if (!this.baseColorInput || !this.metallicInput || !this.roughnessInput || !this.alphaInput) return;
    return normalizeSurface({
      color: Number.parseInt(this.baseColorInput.value.replace('#', ''), 16),
      metalness: Number.parseFloat(this.metallicInput.value),
      roughness: Number.parseFloat(this.roughnessInput.value),
      alpha: Number.parseFloat(this.alphaInput.value),
    });
  }

  private applyTextureFromInputs(recordUndo: boolean) {
    if (this.syncingTextureUI) return;
    const surface = this.readSurfaceFromTextureInputs();
    if (!surface) return;
    this.applySurface(surface, recordUndo);
  }

  private applySurface(surface: SurfaceState, recordUndo: boolean) {
    const nextSurface = normalizeSurface(surface);
    this.options.applySurfaceToTarget(nextSurface, recordUndo);
    this.syncTextureControls(nextSurface);
    this.renderTexturePreview(nextSurface);
    this.syncTexturePresetSelection(nextSurface);
  }

  private saveTexturePreset() {
    const target = this.options.getSurfaceTarget();
    if (!target) return;

    const fallbackName = `Texture ${this.presetStore.size + 1}`;
    const rawName = window.prompt('Texture preset name', fallbackName);
    if (rawName == null) return;
    const name = rawName.trim();
    if (!name) return;

    const surface = cloneSurface(target.surface);
    const preset = this.presetStore.upsert(name, surface);
    if (!preset) return;
    this.updateTexturePresetSelect(preset.id);
    this.setTextureInputsEnabled(true);
    this.syncTexturePresetSelection(surface);
  }

  private bindControls() {
    if (!this.panel) return;

    this.baseColorInput?.addEventListener('input', () => {
      if (this.baseColorValue && this.baseColorInput) this.baseColorValue.textContent = this.baseColorInput.value;
      this.applyTextureFromInputs(false);
    });
    this.metallicInput?.addEventListener('input', () => {
      if (this.metallicValue && this.metallicInput) {
        this.metallicValue.textContent = Number.parseFloat(this.metallicInput.value).toFixed(3);
      }
      this.applyTextureFromInputs(false);
    });
    this.roughnessInput?.addEventListener('input', () => {
      if (this.roughnessValue && this.roughnessInput) {
        this.roughnessValue.textContent = Number.parseFloat(this.roughnessInput.value).toFixed(3);
      }
      this.applyTextureFromInputs(false);
    });
    this.alphaInput?.addEventListener('input', () => {
      if (this.alphaValue && this.alphaInput) this.alphaValue.textContent = Number.parseFloat(this.alphaInput.value).toFixed(3);
      this.applyTextureFromInputs(false);
    });

    this.baseColorInput?.addEventListener('change', () => this.applyTextureFromInputs(true));
    this.metallicInput?.addEventListener('change', () => this.applyTextureFromInputs(true));
    this.roughnessInput?.addEventListener('change', () => this.applyTextureFromInputs(true));
    this.alphaInput?.addEventListener('change', () => this.applyTextureFromInputs(true));
    this.presetSaveButton?.addEventListener('click', () => this.saveTexturePreset());
    this.presetSelect?.addEventListener('change', () => {
      if (this.syncingTexturePresetUI || !this.presetSelect) return;
      const presetId = this.presetSelect.value;
      if (!presetId) return;
      const preset = this.presetStore.findById(presetId);
      if (!preset) return;
      this.applySurface(preset.surface, true);
    });
  }
}
