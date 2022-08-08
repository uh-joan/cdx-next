import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatStepperModule } from '@angular/material/stepper';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Meta } from '@storybook/angular';
import { html } from 'common-tags';

const horizontalStepperTemplate = `<mat-horizontal-stepper [linear]="isLinear" #stepper>
<ng-template matStepperIcon="edit">
  <mat-icon aria-hidden="false" aria-label="icon">done</mat-icon>
</ng-template>
<mat-step [stepControl]="firstFormGroup">
  <form [formGroup]="firstFormGroup">
    <ng-template matStepLabel>Pick flavor</ng-template>
    <mat-form-field fxFlex appearance="outline" style="width: 100%;">
      <mat-label>What is your favorite flavor of cake?</mat-label>
      <input matInput formControlName="firstCtrl" required />
    </mat-form-field>
    <div style="display: flex; justify-content: flex-end;">
      <button mat-button matStepperNext color="primary">Next</button>
    </div>
  </form>
</mat-step>
<mat-step [stepControl]="secondFormGroup">
  <form [formGroup]="secondFormGroup">
    <ng-template matStepLabel>Choose icing</ng-template>
    <div style="display: flex; flex-direction: column;">
      <mat-label style="margin-bottom: 8px;">What kind of icing should top the cake?</mat-label>
      <mat-radio-group role="radiogroup" style="display: flex; column-gap: 0.5rem">
        <mat-radio-button color="primary" value="1" role="radio" checked>Buttercream</mat-radio-button>
        <mat-radio-button color="primary" value="2" role="radio">Whipped</mat-radio-button>
        <mat-radio-button color="primary" value="3" role="radio">Icing with sprinkles</mat-radio-button>
        <mat-radio-button color="primary" value="4" role="radio">No icing</mat-radio-button>
      </mat-radio-group>
    </div>
    <div style="display: flex; column-gap: 1rem; justify-content: flex-end;">
      <button mat-button matStepperPrevious color="primary">Back</button>
      <button mat-button matStepperNext color="primary">Next</button>
    </div>
  </form>
</mat-step>
<mat-step>
  <ng-template matStepLabel>Done</ng-template>
  We'll be baking your cake soon!
  <div style="display: flex; column-gap: 1rem; justify-content: flex-end;">
    <button mat-button matStepperPrevious color="primary">Back</button>
    <button mat-flat-button (click)="stepper.reset()" color="primary">Reset</button>
  </div>
</mat-step>
</mat-horizontal-stepper>`;

@Component({
  selector: 'demo-horizontal-stepper',
  template: horizontalStepperTemplate,
})
class HorizontalStepperComponent implements OnInit {
  isLinear = true;
  firstFormGroup: FormGroup | undefined;
  secondFormGroup: FormGroup | undefined;
  label1 = 'Label1';

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: [''],
    });
  }
}

const verticalStepperTemplate = `<mat-vertical-stepper [linear]="isLinear" #stepper1>
<ng-template matStepperIcon="edit">
  <mat-icon aria-hidden="false" aria-label="icon">done</mat-icon>
</ng-template>
<mat-step [stepControl]="firstFormGroup">
  <form [formGroup]="firstFormGroup">
    <ng-template matStepLabel>Car make and model</ng-template>
    <div style="display: flex; flex-direction: column;">
      <mat-form-field fxFlex appearance="outline">
        <input matInput placeholder="Make" formControlName="firstCtrl" required />
      </mat-form-field>
      <mat-form-field fxFlex appearance="outline">
        <input matInput placeholder="Model" formControlName="firstCtrl" required />
      </mat-form-field>
    </div>
    <div>
      <button mat-button matStepperNext color="primary">Next</button>
    </div>
  </form>
</mat-step>
<mat-step [stepControl]="secondFormGroup">
  <form [formGroup]="secondFormGroup">
    <ng-template matStepLabel>Choose services</ng-template>
    <div style="display: flex; flex-direction: column; row-gap: 0.5rem">
      <mat-label style="margin-bottom: 8px;">Choose car services</mat-label>
      <mat-slide-toggle color="primary" style="margin-bottom: 16px;">Oil change</mat-slide-toggle>
      <mat-slide-toggle color="primary" style="margin-bottom: 16px;">Tire rotation</mat-slide-toggle>
      <mat-slide-toggle color="primary" style="margin-bottom: 16px;">Filter replacement</mat-slide-toggle>
    </div>
    <div style="display: flex; column-gap: 1rem;">
      <button mat-button matStepperPrevious color="primary">Back</button>
      <button mat-button matStepperNext color="primary">Next</button>
    </div>
  </form>
</mat-step>
<mat-step>
  <ng-template matStepLabel>Done</ng-template>
  <p style="margin-top: 0.5rem;">Thanks! See you soon!</p>
  <div style="display: flex; column-gap: 1rem;">
    <button mat-button matStepperPrevious color="primary">Back</button>
    <button mat-flat-button (click)="stepper.reset()" color="primary">Reset</button>
  </div>
</mat-step>
</mat-vertical-stepper>`;

@Component({
  selector: 'demo-vertical-stepper',
  template: verticalStepperTemplate,
})
class VerticalStepperComponent implements OnInit {
  isLinear = true;
  firstFormGroup: FormGroup | undefined;
  secondFormGroup: FormGroup | undefined;
  label1 = 'Label1';

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: [''],
    });
  }
}

export default {
  title: 'Stepper',
  component: MatStepperModule,
  parameters: {
    layout: 'centered',
  },
} as Meta;

export const HorizontalStepper = () => ({
  moduleMetadata: {
    imports: [
      BrowserAnimationsModule,
      MatStepperModule,
      FormsModule,
      ReactiveFormsModule,
      MatButtonModule,
      MatRadioModule,
      MatFormFieldModule,
      MatInputModule,
      MatIconModule,
    ],
    declarations: [HorizontalStepperComponent],
  },
  template: html`<div style="height: 200px">
    <demo-horizontal-stepper></demo-horizontal-stepper>
  </div>`,
});

HorizontalStepper.parameters = {
  docs: {
    source: {
      code: horizontalStepperTemplate,
    },
  },
};

export const VerticalStepper = () => ({
  moduleMetadata: {
    imports: [
      BrowserAnimationsModule,
      MatStepperModule,
      FormsModule,
      ReactiveFormsModule,
      MatButtonModule,
      MatSlideToggleModule,
      MatFormFieldModule,
      MatInputModule,
      MatIconModule,
    ],
    declarations: [VerticalStepperComponent],
  },
  template: html`<demo-vertical-stepper></demo-vertical-stepper>`,
});

VerticalStepper.parameters = {
  docs: {
    source: {
      code: verticalStepperTemplate,
    },
  },
};
