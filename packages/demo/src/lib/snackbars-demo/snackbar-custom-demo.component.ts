import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { SnackbarExampleComponent } from './snackbar-example.component';

/**
 * @title Snack-bar with a custom component
 */
@Component({
  selector: 'demo-snack-bar-custom',
  templateUrl: 'snackbar-custom-demo.component.html',
})
export class SnackBarCustomDemoComponent {
  durationInSeconds = 5;

  constructor(private _snackBar: MatSnackBar) {}

  openSnackBar() {
    this._snackBar.openFromComponent(SnackbarExampleComponent, {
      duration: this.durationInSeconds * 1000,
    });
  }
}
