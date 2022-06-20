import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AnalyticsModule, AnalyticsService } from '@cdx/ngx-analytics';
import { AuthenticationModule } from '@cdx/ngx-authentication';
import { HeaderModule, OneTrustModule } from '@cdx/ngx-branding';
import { SessionActivityModule } from '@cdx/ngx-session-activity';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [
        HeaderModule,
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
