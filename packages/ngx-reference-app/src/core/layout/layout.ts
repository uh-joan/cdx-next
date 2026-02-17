import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { AuthenticationModule } from '@cdx/ngx-authentication';
import {
  FooterModule,
  HelixFooterComponent,
  HelixFooterLinkDirective,
  HelixHeaderComponent,
  HelixHeaderGlobalComponent,
  HelixHeaderProductNameOrLogoComponent,
} from '@cdx/ngx-branding';
import { NgxTranslationsModule } from '@cdx/ngx-translations';
import { TranslateModule } from '@ngx-translate/core';

import { LanguageSelector } from './language-selector/language-selector';
import { ModeSelector } from './mode-selector/mode-selector';
import { ThemeSelector } from './theme-selector/theme-selector';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.html',
  styleUrls: ['./layout.scss'],
  imports: [
    FooterModule,
    MatIconModule,
    MatTabsModule,
    TranslateModule,
    NgxTranslationsModule,
    ModeSelector,
    ThemeSelector,
    LanguageSelector,
    HelixHeaderComponent,
    HelixHeaderProductNameOrLogoComponent,
    HelixHeaderGlobalComponent,
    HelixFooterComponent,
    HelixFooterLinkDirective,
    AuthenticationModule,
  ],
})
export class Layout {}
