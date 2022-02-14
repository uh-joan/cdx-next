import { createHostFactory, SpectatorHost } from '@ngneat/spectator/jest';
import { html } from 'common-tags';

import { HeaderComponent } from './header.component';

describe('HeaderUtilityNavigationComponent', () => {
  let host: SpectatorHost<HeaderComponent>;
  const createHost = createHostFactory({
    component: HeaderComponent,
    shallow: true,
  });

  describe('when child content provided without an intended slot', () => {
    beforeEach(
      () =>
        (host = createHost(
          html` <header cdx-header>i will not render</header> `,
        )),
    );

    it('should not project any additional content', () => {
      expect(host.element).not.toContainText('i will not render');
    });
  });

  describe('when utility navigation is provided', () => {
    beforeEach(
      () =>
        (host = createHost(
          html`
            <header cdx-header>
              <cdx-header-utility-navigation></cdx-header-utility-navigation>
            </header>
          `,
        )),
    );

    it('should show logo first', () => {
      expect(host.query('.cdx-header__logo--clarivate:first-child')).toExist();
    });

    it('should project utility navigation', () => {
      expect(host.query('cdx-header-utility-navigation')).toExist();
    });
  });
});
