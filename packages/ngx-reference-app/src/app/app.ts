import { Component, computed, effect, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import {
  AnalyticsContextData,
  AnalyticsContextSchema,
  AnalyticsService,
  CLARIVATE_IGLU_SCHEMA,
} from '@hlx/ngx-analytics';

import { ThemeService } from '../core/layout/theme-selector/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.scss'],
  imports: [RouterOutlet],
})
export class App {
  readonly themeService = inject(ThemeService);
  private analyticsService = inject(AnalyticsService);
  private router = inject(Router);

  readonly isNavigating = computed(() => !!this.router.currentNavigation());

  constructor() {
    effect(() => {
      if (!this.isNavigating()) {
        const url = this.router.routerState.root.component;
        if (url) {
          this.trackPageView(this.router.url);
        }
      }
    });
  }

  onClickLogo(): void {
    this.analyticsService.trackEvent({
      action: 'Header',
      category: 'click',
      label: 'Clarivate Logo',
      context: [
        {
          schema: CLARIVATE_IGLU_SCHEMA,
          data: {
            test: 'test',
          },
        },
      ],
    });
  }

  trackPageView(url: string): void {
    this.analyticsService.trackPageView({ title: url });
  }

  private createNewGlobalContext(): void {
    const newContext: AnalyticsContextSchema = {
      schema: CLARIVATE_IGLU_SCHEMA,
      data: {
        newProp: 'newProp',
      },
    };
    this.analyticsService.resetContext(newContext);
  }

  private updateCurrentGlobalContext(): void {
    const newContextData: AnalyticsContextData = {
      contextProp: 'updatedContextProp',
      newProp: 'newProp',
    };
    this.analyticsService.updateContextData(newContextData);
  }
}
