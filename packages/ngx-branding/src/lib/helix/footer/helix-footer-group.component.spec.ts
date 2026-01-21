import { createHostFactory, SpectatorHost } from '@ngneat/spectator/jest';
import { html } from 'common-tags';

import { HelixFooterGroupComponent } from './helix-footer-group.component';

describe('FooterGroupComponent', () => {
  let host: SpectatorHost<HelixFooterGroupComponent>;
  const createHost = createHostFactory({
    component: HelixFooterGroupComponent,
    shallow: true,
  });

  describe('without a title', () => {
    beforeEach(
      () =>
        (host = createHost(html`
          <hlx-footer-group>
            <div class="item">Item</div>
          </hlx-footer-group>
        `)),
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
        (host = createHost(html`
          <hlx-footer-group>
            <div class="item">Item</div>
            stuff
            <hlx-footer-group-title>The Title</hlx-footer-group-title>
            things
          </hlx-footer-group>
        `)),
    );

    it('should project the title first', () => {
      expect(host.query('hlx-footer-group-title:first-child')).toExist();
    });
  });
});
