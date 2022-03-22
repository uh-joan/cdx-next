import { createHostFactory, SpectatorHost } from '@ngneat/spectator/jest';

import { HeaderGlobalComponent } from './header-global.component';

describe('HeaderGlobalComponent', () => {
  let host: SpectatorHost<HeaderGlobalComponent>;
  const createHost = createHostFactory(HeaderGlobalComponent);

  beforeEach(
    () =>
      (host = createHost('<cdx-header-global>something</cdx-header-global>')),
  );

  it('should set global class', () => {
    expect(host.element).toHaveClass('cdx-header__global');
  });

  it('should project child content', () => {
    expect(host.element).toContainText('something');
  });
});
