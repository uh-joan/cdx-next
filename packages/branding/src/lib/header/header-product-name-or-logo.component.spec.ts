import { createHostFactory, SpectatorHost } from '@ngneat/spectator/jest';

import { HeaderProductNameOrLogoComponent } from './header-product-name-or-logo.component';

describe('HeaderProductNameOrLogoComponent', () => {
  let host: SpectatorHost<HeaderProductNameOrLogoComponent>;
  const createHost = createHostFactory(HeaderProductNameOrLogoComponent);

  describe('when used with cdx-header-product-name selector', () => {
    beforeEach(
      () =>
        (host = createHost(
          '<cdx-header-product-name>Foo</cdx-header-product-name>',
        )),
    );

    it('should set product logo and typography classes', () => {
      expect(host.element).toHaveClass([
        'cdx-header__product-name-or-logo',
        'mat-title',
      ]);
    });

    it('should project child ontent', () => {
      expect(host.element).toHaveText('Foo');
    });
  });

  describe('when used with img[cdx-header-product-logo] selector', () => {
    beforeEach(() => (host = createHost('<img cdx-header-product-logo />')));

    it('should create', () => {
      expect(host.element).toExist();
    });
  });
});
