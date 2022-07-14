import { Inject, Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

import { AUTHENTICATION_SETTINGS } from './authentication.injectors';
import { AutenticationsSettings } from './authentication.types';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(
    @Inject(AUTHENTICATION_SETTINGS)
    private settings: AutenticationsSettings,
    private jwtHelper: JwtHelperService,
  ) {}

  isAuthenticated(): boolean {
    try {
      return !this.jwtHelper.isTokenExpired();
    } catch {
      // if the token fails to parse, user not authenticated
      return false;
    }
  }

  login() {
    this.accessAppAction('login');
  }

  logout() {
    this.accessAppAction('logout');
  }

  private accessAppAction(action: string) {
    window.location.assign(
      `https://access.${
        this.settings.environment ? this.settings.environment + '.' : ''
      }clarivate.com/${action}?app=${this.settings.appId}`,
    );
  }

  getTokenPayload(): object {
    return this.jwtHelper.decodeToken();
  }
}
