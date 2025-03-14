import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';
import { InputViewerComponent } from 'src/app/core/example-viewer/example-viewer.model';

const htmlCode = `<div class="story">
  <div class="example-input-wrapper">
    <label for="duration">Animation duration:</label>
    <input id="duration" value="2000" 
      type="number" min="0" step="100" #duration>
  </div>

  <mat-vertical-stepper [linear]="false" #stepper 
    [animationDuration]="duration.value">
    <mat-step [stepControl]="firstFormGroup">
      <form [formGroup]="firstFormGroup">
        <ng-template matStepLabel>
          Fill out your name</ng-template>
        <mat-form-field>
          <input matInput placeholder="Last name, 
            First name" formControlName="firstCtrl" required>
        </mat-form-field>
        <div>
          <button mat-button matStepperNext>Next</button>
        </div>
      </form>
    </mat-step>
    <mat-step [stepControl]="secondFormGroup">
      <form [formGroup]="secondFormGroup">
        <ng-template matStepLabel>Fill 
          out your address</ng-template>
        <mat-form-field>
          <input matInput placeholder="Address" 
            formControlName="secondCtrl" required>
        </mat-form-field>
        <div>
          <button mat-button matStepperPrevious>Back</button>
          <button mat-button matStepperNext>Next</button>
        </div>
      </form>
    </mat-step>
    <mat-step>
      <ng-template matStepLabel>Done</ng-template>
      You are now done.
      <div>
        <button mat-button matStepperPrevious>Back</button>
        <button mat-button 
          (click)="stepper.reset()">Reset</button>
      </div>
    </mat-step>
  </mat-vertical-stepper>
</div>`;

const styleCode = `.story {
  padding: 1rem;

  > button {
    margin-bottom: 1rem;
  }
}`;

@Component({
  template: htmlCode,
  imports: [
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
  ],
  styles: styleCode,
})
class SampleComponent {
  private _formBuilder = inject(FormBuilder);

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isEditable = false;
}

export const StepperVerticalComponent: InputViewerComponent = {
  exampleName: 'Stepper Vertical',
  dynamicComponent: SampleComponent,
  height: 80,
  hideCss: true,
  htmlCode: htmlCode,
  cssCode: styleCode,
  tsCode: `import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, 
  Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } 
  from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';

@Component({
    template: htmlCode,
    imports: [
      MatStepperModule,
      MatFormFieldModule,
      MatInputModule,
      ReactiveFormsModule,
      MatButtonModule,
    ],
    styles: styleCode,
})
class SampleComponent {
  private _formBuilder = inject(FormBuilder);

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isEditable = false;
}`,
};
