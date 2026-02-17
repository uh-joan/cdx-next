import { Component, computed, inject } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { TranslateModule } from '@ngx-translate/core';

import { ThemeService } from '../theme-selector/theme.service';

@Component({
  selector: 'app-mode-selector',
  templateUrl: './mode-selector.html',
  styleUrls: ['./mode-selector.scss'],
  imports: [MatSlideToggleModule, TranslateModule],
})
export class ModeSelector {
  private themeService = inject(ThemeService);

  readonly isDarkMode = computed(
    () => this.themeService.getThemeMode() === 'dark',
  );

  toggleMode(): void {
    const newMode = this.isDarkMode() ? 'light' : 'dark';
    this.themeService.setThemeMode(newMode);
  }
}
