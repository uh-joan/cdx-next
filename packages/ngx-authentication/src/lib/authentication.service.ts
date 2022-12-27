import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  ParamMap,
  Router,
} from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

import { AUTHENTICATION_SETTINGS } from './authentication.injectors';
import {
  AutenticationsSettings,
  JwtToken,
  URL_ENVIRONMENT,
} from './authentication.types';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(
    @Inject(AUTHENTICATION_SETTINGS) private settings: AutenticationsSettings,
    private jwtHelper: JwtHelperService,
    private tokenService: TokenService,
    public router: Router,
    private http: HttpClient,
    private activatedRoute: ActivatedRoute,
  ) {}

  enterApplicationAfterAuthentication(
    routeSnapshot: ActivatedRouteSnapshot,
  ): void {
    this.navigateAccordingToReferrerFromQueryParams(
      routeSnapshot.queryParamMap,
    );
  }

  navigateAccordingToReferrerFromQueryParams(queryParamMap: ParamMap): void {
    const referrer = queryParamMap.get('referrer');
    if (referrer) {
      this.router.navigateByUrl(referrer);
    } else {
      this.router.navigate(['/']);
    }
  }

  isAuthenticated(): boolean {
    try {
      const isAuthenticated = !this.jwtHelper.isTokenExpired(
        this.tokenService.getToken(),
      );
      if (!isAuthenticated) {
        this.tokenService.deleteToken();
      }
      return isAuthenticated;
    } catch {
      this.tokenService.deleteToken();
      return false;
    }
  }

  async createSession(code: string): Promise<boolean> {
    const url = this.accessAppActionWithReferrer(`api/session/user/${code}`);
    let authResponse: any;
    try {
      authResponse = await this.http.get(url).toPromise();
      this.tokenService.setToken(authResponse.token);
      return true;
    } catch (error) {
      this.logout();
      return false;
    }
  }

  login(): void {
    window.location.assign(
      this.accessAppActionWithReferrer('login', this.router.url),
    );
  }

  logout(): void {
    this.tokenService.deleteToken();
    window.location.assign(
      this.accessAppActionWithReferrer('logout', this.router.url),
    );
  }

  private accessAppActionWithReferrer(
    action: string,
    referrerUrl?: string,
  ): string {
    const environment =
      this.activatedRoute?.snapshot?.paramMap?.get(URL_ENVIRONMENT) ||
      this.settings.environment;

    const url = `https://access.${
      environment ? environment + '.' : ''
    }clarivate.com/${action}?app=${this.settings.appId}`;

    const appAction = new URL(url);
    referrerUrl && appAction.searchParams.append('referrer', referrerUrl);
    return appAction.href;
  }

  getTokenPayload(): JwtToken | null {
    const token = this.tokenService.getToken();
    if (token) {
      return this.jwtHelper.decodeToken(token);
    }
    return null;
  }

  getTokenField(key: string): any {
    const token = this.getTokenPayload();
    if (token) {
      return token[key];
    }
  }

  getUserId(): string | undefined {
    return this.getTokenField('sub');
  }

  getUserProvider(): string | undefined {
    return this.getTokenField('1p:prd');
  }

  getUserEmail(): string | undefined {
    return this.getTokenField('1p:eml');
  }
}
