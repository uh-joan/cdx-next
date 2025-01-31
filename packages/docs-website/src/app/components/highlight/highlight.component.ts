import { Component, inject, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HighlightModule } from 'ngx-highlightjs';

@Component({
  selector: 'cdx-highlight',
  templateUrl: './highlight.component.html',
  styleUrls: ['./highlight.component.scss'],
  standalone: true,
  imports: [HighlightModule, MatButtonModule, MatIconModule],
})
export class HighlightComponent {
  private _snackBar = inject(MatSnackBar);

  private durationInSeconds = 1;

  @Input() text = '';
  @Input() language = 'typescript';

  copyText() {
    navigator.clipboard.writeText(this.text).then(() => {
      this._snackBar.open('Copied to clipboard', undefined, {
        duration: this.durationInSeconds * 1000,
      });
    });
  }
}
