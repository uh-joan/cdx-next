import { MatProgressBar } from '@angular/material/progress-bar';
import { type Meta, moduleMetadata, type StoryObj } from '@storybook/angular';

type ProgressBarArgs = {
  mode: 'determinate' | 'indeterminate' | 'buffer' | 'query';
  value: number;
  bufferValue: number;
  width: number;
};

const meta: Meta<ProgressBarArgs> = {
  title: 'Components/Progress bar',
  decorators: [moduleMetadata({ imports: [MatProgressBar] })],
  parameters: {
    docs: {
      description: {
        component:
          'Helix progress bars are Angular Material progress bars styled by the Helix theme. Helix uses two types: determinate (known progress, 0–100%) and indeterminate (ongoing activity). The `color` input is a Material 2 API and has no effect under the Helix theme.',
      },
    },
  },
  argTypes: {
    mode: {
      control: 'inline-radio',
      options: ['determinate', 'indeterminate', 'buffer', 'query'],
      description:
        'Helix types are `determinate` (progress is known) and `indeterminate` (wait without a known duration); `buffer` and `query` are additional Material modes.',
    },
    value: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
      description: 'Progress percentage (determinate and buffer modes)',
      if: { arg: 'mode', neq: 'indeterminate' },
    },
    bufferValue: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
      description: 'Buffer percentage (buffer mode only)',
      if: { arg: 'mode', eq: 'buffer' },
    },
    width: {
      control: { type: 'range', min: 120, max: 800, step: 20 },
      description: 'Width of the story container in px (layout only)',
    },
  },
  args: {
    mode: 'determinate',
    value: 40,
    bufferValue: 70,
    width: 320,
  },
  render: (args) => ({
    props: args,
    template: `
      <div style="padding: 16px" [style.width.px]="width">
        <mat-progress-bar
          [mode]="mode"
          [value]="value"
          [bufferValue]="bufferValue"
          aria-label="Loading progress"
        ></mat-progress-bar>
      </div>`,
  }),
};

export default meta;
type Story = StoryObj<ProgressBarArgs>;

export const Playground: Story = {};

export const Determinate: Story = { args: { mode: 'determinate', value: 60 } };

export const Indeterminate: Story = { args: { mode: 'indeterminate' } };

/** Every mode, for a quick visual check against Helix. */
export const AllModes: Story = {
  parameters: { controls: { include: ['value', 'bufferValue', 'width'] } },
  render: (args) => ({
    props: args,
    template: `
      <div
        style="padding: 16px; display: flex; flex-direction: column; gap: 24px"
        [style.width.px]="width"
      >
        ${(['determinate', 'indeterminate', 'buffer', 'query'] as const)
          .map(
            (mode) => `
          <div>
            <div class="mat-body-small">${mode}</div>
            <mat-progress-bar
              mode="${mode}"
              [value]="value"
              [bufferValue]="bufferValue"
              aria-label="${mode} progress"
            ></mat-progress-bar>
          </div>`,
          )
          .join('')}
      </div>`,
  }),
};
