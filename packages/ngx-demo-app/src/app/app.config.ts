import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { AuthenticationModule } from '@cdx/ngx-authentication';
import { SessionActivityModule } from '@cdx/ngx-session-activity';
import { TranslateModule } from '@ngx-translate/core';

import { appRoutes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(
      BrowserAnimationsModule,
      AuthenticationModule.forRoot({
        appId: 'cdx',
        environment: 'dev-stable',
      }),
      SessionActivityModule.forRoot(),
      TranslateModule.forRoot({
        defaultLanguage: 'en',
      }),
    ),
    provideRouter(appRoutes),
  ],
};
