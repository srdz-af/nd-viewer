const MOBILE_ONBOARDING_SEEN_KEY = 'blend.mobileOnboardingSeen.v1';

export class ModalOverlayController {
  private readonly helpToggleButton = document.getElementById('help-toggle') as HTMLButtonElement | null;
  private readonly helpOverlay = document.getElementById('help-overlay') as HTMLDivElement | null;
  private readonly helpCloseButton = document.getElementById('help-close') as HTMLButtonElement | null;
  private readonly mobileOpenButton = document.getElementById('mobile-onboarding-open') as HTMLButtonElement | null;
  private readonly mobileOverlay = document.getElementById('mobile-onboarding-overlay') as HTMLDivElement | null;
  private readonly mobileTrack = document.getElementById('mobile-onboarding-track') as HTMLDivElement | null;
  private readonly mobileCloseButton = document.getElementById('mobile-onboarding-close') as HTMLButtonElement | null;
  private readonly mobileSkipButton = document.getElementById('mobile-onboarding-skip') as HTMLButtonElement | null;
  private readonly mobilePrevButton = document.getElementById('mobile-onboarding-prev') as HTMLButtonElement | null;
  private readonly mobileNextButton = document.getElementById('mobile-onboarding-next') as HTMLButtonElement | null;
  private readonly mobileFinishButton = document.getElementById('mobile-onboarding-finish') as HTMLButtonElement | null;
  private readonly progressButtons = Array.from(
    document.querySelectorAll('#mobile-onboarding-progress button[data-step]'),
  ) as HTMLButtonElement[];
  private readonly steps = Array.from(
    document.querySelectorAll('#mobile-onboarding-track .mobile-onboarding-step'),
  ) as HTMLElement[];
  private helpLastFocusedEl: HTMLElement | null = null;
  private mobileLastFocusedEl: HTMLElement | null = null;
  private mobileStep = 0;

  bindControls() {
    this.helpToggleButton?.addEventListener('click', ev => {
      ev.stopPropagation();
      this.setHelpOpen(true);
    });
    this.helpCloseButton?.addEventListener('click', () => this.setHelpOpen(false));
    this.helpOverlay?.addEventListener('click', ev => {
      if (ev.target === this.helpOverlay) this.setHelpOpen(false);
    });

    this.mobileOpenButton?.addEventListener('click', ev => {
      ev.preventDefault();
      this.setHelpOpen(false);
      this.openMobileOnboarding(0);
    });
    this.mobileCloseButton?.addEventListener('click', () => this.closeMobileOnboarding(true));
    this.mobileSkipButton?.addEventListener('click', () => this.closeMobileOnboarding(true));
    this.mobilePrevButton?.addEventListener('click', () => this.setMobileStep(this.mobileStep - 1));
    this.mobileNextButton?.addEventListener('click', () => this.setMobileStep(this.mobileStep + 1));
    this.mobileFinishButton?.addEventListener('click', () => this.closeMobileOnboarding(true));
    this.mobileOverlay?.addEventListener('click', ev => {
      if (ev.target === this.mobileOverlay) this.closeMobileOnboarding(true);
    });
    this.progressButtons.forEach(button => {
      button.addEventListener('click', () => {
        const step = Number.parseInt(button.dataset.step ?? '', 10);
        if (Number.isNaN(step)) return;
        this.setMobileStep(step);
      });
    });

    window.addEventListener('keydown', ev => {
      if (ev.key !== 'Escape') return;
      if (this.isMobileOpen()) {
        ev.preventDefault();
        this.closeMobileOnboarding(true);
        return;
      }
      if (!this.isHelpOpen()) return;
      ev.preventDefault();
      this.setHelpOpen(false);
    });
  }

  initializeMobileOnboarding() {
    this.setMobileStep(0);
    this.maybeOpenMobileOnboarding();
  }

  isOpen() {
    return this.isHelpOpen() || this.isMobileOpen();
  }

  private isHelpOpen() {
    return this.helpOverlay?.classList.contains('open') ?? false;
  }

  private isMobileOpen() {
    return this.mobileOverlay?.classList.contains('open') ?? false;
  }

  private setHelpOpen(open: boolean) {
    if (!this.helpOverlay) return;
    if (open && this.isMobileOpen()) {
      this.setMobileOpen(false);
    }
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

  private hasSeenMobileOnboarding() {
    try {
      return window.localStorage.getItem(MOBILE_ONBOARDING_SEEN_KEY) === '1';
    } catch {
      return false;
    }
  }

  private markMobileOnboardingSeen() {
    try {
      window.localStorage.setItem(MOBILE_ONBOARDING_SEEN_KEY, '1');
    } catch {
      // Storage may be unavailable in private sessions.
    }
  }

  private setMobileStep(step: number) {
    if (!this.mobileTrack || this.steps.length === 0) return;
    const maxStep = this.steps.length - 1;
    this.mobileStep = Math.max(0, Math.min(maxStep, step));
    this.mobileTrack.style.transform = `translateX(${-this.mobileStep * 100}%)`;

    this.steps.forEach((stepEl, idx) => {
      stepEl.setAttribute('aria-hidden', idx === this.mobileStep ? 'false' : 'true');
    });

    this.progressButtons.forEach((button, idx) => {
      const active = idx === this.mobileStep;
      button.classList.toggle('active', active);
      button.setAttribute('aria-current', active ? 'step' : 'false');
    });

    const isLastStep = this.mobileStep >= maxStep;
    if (this.mobilePrevButton) this.mobilePrevButton.disabled = this.mobileStep === 0;
    if (this.mobileNextButton) this.mobileNextButton.style.display = isLastStep ? 'none' : 'inline-block';
    if (this.mobileFinishButton) this.mobileFinishButton.classList.toggle('visible', isLastStep);
  }

  private setMobileOpen(open: boolean) {
    if (!this.mobileOverlay) return;
    if (open && this.isHelpOpen()) {
      this.setHelpOpen(false);
    }
    this.mobileOverlay.classList.toggle('open', open);
    this.mobileOverlay.setAttribute('aria-hidden', open ? 'false' : 'true');
    if (open) {
      this.mobileLastFocusedEl = document.activeElement instanceof HTMLElement ? document.activeElement : null;
      this.setMobileStep(this.mobileStep);
      this.mobileCloseButton?.focus();
      return;
    }
    if (this.mobileLastFocusedEl && document.contains(this.mobileLastFocusedEl)) {
      this.mobileLastFocusedEl.focus();
    }
  }

  private closeMobileOnboarding(markSeen = true) {
    if (!this.isMobileOpen()) return;
    if (markSeen) this.markMobileOnboardingSeen();
    this.setMobileOpen(false);
  }

  private openMobileOnboarding(step = 0) {
    this.setMobileStep(step);
    this.setMobileOpen(true);
  }

  private maybeOpenMobileOnboarding() {
    if (!this.mobileOverlay || this.steps.length === 0) return;
    if (this.hasSeenMobileOnboarding()) return;
    this.openMobileOnboarding(0);
  }
}
