import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { type Meta, moduleMetadata, type StoryObj } from '@storybook/angular';

type FormFieldArgs = {
  control: 'input' | 'select' | 'textarea';
  appearance: 'fill' | 'outline';
  size: 'default' | 'small' | 'x-small';
  label: string;
  placeholder: string;
  floatLabel: 'auto' | 'always';
  hint: string;
  error: boolean;
  errorText: string;
  prefixIcon: string;
  suffixIcon: string;
  required: boolean;
  disabled: boolean;
  transparent: boolean;
};

const sizeClass: Record<FormFieldArgs['size'], string> = {
  default: '',
  small: 'hlx-input-small',
  'x-small': 'hlx-input-x-small',
};

function fieldClasses({ size, transparent }: FormFieldArgs): string {
  return [sizeClass[size], transparent ? 'mat-form-field--transparent' : '']
    .filter(Boolean)
    .join(' ');
}

const controlTemplates: Record<FormFieldArgs['control'], string> = {
  input: `<input matInput [placeholder]="placeholder" [required]="required" [disabled]="disabled" [errorStateMatcher]="matcher" />`,
  textarea: `<textarea matInput [placeholder]="placeholder" [required]="required" [disabled]="disabled" [errorStateMatcher]="matcher"></textarea>`,
  select: `<mat-select [placeholder]="placeholder" [required]="required" [disabled]="disabled" [errorStateMatcher]="matcher">
        <mat-option value="one">First option</mat-option>
        <mat-option value="two">Second option</mat-option>
      </mat-select>`,
};

/** One form field; `appearance` / `classes` come from props so the matrix can override them. */
function fieldTemplate(
  control: FormFieldArgs['control'],
  appearance: string,
  classes: string,
): string {
  return `
    <mat-form-field appearance="${appearance}" class="${classes}" [floatLabel]="floatLabel" style="width: 280px">
      @if (label) {
        <mat-label>{{ label }}</mat-label>
      }
      @if (prefixIcon) {
        <mat-icon matPrefix>{{ prefixIcon }}</mat-icon>
      }
      ${controlTemplates[control]}
      @if (suffixIcon) {
        <mat-icon matSuffix>{{ suffixIcon }}</mat-icon>
      }
      @if (hint) {
        <mat-hint>{{ hint }}</mat-hint>
      }
      <mat-error>{{ errorText }}</mat-error>
    </mat-form-field>`;
}

function fieldProps(args: FormFieldArgs) {
  return { ...args, matcher: { isErrorState: () => args.error } };
}

const meta: Meta<FormFieldArgs> = {
  title: 'Components/Form field',
  decorators: [
    moduleMetadata({
      imports: [MatFormFieldModule, MatInputModule, MatSelectModule, MatIcon],
    }),
  ],
  parameters: {
    docs: {
      description: {
        component:
          '`mat-form-field` wraps `matInput`, `textarea` and `mat-select` and adds the label, hint, error and prefix/suffix slots. Size is applied with `hlx-input-small` / `hlx-input-x-small`.',
      },
    },
  },
  argTypes: {
    control: {
      control: 'inline-radio',
      options: ['input', 'select', 'textarea'],
      description: 'Control projected into the form field',
    },
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
    label: { control: 'text', description: '`mat-label` (empty for none)' },
    placeholder: { control: 'text' },
    floatLabel: {
      control: 'inline-radio',
      options: ['auto', 'always'],
      description: 'When the label floats above the control',
    },
    hint: { control: 'text', description: '`mat-hint` text (empty for none)' },
    error: {
      control: 'boolean',
      description:
        'Force the error state (shows `mat-error` instead of the hint)',
    },
    errorText: { control: 'text', description: '`mat-error` text' },
    prefixIcon: {
      control: 'text',
      description:
        'Material Symbols name for a `matPrefix` icon (empty for none)',
    },
    suffixIcon: {
      control: 'text',
      description:
        'Material Symbols name for a `matSuffix` icon (empty for none)',
    },
    required: {
      control: 'boolean',
      description: 'Mark the control required (adds the asterisk to the label)',
    },
    disabled: { control: 'boolean' },
    transparent: {
      control: 'boolean',
      description:
        'Transparent background for the fill appearance (`mat-form-field--transparent`)',
    },
  },
  args: {
    control: 'input',
    appearance: 'outline',
    size: 'default',
    label: 'Label',
    placeholder: 'Placeholder',
    floatLabel: 'auto',
    hint: 'Hint text',
    error: false,
    errorText: 'This field is required',
    prefixIcon: '',
    suffixIcon: '',
    required: false,
    disabled: false,
    transparent: false,
  },
  render: (args) => ({
    props: fieldProps(args),
    template: fieldTemplate(args.control, args.appearance, fieldClasses(args)),
  }),
};

export default meta;
type Story = StoryObj<FormFieldArgs>;

export const Playground: Story = {};

export const Filled: Story = { args: { appearance: 'fill' } };

export const Select: Story = { args: { control: 'select' } };

export const WithIcons: Story = {
  args: { prefixIcon: 'search', suffixIcon: 'sentiment_very_satisfied' },
};

export const ErrorState: Story = { args: { error: true, required: true } };

export const Disabled: Story = { args: { disabled: true } };

/** Every appearance × size, for a quick visual check against Helix. */
export const Matrix: Story = {
  parameters: {
    controls: {
      include: ['control', 'label', 'placeholder', 'hint', 'error', 'disabled'],
    },
  },
  render: (args) => {
    const sizes: FormFieldArgs['size'][] = ['default', 'small', 'x-small'];
    const appearances: FormFieldArgs['appearance'][] = ['fill', 'outline'];
    const rows = appearances
      .map(
        (appearance) => `
        <div style="display: flex; gap: 16px; align-items: flex-start; flex-wrap: wrap">
          ${sizes
            .map((size) =>
              fieldTemplate(
                args.control,
                appearance,
                fieldClasses({ ...args, size }),
              ),
            )
            .join('')}
        </div>`,
      )
      .join('');
    return { props: fieldProps(args), template: rows };
  },
};
