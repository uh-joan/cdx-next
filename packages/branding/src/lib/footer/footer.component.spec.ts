import { OneTrustService } from '@cdx/cookies';
import {
  byText,
  createHostFactory,
  SpectatorHost,
  SpyObject,
} from '@ngneat/spectator/jest';

import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let host: SpectatorHost<FooterComponent>;
  let oneTrust: SpyObject<OneTrustService>;
  const createHost = createHostFactory({
    component: FooterComponent,
    mocks: [OneTrustService],
    shallow: true,
  });

  beforeEach(() => {
    host = createHost('<footer cdx-footer><div>stuff</div></footer>');
    oneTrust = host.inject<OneTrustService>(OneTrustService);
  });

  it('should set footer class', () => {
    expect(host.element).toHaveClass('cdx-footer');
  });

  it('should include copyright statement', () => {
    expect(host.query('.cdx-footer__copyright')).toContainText(
      '© 2022 Clarivate',
    );
  });

  it('should project child content in content container', () => {
    expect(host.element).toContainText('stuff');
  });

  describe('when Company links', () => {
    describe('are grouped', () => {
      beforeEach(() => {
        host.setInput({ groupCompanyLinks: true });
      });

      it('should show company group first', () => {
        expect(host.query('cdx-footer-group:first-child')).toExist();
      });
    });

    describe('are not grouped', () => {
      beforeEach(() => {
        host.setInput({ groupCompanyLinks: false });
      });

      it('should show a Company link first', () => {
        expect(host.query('a[cdx-footer-link]:first-child')).toExist();
      });
    });
  });

  describe('with Cookie management', () => {
    const manageCookiePreferencesLinkText = 'Manage cookie preferences';

    describe('configured and available', () => {
      beforeEach(() => {
        oneTrust.isReady.mockReturnValue(true);
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
            'keydown', // defaults to keyup, which doesn't match the behavior of anchors with href
          );
        });

        it('should open Cookie Preferences', () => {
          expect(oneTrust.openInfoDisplay).toHaveBeenCalled();
        });
      });
    });

    describe('not configured', () => {
      beforeEach(() => {
        oneTrust.isReady.mockReturnValue(false);
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
