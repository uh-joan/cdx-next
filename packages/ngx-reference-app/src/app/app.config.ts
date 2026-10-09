import {
  ApplicationConfig,
  importProvidersFrom,
  provideZonelessChangeDetection,
} from '@angular/core';
import { provideNativeDateAdapter } from '@angular/material/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import {
  AnalyticsContextSchema,
  AnalyticsModule,
  CLARIVATE_IGLU_SCHEMA,
} from '@hlx/ngx-analytics';
import { AuthenticationModule } from '@hlx/ngx-authentication';
import { OneTrustModule, OneTrustSettings } from '@hlx/ngx-branding';
import { SessionActivityModule } from '@hlx/ngx-session-activity';
import { provideTranslateService } from '@ngx-translate/core';

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
    provideNativeDateAdapter(),
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
    ),
    provideTranslateService({
      fallbackLang: 'en',
    }),
  ],
};
