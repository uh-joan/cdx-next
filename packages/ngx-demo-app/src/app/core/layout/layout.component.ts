import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterModule } from '@angular/router';
import { HeaderGlobalUserProfileComponent } from '@cdx/ngx-authentication';
import {
  FooterModule,
  HeaderModule,
  HelixFooterComponent,
  HelixHeaderComponent,
  HelixHeaderGlobalComponent,
  HelixHeaderProductNameOrLogoComponent,
} from '@cdx/ngx-branding';
import { TranslateModule } from '@ngx-translate/core';
import { map } from 'rxjs';

import { ThemeService } from '../../services/theme.service';
import { LanguageSelectorComponent } from '../language-selector/language-selector.component';
import { LeftNavigationComponent } from '../left-navigation/left-navigation.component';
import { ModeSelectorComponent } from '../mode-selector/mode-selector.component';
import { ThemeSelectorComponent } from '../theme-selector/theme-selector.component';

@Component({
  imports: [
    HelixHeaderComponent,
    HelixHeaderGlobalComponent,
    HelixHeaderProductNameOrLogoComponent,
    HelixFooterComponent,
    CommonModule,
    RouterModule,
    HeaderModule,
    FooterModule,
    TranslateModule,
    HeaderGlobalUserProfileComponent,
    HeaderGlobalSessionManagementModule,
    MatTabsModule,
    ModeSelectorComponent,
    ThemeSelectorComponent,
    LanguageSelectorComponent,
    LeftNavigationComponent,
    MatIconModule,
    ModeSelectorComponent,
    ThemeSelectorComponent,
    LanguageSelectorComponent,
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent {
  links = [
    { name: 'APP.HOME', path: 'home' },
    { name: 'SEARCH.TITLE', path: 'search' },
    { name: 'RESULTS.TITLE', path: 'results' },
    { name: 'DASHBOARD.TITLE', path: 'dashboard' },
  ];

  isHelix$ = this.themeService.currentTheme$.pipe(
    map((theme) => {
      return theme === 'helix';
    }),
  );

  constructor(public themeService: ThemeService) {}

  isActive(path: string): boolean {
    return path == window.location.pathname.substring(1);
  }
}
