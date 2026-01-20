import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import {
  MatSnackBar,
  MatSnackBarAction,
  MatSnackBarActions,
  MatSnackBarLabel,
  MatSnackBarRef,
} from '@angular/material/snack-bar';
import { InputViewerComponent } from 'src/app/core/example-viewer/example-viewer.model';

const htmlCode = `<div class="story">
    <mat-form-field>
        <mat-label>Snack bar duration (seconds)</mat-label>
        <input type="number"
            [(ngModel)]="durationInSeconds" matInput>
    </mat-form-field>

    <button mat-stroked-button
        (click)="openSnackBar()"
        aria-label="Show an example snack-bar">
        Pizza party
    </button>
</div>`;

const htmlCode2 = `<span matSnackBarLabel>
  Snackbbar supporting text
</span>
<span matSnackBarActions>
  <button mat-icon-button matSnackBarAction class="hlx-button-invert" (click)="snackBarRef.dismissWithAction()">
    <mat-icon>close</mat-icon>
</button>
</span>`;

const styleCode = `.story {
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;

    ::ng-deep .mat-mdc-form-field-subscript-wrapper {
        display: none;
    }
}`;

@Component({
  selector: 'app-snack-bar-annotated-component-example-snack',
  template: htmlCode2,
  styles: `
    :host {
      display: flex;
    }
  `,
  imports: [
    MatButtonModule,
    MatIconModule,
    MatSnackBarLabel,
    MatSnackBarActions,
    MatSnackBarAction,
  ],
})
class PizzaPartyAnnotatedComponent {
  snackBarRef = inject(MatSnackBarRef);
}

@Component({
  template: htmlCode,
  imports: [MatFormFieldModule, FormsModule, MatInputModule, MatButtonModule],
  styles: styleCode,
})
class SampleComponent {
  private _snackBar = inject(MatSnackBar);

  durationInSeconds = 5;

  openSnackBar() {
    this._snackBar.openFromComponent(PizzaPartyAnnotatedComponent, {
      duration: this.durationInSeconds * 1000,
    });
  }
}

export const SnackbarComponent: InputViewerComponent = {
  exampleName: 'Snackbar',
  dynamicComponent: SampleComponent,
  height: 58,
  hideCss: true,
  verticalView: true,
  htmlCode: htmlCode,
  cssCode: styleCode,
  tsCode: `import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

@Component({
    selector: 'app-content-example-dialog',
    template: htmlCode2,
    imports: [MatDialogModule, MatButtonModule],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
class DialogContentExampleDialog {}

@Component({
    template: htmlCode,
    imports: [
        MatButtonModule,
        MatDialogModule
    ],
    styles: styleCode,
})
class SampleComponent {
    readonly dialog = inject(MatDialog);

    openDialog() {
      const dialogRef = this.dialog.open(DialogContentExampleDialog);

      dialogRef.afterClosed().subscribe(result => {
        console.log('Dialog result:', result);
      });
    }
}`,
};
