import { Component, OnInit, Renderer2 } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { TranslateModule } from '@ngx-translate/core';

import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'demo-mode-selector',
  templateUrl: './mode-selector.component.html',
  styleUrls: ['./mode-selector.component.scss'],
  imports: [FormsModule, MatSlideToggleModule, MatIconModule, TranslateModule],
})
export class ModeSelectorComponent implements OnInit {
  constructor(
    private themeService: ThemeService,
    private renderer: Renderer2,
  ) {}

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
