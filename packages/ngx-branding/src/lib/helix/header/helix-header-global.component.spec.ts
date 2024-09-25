import { createHostFactory, SpectatorHost } from '@ngneat/spectator/jest';

import { HelixHeaderGlobalComponent } from './helix-header-global.component';

describe('HelixHeaderGlobalComponent', () => {
  let host: SpectatorHost<HelixHeaderGlobalComponent>;
  const createHost = createHostFactory(HelixHeaderGlobalComponent);

  beforeEach(
    () =>
      (host = createHost('<hlx-header-global>something</hlx-header-global>')),
  );

  it('should set global class', () => {
    expect(host.element).toHaveClass('hlx-header__global');
  });

  it('should project child content', () => {
    expect(host.element).toContainText('something');
  });
});
