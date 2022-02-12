import { createHostFactory, SpectatorHost } from '@ngneat/spectator/jest';
import { html } from 'common-tags';

import { FooterGroupComponent } from './footer-group.component';

describe('FooterGroupComponent', () => {
  let host: SpectatorHost<FooterGroupComponent>;
  const createHost = createHostFactory({
    component: FooterGroupComponent,
    shallow: true,
  });

  describe('without a title', () => {
    beforeEach(
      () =>
        (host = createHost(
          html`
            <cdx-footer-group>
              <div class="item">Item</div>
            </cdx-footer-group>
          `,
        )),
    );

    it('should add group class', () => {
      expect(host.element).toHaveClass('cdx-footer__group');
    });

    it('should project children', () => {
      expect(host.query('.item')).toExist();
    });
  });

  describe('when a title is present', () => {
    beforeEach(
      () =>
        (host = createHost(
          html`
            <cdx-footer-group>
              <div class="item">Item</div>
              stuff
              <cdx-footer-group-title>The Title</cdx-footer-group-title>
              things
            </cdx-footer-group>
          `,
        )),
    );

    it('should project the title first', () => {
      expect(host.queryHost('cdx-footer-group-title:first-child')).toExist();
    });
  });
});
