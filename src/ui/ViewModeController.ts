import { VIEW_MODES, type ViewMode } from '../constants';

type ViewModeControllerOptions = {
  getMode: () => ViewMode;
  setMode: (mode: ViewMode) => void;
};

export class ViewModeController {
  private readonly root = document.getElementById('view-toggle') as HTMLDivElement | null;
  private buttons: HTMLButtonElement[] = [];

  constructor(private readonly options: ViewModeControllerOptions) {}

  bind() {
    if (!this.root) return;
    this.buttons = Array.from(this.root.querySelectorAll('button')) as HTMLButtonElement[];
    this.buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        if (this.isViewMode(btn.dataset.mode)) this.options.setMode(btn.dataset.mode);
      });
    });
    this.syncButtons();
  }

  syncButtons() {
    this.buttons.forEach(btn => btn.classList.toggle('active', btn.dataset.mode === this.options.getMode()));
  }

  private isViewMode(mode: string | undefined): mode is ViewMode {
    return VIEW_MODES.includes(mode as ViewMode);
  }
}
