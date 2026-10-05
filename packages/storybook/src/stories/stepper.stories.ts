import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { MatButton } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';
import {
  applicationConfig,
  type Meta,
  moduleMetadata,
  type StoryObj,
} from '@storybook/angular';

type StepperArgs = {
  orientation: 'horizontal' | 'vertical';
  labelPosition: 'end' | 'bottom';
  headerPosition: 'top' | 'bottom';
  linear: boolean;
  editable: boolean;
  optionalStep: boolean;
  errorStep: boolean;
  selectedIndex: number;
  disableRipple: boolean;
};

const template = `
  <mat-stepper
    #stepper
    [orientation]="orientation"
    [labelPosition]="labelPosition"
    [headerPosition]="headerPosition"
    [linear]="linear"
    [selectedIndex]="selectedIndex"
    [disableRipple]="disableRipple"
  >
    <mat-step label="Fill out your name" [editable]="editable">
      <mat-form-field>
        <mat-label>Name</mat-label>
        <input matInput placeholder="Last name, First name" />
      </mat-form-field>
      <div>
        <button matButton matStepperNext>Next</button>
      </div>
    </mat-step>
    <mat-step
      label="Fill out your address"
      [editable]="editable"
      [optional]="optionalStep"
      [hasError]="errorStep"
      errorMessage="Address is required"
    >
      <mat-form-field>
        <mat-label>Address</mat-label>
        <input matInput placeholder="Ex. 1 Main St, New York, NY" />
      </mat-form-field>
      <div>
        <button matButton matStepperPrevious>Back</button>
        <button matButton matStepperNext>Next</button>
      </div>
    </mat-step>
    <mat-step label="Done">
      <p>You are now done.</p>
      <div>
        <button matButton matStepperPrevious>Back</button>
        <button matButton (click)="stepper.reset()">Reset</button>
      </div>
    </mat-step>
  </mat-stepper>`;

const meta: Meta<StepperArgs> = {
  title: 'Components/Stepper',
  decorators: [
    moduleMetadata({
      imports: [MatStepperModule, MatFormFieldModule, MatInput, MatButton],
    }),
    applicationConfig({
      // Lets `hasError` render the error state on a step header.
      providers: [
        { provide: STEPPER_GLOBAL_OPTIONS, useValue: { showError: true } },
      ],
    }),
  ],
  parameters: {
    docs: {
      description: {
        component:
          'Helix steppers are Angular Material steppers (`mat-stepper`) styled by the Helix theme. Use the Next / Back buttons or the step headers to move between steps.',
      },
    },
  },
  argTypes: {
    orientation: {
      control: 'inline-radio',
      options: ['horizontal', 'vertical'],
      description: 'Layout of the step headers',
    },
    labelPosition: {
      control: 'inline-radio',
      options: ['end', 'bottom'],
      description: 'Label next to or below the step icon (horizontal only)',
    },
    headerPosition: {
      control: 'inline-radio',
      options: ['top', 'bottom'],
      description: 'Header above or below the step content (horizontal only)',
    },
    linear: {
      control: 'boolean',
      description: 'Require each step to be completed before moving on',
    },
    editable: {
      control: 'boolean',
      description: 'Allow going back to completed steps to edit them',
    },
    optionalStep: {
      control: 'boolean',
      description: 'Mark the second step as optional',
    },
    errorStep: {
      control: 'boolean',
      description:
        'Show the error state on the second step (`hasError`, with `STEPPER_GLOBAL_OPTIONS.showError`)',
    },
    selectedIndex: {
      control: { type: 'number', min: 0, max: 2, step: 1 },
      description: 'Index of the active step',
    },
    disableRipple: { control: 'boolean' },
  },
  args: {
    orientation: 'horizontal',
    labelPosition: 'end',
    headerPosition: 'top',
    linear: false,
    editable: true,
    optionalStep: false,
    errorStep: false,
    selectedIndex: 0,
    disableRipple: false,
  },
  render: (args) => ({ props: args, template }),
};

export default meta;
type Story = StoryObj<StepperArgs>;

export const Playground: Story = {};

export const Vertical: Story = { args: { orientation: 'vertical' } };

export const LabelBottom: Story = { args: { labelPosition: 'bottom' } };

export const Linear: Story = { args: { linear: true, editable: false } };

export const OptionalAndError: Story = {
  args: { optionalStep: true, errorStep: true, selectedIndex: 2 },
};
