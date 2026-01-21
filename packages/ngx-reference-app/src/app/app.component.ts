import { Component, inject, ViewEncapsulation } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import {
  AnalyticsContextData,
  AnalyticsContextSchema,
  AnalyticsService,
  CLARIVATE_IGLU_SCHEMA,
} from '@cdx/ngx-analytics';
import {
  HelixFooterComponent,
  HelixHeaderComponent,
  HelixHeaderGlobalComponent,
  HelixHeaderProductNameOrLogoComponent,
} from '@cdx/ngx-branding';
import { filter, map } from 'rxjs';

import { LanguageSelectorComponent } from './components/language-selector/language-selector.component';
import { ModeSelectorComponent } from './components/mode-selector/mode-selector.component';
import { ThemeSelectorComponent } from './components/theme-selector/theme-selector.component';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'cdx-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
  imports: [
    RouterOutlet,
    MatIconModule,
    MatTabsModule,
    ModeSelectorComponent,
    ThemeSelectorComponent,
    LanguageSelectorComponent,
    HelixHeaderComponent,
    HelixHeaderProductNameOrLogoComponent,
    HelixHeaderGlobalComponent,
    HelixFooterComponent,
  ],
})
export class AppComponent {
  routerEvents$;

  themeService: ThemeService = inject(ThemeService);
  private analyticsService: AnalyticsService = inject(AnalyticsService);
  private router: Router = inject(Router);

  constructor() {
    this.routerEvents$ = this.router.events
      .pipe(
        filter((ev) => ev instanceof NavigationEnd),
        map((ev) => this.trackPageView((ev as NavigationEnd).url)),
      )
      .subscribe();
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
