import {
  byText,
  createHostFactory,
  SpectatorHost,
  SpyObject,
} from '@ngneat/spectator/jest';
import { TranslateService } from '@ngx-translate/core';

import { OneTrustService } from '../one-trust/one-trust.service';
import { FooterComponent } from './footer.component';
import { FooterModule } from './footer.module';

describe('FooterComponent', () => {
  let host: SpectatorHost<FooterComponent>;
  let oneTrust: SpyObject<OneTrustService>;
  const createHost = createHostFactory({
    component: FooterComponent,
    mocks: [OneTrustService],
    imports: [FooterModule],
    providers: [
      {
        provide: TranslateService,
        useValue: {
          get: (key: string) => of(key),
        },
      },
    ],
    shallow: true,
  });

  it('should set footer class', () => {
    host = createHost('<footer cdx-footer><div>stuff</div></footer>');
    expect(host.query('div.cdx-footer')).toBeTruthy();
  });

  it('should include copyright statement', () => {
    host = createHost('<footer cdx-footer><div>stuff</div></footer>');
    expect(host.query('.cdx-footer__copyright')).toContainText(
      `© ${new Date().getFullYear()} Clarivate`,
    );
  });

  it('should project child content in content container', () => {
    host = createHost('<footer cdx-footer><div>stuff</div></footer>');
    expect(host.element).toContainText('stuff');
  });

  describe('when Company links are grouped', () => {
    beforeEach(() => {
      host = createHost(
        '<footer cdx-footer [groupCompanyLinks]="true"><div>stuff</div></footer>',
      );
      oneTrust = host.inject<OneTrustService>(OneTrustService);
      jest.spyOn(oneTrust, 'isReady').mockReturnValue(true);
      host.detectComponentChanges();
    });

    it('should show company group first', () => {
      expect(host.query('cdx-footer-group')).toExist();
    });
  });

  describe('when Company links are not grouped', () => {
    beforeEach(() => {
      host = createHost(
        '<footer cdx-footer [groupCompanyLinks]="false"><div>stuff</div></footer>',
      );
      oneTrust = host.inject<OneTrustService>(OneTrustService);
      jest.spyOn(oneTrust, 'isReady').mockReturnValue(true);
      host.detectComponentChanges();
    });

    it('should show a Company link first', () => {
      expect(host.query('a[cdx-footer-link]:first-child')).toExist();
    });
  });

  describe('with Cookie management', () => {
    const manageCookiePreferencesLinkText = 'Manage cookie preferences';

    beforeEach(() => {
      host = createHost('<footer cdx-footer><div>stuff</div></footer>');
      oneTrust = host.inject<OneTrustService>(OneTrustService);
    });

    describe('configured and available', () => {
      beforeEach(() => {
        jest.spyOn(oneTrust, 'isReady').mockReturnValue(true);
        host.detectComponentChanges();
      });

      it('should show "Cookie preferences" link', () => {
        expect(host.query(byText(manageCookiePreferencesLinkText))).toExist();
      });

      describe('and "Cookie preferences" link clicked', () => {
        beforeEach(() => {
          host.click(byText(manageCookiePreferencesLinkText));
        });

        it('should open Cookie Preferences', () => {
          expect(oneTrust.openInfoDisplay).toHaveBeenCalled();
        });
      });

      describe('and "Cookie preferences" link keydown.enter', () => {
        beforeEach(() => {
          host.keyboard.pressEnter(
            byText(manageCookiePreferencesLinkText),
            'keydown',
          );
        });

        it('should open Cookie Preferences', () => {
          expect(oneTrust.openInfoDisplay).toHaveBeenCalled();
        });
      });
    });

    describe('not configured', () => {
      beforeEach(() => {
        jest.spyOn(oneTrust, 'isReady').mockReturnValue(false);
        host.detectComponentChanges();
      });

      it('should not show "Cookie preferences" link', () => {
        expect(
          host.query(byText(manageCookiePreferencesLinkText)),
        ).not.toExist();
      });
    });
  });
});
