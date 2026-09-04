import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterModule } from '@angular/router';
import {
  FooterModule,
  HelixFooterComponent,
  HelixFooterLinkDirective,
  HelixHeaderComponent,
  HelixHeaderGlobalComponent,
  HelixHeaderProductNameOrLogoComponent,
} from '@cdx/ngx-branding';
import { NgxTranslationsModule } from '@cdx/ngx-translations';

import { LanguageSelector } from './language-selector/language-selector';
import { ModeSelector } from './mode-selector/mode-selector';
import { ThemeSelector } from './theme-selector/theme-selector';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.html',
  styleUrls: ['./layout.scss'],
  imports: [
    RouterModule,
    FooterModule,
    MatButton,
    MatIcon,
    MatTabsModule,
    NgxTranslationsModule,
    ModeSelector,
    ThemeSelector,
    LanguageSelector,
    HelixHeaderComponent,
    HelixHeaderProductNameOrLogoComponent,
    HelixHeaderGlobalComponent,
    HelixFooterComponent,
    HelixFooterLinkDirective,
  ],
})
export class Layout {}
