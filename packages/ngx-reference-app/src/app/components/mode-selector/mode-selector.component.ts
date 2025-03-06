import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { TranslateModule } from '@ngx-translate/core';

import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'mode-selector',
  templateUrl: './mode-selector.component.html',
  styleUrls: ['./mode-selector.component.scss'],
  imports: [FormsModule, MatSlideToggleModule, TranslateModule],
})
export class ModeSelectorComponent implements OnInit {
  constructor(private themeService: ThemeService) {}

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
