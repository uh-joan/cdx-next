import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TranslateModule } from '@ngx-translate/core';

import { ThemeService } from '../../services/theme.service';

@Component({
    selector: 'demo-theme-selector',
    templateUrl: './theme-selector.component.html',
    styleUrls: ['./theme-selector.component.scss'],
    imports: [
        MatIconModule,
        MatButtonModule,
        MatMenuModule,
        CommonModule,
        MatTooltipModule,
        MatSelectModule,
        TranslateModule,
    ]
})
export class ThemeSelectorComponent {
  currentTheme = '';
  themes = this.themeService.themes;

  constructor(private themeService: ThemeService) {
    this.currentTheme = this.themeService.currentTheme$.getValue();
  }

  currentMode$ = this.themeService.currentThemeMode$;

  selectTheme(theme: string) {
    this.themeService.selectTheme(theme);
  }
}
