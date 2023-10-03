import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {
  ModuleWithProviders,
  NgModule,
  Optional,
  SkipSelf,
} from '@angular/core';
import { provideRoutes, RouterModule } from '@angular/router';
import { JWT_OPTIONS, JwtModule } from '@auth0/angular-jwt';

import { AUTHENTICATION_SETTINGS } from './authentication.injectors';
import { AutenticationsSettings } from './authentication.types';
import { BrokerComponent } from './broker.component';
import { TokenService } from './token.service';

export function jwtOptionsFactory(tokenService: TokenService) {
  return {
    tokenGetter: () => {
      return tokenService.getToken();
    },
    skipWhenExpired: true,
  };
}

@NgModule({
  imports: [
    HttpClientModule,
    RouterModule.forChild([]),
    JwtModule.forRoot({
      jwtOptionsProvider: {
        provide: JWT_OPTIONS,
        useFactory: jwtOptionsFactory,
        deps: [TokenService],
      },
    }),
  ],
  declarations: [BrokerComponent],
  exports: [RouterModule],
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
        { provide: APP_BASE_HREF, useValue: '' },
        provideRoutes([
          {
            path: settings.brokerRoute || 'broker/:authCode',
            pathMatch: 'full',
            component: BrokerComponent,
          },
        ]),
      ],
    };
  }
}
