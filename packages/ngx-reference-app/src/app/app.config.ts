import {
  ApplicationConfig,
  importProvidersFrom,
  provideZonelessChangeDetection,
} from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import {
  AnalyticsContextSchema,
  AnalyticsModule,
  CLARIVATE_IGLU_SCHEMA,
} from '@cdx/ngx-analytics';
import { AuthenticationModule } from '@cdx/ngx-authentication';
import { OneTrustModule, OneTrustSettings } from '@cdx/ngx-branding';
import { SessionActivityModule } from '@cdx/ngx-session-activity';
import { TranslateModule } from '@ngx-translate/core';

import { routes } from './app.routes';

const ONE_TRUST_SETTINGS: OneTrustSettings = {
  domainId: '1c592d3f-d63c-42d7-9871-1b022f316498',
};

const ANALYTICS_CONTEXT: AnalyticsContextSchema = {
  schema: CLARIVATE_IGLU_SCHEMA,
  data: {
    contextProp: 'firstContextProp',
  },
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideZonelessChangeDetection(),
    provideRouter(routes, withComponentInputBinding()),
    importProvidersFrom(
      OneTrustModule.forRoot(ONE_TRUST_SETTINGS),
      AnalyticsModule.forRoot(
        {
          appId: 'reference-app',
          options: {
            snowplowUrl:
              'https://snowplow-collector.staging.userintel.dev.sp.aws.clarivate.net',
          },
        },
        ANALYTICS_CONTEXT,
      ),
      AuthenticationModule.forRoot({
        appId: 'cdx',
        environment: 'dev-stable',
      }),
      SessionActivityModule.forRoot(),
      TranslateModule.forRoot({
        fallbackLang: 'en',
      }),
    ),
  ],
};
