import { createHostFactory, SpectatorHost } from '@ngneat/spectator/jest';

import { HelixFooterGroupTitleDirective } from './helix-footer-group-title.directive';

describe('HelixFooterGroupTitleDirective', () => {
  let host: SpectatorHost<HelixFooterGroupTitleDirective>;
  const createHost = createHostFactory(HelixFooterGroupTitleDirective);

  beforeEach(
    () =>
      (host = createHost(
        '<hlx-footer-group-title>A Title</hlx-footer-group-title>',
      )),
  );

  it('should set group title class', () => {
    expect(host.element).toHaveClass('hlx-footer__group-title');
  });

  it('should project child content', () => {
    expect(host.element).toContainText('A Title');
  });
});
