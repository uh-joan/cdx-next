import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { ThemeService } from '@cdx/theme-angular-material';
import { TranslateModule } from '@ngx-translate/core';

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
  THEMES = ['purple', 'teal', 'blue'];

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

    document.body.classList.remove('cdx-theme-blue');
    document.body.classList.remove('cdx-theme-teal');
    document.body.classList.remove('cdx-theme-purple');
    document.body.classList.add(`cdx-theme-${this.currentTheme}`);
  }
}
