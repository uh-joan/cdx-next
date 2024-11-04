import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ThemeModule } from '@cdx/theme-angular-material';
import { Meta } from '@storybook/angular';
import { html } from 'common-tags';

export default {
  title: 'cdx/Stepper',
  component: MatStepperModule,
} as Meta;

export const HorizontalStepper = () => ({
  moduleMetadata: {
    imports: [
      BrowserAnimationsModule,
      MatStepperModule,
      MatFormFieldModule,
      MatInputModule,
      ReactiveFormsModule,
      MatButtonModule,
      ThemeModule,
    ],
  },
  template: html`
    <h3>Horizontal Stepper</h3>
    <div class="story">
      <mat-stepper>
        <mat-step [stepControl]="firstFormGroup">
          <form [formGroup]="firstFormGroup">
            <ng-template matStepLabel>Fill out your name</ng-template>
            <mat-form-field appearance="outline">
              <mat-label>Name</mat-label>
              <input
                matInput
                placeholder="Last name, First name"
                formControlName="firstCtrl"
                required
              />
            </mat-form-field>
            <div>
              <button mat-button matStepperNext>Next</button>
            </div>
          </form>
        </mat-step>
        <mat-step [stepControl]="secondFormGroup">
          <form [formGroup]="secondFormGroup">
            <ng-template matStepLabel>Fill out your address</ng-template>
            <mat-form-field appearance="outline">
              <mat-label>Address</mat-label>
              <input
                matInput
                formControlName="secondCtrl"
                placeholder="Ex. 1 Main St, New York, NY"
                required
              />
            </mat-form-field>
            <div>
              <button mat-button matStepperPrevious>Back</button>
              <button mat-button matStepperNext>Next</button>
            </div>
          </form>
        </mat-step>
        <mat-step>
          <ng-template matStepLabel>Done</ng-template>
          <p>You are now done.</p>
          <div>
            <button mat-button matStepperPrevious>Back</button>
            <button mat-button (click)="resetStepper()">Reset</button>
          </div>
        </mat-step>
      </mat-stepper>
    </div>
  `,
  props: {
    firstFormGroup: new FormGroup({
      firstCtrl: new FormControl('', Validators.required),
    }),
    secondFormGroup: new FormGroup({
      secondCtrl: new FormControl('', Validators.required),
    }),
    resetStepper: () => {
      // Add the logic to reset the stepper here
      console.log('Resetting stepper...');
    },
  },
});

export const VerticalStepper = () => ({
  moduleMetadata: {
    imports: [
      BrowserAnimationsModule,
      MatStepperModule,
      MatFormFieldModule,
      MatInputModule,
      ReactiveFormsModule,
      MatButtonModule,
      ThemeModule,
    ],
  },
  template: html`
    <h3>Vertical Stepper</h3>
    <div class="story">
      <mat-stepper orientation="vertical">
        <mat-step [stepControl]="firstFormGroup">
          <form [formGroup]="firstFormGroup">
            <ng-template matStepLabel>Fill out your name</ng-template>
            <mat-form-field appearance="outline">
              <mat-label>Name</mat-label>
              <input
                matInput
                placeholder="Last name, First name"
                formControlName="firstCtrl"
                required
              />
            </mat-form-field>
            <div>
              <button mat-button matStepperNext>Next</button>
            </div>
          </form>
        </mat-step>
        <mat-step [stepControl]="secondFormGroup">
          <form [formGroup]="secondFormGroup">
            <ng-template matStepLabel>Fill out your address</ng-template>
            <mat-form-field appearance="outline">
              <mat-label>Address</mat-label>
              <input
                matInput
                formControlName="secondCtrl"
                placeholder="Ex. 1 Main St, New York, NY"
                required
              />
            </mat-form-field>
            <div>
              <button mat-button matStepperPrevious>Back</button>
              <button mat-button matStepperNext>Next</button>
            </div>
          </form>
        </mat-step>
        <mat-step>
          <ng-template matStepLabel>Done</ng-template>
          <p>You are now done.</p>
          <div>
            <button mat-button matStepperPrevious>Back</button>
            <button mat-button (click)="resetStepper()">Reset</button>
          </div>
        </mat-step>
      </mat-stepper>
    </div>
  `,
  props: {
    firstFormGroup: new FormGroup({
      firstCtrl: new FormControl('', Validators.required),
    }),
    secondFormGroup: new FormGroup({
      secondCtrl: new FormControl('', Validators.required),
    }),
    resetStepper: () => {
      console.log('Resetting stepper...');
    },
  },
});
