import { DOCUMENT, inject, Service } from '@angular/core';

import { ONE_TRUST_SETTINGS } from './one-trust.injectors';
import type { OneTrust, OneTrustSettings } from './one-trust.types';

declare let OneTrust: OneTrust;

@Service()
export class OneTrustService {
  private settings: OneTrustSettings | null = inject(ONE_TRUST_SETTINGS, {
    optional: true,
  });
  private document = inject(DOCUMENT);
  /**
   * Determines if the OneTrust module has been properly configured and
   * required JavaScript assets have been inserted into the DOM.
   *
   * @returns boolean `true` iff OneTrust is ready to use, `false` otherwise
   */
  isReady(): boolean {
    return this.isConfigured() && this.isScriptsInserted();
  }

  private isConfigured(): boolean {
    return !!this.settings?.domainId?.length;
  }

  private isScriptsInserted(): boolean {
    return (
      this.document.head.querySelectorAll(
        'script#one-trust-auto-block, script#one-trust-sdk-stub, script#one-trust-opt-anon-wrapper, script#analytics-opt-anon-wrapper',
      ).length == 3
    );
  }

  /**
   * Opens the OneTrust "InfoDisplay", which is the primary interface to
   * manage cookie preferences.
   */
  openInfoDisplay(): void {
    OneTrust.ToggleInfoDisplay();
  }
}
