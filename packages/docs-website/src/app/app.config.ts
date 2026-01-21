import { provideHttpClient, withFetch } from '@angular/common/http';
import {
  ApplicationConfig,
  importProvidersFrom,
  provideBrowserGlobalErrorListeners,
  provideZonelessChangeDetection,
} from '@angular/core';
import {
  provideRouter,
  withComponentInputBinding,
  withViewTransitions,
} from '@angular/router';
import { OneTrustModule } from '@cdx/ngx-branding';
import { TranslateModule } from '@ngx-translate/core';
import { provideHighcharts } from 'highcharts-angular';
import { HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideHttpClient(withFetch()),
    provideHighcharts({
      modules: () => [import('highcharts/modules/accessibility')],
    }),
    provideRouter(
      routes,
      withViewTransitions({
        skipInitialTransition: true,
      }),
      withComponentInputBinding(),
    ),
    importProvidersFrom(
      OneTrustModule.forRoot({
        domainId: '1c592d3f-d63c-42d7-9871-1b022f316498',
      }),
      TranslateModule.forRoot({
        fallbackLang: 'en',
      }),
    ),
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        coreLibraryLoader: () => import('highlight.js/lib/core'),
        languages: {
          typescript: () => import('highlight.js/lib/languages/typescript'),
          javascript: () => import('highlight.js/lib/languages/javascript'),
          css: () => import('highlight.js/lib/languages/css'),
          html: () => import('highlight.js/lib/languages/xml'),
        },
      },
    },
  ],
};
