import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { DialogExampleComponent } from './dialog-example.component';

/**
 * @title Dialog with header, scrollable content and actions
 */
@Component({
  selector: 'demo-dialog',
  standalone: false,
  templateUrl: 'dialog-demo.component.html',
})
export class DialogDemoComponent {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(DialogExampleComponent);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
