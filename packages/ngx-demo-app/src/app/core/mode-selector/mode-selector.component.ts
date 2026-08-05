import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'cdx-mode-selector',
  templateUrl: './mode-selector.component.html',
  styleUrls: ['./mode-selector.component.scss'],
  imports: [FormsModule, MatSlideToggleModule, MatIconModule],
})
export class ModeSelectorComponent implements OnInit {
  private themeService = inject(ThemeService);

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
