import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthenticationModule } from '@cdx/ngx-authentication';
import { FooterModule, HeaderModule } from '@cdx/ngx-branding';
import { SessionActivityModule } from '@cdx/ngx-session-activity';

import { AppComponent } from './app.component';
import { AppRoutesModule } from './app.routes';

@NgModule({
  declarations: [AppComponent],
  imports: [
    HeaderModule,
    FooterModule,
    BrowserAnimationsModule,
    MatButtonModule,
    AuthenticationModule.forRoot({
      appId: 'cdx',
      environment: 'dev-stable',
    }),
    SessionActivityModule.forRoot({
      expireDurationMinutes: 8.1,
      expireWarningMinutes: 8,
      pingIntervalMinutes: 20,
    }),
    AppRoutesModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
