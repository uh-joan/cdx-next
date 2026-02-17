import { Component, HostBinding, inject, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HighlightModule } from 'ngx-highlightjs';

@Component({
  selector: 'cdx-highlight',
  templateUrl: './highlight.html',
  styleUrls: ['./highlight.scss'],
  imports: [HighlightModule, MatButtonModule, MatIconModule],
})
export class Highlight {
  private _snackBar = inject(MatSnackBar);
  @HostBinding('class') get themeClass() {
    return this.theme() === 'dark' ? 'dark-theme' : 'light-theme';
  }

  durationInSeconds = input(1);

  text = input.required<string>();
  language = input<string>('typescript');
  theme = input<'light' | 'dark'>('dark');

  copyText() {
    navigator.clipboard.writeText(this.text()).then(() => {
      this._snackBar.open('Copied to clipboard', undefined, {
        duration: this.durationInSeconds() * 1000,
      });
    });
  }
}
