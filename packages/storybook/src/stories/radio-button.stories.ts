import { MatRadioModule } from '@angular/material/radio';
import { type Meta, moduleMetadata, type StoryObj } from '@storybook/angular';

type RadioButtonArgs = {
  groupLabel: string;
  options: string[];
  selected: string;
  layout: 'column' | 'row';
  labelPosition: 'after' | 'before';
  disabled: boolean;
  disabledOption: boolean;
  required: boolean;
};

const meta: Meta<RadioButtonArgs> = {
  title: 'Components/Radio button',
  decorators: [moduleMetadata({ imports: [MatRadioModule] })],
  parameters: {
    docs: {
      description: {
        component:
          'Helix radio buttons are Angular Material radio buttons styled by the Helix theme. Always use them in a `mat-radio-group` of two or more options where only one can be selected.',
      },
    },
  },
  argTypes: {
    groupLabel: {
      control: 'text',
      description:
        'Visible label of the group (also used as `aria-labelledby`)',
    },
    options: {
      control: 'object',
      description: 'Option labels; keep them short and scannable',
    },
    selected: {
      control: 'text',
      description: 'Label of the selected option (empty for none)',
    },
    layout: {
      control: 'inline-radio',
      options: ['column', 'row'],
      description: 'Stack options vertically or lay them out in a row',
    },
    labelPosition: {
      control: 'inline-radio',
      options: ['after', 'before'],
      description: 'Position of the label relative to the radio',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the whole group',
    },
    disabledOption: {
      control: 'boolean',
      description: 'Disable only the last option',
    },
    required: {
      control: 'boolean',
      description: 'Mark the group as required',
    },
  },
  args: {
    groupLabel: 'Notification frequency',
    options: ['Daily', 'Weekly', 'Monthly'],
    selected: 'Daily',
    layout: 'column',
    labelPosition: 'after',
    disabled: false,
    disabledOption: false,
    required: false,
  },
  render: (args) => ({
    props: args,
    template: `
      <div style="padding: 16px">
        <div id="radio-group-label" class="mat-body-medium">{{ groupLabel }}</div>
        <mat-radio-group
          aria-labelledby="radio-group-label"
          [value]="selected"
          [labelPosition]="labelPosition"
          [disabled]="disabled"
          [required]="required"
          [style.display]="'flex'"
          [style.flexDirection]="layout"
          [style.gap.px]="layout === 'row' ? 16 : 0"
        >
          @for (option of options; track option; let last = $last) {
            <mat-radio-button [value]="option" [disabled]="last && disabledOption">
              {{ option }}
            </mat-radio-button>
          }
        </mat-radio-group>
      </div>`,
  }),
};

export default meta;
type Story = StoryObj<RadioButtonArgs>;

export const Playground: Story = {};

export const Horizontal: Story = { args: { layout: 'row' } };

export const LabelBefore: Story = { args: { labelPosition: 'before' } };

export const DisabledOption: Story = { args: { disabledOption: true } };

export const Disabled: Story = { args: { disabled: true } };
