import { Component, ViewEncapsulation } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import {
  AnalyticsContextData,
  AnalyticsContextSchema,
  AnalyticsService,
  CLARIVATE_IGLU_SCHEMA,
} from '@cdx/ngx-analytics';
import { filter, map } from 'rxjs';

import { ThemeService } from './services/theme.service';

@Component({
  selector: 'cdx-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  routerEvents$;

  isHelix$;
  isAvalon$;

  constructor(
    public themeService: ThemeService,
    private analyticsService: AnalyticsService,
    private router: Router,
  ) {
    this.routerEvents$ = this.router.events
      .pipe(
        filter((ev) => ev instanceof NavigationEnd),
        map((ev) => this.trackPageView((ev as NavigationEnd).url)),
      )
      .subscribe();

    this.isHelix$ = this.themeService.currentTheme$.pipe(
      map((theme) => {
        return theme === 'helix';
      }),
    );

    this.isAvalon$ = this.themeService.currentTheme$.pipe(
      map((theme) => {
        return ['avalon', 'innography', 'derwent'].includes(theme);
      }),
    );
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
