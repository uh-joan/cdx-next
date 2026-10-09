import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';

import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'cdx-theme-selector',
  templateUrl: './theme-selector.component.html',
  styleUrls: ['./theme-selector.component.scss'],
  imports: [
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    CommonModule,
    MatTooltipModule,
    MatSelectModule,
  ],
})
export class ThemeSelectorComponent {
  currentTheme = '';
  themeService: ThemeService = inject(ThemeService);
  themes = this.themeService.themes;

  constructor() {
    this.currentTheme = this.themeService.currentTheme();
  }

  currentMode = this.themeService.currentThemeMode;

  selectTheme(theme: string) {
    this.themeService.selectTheme(theme);
  }
}
