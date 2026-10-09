export const appModuleAuthAngular = `import { AuthenticationModule } from '@hlx/ngx-authentication';

@NgModule({
  imports: [
    AuthenticationModule.forRoot({
      appId: APP_ID,
      environment: ENVIRONMENT
    })
  ]
})`;

export const authenticationServiceAngular = `
import { AuthenticationService } from '@hlx/ngx-authentication';

export class AppComponent implements OnInit {
  authenticated = false;
  tokenPayload?: JwtToken;

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.authenticated = this.authenticationService.isAuthenticated();
    this.tokenPayload = this.authenticationService.getTokenPayload();
  }
  loginWith1P() {
    this.authenticationService.login();
  }
  logoutWith1P() {
    this.authenticationService.logout();
  }
}`;

export const appModuleAuthAngular2 = `import { AuthenticationModule, HeaderGlobalUserProfileModule } from '@hlx/ngx-authentication';
import { HeaderModule } from '@hlx/ngx-branding';

@NgModule({
  imports: [
    AuthenticationModule.forRoot({
      appId: APP_ID,
      environment: ENVIRONMENT
    }),
    HeaderGlobalUserProfileModule,
    HeaderModule
  ]
})`;

export const headerAuthTemplateAngular = `<header cdx-header>
  <cdx-header-global>
    <cdx-header-global-user-profile></cdx-header-global-user-profile>
  </cdx-header-global>
</header>`;
