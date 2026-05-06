import * as THREE from 'three';

type ViewportCaptureControllerOptions = {
  renderer: THREE.WebGLRenderer;
  scene: THREE.Scene;
  camera: THREE.Camera;
  gridGroup: THREE.Object3D;
  axes: THREE.Object3D;
  recordButton: HTMLButtonElement | null;
  captureButton: HTMLButtonElement | null;
  timerEl: HTMLSpanElement | null;
};

const VIDEO_RECORDER_MIME_CANDIDATES = [
  'video/webm;codecs=vp9,opus',
  'video/webm;codecs=vp8,opus',
  'video/webm;codecs=h264,opus',
  'video/webm',
  'video/mp4',
] as const;
const VIDEO_RECORDER_FPS = 60;
const VIDEO_RECORDER_MIN_BITRATE = 28_000_000;
const VIDEO_RECORDER_MAX_BITRATE = 140_000_000;

const recorderBufferSize = new THREE.Vector2();

function captureTimestamp() {
  const now = new Date();
  const pad = (n: number) => String(n).padStart(2, '0');
  return `${now.getFullYear()}${pad(now.getMonth() + 1)}${pad(now.getDate())}-${pad(now.getHours())}${pad(now.getMinutes())}${pad(now.getSeconds())}`;
}

function downloadBlob(name: string, blob: Blob) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = name;
  a.click();
  URL.revokeObjectURL(url);
}

function recordingFileExtensionFromMime(mimeType: string) {
  if (mimeType.includes('mp4')) return 'mp4';
  return 'webm';
}

