import { Inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { AUTHENTICATION_SETTINGS } from './authentication.injectors';
import { AutenticationsSettings } from './authentication.types';

@Injectable()
export class AuthenticationService {
  constructor(
    @Inject(AUTHENTICATION_SETTINGS)
    private settings: AutenticationsSettings,
  ) {}

  isAuthenticated(): Observable<boolean> {
    return of(false);
  }

  login() {
    window.open(this.buildLoginUrl(), '_blank');
  }

  private buildLoginUrl(): string {
    return `https://access.${
      this.settings.environment ? this.settings.environment + '.' : ''
    }clarivate.com/login?app=${this.settings.appId}`;
  }
}
