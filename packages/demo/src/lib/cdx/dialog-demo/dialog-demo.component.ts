import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { DialogExampleComponent } from './dialog-example.component';

/**
 * @title Dialog with header, scrollable content and actions
 */
@Component({
  selector: 'demo-dialog',

  templateUrl: 'dialog-demo.component.html',
})
export class DialogDemoComponent {
  dialog = inject(MatDialog);

  openDialog() {
    const dialogRef = this.dialog.open(DialogExampleComponent);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
