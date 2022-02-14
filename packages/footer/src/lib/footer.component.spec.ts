import { createHostFactory, SpectatorHost } from '@ngneat/spectator/jest';
import { html } from 'common-tags';

import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let host: SpectatorHost<FooterComponent>;
  const createHost = createHostFactory({
    component: FooterComponent,
    shallow: true,
  });

  beforeEach(
    () => (host = createHost(html` <footer cdx-footer>stuff</footer> `)),
  );

  it('should set footer and typography classes', () => {
    expect(host.element).toHaveClass(['cdx-footer', 'mat-typography']);
  });

  it('should include clarivate logo', () => {
    expect(host.query('.cdx-footer__logo--clarivate')).toExist();
  });

  it('should show company group first', () => {
    expect(host.query('cdx-footer-group:first-child')).toExist();
  });

  it('should project child content in content container', () => {
    expect(host.element).toContainText('stuff');
  });
});
