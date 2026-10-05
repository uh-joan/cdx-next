import { MatButton } from '@angular/material/button';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { type Meta, moduleMetadata, type StoryObj } from '@storybook/angular';

type ProgressSpinnerArgs = {
  mode: 'indeterminate' | 'determinate';
  value: number;
  diameter: number;
  strokeWidth: number;
};

const meta: Meta<ProgressSpinnerArgs> = {
  title: 'Components/Progress spinner',
  decorators: [moduleMetadata({ imports: [MatProgressSpinner, MatButton] })],
  parameters: {
    docs: {
      description: {
        component:
          'Helix progress spinners are Angular Material progress spinners styled by the Helix theme. Helix mainly uses the indeterminate mode; for processes with a known duration use a progress bar. The `color` input is a Material 2 API and has no effect under the Helix theme.',
      },
    },
  },
  argTypes: {
    mode: {
      control: 'inline-radio',
      options: ['indeterminate', 'determinate'],
      description:
        '`indeterminate` (Helix default) shows activity without discrete progress; `determinate` fills to `value`.',
    },
    value: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
      description: 'Progress percentage (determinate mode only)',
      if: { arg: 'mode', eq: 'determinate' },
    },
    diameter: {
      control: { type: 'range', min: 16, max: 120, step: 4 },
      description: 'Diameter of the spinner in px (Material default: 48)',
    },
    strokeWidth: {
      control: { type: 'range', min: 1, max: 12, step: 1 },
      description: 'Stroke width in px (Material default: diameter / 10)',
    },
  },
  args: {
    mode: 'indeterminate',
    value: 70,
    diameter: 48,
    strokeWidth: 4,
  },
  render: (args) => ({
    props: args,
    template: `
      <div style="padding: 16px">
        <mat-progress-spinner
          [mode]="mode"
          [value]="value"
          [diameter]="diameter"
          [strokeWidth]="strokeWidth"
          aria-label="Loading"
        ></mat-progress-spinner>
      </div>`,
  }),
};

export default meta;
type Story = StoryObj<ProgressSpinnerArgs>;

export const Playground: Story = {};

export const Determinate: Story = { args: { mode: 'determinate' } };

export const Small: Story = { args: { diameter: 24, strokeWidth: 3 } };

/** Spinner shown inside a button while only that part of the UI is loading. */
export const InButton: Story = {
  parameters: { controls: { include: [] } },
  render: () => ({
    template: `
      <div style="padding: 16px">
        <button matButton="filled" showProgress disabled>
          Saving…
          <mat-progress-spinner progressIndicator mode="indeterminate" diameter="20" />
        </button>
      </div>`,
  }),
};
