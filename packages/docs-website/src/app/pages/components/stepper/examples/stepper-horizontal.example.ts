import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';

import { InputViewerComponent } from '../../../../core/example-viewer/example-viewer.model';

const htmlCode = `<div class="story">
  <button matButton="filled" class="story__toggle" (click)="toggleEditable()">
    {{ isEditable() ? 'Disable edit mode' : 'Enable edit mode' }}
  </button>

  <mat-stepper linear #stepper>
    <mat-step [stepControl]="firstFormGroup" [editable]="isEditable()">
      <form [formGroup]="firstFormGroup">
        <ng-template matStepLabel>Fill out your name</ng-template>
        <mat-form-field>
          <mat-label>Name</mat-label>
          <input matInput formControlName="firstCtrl" 
            placeholder="Last name, First name" required>
        </mat-form-field>
        <div>
          <button matButton matStepperNext>Next</button>
        </div>
      </form>
    </mat-step>
    <mat-step [stepControl]="secondFormGroup" [editable]="isEditable()">
      <form [formGroup]="secondFormGroup">
        <ng-template matStepLabel>Fill out your address</ng-template>
        <mat-form-field>
          <mat-label>Address</mat-label>
          <input matInput formControlName="secondCtrl" 
            placeholder="Ex. 1 Main St, New York, NY"
                required>
        </mat-form-field>
        <div>
          <button matButton matStepperPrevious>Back</button>
          <button matButton matStepperNext>Next</button>
        </div>
      </form>
    </mat-step>
    <mat-step>
      <ng-template matStepLabel>Done</ng-template>
      <p>You are now done.</p>
      <div>
        <button matButton matStepperPrevious>Back</button>
        <button matButton (click)="stepper.reset()">Reset</button>
      </div>
    </mat-step>
  </mat-stepper>
</div>`;

const styleCode = `.story {
  padding: 1rem;
}

.story__toggle {
  margin-bottom: 1rem;
}`;

const tsCode = `import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';

// mat-stepper still uses reactive forms because [stepControl] needs an
// AbstractControl; only the local UI state is a signal.
@Component({
  selector: 'app-stepper-horizontal-example',
  templateUrl: './stepper-horizontal-example.html',
  styleUrl: './stepper-horizontal-example.scss',
  imports: [MatStepperModule, MatFormFieldModule, MatInput, ReactiveFormsModule, MatButton],
})
export class StepperHorizontalExample {
  private readonly formBuilder = inject(FormBuilder);

  protected readonly firstFormGroup = this.formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  protected readonly secondFormGroup = this.formBuilder.group({
    secondCtrl: ['', Validators.required],
  });

  protected readonly isEditable = signal(false);

  protected toggleEditable(): void {
    this.isEditable.update((editable) => !editable);
  }
}`;

@Component({
  template: htmlCode,
  imports: [
    MatStepperModule,
    MatFormFieldModule,
    MatInput,
    ReactiveFormsModule,
    MatButton,
  ],
  styles: [styleCode],
})
class SampleComponent {
  private readonly formBuilder = inject(FormBuilder);

  protected readonly firstFormGroup = this.formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  protected readonly secondFormGroup = this.formBuilder.group({
    secondCtrl: ['', Validators.required],
  });

  protected readonly isEditable = signal(false);

  protected toggleEditable(): void {
    this.isEditable.update((editable) => !editable);
  }
}

export const StepperHorizontalComponent: InputViewerComponent = {
  exampleName: 'Stepper Horizontal',
  dynamicComponent: SampleComponent,
  height: 75,
  hideCss: true,
  verticalView: true,
  htmlCode,
  cssCode: styleCode,
  tsCode,
};
