import { CommonModule } from '@angular/common';
import { Component, inject, input, signal } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-color-pill',
  imports: [CommonModule, MatIconModule, MatRippleModule],
  templateUrl: './color-pill.component.html',
  styleUrls: ['./color-pill.component.scss'],
})
export class ColorPillComponent {
  value = input.required<string>();
  copied = signal(false);
  private _snackBar = inject(MatSnackBar);

  private durationInSeconds = 1;

  copyToClipboard() {
    navigator.clipboard.writeText(this.value()).then(() => {
      this._snackBar.open(
        `Color ${this.value().toUpperCase()} copied to clipboard`,
        undefined,
        {
          duration: this.durationInSeconds * 1000,
        },
      );
      this.copied.set(true);
      setTimeout(() => this.copied.set(false), 1000);
    });
  }
}
