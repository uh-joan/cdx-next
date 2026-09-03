import { DOCUMENT } from '@angular/core';
import {
  createServiceFactory,
  SpectatorService,
} from '@ngneat/spectator/vitest';
import { html } from 'common-tags';

import { ONE_TRUST_SETTINGS } from './one-trust.injectors';
import { OneTrustService } from './one-trust.service';
import type { OneTrust } from './one-trust.types';

declare let OneTrust: OneTrust;

describe('OneTrustService', () => {
  let spectator: SpectatorService<OneTrustService>;
  const createService = createServiceFactory({
    service: OneTrustService,
  });

  describe('when OneTrust settings are not available', () => {
    beforeEach(() => {
      spectator = createService();
    });

    describe('.isReady()', () => {
      it('should be false', () => {
        expect(spectator.service.isReady()).toBe(false);
      });
    });
  });

  describe('when OneTrust settings are available and script is appended', () => {
    beforeEach(() => {
      spectator = createService({
        providers: [
          { provide: ONE_TRUST_SETTINGS, useValue: { domainId: 'foo' } },
          {
            provide: DOCUMENT,
            useFactory: () => {
              return new DOMParser().parseFromString(
                html`
                  <head>
                    <script id="one-trust-auto-block"></script>
                    <script id="one-trust-sdk-stub"></script>
                    <script id="one-trust-opt-anon-wrapper"></script>
                  </head>
                `,
                'text/html',
              );
            },
          },
        ],
      });
    });

    describe('.isReady()', () => {
      it('should be true', () => {
        expect(spectator.service.isReady()).toBe(true);
      });
    });

    describe('.openInfoDisplay()', () => {
      beforeEach(() => {
        const windowWithOneTrust = window as typeof window & {
          OneTrust?: { ToggleInfoDisplay: Mock };
        };

        windowWithOneTrust.OneTrust = { ToggleInfoDisplay: vi.fn() };
        spectator.service.openInfoDisplay();
      });

      it('should invoke OneTrust.ToggleInfoDisplay', () => {
        expect(OneTrust.ToggleInfoDisplay).toHaveBeenCalled();
      });
    });
  });
});
