import { createHostFactory, SpectatorHost } from '@ngneat/spectator/jest';

import { FooterGroupTitleDirective } from './footer-group-title.directive';

describe('FooterGroupTitleDirective', () => {
  let host: SpectatorHost<FooterGroupTitleDirective>;
  const createHost = createHostFactory(FooterGroupTitleDirective);

  beforeEach(
    () =>
      (host = createHost(
        '<cdx-footer-group-title>A Title</cdx-footer-group-title>',
      )),
  );

  it('should set group title class', () => {
    expect(host.element).toHaveClass('cdx-footer__group-title');
  });

  it('should project child content', () => {
    expect(host.element).toContainText('A Title');
  });
});
