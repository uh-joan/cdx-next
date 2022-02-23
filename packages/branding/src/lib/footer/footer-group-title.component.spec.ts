import { createHostFactory, SpectatorHost } from '@ngneat/spectator/jest';

import { FooterGroupTitleComponent } from './footer-group-title.component';

describe('FooterGroupTitleComponent', () => {
  let host: SpectatorHost<FooterGroupTitleComponent>;
  const createHost = createHostFactory(FooterGroupTitleComponent);

  beforeEach(
    () =>
      (host = createHost(
        '<cdx-footer-group-title>A Title</cdx-footer-group-title>',
      )),
  );

  it('should set footer and typography classes', () => {
    expect(host.element).toHaveClass([
      'cdx-footer__group-title',
      'mat-body-strong',
    ]);
  });

  it('should project child content', () => {
    expect(host.element).toContainText('A Title');
  });
});
