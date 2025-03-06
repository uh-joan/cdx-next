import { Directive, OnDestroy } from '@angular/core';
import { AuthenticationService } from '@cdx/ngx-authentication';
import { Subscription } from 'rxjs';

import { LOGOUT_TYPE } from '../session-activity.model';
import { SessionActivityService } from '../session-activity.service';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[withSessionManagement]',
  standalone: false,
})
export class HeaderGlobalSessionManagementDirective implements OnDestroy {
  authenticated = false;
  sessionActivityServiceSubscription?: Subscription;

  constructor(
    private authenticationService: AuthenticationService,
    private sessionActivityService: SessionActivityService,
  ) {
    this.authenticated = this.authenticationService.isAuthenticated();
    if (this.authenticated) {
      this.sessionActivityService.initialize();
      this.sessionActivityServiceSubscription =
        this.sessionActivityService.sessionActivitySubject.subscribe(
          (sessionActivitySubject) => {
            if (
              sessionActivitySubject === LOGOUT_TYPE.LOGOUT_SELECTED ||
              sessionActivitySubject === LOGOUT_TYPE.SESSION_EXPIRED
            ) {
              this.authenticationService.logout();
            }
          },
        );
    }
  }
  ngOnDestroy(): void {
    this.sessionActivityServiceSubscription?.unsubscribe();
  }
}
