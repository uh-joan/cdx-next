import { createHostFactory, SpectatorHost } from '@ngneat/spectator/jest';
import { html } from 'common-tags';

import { HeaderUtilityNavigationComponent } from './header-utility-navigation.component';

describe('HeaderUtilityNavigationComponent', () => {
  let host: SpectatorHost<HeaderUtilityNavigationComponent>;
  const createHost = createHostFactory(HeaderUtilityNavigationComponent);

  beforeEach(
    () =>
      (host = createHost(html`
        <cdx-header-utility-navigation>
          something
        </cdx-header-utility-navigation>
      `)),
  );

  it('should set utility nav class', () => {
    expect(host.element).toHaveClass('cdx-header__utility-navigation');
  });

  it('should project child content', () => {
    expect(host.element).toContainText('something');
  });
});
