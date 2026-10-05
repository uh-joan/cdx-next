import type { ErrorStateMatcher } from '@angular/material/core';
import { MatIcon } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { type Meta, moduleMetadata, type StoryObj } from '@storybook/angular';

type SelectArgs = {
  appearance: 'fill' | 'outline';
  label: string;
  placeholder: string;
  hint: string;
  leadingIcon: string;
  multiple: boolean;
  grouped: boolean;
  required: boolean;
  disabled: boolean;
  disabledOption: boolean;
  error: boolean;
  errorMessage: string;
};

// Select panels render in the CDK overlay, outside the themed story wrapper,
// so the panel carries the Helix theme class itself.
const PANEL_CLASS = 'helix-theme-material';

function errorMatcher(error: boolean): ErrorStateMatcher {
  return { isErrorState: () => error };
}

const flatOptions = `
  <mat-option value="apple">Apple</mat-option>
  <mat-option value="banana">Banana</mat-option>
  <mat-option value="cherry" [disabled]="disabledOption">Cherry</mat-option>
  <mat-option value="grape">Grape</mat-option>`;

const groupedOptions = `
  <mat-optgroup label="Fruit">
    <mat-option value="apple">Apple</mat-option>
    <mat-option value="banana">Banana</mat-option>
    <mat-option value="cherry" [disabled]="disabledOption">Cherry</mat-option>
  </mat-optgroup>
  <mat-optgroup label="Vegetables">
    <mat-option value="carrot">Carrot</mat-option>
    <mat-option value="leek">Leek</mat-option>
    <mat-option value="pepper">Pepper</mat-option>
  </mat-optgroup>`;

/** Bindings that the matrix story overrides per cell. */
type FieldBindings = { appearance: string; disabled: string; matcher: string };

function selectTemplate(
  args: SelectArgs,
  { appearance, disabled, matcher }: FieldBindings = {
    appearance: 'appearance',
    disabled: 'disabled',
    matcher: 'matcher',
  },
): string {
  return `
    <mat-form-field [appearance]="${appearance}">
      <mat-label>{{ label }}</mat-label>
      ${args.leadingIcon ? '<mat-icon matPrefix>{{ leadingIcon }}</mat-icon>' : ''}
      <mat-select
        [placeholder]="placeholder"
        [multiple]="multiple"
        [required]="required"
        [disabled]="${disabled}"
        [errorStateMatcher]="${matcher}"
        panelClass="${PANEL_CLASS}"
      >
        ${args.grouped ? groupedOptions : flatOptions}
      </mat-select>
      @if (hint) {
        <mat-hint>{{ hint }}</mat-hint>
      }
      <mat-error>{{ errorMessage }}</mat-error>
    </mat-form-field>`;
}

const meta: Meta<SelectArgs> = {
  title: 'Components/Select',
  decorators: [moduleMetadata({ imports: [MatSelectModule, MatIcon] })],
  parameters: {
    docs: {
      description: {
        component:
          'Helix selects are Angular Material selects in a `mat-form-field`, styled by the Helix theme. Choose the filled or outlined style; density (toolbar) sets the height.',
      },
    },
  },
  argTypes: {
    appearance: {
      control: 'inline-radio',
      options: ['fill', 'outline'],
      description:
        '`mat-form-field` appearance: outlined has less visual emphasis; filled stands out more from surrounding content.',
    },
    label: {
      control: 'text',
      description: 'Clear, short and persistent label',
    },
    placeholder: {
      control: 'text',
      description: 'Shown when nothing is selected and the field is focused',
    },
    hint: { control: 'text', description: 'Supporting text below the field' },
    leadingIcon: {
      control: 'text',
      description:
        'Material Symbols name for a leading (`matPrefix`) icon; empty for none',
    },
    multiple: {
      control: 'boolean',
      description: 'Allow selecting several options',
    },
    grouped: {
      control: 'boolean',
      description: 'Group options by category with `mat-optgroup`',
    },
    required: { control: 'boolean' },
    disabled: { control: 'boolean', description: 'Disable the whole select' },
    disabledOption: {
      control: 'boolean',
      description: 'Disable the "Cherry" option',
    },
    error: {
      control: 'boolean',
      description: 'Force the error state (via an `ErrorStateMatcher`)',
    },
    errorMessage: {
      control: 'text',
      description: 'Message shown in the error state',
      if: { arg: 'error' },
    },
  },
  args: {
    appearance: 'fill',
    label: 'Favorite food',
    placeholder: 'Choose an option',
    hint: '',
    leadingIcon: '',
    multiple: false,
    grouped: false,
    required: false,
    disabled: false,
    disabledOption: false,
    error: false,
    errorMessage: 'Please choose an option',
  },
  render: (args) => ({
    props: { ...args, matcher: errorMatcher(args.error) },
    template: `<div style="padding: 16px">${selectTemplate(args)}</div>`,
  }),
};

export default meta;
type Story = StoryObj<SelectArgs>;

export const Playground: Story = {};

export const Outlined: Story = { args: { appearance: 'outline' } };

export const WithLeadingIcon: Story = { args: { leadingIcon: 'restaurant' } };

export const Grouped: Story = { args: { grouped: true } };

export const Multiple: Story = { args: { multiple: true } };

export const ErrorState: Story = { args: { error: true, required: true } };

export const Disabled: Story = { args: { disabled: true } };

/** Both styles × default, disabled and error states. */
export const Matrix: Story = {
  parameters: { controls: { include: ['label', 'leadingIcon', 'hint'] } },
  render: (args) => {
    const states = [
      { disabled: false, error: false },
      { disabled: true, error: false },
      { disabled: false, error: true },
    ];
    const rows = (['fill', 'outline'] as const)
      .map(
        (appearance) => `
        <div class="story-row">
          ${states
            .map((state, i) =>
              selectTemplate(args, {
                appearance: `'${appearance}'`,
                disabled: `${state.disabled}`,
                matcher: `matchers[${i}]`,
              }),
            )
            .join('')}
        </div>`,
      )
      .join('');
    return {
      props: {
        ...args,
        matchers: states.map((state) => errorMatcher(state.error)),
      },
      template: rows,
    };
  },
};
