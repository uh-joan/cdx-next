import { TitleCasePipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { TranslateModule } from '@ngx-translate/core';

import { ThemeService } from './theme.service';

@Component({
  selector: 'app-theme-selector',
  templateUrl: './theme-selector.html',
  styleUrls: ['./theme-selector.scss'],
  imports: [
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatSelectModule,
    TranslateModule,
    TitleCasePipe,
  ],
})
export class ThemeSelector {
  readonly themeService = inject(ThemeService);

  selectTheme(theme: string) {
    this.themeService.selectTheme(theme);
  }
}
