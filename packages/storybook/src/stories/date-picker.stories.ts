import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {
  applicationConfig,
  type Meta,
  moduleMetadata,
  type StoryObj,
} from '@storybook/angular';

type DatePickerArgs = {
  mode: 'single' | 'range';
  label: string;
  placeholder: string;
  hint: string;
  appearance: 'outline' | 'fill';
  startView: 'month' | 'year' | 'multi-year';
  touchUi: boolean;
  showToggle: boolean;
  required: boolean;
  disabled: boolean;
  disableWeekends: boolean;
};

/** Pop-ups render in the CDK overlay, outside the themed story wrapper. */
const PANEL_CLASS = 'helix-theme-material';

function datePickerTemplate({ mode, showToggle }: DatePickerArgs): string {
  const toggle = showToggle
    ? '<mat-datepicker-toggle matIconSuffix [for]="picker"></mat-datepicker-toggle>'
    : '';

  const field =
    mode === 'range'
      ? `
        <mat-date-range-input
          [rangePicker]="picker"
          [required]="required"
          [disabled]="disabled"
          [dateFilter]="dateFilter"
        >
          <input matStartDate placeholder="Start date" />
          <input matEndDate placeholder="End date" />
        </mat-date-range-input>
        ${toggle}
        <mat-date-range-picker
          #picker
          [startView]="startView"
          [touchUi]="touchUi"
          panelClass="${PANEL_CLASS}"
        ></mat-date-range-picker>`
      : `
        <input
          matInput
          [matDatepicker]="picker"
          [matDatepickerFilter]="dateFilter"
          [placeholder]="placeholder"
          [required]="required"
          [disabled]="disabled"
        />
        ${toggle}
        <mat-datepicker
          #picker
          [startView]="startView"
          [touchUi]="touchUi"
          panelClass="${PANEL_CLASS}"
        ></mat-datepicker>`;

  return `
    <div style="padding: 16px">
      <mat-form-field [appearance]="appearance">
        <mat-label>{{ label }}</mat-label>
        ${field}
        @if (hint) {
          <mat-hint>{{ hint }}</mat-hint>
        }
      </mat-form-field>
    </div>`;
}

function weekdaysOnly(date: Date | null): boolean {
  const day = (date ?? new Date()).getDay();
  return day !== 0 && day !== 6;
}

const meta: Meta<DatePickerArgs> = {
  title: 'Components/Date picker',
  decorators: [
    applicationConfig({ providers: [provideNativeDateAdapter()] }),
    moduleMetadata({
      imports: [MatDatepickerModule, MatFormFieldModule, MatInputModule],
    }),
  ],
  parameters: {
    docs: {
      description: {
        component:
          'Helix date pickers are Angular Material datepickers inside a `mat-form-field`. Users can type a date or pick one from the calendar pop-up. A date adapter (here `provideNativeDateAdapter()`) must be provided by the app.',
      },
    },
  },
  argTypes: {
    mode: {
      control: 'inline-radio',
      options: ['single', 'range'],
      description:
        'Single date (`mat-datepicker`) or date range (`mat-date-range-input` + `mat-date-range-picker`)',
    },
    label: { control: 'text', description: 'Form field label' },
    placeholder: {
      control: 'text',
      description: 'Input placeholder (single mode)',
    },
    hint: { control: 'text', description: 'Hint text below the field' },
    appearance: {
      control: 'inline-radio',
      options: ['outline', 'fill'],
      description: '`mat-form-field` appearance',
    },
    startView: {
      control: 'inline-radio',
      options: ['month', 'year', 'multi-year'],
      description: 'Calendar view shown when the pop-up opens',
    },
    touchUi: {
      control: 'boolean',
      description: 'Open the calendar in a dialog sized for touch devices',
    },
    showToggle: {
      control: 'boolean',
      description: 'Show the calendar toggle icon button as a suffix',
    },
    required: { control: 'boolean' },
    disabled: { control: 'boolean' },
    disableWeekends: {
      control: 'boolean',
      description: 'Apply a date filter that only allows weekdays',
    },
  },
  args: {
    mode: 'single',
    label: 'Choose a date',
    placeholder: 'MM/DD/YYYY',
    hint: '',
    appearance: 'outline',
    startView: 'month',
    touchUi: false,
    showToggle: true,
    required: false,
    disabled: false,
    disableWeekends: false,
  },
  render: (args) => ({
    props: {
      ...args,
      dateFilter: args.disableWeekends ? weekdaysOnly : () => true,
    },
    template: datePickerTemplate(args),
  }),
};

export default meta;
type Story = StoryObj<DatePickerArgs>;

export const Playground: Story = {};

export const DateRange: Story = {
  args: { mode: 'range', label: 'Choose a date range' },
};

export const WithHint: Story = {
  args: { hint: 'Type a date or use the calendar', required: true },
};

export const Disabled: Story = { args: { disabled: true } };
