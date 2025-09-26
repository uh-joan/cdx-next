import { Component, inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

/**
 * @title Basic snack-bar
 */
@Component({
  selector: 'demo-snack-bar',

  templateUrl: './snackbar-demo.component.html',
})
export class SnackBarDemoComponent {
  private _snackBar: MatSnackBar = inject(MatSnackBar);

  openSnackBar() {
    this._snackBar.open('Add your snackbar message here', 'Action Text', {
      duration: 5000, //Can be any number, but must be in milliseconds
    });
  }
}
