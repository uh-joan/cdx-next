import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
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
export class ThemeSelectorComponent implements OnInit {
  THEMES = ['purple', 'teal', 'blue', 'custom', 'helix', 'avalon', 'legacy'];

  currentTheme = 'purple';

  constructor(private themeService: ThemeService) {}

  currentMode$ = this.themeService.currentThemeMode$;

  ngOnInit(): void {
    const themeColor = localStorage.getItem('themeColor');
    if (themeColor && this.THEMES.includes(themeColor)) {
      this.selectTheme(themeColor);
    }
  }

  selectTheme(theme: string): void {
    this.currentTheme = theme;
    localStorage.setItem('themeColor', theme);

    document.body.classList.forEach((className) => {
      if (className.startsWith('cdx-theme-')) {
        document.body.classList.remove(className);
      }
    });
    document.body.classList.add(`cdx-theme-${this.currentTheme}`);
  }
}
