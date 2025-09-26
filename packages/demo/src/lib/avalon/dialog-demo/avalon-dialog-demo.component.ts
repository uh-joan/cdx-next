import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { AvalonComplexDialogExampleComponent } from './avalon-complex-dialog-example.component';
import { AvalonSimpleDialogExampleComponent } from './avalon-simple-dialog-example.component';

/**
 * @title Dialog with header, scrollable content and actions
 */
@Component({
  selector: 'demo-avalon-dialog',

  templateUrl: 'avalon-dialog-demo.component.html',
})
export class AvalonDialogDemoComponent {
  dialog = inject(MatDialog);

  openDialog(type: 'simple' | 'complex') {
    const component =
      type === 'simple'
        ? AvalonSimpleDialogExampleComponent
        : AvalonComplexDialogExampleComponent;

    const dialogRef = this.dialog.open(component);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
