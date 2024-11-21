import { createHostFactory, SpectatorHost } from '@ngneat/spectator/jest';

import { AvalonHeaderProductNameOrLogoComponent } from './avalon-header-product-name-or-logo.component';

describe('HeaderProductNameOrLogoComponent', () => {
  let host: SpectatorHost<AvalonHeaderProductNameOrLogoComponent>;
  const createHost = createHostFactory(AvalonHeaderProductNameOrLogoComponent);

  describe('when used with ava-header-product-name selector', () => {
    beforeEach(
      () =>
        (host = createHost(
          '<ava-header-product-name>Foo</ava-header-product-name>',
        )),
    );

    it('should set product logo class', () => {
      expect(host.element).toHaveClass('ava-header__product-name-or-logo');
    });

    it('should project child ontent', () => {
      expect(host.element).toHaveText('Foo');
    });
  });

  describe('when used with img[ava-header-product-logo] selector', () => {
    beforeEach(() => (host = createHost('<img ava-header-product-logo />')));

    it('should create', () => {
      expect(host.element).toExist();
    });
  });
});
