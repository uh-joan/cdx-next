import { createHostFactory, SpectatorHost } from '@ngneat/spectator/vitest';

import { HelixFooterGroupTitleDirective } from './helix-footer-group-title.directive';

describe('HelixFooterGroupTitleDirective', () => {
  let host: SpectatorHost<HelixFooterGroupTitleDirective>;
  const createHost = createHostFactory(HelixFooterGroupTitleDirective);

  beforeEach(
    () => (host = createHost('<div hlxFooterGroupTitle>A Title</div>')),
  );

  it('should set group title class', () => {
    expect(host.element).toHaveClass('hlx-footer__group-title');
  });

  it('should project child content', () => {
    expect(host.element).toContainText('A Title');
  });
});
