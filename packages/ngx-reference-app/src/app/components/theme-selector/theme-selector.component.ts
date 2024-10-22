import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { TranslateModule } from '@ngx-translate/core';

import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'theme-selector',
  templateUrl: './theme-selector.component.html',
  styleUrls: ['./theme-selector.component.scss'],
  standalone: true,
  imports: [
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    CommonModule,
    MatSelectModule,
    TranslateModule,
  ],
})
export class ThemeSelectorComponent {
  currentTheme = '';
  themes;
  currentMode$;

  constructor(private themeService: ThemeService) {
    this.currentTheme = this.themeService.currentTheme$.getValue();
    this.themes = this.themeService.themes;
    this.currentMode$ = this.themeService.currentThemeMode$;
  }

  selectTheme(theme: string) {
    this.themeService.selectTheme(theme);
  }
}
