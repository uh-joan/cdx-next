import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';

import { InputViewerComponent } from '../../../../core/example-viewer/example-viewer.model';

const htmlCode = `<div class="story">
  <div class="example-input-wrapper">
    <label for="duration">Animation duration:</label>
    <input id="duration" value="2000" 
      type="number" min="0" step="100" #duration>
  </div>

  <mat-stepper orientation="vertical" [linear]="false" #stepper 
    [animationDuration]="duration.value">
    <mat-step [stepControl]="firstFormGroup">
      <form [formGroup]="firstFormGroup">
        <ng-template matStepLabel>
          Fill out your name</ng-template>
        <mat-form-field>
          <mat-label>Name</mat-label>
          <input matInput placeholder="Last name, First name"
            formControlName="firstCtrl" required>
        </mat-form-field>
        <div>
          <button matButton matStepperNext>Next</button>
        </div>
      </form>
    </mat-step>
    <mat-step [stepControl]="secondFormGroup">
      <form [formGroup]="secondFormGroup">
        <ng-template matStepLabel>Fill 
          out your address</ng-template>
        <mat-form-field>
          <mat-label>Address</mat-label>
          <input matInput placeholder="Ex. 1 Main St, New York, NY"
            formControlName="secondCtrl" required>
        </mat-form-field>
        <div>
          <button matButton matStepperPrevious>Back</button>
          <button matButton matStepperNext>Next</button>
        </div>
      </form>
    </mat-step>
    <mat-step>
      <ng-template matStepLabel>Done</ng-template>
      You are now done.
      <div>
        <button matButton matStepperPrevious>Back</button>
        <button matButton 
          (click)="stepper.reset()">Reset</button>
      </div>
    </mat-step>
  </mat-stepper>
</div>`;

const styleCode = `.story {
  padding: 1rem;
}

.example-input-wrapper {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
}`;

const tsCode = `import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';

// mat-vertical-stepper is legacy markup; use mat-stepper with orientation="vertical".
@Component({
  selector: 'app-stepper-vertical-example',
  templateUrl: './stepper-vertical-example.html',
  styleUrl: './stepper-vertical-example.scss',
  imports: [MatStepperModule, MatFormFieldModule, MatInput, ReactiveFormsModule, MatButton],
})
export class StepperVerticalExample {
  private readonly formBuilder = inject(FormBuilder);

  protected readonly firstFormGroup = this.formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  protected readonly secondFormGroup = this.formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
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
}

export const StepperVerticalComponent: InputViewerComponent = {
  exampleName: 'Stepper Vertical',
  dynamicComponent: SampleComponent,
  height: 80,
  hideCss: true,
  htmlCode,
  cssCode: styleCode,
  tsCode,
};
