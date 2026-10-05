import { MatSlideToggle } from '@angular/material/slide-toggle';
import { type Meta, moduleMetadata, type StoryObj } from '@storybook/angular';

type SlideToggleArgs = {
  label: string;
  checked: boolean;
  size: 'default' | 'small';
  labelPosition: 'after' | 'before';
  hideIcon: boolean;
  disabled: boolean;
  disabledInteractive: boolean;
};

const meta: Meta<SlideToggleArgs> = {
  title: 'Components/Slide toggle',
  decorators: [moduleMetadata({ imports: [MatSlideToggle] })],
  parameters: {
    docs: {
      description: {
        component:
          'Helix slide toggle is the Angular Material `mat-slide-toggle` styled by the Helix theme. Changes should apply instantly; use checkboxes for multiple selections or actions that need saving.',
      },
    },
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'Short label describing what happens when the toggle is on',
    },
    checked: { control: 'boolean', description: 'On / off state' },
    size: {
      control: 'inline-radio',
      options: ['default', 'small'],
      description: '`small` applies the `hlx-slide-toggle-small` class',
    },
    labelPosition: {
      control: 'inline-radio',
      options: ['after', 'before'],
      description: 'Label after (default) or before the switch',
    },
    hideIcon: {
      control: 'boolean',
      description: 'Hide the check / minus icon in the handle',
    },
    disabled: { control: 'boolean' },
    disabledInteractive: {
      control: 'boolean',
      description: 'Keep the disabled toggle focusable (e.g. for tooltips)',
    },
  },
  args: {
    label: 'Show notifications',
    checked: true,
    size: 'default',
    labelPosition: 'after',
    hideIcon: false,
    disabled: false,
    disabledInteractive: false,
  },
  render: (args) => ({
    props: args,
    template: `
      <div style="padding: 16px">
        <mat-slide-toggle
          [class.hlx-slide-toggle-small]="size === 'small'"
          [checked]="checked"
          [labelPosition]="labelPosition"
          [hideIcon]="hideIcon"
          [disabled]="disabled"
          [disabledInteractive]="disabledInteractive"
        >{{ label }}</mat-slide-toggle>
      </div>`,
  }),
};

export default meta;
type Story = StoryObj<SlideToggleArgs>;

export const Playground: Story = {};

export const Off: Story = { args: { checked: false } };

export const Small: Story = { args: { size: 'small' } };

export const Disabled: Story = { args: { disabled: true } };

/** Every on/off × enabled/disabled state, at each size. */
export const States: Story = {
  parameters: { controls: { include: ['label', 'hideIcon'] } },
  render: (args) => {
    const rows = (['default', 'small'] as const)
      .map(
        (size) => `
        <div class="story-row">
          ${[
            [false, false],
            [true, false],
            [false, true],
            [true, true],
          ]
            .map(
              ([checked, disabled]) =>
                `<mat-slide-toggle class="${
                  size === 'small' ? 'hlx-slide-toggle-small' : ''
                }" [checked]="${checked}" [disabled]="${disabled}" [hideIcon]="hideIcon">{{ label }}</mat-slide-toggle>`,
            )
            .join('')}
        </div>`,
      )
      .join('');
    return { props: args, template: rows };
  },
};
