import { ModuleWithProviders, NgModule } from '@angular/core';

import { AUTHENTICATION_SETTINGS } from './authentication.injectors';
import { AuthenticationService } from './authentication.service';
import { AutenticationsSettings } from './authentication.types';

@NgModule()
export class AuthenticationModule {
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
        AuthenticationService,
      ],
    };
  }

  static forChild(): ModuleWithProviders<AuthenticationModule> {
    return {
      ngModule: AuthenticationModule,
      providers: [AuthenticationService],
    };
  }
}
