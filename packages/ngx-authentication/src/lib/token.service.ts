import { inject, Service } from '@angular/core';

import { AUTHENTICATION_SETTINGS } from './authentication.injectors';
import { LS_TOKEN } from './authentication.types';

@Service()
export class TokenService {
  tokenLabel: string;
  private settings = inject(AUTHENTICATION_SETTINGS, { optional: true });

  constructor() {
    this.tokenLabel = this.settings?.tokenLabel || LS_TOKEN;
  }

  public setToken(jwt: string): void {
    localStorage.setItem(this.tokenLabel, jwt);
  }

  public getToken(): string | null {
    const token = localStorage.getItem(this.tokenLabel);
    return token ? token : null;
  }

  public deleteToken(): void {
    localStorage.removeItem(this.tokenLabel);
  }
}
