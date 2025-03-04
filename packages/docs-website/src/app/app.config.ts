import {
  ApplicationConfig,
  importProvidersFrom,
  inject,
  provideZoneChangeDetection,
} from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  provideRouter,
  Router,
  withComponentInputBinding,
  withViewTransitions,
} from '@angular/router';
import { OneTrustModule } from '@cdx/ngx-branding';
import { TranslateModule } from '@ngx-translate/core';
import { HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(
      routes,
      withViewTransitions({
        skipInitialTransition: true,
      }),
      withComponentInputBinding(),
    ),
    importProvidersFrom(
      BrowserAnimationsModule,
      OneTrustModule.forRoot({
        domainId: '1c592d3f-d63c-42d7-9871-1b022f316498',
      }),
      TranslateModule.forRoot({
        defaultLanguage: 'en',
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
