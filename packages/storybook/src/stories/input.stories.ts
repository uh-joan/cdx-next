import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatIconButton } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { type Meta, moduleMetadata, type StoryObj } from '@storybook/angular';

type InputArgs = {
  appearance: 'fill' | 'outline';
  label: string;
  placeholder: string;
  value: string;
  hint: string;
  type: 'text' | 'email' | 'number' | 'password' | 'search';
  size: 'default' | 'small' | 'x-small';
  floatLabel: 'auto' | 'always';
  leadingIcon: string;
  clearButton: boolean;
  required: boolean;
  disabled: boolean;
  readonly: boolean;
  error: boolean;
  errorMessage: string;
};

const sizeClass: Record<InputArgs['size'], string> = {
  default: '',
  small: 'hlx-input-small',
  'x-small': 'hlx-input-x-small',
};

/** A form control that reflects the disabled / error args. */
function inputControl({ value, disabled, error }: InputArgs): FormControl {
  const control = new FormControl(
    { value, disabled },
    error ? () => ({ invalid: true }) : null,
  );
  if (error) {
    control.markAsTouched();
  }
  return control;
}

const meta: Meta<InputArgs> = {
  title: 'Components/Input',
  decorators: [
    moduleMetadata({
      imports: [
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatIcon,
        MatIconButton,
      ],
    }),
  ],
  parameters: {
    docs: {
      description: {
        component:
          'Helix inputs are Angular Material form fields (`mat-form-field` + `matInput`) styled by the Helix theme. Hover, focus and error states are built in; size follows the density toolbar or the `hlx-input-small` / `hlx-input-x-small` classes.',
      },
    },
  },
  argTypes: {
    appearance: {
      control: 'inline-radio',
      options: ['fill', 'outline'],
      description:
        'Filled stands out from surrounding content; outlined has less visual emphasis and simplifies the layout (`appearance`)',
    },
    label: { control: 'text', description: '`<mat-label>`; keep it short' },
    placeholder: { control: 'text' },
    value: { control: 'text', description: 'Initial value' },
    hint: { control: 'text', description: 'Helper text (`<mat-hint>`)' },
    type: {
      control: 'select',
      options: ['text', 'email', 'number', 'password', 'search'],
      description: 'Native input `type`',
    },
    size: {
      control: 'inline-radio',
      options: ['default', 'small', 'x-small'],
      description:
        'Form-field density class: `hlx-input-small` (density -3) or `hlx-input-x-small` (density -4, matches the 40px default button height)',
    },
    floatLabel: {
      control: 'inline-radio',
      options: ['auto', 'always'],
      description: 'When the label floats above the field (`floatLabel`)',
    },
    leadingIcon: {
      control: 'text',
      description:
        'Material Symbols name for a leading icon (`matPrefix`) that reinforces the input’s intent; empty for none',
    },
    clearButton: {
      control: 'boolean',
      description: 'Trailing icon button (`matSuffix`) that clears the input',
    },
    required: { control: 'boolean' },
    disabled: { control: 'boolean' },
    readonly: { control: 'boolean' },
    error: {
      control: 'boolean',
      description: 'Show the error state with `<mat-error>`',
    },
    errorMessage: { control: 'text' },
  },
  args: {
    appearance: 'outline',
    label: 'Label',
    placeholder: 'Placeholder',
    value: '',
    hint: 'Helper text',
    type: 'text',
    size: 'default',
    floatLabel: 'auto',
    leadingIcon: '',
    clearButton: false,
    required: false,
    disabled: false,
    readonly: false,
    error: false,
    errorMessage: 'Enter a valid value',
  },
  render: (args) => ({
    props: {
      ...args,
      classes: sizeClass[args.size],
      control: inputControl(args),
    },
    template: `
      <div style="padding: 16px; width: 20rem">
        <mat-form-field [appearance]="appearance" [floatLabel]="floatLabel"
          [class]="classes" style="width: 100%">
          @if (label) {
            <mat-label>{{ label }}</mat-label>
          }
          @if (leadingIcon) {
            <mat-icon matPrefix>{{ leadingIcon }}</mat-icon>
          }
          <input matInput
            [type]="type"
            [placeholder]="placeholder"
            [formControl]="control"
            [required]="required"
            [readonly]="readonly" />
          @if (clearButton) {
            <button matIconButton matSuffix aria-label="Clear"
              [disabled]="control.disabled"
              (click)="control.setValue('')">
              <mat-icon>close</mat-icon>
            </button>
          }
          @if (hint) {
            <mat-hint>{{ hint }}</mat-hint>
          }
          <mat-error>{{ errorMessage }}</mat-error>
        </mat-form-field>
      </div>`,
  }),
};

export default meta;
type Story = StoryObj<InputArgs>;

export const Playground: Story = {};

export const Filled: Story = { args: { appearance: 'fill' } };

export const WithIcons: Story = {
  args: { leadingIcon: 'search', clearButton: true, value: 'Clarivate' },
};

export const ErrorState: Story = { args: { error: true, value: 'abc' } };

export const Disabled: Story = { args: { disabled: true, value: 'Value' } };

/** Both appearances in every state, for a quick visual check against Helix. */
export const Matrix: Story = {
  parameters: { controls: { include: ['label', 'placeholder', 'size'] } },
  render: (args) => {
    const states: {
      name: string;
      value: string;
      disabled: boolean;
      error: boolean;
    }[] = [
      { name: 'Enabled', value: '', disabled: false, error: false },
      { name: 'Filled in', value: 'Value', disabled: false, error: false },
      { name: 'Error', value: 'Value', disabled: false, error: true },
      { name: 'Disabled', value: 'Value', disabled: true, error: false },
    ];
    const controls = states.map((state) => inputControl({ ...args, ...state }));
    const rows = (['fill', 'outline'] as const)
      .map(
        (appearance) => `
        <div class="story-row">
          ${states
            .map(
              (state, i) => `
            <mat-form-field appearance="${appearance}" [class]="classes">
              <mat-label>{{ label }}</mat-label>
              <input matInput [placeholder]="placeholder" [formControl]="controls[${i}]" />
              <mat-hint>${state.name}</mat-hint>
              <mat-error>Error message</mat-error>
            </mat-form-field>`,
            )
            .join('')}
        </div>`,
      )
      .join('');
    return {
      props: { ...args, classes: sizeClass[args.size], controls },
      template: rows,
    };
  },
};
