import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { TranslateModule } from '@ngx-translate/core';

import { ThemeService } from '../theme-selector/theme.service';

@Component({
  selector: 'app-mode-selector',
  templateUrl: './mode-selector.html',
  styleUrls: ['./mode-selector.scss'],
  imports: [FormsModule, MatSlideToggleModule, TranslateModule],
})
export class ModeSelector implements OnInit {
  private themeService: ThemeService = inject(ThemeService);

  isDarkMode = false;

  ngOnInit(): void {
    this.isDarkMode = this.themeService.getThemeMode() === 'dark';
  }

  toggleMode(): void {
    if (this.isDarkMode) {
      this.themeService.setThemeMode('light');
    } else {
      this.themeService.setThemeMode('dark');
    }
  }
}
