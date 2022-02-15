import { createHostFactory, SpectatorHost } from '@ngneat/spectator/jest';
import { html } from 'common-tags';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let host: SpectatorHost<HeaderComponent>;
  const createHost = createHostFactory(HeaderComponent);

  describe('when global area content is provided', () => {
    beforeEach(
      () =>
        (host = createHost(
          html`
            <header cdx-header>
              <cdx-header-global>
                <div id="thing">something</div>
              </cdx-header-global>
            </header>
          `,
        )),
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
      host = createHost(
        html`
          <header cdx-header>
            <div id="somewhere">in product area</div>
            <cdx-header-product-name>Foo</cdx-header-product-name>
          </header>
        `,
      );
    });

    it('should project product name first into .cdx-header__product-bar', () => {
      expect(
        host.query(
          '.cdx-header__product-bar > cdx-header-product-name:first-child',
        ),
      ).toExist();
    });

    it('should project any other cdx-header children into .cdx-header__product-bar', () => {
      expect(host.query('.cdx-header__product-bar > #somewhere')).toExist();
    });
  });
});
