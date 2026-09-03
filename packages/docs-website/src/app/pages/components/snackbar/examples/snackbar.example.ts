import { Component, inject, signal } from '@angular/core';
import { MatButton, MatIconButton } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInput } from '@angular/material/input';
import {
  MatSnackBar,
  MatSnackBarAction,
  MatSnackBarActions,
  MatSnackBarLabel,
  MatSnackBarRef,
} from '@angular/material/snack-bar';

import { InputViewerComponent } from '../../../../core/example-viewer/example-viewer.model';

const htmlCode = `<div class="story">
    <mat-form-field>
        <mat-label>Snack bar duration (seconds)</mat-label>
        <input
            #duration
            matInput
            type="number"
            [value]="durationInSeconds()"
            (input)="durationInSeconds.set(duration.valueAsNumber)"
        />
    </mat-form-field>

    <button matButton="outlined"
        (click)="openSnackBar()"
        aria-label="Show an example snack-bar">
        Pizza party
    </button>
</div>`;

const htmlCode2 = `<span matSnackBarLabel>
  Snackbar supporting text
</span>
<span matSnackBarActions>
  <button
    matIconButton
    matSnackBarAction
    class="hlx-button-invert"
    aria-label="Dismiss"
    (click)="snackBarRef.dismissWithAction()"
  >
    <mat-icon>close</mat-icon>
  </button>
</span>`;

const styleCode = `.story {
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
}

.story ::ng-deep .mat-mdc-form-field-subscript-wrapper {
    display: none;
}`;

const tsCode = `import { Component, inject, signal } from '@angular/core';
import { MatButton, MatIconButton } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInput } from '@angular/material/input';
import {
  MatSnackBar,
  MatSnackBarAction,
  MatSnackBarActions,
  MatSnackBarLabel,
  MatSnackBarRef,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-pizza-party-snack',
  templateUrl: './pizza-party-snack.html',
  imports: [MatIconButton, MatIcon, MatSnackBarLabel, MatSnackBarActions, MatSnackBarAction],
})
export class PizzaPartySnack {
  protected readonly snackBarRef = inject(MatSnackBarRef);
}

@Component({
  selector: 'app-snackbar-example',
  templateUrl: './snackbar-example.html',
  styleUrl: './snackbar-example.scss',
  imports: [MatFormFieldModule, MatInput, MatButton],
})
export class SnackbarExample {
  private readonly snackBar = inject(MatSnackBar);

  protected readonly durationInSeconds = signal(5);

  protected openSnackBar(): void {
    this.snackBar.openFromComponent(PizzaPartySnack, {
      duration: this.durationInSeconds() * 1000,
    });
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
    MatIconButton,
    MatIcon,
    MatSnackBarLabel,
    MatSnackBarActions,
    MatSnackBarAction,
  ],
})
class PizzaPartyAnnotatedComponent {
  protected readonly snackBarRef = inject(MatSnackBarRef);
}

@Component({
  template: htmlCode,
  imports: [MatFormFieldModule, MatInput, MatButton],
  styles: [styleCode],
})
class SampleComponent {
  private readonly snackBar = inject(MatSnackBar);

  protected readonly durationInSeconds = signal(5);

  protected openSnackBar(): void {
    this.snackBar.openFromComponent(PizzaPartyAnnotatedComponent, {
      duration: this.durationInSeconds() * 1000,
    });
  }
}

export const SnackbarComponent: InputViewerComponent = {
  exampleName: 'Snackbar',
  dynamicComponent: SampleComponent,
  height: 58,
  hideCss: true,
  verticalView: true,
  htmlCode,
  cssCode: styleCode,
  tsCode,
};
