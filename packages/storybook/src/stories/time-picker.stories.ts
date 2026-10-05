import { provideNativeDateAdapter } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {
  MatTimepickerModule,
  type MatTimepickerOption,
} from '@angular/material/timepicker';
import {
  applicationConfig,
  type Meta,
  moduleMetadata,
  type StoryObj,
} from '@storybook/angular';

type TimePickerArgs = {
  label: string;
  appearance: 'fill' | 'outline';
  size: 'default' | 'small' | 'x-small';
  interval: string;
  min: string;
  max: string;
  customOptions: boolean;
  openOnClick: boolean;
  showToggle: boolean;
  togglePosition: 'suffix' | 'prefix';
  hint: string;
  disabled: boolean;
};

const sizeClass: Record<TimePickerArgs['size'], string> = {
  default: '',
  small: 'hlx-input-small',
  'x-small': 'hlx-input-x-small',
};

const CUSTOM_OPTIONS: MatTimepickerOption<Date>[] = [
  { label: 'Morning', value: new Date(2024, 0, 1, 9, 0, 0) },
  { label: 'Noon', value: new Date(2024, 0, 1, 12, 0, 0) },
  { label: 'Evening', value: new Date(2024, 0, 1, 22, 0, 0) },
];

function timePickerTemplate({ togglePosition }: TimePickerArgs): string {
  const toggle = `
    @if (showToggle) {
      <mat-timepicker-toggle mat${togglePosition === 'prefix' ? 'IconPrefix' : 'IconSuffix'} [for]="picker" [disabled]="disabled" />
    }`;
  return `
  <mat-form-field [appearance]="appearance" [class]="sizeClass" style="width: 280px">
    @if (label) {
      <mat-label>{{ label }}</mat-label>
    }
    ${togglePosition === 'prefix' ? toggle : ''}
    <input
      matInput
      [matTimepicker]="picker"
      [matTimepickerMin]="min || null"
      [matTimepickerMax]="max || null"
      [matTimepickerOpenOnClick]="openOnClick"
      [disabled]="disabled"
    />
    ${togglePosition === 'suffix' ? toggle : ''}
    @if (hint) {
      <mat-hint>{{ hint }}</mat-hint>
    }
    <mat-timepicker
      #picker
      [interval]="interval || null"
      [options]="customOptions ? options : null"
    />
  </mat-form-field>`;
}

const meta: Meta<TimePickerArgs> = {
  title: 'Components/Time picker',
  decorators: [
    moduleMetadata({
      imports: [MatFormFieldModule, MatInputModule, MatTimepickerModule],
    }),
    applicationConfig({ providers: [provideNativeDateAdapter()] }),
  ],
  parameters: {
    docs: {
      description: {
        component:
          '`mat-timepicker` attached to a `matInput` in a `mat-form-field`. Users type a time or pick one from a list of options. Needs a date adapter (`provideNativeDateAdapter()` here).',
      },
    },
  },
  argTypes: {
    label: { control: 'text', description: '`mat-label` (empty for none)' },
    appearance: {
      control: 'inline-radio',
      options: ['fill', 'outline'],
      description: '`mat-form-field` appearance',
    },
    size: {
      control: 'inline-radio',
      options: ['default', 'small', 'x-small'],
      description: '`hlx-input-small` / `hlx-input-x-small` classes',
    },
    interval: {
      control: 'text',
      description:
        'Interval between generated options, e.g. `30min`, `45m`, `1h`, `3.5h` (empty for the default 30 minutes)',
    },
    min: {
      control: 'text',
      description:
        'Earliest selectable time, e.g. `09:00` (`matTimepickerMin`)',
    },
    max: {
      control: 'text',
      description: 'Latest selectable time, e.g. `17:00` (`matTimepickerMax`)',
    },
    customOptions: {
      control: 'boolean',
      description:
        'Use a custom list of options (Morning / Noon / Evening) instead of the interval',
    },
    openOnClick: {
      control: 'boolean',
      description: 'Open the panel when the input is clicked',
    },
    showToggle: {
      control: 'boolean',
      description: 'Show the `mat-timepicker-toggle` button',
    },
    togglePosition: {
      control: 'inline-radio',
      options: ['suffix', 'prefix'],
      description: 'Place the toggle as `matIconSuffix` or `matIconPrefix`',
    },
    hint: { control: 'text', description: '`mat-hint` text (empty for none)' },
    disabled: { control: 'boolean' },
  },
  args: {
    label: 'Pick a time',
    appearance: 'outline',
    size: 'default',
    interval: '',
    min: '',
    max: '',
    customOptions: false,
    openOnClick: true,
    showToggle: true,
    togglePosition: 'suffix',
    hint: '',
    disabled: false,
  },
  render: (args) => ({
    props: {
      ...args,
      sizeClass: sizeClass[args.size],
      options: CUSTOM_OPTIONS,
    },
    template: timePickerTemplate(args),
  }),
};

export default meta;
type Story = StoryObj<TimePickerArgs>;

export const Playground: Story = {};

export const Interval: Story = {
  args: { label: 'Every 45 minutes', interval: '45min' },
};

export const MinMax: Story = {
  args: {
    label: 'Office hours',
    min: '09:00',
    max: '17:00',
    hint: '09:00–17:00',
  },
};

export const CustomOptions: Story = {
  args: { label: 'Pick a time of day', customOptions: true },
};

export const Disabled: Story = { args: { disabled: true } };
