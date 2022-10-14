import { Directive, OnDestroy } from '@angular/core';
import { AuthenticationService } from '@cdx/ngx-authentication';
import { LOGOUT_TYPE, SessionActivityService } from '@cdx/ngx-session-activity';
import { Subscription } from 'rxjs';

@Directive({
  selector: '[withSessionManagement]',
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
