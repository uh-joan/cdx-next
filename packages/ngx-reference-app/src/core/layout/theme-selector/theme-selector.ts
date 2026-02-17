import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { TranslateModule } from '@ngx-translate/core';

import { ThemeService } from './theme.service';

@Component({
  selector: 'app-theme-selector',
  templateUrl: './theme-selector.html',
  styleUrls: ['./theme-selector.scss'],
  imports: [
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    CommonModule,
    MatSelectModule,
    TranslateModule,
  ],
})
export class ThemeSelector {
  currentTheme = '';
  themes;
  currentMode$;

  private themeService: ThemeService = inject(ThemeService);

  constructor() {
    this.currentTheme = this.themeService.currentTheme$.getValue();
    this.themes = this.themeService.themes;
    this.currentMode$ = this.themeService.currentThemeMode$;
  }

  selectTheme(theme: string) {
    this.themeService.selectTheme(theme);
  }
}
