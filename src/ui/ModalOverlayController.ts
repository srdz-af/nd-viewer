export class ModalOverlayController {
  private readonly helpToggleButton = document.getElementById('help-toggle') as HTMLButtonElement | null;
  private readonly helpOverlay = document.getElementById('help-overlay') as HTMLDivElement | null;
  private readonly helpCloseButton = document.getElementById('help-close') as HTMLButtonElement | null;
  private helpLastFocusedEl: HTMLElement | null = null;

  bindControls() {
    this.helpToggleButton?.addEventListener('click', ev => {
      ev.stopPropagation();
      this.setHelpOpen(true);
    });
    this.helpCloseButton?.addEventListener('click', () => this.setHelpOpen(false));
    this.helpOverlay?.addEventListener('click', ev => {
      if (ev.target === this.helpOverlay) this.setHelpOpen(false);
    });

    window.addEventListener('keydown', ev => {
      if (ev.key !== 'Escape') return;
      if (!this.isHelpOpen()) return;
      ev.preventDefault();
      this.setHelpOpen(false);
    });
  }

  isOpen() {
    return this.isHelpOpen();
  }

  private isHelpOpen() {
    return this.helpOverlay?.classList.contains('open') ?? false;
  }

  private setHelpOpen(open: boolean) {
    if (!this.helpOverlay) return;
    this.helpOverlay.classList.toggle('open', open);
    this.helpOverlay.setAttribute('aria-hidden', open ? 'false' : 'true');
    if (open) {
      this.helpLastFocusedEl = document.activeElement instanceof HTMLElement ? document.activeElement : null;
      this.helpCloseButton?.focus();
      return;
    }
    if (this.helpLastFocusedEl && document.contains(this.helpLastFocusedEl)) {
      this.helpLastFocusedEl.focus();
    }
  }
}
