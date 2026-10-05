import '@angular/compiler';
import '@analogjs/vitest-angular/setup-snapshots';
import '@analogjs/vitest-angular/setup-serializers';

import { setupTestBed } from '@analogjs/vitest-angular/setup-testbed';
import { provideRouter } from '@angular/router';
import { provideTranslateService } from '@ngx-translate/core';
import { provideHighcharts } from 'highcharts-angular';
import { HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';

// Mirror the app-level providers from app.config.ts that most pages rely on,
// so individual specs don't each have to wire them up.
setupTestBed({
  providers: [
    provideRouter([]),
    provideHighcharts(),
    provideTranslateService({ fallbackLang: 'en' }),
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
});
