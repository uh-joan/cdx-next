import { MatSliderModule } from '@angular/material/slider';
import { type Meta, moduleMetadata, type StoryObj } from '@storybook/angular';

type SliderArgs = {
  type: 'basic' | 'range';
  min: number;
  max: number;
  step: number;
  value: number;
  startValue: number;
  endValue: number;
  discrete: boolean;
  showTickMarks: boolean;
  disabled: boolean;
  ariaLabel: string;
};

const meta: Meta<SliderArgs> = {
  title: 'Components/Slider',
  decorators: [moduleMetadata({ imports: [MatSliderModule] })],
  parameters: {
    docs: {
      description: {
        component:
          'Helix slider is the Angular Material `mat-slider` styled by the Helix theme. Use one thumb (`matSliderThumb`) for a basic slider, or two (`matSliderStartThumb` / `matSliderEndThumb`) for a range.',
      },
    },
  },
  argTypes: {
    type: {
      control: 'inline-radio',
      options: ['basic', 'range'],
      description: 'Basic (one handle) or range (two handles)',
    },
    min: { control: 'number', description: 'Minimum value' },
    max: { control: 'number', description: 'Maximum value' },
    step: { control: 'number', description: 'Value increment' },
    value: { control: 'number', description: 'Basic slider value' },
    startValue: { control: 'number', description: 'Range start value' },
    endValue: { control: 'number', description: 'Range end value' },
    discrete: {
      control: 'boolean',
      description: 'Show the value indicator while the handle is used',
    },
    showTickMarks: {
      control: 'boolean',
      description: 'Show a tick mark at every step',
    },
    disabled: { control: 'boolean' },
    ariaLabel: {
      control: 'text',
      description: 'Accessible label for the thumb(s)',
    },
  },
  args: {
    type: 'basic',
    min: 0,
    max: 100,
    step: 1,
    value: 40,
    startValue: 20,
    endValue: 80,
    discrete: true,
    showTickMarks: false,
    disabled: false,
    ariaLabel: 'Volume',
  },
  render: (args) => ({
    props: args,
    template: `
      <div style="padding: 48px 16px 16px; max-width: 400px">
        <mat-slider
          style="width: 100%"
          [min]="min"
          [max]="max"
          [step]="step"
          [discrete]="discrete"
          [showTickMarks]="showTickMarks"
          [disabled]="disabled"
        >
          @if (type === 'range') {
            <input matSliderStartThumb [value]="startValue" [attr.aria-label]="ariaLabel + ' start'" />
            <input matSliderEndThumb [value]="endValue" [attr.aria-label]="ariaLabel + ' end'" />
          } @else {
            <input matSliderThumb [value]="value" [attr.aria-label]="ariaLabel" />
          }
        </mat-slider>
      </div>`,
  }),
};

export default meta;
type Story = StoryObj<SliderArgs>;

export const Playground: Story = {};

export const Range: Story = { args: { type: 'range' } };

export const TickMarks: Story = {
  args: { step: 10, value: 50, showTickMarks: true },
};

export const Disabled: Story = { args: { disabled: true } };
