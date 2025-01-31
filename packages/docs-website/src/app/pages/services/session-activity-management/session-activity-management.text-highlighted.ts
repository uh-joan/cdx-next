export const sessionActivityModuleAngular = `
import { SessionActivityModule } from '@cdx/ngx-session-activity';

@NgModule({
  imports: [
    SessionActivityModule.forRoot(),
  ]
})`;

export const sessionActivityModuleSampleAngular = `
import { SessionActivityModule } from '@cdx/ngx-session-activity';

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
import { AuthenticationService } from '@cdx/ngx-authentication';
import {
  LOGOUT_TYPE,
  SessionActivityService,
} from '@cdx/ngx-session-activity';

export class AppComponent implements OnInit {
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
}`;

export const headerSessioNActivityTemplateAngular = `<header cdx-header>
    <cdx-header-global>
        <cdx-header-global-user-profile
            withSessionManagement
        ></cdx-header-global-user-profile>
    </cdx-header-global>
</header>`;