function formatRecordingElapsed(ms: number) {
  const totalSeconds = Math.max(0, Math.floor(ms / 1000));
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  if (hours > 0) {
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  }
  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function pickRecorderMimeType() {
  if (typeof MediaRecorder === 'undefined') return '';
  for (const candidate of VIDEO_RECORDER_MIME_CANDIDATES) {
    try {
      if (MediaRecorder.isTypeSupported(candidate)) return candidate;
    } catch {
      // Ignore and try next.
    }
  }
  return '';
}

export class ViewportCaptureController {
  private recorder: MediaRecorder | null = null;
  private recorderStream: MediaStream | null = null;
  private recorderChunks: Blob[] = [];
  private recorderMimeType = 'video/webm';
  private gridVisibleBeforeCapture = true;
  private axesVisibleBeforeCapture = true;
  private recordingFinalized = false;
  private recordingStartedAt = 0;
  private recordingTimerIntervalId: number | null = null;

  constructor(private readonly options: ViewportCaptureControllerOptions) {}

  bindControls() {
    this.setRecordButtonState(false);
    this.options.recordButton?.addEventListener('click', () => this.toggleRecording());
    this.options.captureButton?.addEventListener('click', () => this.captureFrame());
  }

  toggleRecording() {
    if (this.isRecording()) {
      this.stopRecording();
      return;
    }
    this.startRecording();
  }

  captureFrame() {
    const { gridGroup, axes, renderer, scene, camera } = this.options;
    const previousGridVisibility = gridGroup.visible;
    const previousAxesVisibility = axes.visible;
    gridGroup.visible = false;
    axes.visible = false;
    renderer.render(scene, camera);
    try {
      const dataUrl = renderer.domElement.toDataURL('image/png');
      const a = document.createElement('a');
      a.href = dataUrl;
      a.download = `blend-frame-${captureTimestamp()}.png`;
      a.click();
    } catch {
      alert('Unable to capture frame.');
    } finally {
      gridGroup.visible = previousGridVisibility;
      axes.visible = previousAxesVisibility;
      renderer.render(scene, camera);
    }
  }

  private isRecording() {
    return !!this.recorder && this.recorder.state !== 'inactive';
  }

  private updateRecordingTimer() {
    const { timerEl } = this.options;
    if (!timerEl || this.recordingStartedAt <= 0) return;
    const elapsed = performance.now() - this.recordingStartedAt;
    timerEl.textContent = formatRecordingElapsed(elapsed);
  }

  private stopRecordingTimer() {
    const { timerEl } = this.options;
    if (this.recordingTimerIntervalId != null) {
      window.clearInterval(this.recordingTimerIntervalId);
      this.recordingTimerIntervalId = null;
    }
    this.recordingStartedAt = 0;
    if (!timerEl) return;
    timerEl.classList.remove('active');
    timerEl.textContent = '00:00';
    timerEl.setAttribute('aria-hidden', 'true');
  }

  private startRecordingTimer() {
    const { timerEl } = this.options;
    this.stopRecordingTimer();
    this.recordingStartedAt = performance.now();
    if (!timerEl) return;
    timerEl.classList.add('active');
    timerEl.setAttribute('aria-hidden', 'false');
    this.updateRecordingTimer();
    this.recordingTimerIntervalId = window.setInterval(() => this.updateRecordingTimer(), 250);
  }

  private setRecordButtonState(recording: boolean) {
    const { recordButton } = this.options;
    if (!recordButton) return;
    recordButton.classList.toggle('recording', recording);
    recordButton.classList.toggle('active', recording);
    const label = recording ? 'Stop viewport recording (Shift+R)' : 'Record viewport (Shift+R)';
    recordButton.title = label;
    recordButton.setAttribute('aria-label', label);
    const icon = recordButton.querySelector('.material-symbols-rounded');
    if (icon) icon.textContent = recording ? 'stop' : 'movie';
  }

  private recommendedRecordingBitrate() {
    this.options.renderer.getDrawingBufferSize(recorderBufferSize);
    const pixelCount = Math.max(1, recorderBufferSize.x * recorderBufferSize.y);
    const bitsPerPixelFrame = pixelCount >= (3840 * 2160)
      ? 0.16
      : pixelCount >= (2560 * 1440)
        ? 0.2
        : 0.24;
    const target = Math.round(pixelCount * VIDEO_RECORDER_FPS * bitsPerPixelFrame);
    return Math.max(VIDEO_RECORDER_MIN_BITRATE, Math.min(VIDEO_RECORDER_MAX_BITRATE, target));
  }

  private finalizeRecording(downloadVideo: boolean) {
    if (this.recordingFinalized) return;
    this.recordingFinalized = true;

    const { gridGroup, axes, renderer, scene, camera } = this.options;
    const mimeType = this.recorderMimeType;
    const chunks = this.recorderChunks;
    const stream = this.recorderStream;

    this.recorder = null;
    this.recorderStream = null;
    this.recorderChunks = [];

    stream?.getTracks().forEach(track => track.stop());
    gridGroup.visible = this.gridVisibleBeforeCapture;
    axes.visible = this.axesVisibleBeforeCapture;
    renderer.render(scene, camera);
    this.stopRecordingTimer();
    this.setRecordButtonState(false);

    if (!downloadVideo) return;
    if (chunks.length === 0) {
      alert('Recording stopped, but no video data was captured.');
      return;
    }
    const blob = new Blob(chunks, { type: mimeType || 'video/webm' });
    const ext = recordingFileExtensionFromMime(blob.type || mimeType);
    downloadBlob(`blend-viewport-${captureTimestamp()}.${ext}`, blob);
  }

  private stopRecording() {
    if (!this.recorder) return;
    try {
      if (this.recorder.state !== 'inactive') {
        this.recorder.stop();
      } else {
        this.finalizeRecording(true);
      }
    } catch {
      this.finalizeRecording(false);
    }
  }

  private startRecording() {
    if (typeof MediaRecorder === 'undefined') {
      alert('Viewport recording is not supported in this browser.');
      return;
    }
    const { renderer, gridGroup, axes, scene, camera } = this.options;
    const captureStream = renderer.domElement.captureStream?.bind(renderer.domElement);
    if (!captureStream) {
      alert('Viewport recording is not supported in this browser.');
      return;
    }

    const stream = captureStream(VIDEO_RECORDER_FPS);
    const mimeType = pickRecorderMimeType();
    const videoBitsPerSecond = this.recommendedRecordingBitrate();
    let recorder: MediaRecorder;
    try {
      recorder = mimeType
        ? new MediaRecorder(stream, { mimeType, videoBitsPerSecond })
        : new MediaRecorder(stream, { videoBitsPerSecond });
    } catch {
      try {
        recorder = mimeType
          ? new MediaRecorder(stream, { mimeType })
          : new MediaRecorder(stream);
      } catch {
        stream.getTracks().forEach(track => track.stop());
        alert('Unable to start viewport recording.');
        return;
      }
    }

    this.recorder = recorder;
    this.recorderStream = stream;
    this.recorderChunks = [];
    this.recorderMimeType = recorder.mimeType || mimeType || 'video/webm';
    this.gridVisibleBeforeCapture = gridGroup.visible;
    this.axesVisibleBeforeCapture = axes.visible;
    this.recordingFinalized = false;

    recorder.ondataavailable = ev => {
      if (ev.data && ev.data.size > 0) this.recorderChunks.push(ev.data);
    };
    recorder.onerror = () => {
      alert('Viewport recording failed.');
      this.finalizeRecording(false);
    };
    recorder.onstop = () => {
      this.finalizeRecording(true);
    };

    gridGroup.visible = false;
    axes.visible = false;
    renderer.render(scene, camera);
    this.setRecordButtonState(true);
    this.startRecordingTimer();

    try {
      recorder.start(200);
    } catch {
      this.finalizeRecording(false);
      alert('Unable to start viewport recording.');
    }
  }
}
