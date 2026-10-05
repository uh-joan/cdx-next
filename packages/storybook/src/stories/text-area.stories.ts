import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { type Meta, moduleMetadata, type StoryObj } from '@storybook/angular';

type TextAreaArgs = {
  appearance: 'fill' | 'outline';
  label: string;
  placeholder: string;
  value: string;
  hint: string;
  rows: number;
  autosize: boolean;
  maxRows: number;
  maxLength: number;
  showCounter: boolean;
  required: boolean;
  disabled: boolean;
  readonly: boolean;
  error: boolean;
  errorMessage: string;
};

/** A form control that reflects the disabled / error args. */
function textAreaControl({
  value,
  disabled,
  error,
}: TextAreaArgs): FormControl<string | null> {
  const control = new FormControl(
    { value, disabled },
    error ? () => ({ invalid: true }) : null,
  );
  if (error) {
    control.markAsTouched();
  }
  return control;
}

const meta: Meta<TextAreaArgs> = {
  title: 'Components/Text area',
  decorators: [
    moduleMetadata({
      imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule],
    }),
  ],
  parameters: {
    docs: {
      description: {
        component:
          'Text areas are `<textarea matInput>` inside a `mat-form-field`, styled by the Helix theme. They are taller than standard inputs and wrap overflow text onto new lines.',
      },
    },
  },
  argTypes: {
    appearance: {
      control: 'inline-radio',
      options: ['fill', 'outline'],
      description:
        'Filled stands out from surrounding content; outlined has less visual emphasis (`appearance`)',
    },
    label: { control: 'text', description: '`<mat-label>`; keep it short' },
    placeholder: { control: 'text' },
    value: { control: 'text', description: 'Initial value' },
    hint: { control: 'text', description: 'Helper text (`<mat-hint>`)' },
    rows: {
      control: { type: 'range', min: 2, max: 10, step: 1 },
      description: 'Visible rows (`rows`; minimum rows when autosizing)',
    },
    autosize: {
      control: 'boolean',
      description: 'Grow with the content (`cdkTextareaAutosize`)',
    },
    maxRows: {
      control: { type: 'range', min: 2, max: 20, step: 1 },
      description: 'Maximum rows when autosizing (`cdkAutosizeMaxRows`)',
    },
    maxLength: {
      control: 'number',
      description: 'Native `maxlength`; 0 for no limit',
    },
    showCounter: {
      control: 'boolean',
      description: 'Character counter in an end-aligned `<mat-hint>`',
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
    label: 'Message',
    placeholder: 'Write a message',
    value: '',
    hint: 'Helper text',
    rows: 3,
    autosize: false,
    maxRows: 8,
    maxLength: 256,
    showCounter: true,
    required: false,
    disabled: false,
    readonly: false,
    error: false,
    errorMessage: 'Enter a message',
  },
  render: (args) => ({
    props: { ...args, control: textAreaControl(args) },
    template: `
      <div style="padding: 16px; width: 24rem">
        <mat-form-field [appearance]="appearance" style="width: 100%">
          @if (label) {
            <mat-label>{{ label }}</mat-label>
          }
          <textarea matInput
            [formControl]="control"
            [placeholder]="placeholder"
            [rows]="rows"
            [cdkTextareaAutosize]="autosize"
            [cdkAutosizeMinRows]="rows"
            [cdkAutosizeMaxRows]="maxRows"
            [attr.maxlength]="maxLength || null"
            [required]="required"
            [readonly]="readonly"></textarea>
          @if (hint) {
            <mat-hint>{{ hint }}</mat-hint>
          }
          @if (showCounter) {
            <mat-hint align="end">
              {{ control.value?.length ?? 0 }}{{ maxLength ? ' / ' + maxLength : '' }}
            </mat-hint>
          }
          <mat-error>{{ errorMessage }}</mat-error>
        </mat-form-field>
      </div>`,
  }),
};

export default meta;
type Story = StoryObj<TextAreaArgs>;

export const Playground: Story = {};

export const Filled: Story = { args: { appearance: 'fill' } };

export const Autosize: Story = {
  args: {
    autosize: true,
    rows: 2,
    value:
      'Text areas wrap overflow text onto new lines.\nWith autosize on, the field grows with its content up to the maximum number of rows.',
  },
};

export const ErrorState: Story = { args: { error: true } };

export const Disabled: Story = {
  args: { disabled: true, value: 'This message can’t be edited.' },
};
