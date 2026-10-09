import { Directive, effect, inject } from '@angular/core';
import { AuthenticationService } from '@hlx/ngx-authentication';

import { LOGOUT_TYPE } from '../session-activity.model';
import { SessionActivityService } from '../session-activity.service';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[withSessionManagement]',
})
export class HeaderGlobalSessionManagementDirective {
  authenticated = false;

  private authenticationService: AuthenticationService = inject(
    AuthenticationService,
  );
  private sessionActivityService: SessionActivityService = inject(
    SessionActivityService,
  );

  constructor() {
    this.authenticated = this.authenticationService.isAuthenticated();
    if (this.authenticated) {
      this.sessionActivityService.initialize();
      effect(() => {
        const sessionActivityEvent =
          this.sessionActivityService.sessionActivityEvent();
        if (
          sessionActivityEvent?.type === LOGOUT_TYPE.LOGOUT_SELECTED ||
          sessionActivityEvent?.type === LOGOUT_TYPE.SESSION_EXPIRED
        ) {
          this.authenticationService.logout();
        }
      });
    }
  }
}
