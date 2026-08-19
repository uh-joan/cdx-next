import { createHostFactory, SpectatorHost } from '@ngneat/spectator/vitest';

import { FooterGroupTitleDirective } from './footer-group-title.directive';

describe('FooterGroupTitleDirective', () => {
  let host: SpectatorHost<FooterGroupTitleDirective>;
  const createHost = createHostFactory(FooterGroupTitleDirective);

  beforeEach(
    () => (host = createHost('<div cdxFooterGroupTitle>A Title</div>')),
  );

  it('should set group title class', () => {
    expect(host.element).toHaveClass('cdx-footer__group-title');
  });

  it('should project child content', () => {
    expect(host.element).toContainText('A Title');
  });
});
