import { Component, DestroyRef, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatButton } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

import { InputViewerComponent } from '../../../../core/example-viewer/example-viewer.model';
import { ensureDialogSizeStyles } from './dialog-size-styles';

const htmlCode = `<div class="story">
  <button matButton="filled" class="hlx-btn-negative" (click)="confirmDelete()">
    Delete watch
  </button>

  @if (result(); as r) {
    <p>You chose: {{ r }}</p>
  }
</div>`;

const dialogTemplate = `<h2 mat-dialog-title>Delete this watch?</h2>
<mat-dialog-content>
  <p>You'll stop receiving alerts for Pembrolizumab. This can't be undone.</p>
</mat-dialog-content>
<mat-dialog-actions align="end">
  <button matButton mat-dialog-close>Cancel</button>
  <button matButton="filled" class="hlx-btn-negative" [mat-dialog-close]="true">
    Delete
  </button>
</mat-dialog-actions>`;

@Component({
  selector: 'app-confirm-delete-dialog',
  template: dialogTemplate,
  imports: [MatDialogModule, MatButton],
})
class ConfirmDeleteDialog {}

@Component({
  template: htmlCode,
  imports: [MatButton, MatDialogModule],
  styles: [`.story { padding: 1rem; }`],
})
class SampleComponent {
  private readonly dialog = inject(MatDialog);
  private readonly destroyRef = inject(DestroyRef);
  readonly result = signal<string | null>(null);

  constructor() {
    ensureDialogSizeStyles();
  }

  confirmDelete(): void {
    // helixDialog('sm', …) in a real app; inlined here so the example is self-contained.
    this.dialog
      .open(ConfirmDeleteDialog, { panelClass: 'hlx-dialog-sm' })
      .afterClosed()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((confirmed) =>
        this.result.set(confirmed ? 'Delete' : 'Cancel'),
      );
  }
}

export const DialogsConfirmDestructive: InputViewerComponent = {
  exampleName: 'Confirm a destructive action',
  dynamicComponent: SampleComponent,
  height: 20,
  htmlCode,
  cssCode: dialogTemplate,
  tsCode: `import { Component, DestroyRef, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatButton } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { helixDialog } from './helix-dialog'; // the size helper from this pattern

@Component({
  selector: 'app-confirm-delete-dialog',
  template: \`
    <h2 mat-dialog-title>Delete this watch?</h2>
    <mat-dialog-content>
      <p>You'll stop receiving alerts for Pembrolizumab. This can't be undone.</p>
    </mat-dialog-content>
    <mat-dialog-actions align="end">
      <button matButton mat-dialog-close>Cancel</button>
      <button matButton="filled" class="hlx-btn-negative" [mat-dialog-close]="true">
        Delete
      </button>
    </mat-dialog-actions>\`,
  imports: [MatDialogModule, MatButton],
})
export class ConfirmDeleteDialog {}

@Component({ /* host component */ })
export class WatchActions {
  private readonly dialog = inject(MatDialog);
  private readonly destroyRef = inject(DestroyRef);
  readonly result = signal<string | null>(null);

  confirmDelete(): void {
    this.dialog
      .open(ConfirmDeleteDialog, helixDialog('sm'))
      .afterClosed()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((confirmed) => this.result.set(confirmed ? 'Delete' : 'Cancel'));
  }
}`,
};
