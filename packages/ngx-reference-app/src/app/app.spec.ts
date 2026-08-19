import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AnalyticsModule, AnalyticsService } from '@cdx/ngx-analytics';

import { ThemeService } from '../core/layout/theme-selector/theme.service';
import { App } from './app';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        App,
        RouterTestingModule,
        AnalyticsModule.forRoot({
          appId: 'reference-app',
        }),
      ],
      providers: [AnalyticsService, ThemeService],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
