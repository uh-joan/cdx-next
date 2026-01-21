import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AnalyticsModule, AnalyticsService } from '@cdx/ngx-analytics';
import {
  AuthenticationModule,
  HeaderGlobalUserProfileComponent,
} from '@cdx/ngx-authentication';
import { HeaderComponent, OneTrustModule } from '@cdx/ngx-branding';
import {
  HeaderGlobalSessionManagementDirective,
  SessionActivityModule,
} from '@cdx/ngx-session-activity';
import { TranslateModule } from '@ngx-translate/core';

import { AppComponent } from './app.component';
import { LanguageSelectorComponent } from './components/language-selector/language-selector.component';
import { ModeSelectorComponent } from './components/mode-selector/mode-selector.component';
import { ThemeSelectorComponent } from './components/theme-selector/theme-selector.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [
        HeaderComponent,
        AuthenticationModule.forRoot({
          appId: 'cdx',
          environment: 'dev-stable',
        }),
        SessionActivityModule.forRoot(),
        OneTrustModule.forRoot({
          domainId: '1c592d3f-d63c-42d7-9871-1b022f316498',
        }),
        AnalyticsModule.forRoot({
          appId: 'reference-app',
        }),
        RouterTestingModule,
        TranslateModule.forRoot({
          fallbackLang: 'en',
        }),
        HeaderGlobalUserProfileComponent,
        HeaderGlobalSessionManagementDirective,
        ModeSelectorComponent,
        ThemeSelectorComponent,
        LanguageSelectorComponent,
      ],
      providers: [AnalyticsService],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
