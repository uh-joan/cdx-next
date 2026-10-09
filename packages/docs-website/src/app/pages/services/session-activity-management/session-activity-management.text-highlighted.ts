export const sessionActivityModuleAngular = `
import { SessionActivityModule } from '@hlx/ngx-session-activity';

@NgModule({
  imports: [
    SessionActivityModule.forRoot(),
  ]
})`;

export const sessionActivityModuleSampleAngular = `
import { SessionActivityModule } from '@hlx/ngx-session-activity';

@NgModule({
  imports: [
    SessionActivityModule.forRoot({
      expireDurationMinutes: 17,
      expireWarningMinutes: 2,
      pingIntervalMinutes: 20,
      shouldNotRehydrate: false
    }),
  ]
})`;

export const sessionActivityServiceComponentAngular = `
import { AuthenticationService } from '@hlx/ngx-authentication';
import { effect, inject } from '@angular/core';
import {
  LOGOUT_TYPE,
  SessionActivityService,
} from '@hlx/ngx-session-activity';

export class AppComponent implements OnInit {
  authenticated = false;
  private authenticationService: AuthenticationService = inject(AuthenticationService);
  private sessionActivityService: SessionActivityService = inject(SessionActivityService);

  constructor() {
    this.authenticated = this.authenticationService.isAuthenticated();
    if (this.authenticated) {
      this.sessionActivityService.initialize();
      effect(() => {
        const sessionActivityEvent = this.sessionActivityService.sessionActivityEvent();
        if (
          sessionActivityEvent?.type === LOGOUT_TYPE.LOGOUT_SELECTED ||
          sessionActivityEvent?.type === LOGOUT_TYPE.SESSION_EXPIRED
        ) {
          this.authenticationService.logout();
        }
      });
    }
  }
}`;

export const headerSessioNActivityTemplateAngular = `<header cdx-header>
    <cdx-header-global>
        <cdx-header-global-user-profile
            withSessionManagement
        ></cdx-header-global-user-profile>
    </cdx-header-global>
</header>`;
