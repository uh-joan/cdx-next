import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterModule } from '@angular/router';
import { HeaderGlobalUserProfileModule } from '@cdx/ngx-authentication';
import { FooterModule, HeaderModule } from '@cdx/ngx-branding';
import { HeaderGlobalSessionManagementModule } from '@cdx/ngx-session-activity';
import { TranslateModule } from '@ngx-translate/core';

import { LanguageSelectorComponent } from '../language-selector/language-selector.component';
import { LeftNavigationComponent } from '../left-navigation/left-navigation.component';
import { ModeSelectorComponent } from '../mode-selector/mode-selector.component';
import { ThemeSelectorComponent } from '../theme-selector/theme-selector.component';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    HeaderModule,
    FooterModule,
    TranslateModule,
    HeaderGlobalUserProfileModule,
    HeaderGlobalSessionManagementModule,
    MatTabsModule,
    ModeSelectorComponent,
    ThemeSelectorComponent,
    LanguageSelectorComponent,
    LeftNavigationComponent,
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

  isActive(path: string): boolean {
    return path == window.location.pathname.substring(1);
  }
}
