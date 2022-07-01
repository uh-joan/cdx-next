import { By } from '@angular/platform-browser';
import { AuthenticationModule } from '@cdx/authentication';
import { createHostFactory, SpectatorHost } from '@ngneat/spectator/jest';
import { HeaderModule } from '../header.module';

import { HeaderGlobalUserProfileComponent } from './header-global-user-profile.component';

describe('HeaderGlobalUserProfileComponent', () => {
  let host: SpectatorHost<HeaderGlobalUserProfileComponent>;
  const createHost = createHostFactory({
    component: HeaderGlobalUserProfileComponent,
    imports: [
      HeaderModule,
      AuthenticationModule.forRoot({
        appId: 'cdx',
        environment: 'dev-stable',
      }),
    ],
  });

  describe('when user is not authenticated', () => {
    beforeEach(() => {
      host = createHost(
        '<cdx-header-global-user-profile></cdx-header-global-user-profile>',
      );
    });

    it('should show login icon in button', () => {
      expect('button mat-icon').toContainText('login');
    });
  });

  describe('when user is not authenticated and login button is clicked', () => {
    beforeEach(() => {
      window.open = jest.fn();
      host = createHost(
        '<cdx-header-global-user-profile></cdx-header-global-user-profile>',
      );
      const loginButtonElement = host.fixture.debugElement.query(
        By.css('.cdx-header-details__container'),
      );
      loginButtonElement.triggerEventHandler('click', null);
    });

    it('should open login page in another window', () => {
      expect(window.open).toHaveBeenCalledTimes(1);
    });
  });
});
