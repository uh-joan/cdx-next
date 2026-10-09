import { provideHttpClient } from '@angular/common/http';
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
import { provideHelixIcons } from '@hlx/helix-icons';
import { OneTrustModule } from '@hlx/ngx-branding';
import { provideTranslateService } from '@ngx-translate/core';
import { provideHighcharts } from 'highcharts-angular';
import { HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideHttpClient(),
    provideHelixIcons(),
    provideHighcharts({
      modules: () => [import('highcharts/esm/modules/accessibility.js')],
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
    ),
    provideTranslateService({
      fallbackLang: 'en',
    }),
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
