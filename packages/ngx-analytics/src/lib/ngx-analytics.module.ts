import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';

import {
  ANALYTICS_CONTEXT_DATA,
  ANALYTICS_INITIALIZER,
  ANALYTICS_SETTINGS,
} from './ngx-analytics.injectors';
import {
  AnalyticsContextSchema,
  AnalyticsSettings,
} from './ngx-analytics.model';
import { AnalyticsService } from './ngx-analytics.service';

@NgModule({
  imports: [CommonModule],
})
export class AnalyticsModule {
  static forRoot(
    settings: AnalyticsSettings,
    context?: AnalyticsContextSchema,
  ): ModuleWithProviders<AnalyticsModule> {
    return {
      ngModule: AnalyticsModule,
      providers: [
        {
          provide: ANALYTICS_SETTINGS,
          useValue: settings,
        },
        {
          provide: ANALYTICS_CONTEXT_DATA,
          useValue: context,
        },
        ANALYTICS_INITIALIZER,
        AnalyticsService,
      ],
    };
  }

  static forChild(): ModuleWithProviders<AnalyticsModule> {
    return {
      ngModule: AnalyticsModule,
      providers: [AnalyticsService],
    };
  }
}
