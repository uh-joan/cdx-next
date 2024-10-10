import { createHostFactory, SpectatorHost } from '@ngneat/spectator/jest';

import { HelixHeaderProductNameOrLogoComponent } from './helix-header-product-name-or-logo.component';

describe('HeaderProductNameOrLogoComponent', () => {
  let host: SpectatorHost<HelixHeaderProductNameOrLogoComponent>;
  const createHost = createHostFactory(HelixHeaderProductNameOrLogoComponent);

  describe('when used with hlx-header-product-name selector', () => {
    beforeEach(
      () =>
        (host = createHost(
          '<hlx-header-product-name>Foo</hlx-header-product-name>',
        )),
    );

    it('should set product logo class', () => {
      expect(host.element).toHaveClass('hlx-header__product-name-or-logo');
    });

    it('should project child ontent', () => {
      expect(host.element).toHaveText('Foo');
    });
  });

  describe('when used with img[hlx-header-product-logo] selector', () => {
    beforeEach(() => (host = createHost('<img hlx-header-product-logo />')));

    it('should create', () => {
      expect(host.element).toExist();
    });
  });
});
