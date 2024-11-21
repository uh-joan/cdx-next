import { createHostFactory, SpectatorHost } from '@ngneat/spectator/jest';

import { AvalonHeaderGlobalComponent } from './avalon-header-global.component';

describe('AvalonHeaderGlobalComponent', () => {
  let host: SpectatorHost<AvalonHeaderGlobalComponent>;
  const createHost = createHostFactory(AvalonHeaderGlobalComponent);

  beforeEach(
    () =>
      (host = createHost('<ava-header-global>something</ava-header-global>')),
  );

  it('should set global class', () => {
    expect(host.element).toHaveClass('ava-header__global');
  });

  it('should project child content', () => {
    expect(host.element).toContainText('something');
  });
});
