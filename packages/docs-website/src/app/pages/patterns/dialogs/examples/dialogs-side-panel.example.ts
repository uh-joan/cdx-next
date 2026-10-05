import { Component, inject } from '@angular/core';
import { MatButton, MatIconButton } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIcon } from '@angular/material/icon';

import { InputViewerComponent } from '../../../../core/example-viewer/example-viewer.model';
import { ensureDialogSizeStyles } from './dialog-size-styles';

const htmlCode = `<div class="story">
  <button matButton="outlined" (click)="openDetails()">Open details panel</button>
</div>`;

const dialogTemplate = `<h2 mat-dialog-title>
  Pembrolizumab
  <button matIconButton mat-dialog-close aria-label="Close" class="title-close">
    <mat-icon>close</mat-icon>
  </button>
</h2>
<mat-dialog-content>
  <p>A right-docked panel keeps the detail beside the user's place in the list,
  rather than navigating away.</p>
  <p>Use the <code>side</code> size for contextual detail; use a page when the
  content is a destination in its own right.</p>
</mat-dialog-content>
<mat-dialog-actions align="end">
  <button matButton mat-dialog-close>Close</button>
</mat-dialog-actions>`;

@Component({
  selector: 'app-details-panel',
  template: dialogTemplate,
  imports: [MatDialogModule, MatButton, MatIconButton, MatIcon],
  styles: [
    `h2[mat-dialog-title] { display: flex; align-items: center; justify-content: space-between; }
     .title-close { margin: -0.5rem -0.5rem -0.5rem 0; }`,
  ],
})
class DetailsPanel {}

@Component({
  template: htmlCode,
  imports: [MatButton, MatDialogModule],
  styles: [`.story { padding: 1rem; }`],
})
class SampleComponent {
  private readonly dialog = inject(MatDialog);

  constructor() {
    ensureDialogSizeStyles();
  }

  openDetails(): void {
    this.dialog.open(DetailsPanel, { panelClass: 'hlx-dialog-side' });
  }
}

export const DialogsSidePanel: InputViewerComponent = {
  exampleName: 'Right-docked side panel',
  dynamicComponent: SampleComponent,
  height: 16,
  htmlCode,
  cssCode: dialogTemplate,
  tsCode: `import { Component, inject } from '@angular/core';
import { MatButton, MatIconButton } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIcon } from '@angular/material/icon';
import { helixDialog } from './helix-dialog';

@Component({
  selector: 'app-details-panel',
  template: \`
    <h2 mat-dialog-title>
      Pembrolizumab
      <button matIconButton mat-dialog-close aria-label="Close">
        <mat-icon>close</mat-icon>
      </button>
    </h2>
    <mat-dialog-content>…</mat-dialog-content>
    <mat-dialog-actions align="end">
      <button matButton mat-dialog-close>Close</button>
    </mat-dialog-actions>\`,
  imports: [MatDialogModule, MatButton, MatIconButton, MatIcon],
})
export class DetailsPanel {}

@Component({ /* host */ })
export class ResultRow {
  private readonly dialog = inject(MatDialog);
  openDetails(): void {
    this.dialog.open(DetailsPanel, helixDialog('side'));
  }
}`,
};
