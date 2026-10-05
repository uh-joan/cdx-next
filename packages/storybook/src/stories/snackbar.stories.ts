import { Component, inject, input } from '@angular/core';
import { MatButton } from '@angular/material/button';
import {
  MatSnackBar,
  type MatSnackBarHorizontalPosition,
  type MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { type Meta, moduleMetadata, type StoryObj } from '@storybook/angular';

type SnackbarArgs = {
  message: string;
  action: string;
  duration: number;
  horizontalPosition: MatSnackBarHorizontalPosition;
  verticalPosition: MatSnackBarVerticalPosition;
  politeness: 'polite' | 'assertive' | 'off';
};

/** Opens a snackbar from `MatSnackBar` with the story args. */
@Component({
  selector: 'cdx-snackbar-launcher',
  imports: [MatButton],
  template: `<button matButton="outlined" (click)="open()">
    Show snackbar
  </button>`,
})
class SnackbarLauncher {
  private readonly snackBar = inject(MatSnackBar);

  readonly message = input('');
  readonly action = input('');
  readonly duration = input(0);
  readonly horizontalPosition = input<MatSnackBarHorizontalPosition>('center');
  readonly verticalPosition = input<MatSnackBarVerticalPosition>('bottom');
  readonly politeness = input<SnackbarArgs['politeness']>('polite');

  open(): void {
    this.snackBar.open(this.message(), this.action() || undefined, {
      duration: this.duration() * 1000,
      horizontalPosition: this.horizontalPosition(),
      verticalPosition: this.verticalPosition(),
      politeness: this.politeness(),
    });
  }
}

const meta: Meta<SnackbarArgs> = {
  title: 'Components/Snackbar',
  decorators: [moduleMetadata({ imports: [SnackbarLauncher] })],
  parameters: {
    docs: {
      description: {
        component:
          'Helix snackbar is opened with the Angular Material `MatSnackBar` service and styled by the Helix theme. Click the button to open a snackbar with the configured options.',
      },
    },
  },
  argTypes: {
    message: {
      control: 'text',
      description: 'Short text label; should fit on one line',
    },
    action: {
      control: 'text',
      description: 'Optional single action label (empty for none)',
    },
    duration: {
      control: { type: 'number', min: 0, step: 1 },
      description:
        'Seconds before it closes automatically; `0` keeps it open until dismissed',
    },
    horizontalPosition: {
      control: 'inline-radio',
      options: ['start', 'center', 'end', 'left', 'right'],
    },
    verticalPosition: {
      control: 'inline-radio',
      options: ['bottom', 'top'],
    },
    politeness: {
      control: 'inline-radio',
      options: ['polite', 'assertive', 'off'],
      description: 'ARIA live-region politeness for screen readers',
    },
  },
  args: {
    message: 'File deleted',
    action: 'Undo',
    duration: 5,
    horizontalPosition: 'center',
    verticalPosition: 'bottom',
    politeness: 'polite',
  },
  render: (args) => ({
    props: args,
    template: `
      <div style="padding: 16px">
        <cdx-snackbar-launcher
          [message]="message"
          [action]="action"
          [duration]="duration"
          [horizontalPosition]="horizontalPosition"
          [verticalPosition]="verticalPosition"
          [politeness]="politeness"
        />
      </div>`,
  }),
};

export default meta;
type Story = StoryObj<SnackbarArgs>;

export const Playground: Story = {};

/** Without an action the snackbar disappears automatically. */
export const MessageOnly: Story = {
  args: { message: 'Connection restored', action: '' },
};

export const WithDismiss: Story = {
  args: { message: 'Changes saved', action: 'Dismiss', duration: 0 },
};
