import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { MatMenuHarness } from '@angular/material/menu/testing';
import { createHostFactory, SpectatorHost } from '@ngneat/spectator/jest';

import { HeaderGlobalUserProfileComponent } from './header-global-user-profile.component';
import { HeaderGlobalUtilitiesModule } from './header-global-utilities.module';

describe('HeaderGlobalUserProfileComponent', () => {
  let host: SpectatorHost<HeaderGlobalUserProfileComponent>;
  const createHost = createHostFactory({
    component: HeaderGlobalUserProfileComponent,
    imports: [HeaderGlobalUtilitiesModule],
  });

  describe('when no configuration is provided', () => {
    beforeEach(() => {
      host = createHost(
        '<cdx-header-global-user-profile></cdx-header-global-user-profile>',
      );
    });

    it('should show account_circle in button', () => {
      expect('button mat-icon').toContainText('account_circle');
    });
  });

  describe('when a userDisplayName is provided', () => {
    beforeEach(() => {
      host = createHost(
        '<cdx-header-global-user-profile userDisplayName="foobar"></cdx-header-global-user-profile>',
      );
    });

    it('should show that name in a button', () => {
      expect('button').toContainText('foobar');
    });
  });

  describe('when "Log out" menu item is clicked', () => {
    const fakeLogout = jest.fn();

    beforeEach(async () => {
      host = createHost(
        '<cdx-header-global-user-profile (logout)="fakeLogout()"></cdx-header-global-user-profile>',
        { hostProps: { fakeLogout } },
      );
      const loader = TestbedHarnessEnvironment.loader(host.fixture);

      const menuHarness = await loader.getHarness(MatMenuHarness);
      await menuHarness.clickItem({ text: 'Log out' });
    });

    it('should emit logout Output', () => {
      expect(fakeLogout).toHaveBeenCalled();
    });
  });
});
