import { TestBed } from '@angular/core/testing';
import { AuthenticationModule } from '@cdx/ngx-authentication';
import { HeaderModule } from '@cdx/ngx-branding';
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
        }),
        SessionActivityModule.forRoot(),
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
