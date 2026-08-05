import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { ActivatedRouteSnapshot, ParamMap, Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

import { AUTHENTICATION_SETTINGS } from './authentication.injectors';
import { JwtToken } from './authentication.types';
import { TokenService } from './token.service';

@Service()
export class AuthenticationService {
  environment?: string;
  private jwtHelper = inject(JwtHelperService);
  private tokenService = inject(TokenService);
  public router = inject(Router);
  private http = inject(HttpClient);
  private settings = inject(AUTHENTICATION_SETTINGS, { optional: true });

  constructor() {
    this.environment = this.settings?.environment;
    if (this.settings?.legacyTokenSupport) {
      this.runLegacyCdxTransform();
    }
  }

  setEnvironment(environment: string): void {
    this.environment = environment;
  }

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

  runLegacyCdxTransform(): void {
    const legacyToken = JSON.parse(localStorage.getItem('ls.token') || '{}');
    if (legacyToken && legacyToken.token) {
      this.tokenService.setToken(legacyToken.token);
    }
  }

  async createSession(code: string): Promise<boolean> {
    const url = this.accessAppActionWithReferrer(`api/session/user/${code}`);
    try {
      const response = await fetch(url, {
        method: 'GET',
        credentials: 'include',
      });

      if (!response.ok) {
        throw new Error('Failed to create session');
      }

      const authResponse = (await response.json()) as {
        token: string;
      };
      this.tokenService.setToken(authResponse.token);
      if (this.settings?.legacyTokenSupport) {
        localStorage.setItem(
          'ls.token',
          JSON.stringify({
            email: this.getUserEmail(),
            expire:
              1000 * parseInt((this.getTokenField('exp') as string).toString()),
            provider: this.getUserProvider(),
            token: authResponse.token,
            truids: [this.getUserId()],
            userid: this.getUserId(),
          }),
        );
      }
      return true;
    } catch {
      this.logout();
      return false;
    }
  }

  login(referrerUrl?: string): void {
    window.location.assign(
      this.accessAppActionWithReferrer('login', referrerUrl || this.router.url),
    );
  }

  logout(referrerUrl?: string): void {
    this.tokenService.deleteToken();
    window.location.assign(
      this.accessAppActionWithReferrer(
        'logout',
        referrerUrl || this.router.url,
      ),
    );
  }

  entitlementError(): void {
    window.location.assign(
      this.accessAppActionWithReferrer('entitlementError'),
    );
  }

  private accessAppActionWithReferrer(
    action: string,
    referrerUrl?: string,
  ): string {
    const url = `https://access.${
      this.environment ? this.environment + '.' : ''
    }clarivate.com/${action}?app=${this.settings?.appId}`;

    const appAction = new URL(url);
    if (referrerUrl) {
      appAction.searchParams.append('referrer', referrerUrl);
    }
    return appAction.href;
  }

  getTokenPayload(): JwtToken | null {
    const token = this.tokenService.getToken();
    if (token) {
      return this.jwtHelper.decodeToken(token);
    }
    return null;
  }

  getTokenField(key: string): string | undefined {
    const token = this.getTokenPayload();
    if (token) {
      return token[key] as string | undefined;
    }
    return undefined;
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
