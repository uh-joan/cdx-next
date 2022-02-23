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
    host = createHost('<footer cdx-footer>stuff</footer>');
    oneTrust = host.inject<OneTrustService>(OneTrustService);
  });

  it('should set footer and typography classes', () => {
    expect(host.element).toHaveClass(['cdx-footer', 'mat-typography']);
  });

  it('should include clarivate logo', () => {
    expect(host.query('.cdx-footer__logo--clarivate')).toExist();
  });

  it('should show company group first', () => {
    expect(host.query('cdx-footer-group:first-child')).toExist();
  });

  it('should project child content in content container', () => {
    expect(host.element).toContainText('stuff');
  });

  describe('when cookie management is configured and available', () => {
    beforeEach(() => {
      oneTrust.isReady.mockReturnValue(true);
      host.detectComponentChanges();
    });

    it('should show "Cookie Preferences" link', () => {
      expect(host.query(byText('Cookie Preferences'))).toExist();
    });

    describe('and "Cookie Preferences" link clicked', () => {
      beforeEach(() => {
        host.click(byText('Cookie Preferences'));
      });

      it('should open Cookie Preferences', () => {
        expect(oneTrust.openInfoDisplay).toHaveBeenCalled();
      });
    });
  });

  describe('when cookie management is not configured', () => {
    beforeEach(() => {
      oneTrust.isReady.mockReturnValue(false);
      host.detectComponentChanges();
    });

    it('should not show "Cookie Preferences" link', () => {
      expect(host.query(byText('Cookie Preferences'))).not.toExist();
    });
  });
});
