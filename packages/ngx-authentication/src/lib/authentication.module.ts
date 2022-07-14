import {
  ModuleWithProviders,
  NgModule,
  Optional,
  SkipSelf,
} from '@angular/core';
import { JwtModule } from '@auth0/angular-jwt';

import { AUTHENTICATION_SETTINGS } from './authentication.injectors';
import { AutenticationsSettings } from './authentication.types';

export function tokenGetter() {
  const token = localStorage.getItem('ls.token');
  if (token) {
    const tokenAsObject = JSON.parse(token);
    return tokenAsObject.token;
  }
}

@NgModule({
  imports: [
    JwtModule.forRoot({
      config: {
        tokenGetter,
      },
    }),
  ],
})
export class AuthenticationModule {
  constructor(@Optional() @SkipSelf() parentModule?: AuthenticationModule) {
    if (parentModule) {
      throw new Error(
        'AuthenticationModule is already loaded. Import it in the AppModule only',
      );
    }
  }

  static forRoot(
    settings: AutenticationsSettings,
  ): ModuleWithProviders<AuthenticationModule> {
    return {
      ngModule: AuthenticationModule,
      providers: [
        {
          provide: AUTHENTICATION_SETTINGS,
          useValue: settings,
        },
      ],
    };
  }
}
