import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  AnalyticsContextSchema,
  AnalyticsModule,
  CLARIVATE_IGLU_SCHEMA,
} from '@cdx/ngx-analytics';
import {
  AuthenticationModule,
  HeaderGlobalUserProfileModule,
} from '@cdx/ngx-authentication';
import {
  AvalonHeaderModule,
  FooterModule,
  HeaderModule,
  HelixFooterModule,
  HelixHeaderModule,
  OneTrustModule,
  OneTrustSettings,
} from '@cdx/ngx-branding';
import {
  HeaderGlobalSessionManagementModule,
  SessionActivityModule,
} from '@cdx/ngx-session-activity';
import { NgxTranslationsModule } from '@cdx/ngx-translations';
import { TranslateModule } from '@ngx-translate/core';

import { AppComponent } from './app.component';
import { AppRoutesModule } from './app.routes';
import { LanguageSelectorComponent } from './components/language-selector/language-selector.component';
import { ModeSelectorComponent } from './components/mode-selector/mode-selector.component';
import { ThemeSelectorComponent } from './components/theme-selector/theme-selector.component';

const ONE_TRUST_SETTINGS: OneTrustSettings = {
  domainId: '1c592d3f-d63c-42d7-9871-1b022f316498',
};

const ANALYTICS_CONTEXT: AnalyticsContextSchema = {
  schema: CLARIVATE_IGLU_SCHEMA,
  data: {
    contextProp: 'firstContextProp',
  },
};

@NgModule({
  declarations: [AppComponent],
  imports: [
    HeaderModule,
    FooterModule,
    OneTrustModule.forRoot(ONE_TRUST_SETTINGS),
    BrowserAnimationsModule,
    HeaderGlobalUserProfileModule,
    HeaderGlobalSessionManagementModule,
    MatIconModule,
    MatTabsModule,
    AnalyticsModule.forRoot(
      {
        appId: 'reference-app',
        options: {
          snowplowUrl:
            'https://snowplow-collector.staging.userintel.dev.sp.aws.clarivate.net',
        },
      },
      ANALYTICS_CONTEXT,
    ),
    AuthenticationModule.forRoot({
      appId: 'cdx',
      environment: 'dev-stable',
    }),
    SessionActivityModule.forRoot(),
    AppRoutesModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
    }),
    NgxTranslationsModule,
    ModeSelectorComponent,
    ThemeSelectorComponent,
    LanguageSelectorComponent,
    HelixHeaderModule,
    AvalonHeaderModule,
    HelixFooterModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
