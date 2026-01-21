import { createHostFactory, SpectatorHost } from '@ngneat/spectator/jest';
import { html } from 'common-tags';

import { HeaderComponent } from './header.component';
import { HeaderGlobalComponent } from './header-global.component';
import { HeaderProductNameOrLogoComponent } from './header-product-name-or-logo.component';

describe('HeaderComponent', () => {
  let host: SpectatorHost<HeaderComponent>;
  const createHost = createHostFactory({
    component: HeaderComponent,
    imports: [HeaderProductNameOrLogoComponent, HeaderGlobalComponent],
  });

  describe('when global area content is provided', () => {
    beforeEach(
      () =>
        (host = createHost(html`
          <header cdx-header>
            <cdx-header-global>
              <div id="thing">something</div>
            </cdx-header-global>
          </header>
        `)),
    );

    it('should show logo first in .cdx-header__global-bar', () => {
      expect(
        host.query(
          '.cdx-header__global-bar > .cdx-header__logo--clarivate:first-child',
        ),
      ).toExist();
    });

    it('should project cdx-header-global (and children) into .cdx-header__global-bar', () => {
      expect(
        host.query('.cdx-header__global-bar > cdx-header-global > #thing'),
      ).toExist();
    });
  });

  describe('when product area is populated', () => {
    beforeEach(() => {
      host = createHost(html`
        <header cdx-header>
          <div id="somewhere">in product area</div>
          <cdx-header-product-name>Foo</cdx-header-product-name>
          <img
            cdx-header-product-logo
            src="https://clarivate.com/code/wp-content/themes/clarivate/src/img/logo.svg?v=2.4.32"
          />
        </header>
      `);
    });

    it('should project product logo first into .cdx-header__product-bar', () => {
      expect(
        host.query(
          '.cdx-header__product-bar > .cdx-header__product-identification > img:first-child',
        ),
      ).toExist();
    });

    it('should project product name second into .cdx-header__product-bar', () => {
      expect(
        host.query(
          '.cdx-header__product-bar > .cdx-header__product-identification > cdx-header-product-name:nth-child(2)',
        ),
      ).toExist();
    });

    it('should project any other cdx-header children into .cdx-header__product-bar', () => {
      expect(host.query('.cdx-header__product-bar > #somewhere')).toExist();
    });
  });
});
