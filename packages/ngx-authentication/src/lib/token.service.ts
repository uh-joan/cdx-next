import { Inject, Injectable } from '@angular/core';

import { AUTHENTICATION_SETTINGS } from './authentication.injectors';
import { AutenticationsSettings, LS_TOKEN } from './authentication.types';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  tokenLabel: string;

  constructor(
    @Inject(AUTHENTICATION_SETTINGS) private settings: AutenticationsSettings,
  ) {
    this.tokenLabel = this.settings.tokenLabel || LS_TOKEN;
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
