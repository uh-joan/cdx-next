import { TitleCasePipe } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterModule } from '@angular/router';
import { HeaderGlobalUserProfileComponent } from '@hlx/ngx-authentication';
import {
  FooterModule,
  HeaderComponent,
  HelixFooterComponent,
  HelixHeaderComponent,
  HelixHeaderGlobalComponent,
  HelixHeaderProductNameOrLogoComponent,
} from '@hlx/ngx-branding';
import { TranslatePipe } from '@ngx-translate/core';

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
    RouterModule,
    HeaderComponent,
    FooterModule,
    TranslatePipe,
    HeaderGlobalUserProfileComponent,
    HeaderGlobalUserProfileComponent,
    MatTabsModule,
    ModeSelectorComponent,
    ThemeSelectorComponent,
    LanguageSelectorComponent,
    LeftNavigationComponent,
    MatIconModule,
    TitleCasePipe,
    ModeSelectorComponent,
    ThemeSelectorComponent,
    LanguageSelectorComponent,
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent {
  themeService = inject(ThemeService);
  private currentTheme = toSignal(this.themeService.currentTheme$, {
    initialValue: '',
  });
  isHelix = computed(() => this.currentTheme() === 'helix');

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
