import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { type Meta, moduleMetadata, type StoryObj } from '@storybook/angular';

type AutocompleteArgs = {
  label: string;
  placeholder: string;
  appearance: 'fill' | 'outline';
  size: 'default' | 'small' | 'x-small';
  grouped: boolean;
  autoActiveFirstOption: boolean;
  requireSelection: boolean;
  hideSingleSelectionIndicator: boolean;
  disabledOption: boolean;
  prefixIcon: string;
  disabled: boolean;
};

const GROUPS = [
  { name: 'Fruit', options: ['Apple', 'Banana', 'Cherry', 'Orange'] },
  { name: 'Vegetables', options: ['Broccoli', 'Carrot', 'Lettuce', 'Potato'] },
];

const sizeClass: Record<AutocompleteArgs['size'], string> = {
  default: '',
  small: 'hlx-input-small',
  'x-small': 'hlx-input-x-small',
};

/** Groups filtered by the current query; empty groups are dropped. */
function filterGroups(query: string) {
  const q = (query ?? '').toLowerCase();
  return GROUPS.map((group) => ({
    name: group.name,
    options: group.options.filter((o) => o.toLowerCase().includes(q)),
  })).filter((group) => group.options.length);
}

const option = `<mat-option
            [value]="option"
            [disabled]="disabledOption && option === 'Banana'"
          >{{ option }}</mat-option>`;

const template = `
  <mat-form-field [appearance]="appearance" [class]="sizeClass" style="width: 320px">
    @if (label) {
      <mat-label>{{ label }}</mat-label>
    }
    @if (prefixIcon) {
      <mat-icon matPrefix>{{ prefixIcon }}</mat-icon>
    }
    <input
      matInput
      [placeholder]="placeholder"
      [disabled]="disabled"
      [matAutocomplete]="auto"
      (input)="query = $any($event.target).value"
    />
    <mat-autocomplete
      #auto="matAutocomplete"
      [autoActiveFirstOption]="autoActiveFirstOption"
      [requireSelection]="requireSelection"
      [hideSingleSelectionIndicator]="hideSingleSelectionIndicator"
      (optionSelected)="query = $event.option.value"
    >
      @for (group of filterGroups(query); track group.name) {
        @if (grouped) {
          <mat-optgroup [label]="group.name">
            @for (option of group.options; track option) {
              ${option}
            }
          </mat-optgroup>
        } @else {
          @for (option of group.options; track option) {
            ${option}
          }
        }
      }
    </mat-autocomplete>
  </mat-form-field>`;

const meta: Meta<AutocompleteArgs> = {
  title: 'Components/Autocomplete',
  decorators: [
    moduleMetadata({
      imports: [
        MatFormFieldModule,
        MatInputModule,
        MatAutocompleteModule,
        MatIcon,
      ],
    }),
  ],
  parameters: {
    docs: {
      description: {
        component:
          'A `matInput` inside a `mat-form-field` with a `mat-autocomplete` panel, styled by the Helix theme. Type to filter the suggestions.',
      },
    },
  },
  argTypes: {
    label: {
      control: 'text',
      description: '`mat-label` (leave empty for none)',
    },
    placeholder: { control: 'text' },
    appearance: {
      control: 'inline-radio',
      options: ['fill', 'outline'],
      description: '`mat-form-field` appearance',
    },
    size: {
      control: 'inline-radio',
      options: ['default', 'small', 'x-small'],
      description:
        'Form field size: `hlx-input-small` / `hlx-input-x-small` classes',
    },
    grouped: {
      control: 'boolean',
      description: 'Group the suggestions with `mat-optgroup`',
    },
    autoActiveFirstOption: {
      control: 'boolean',
      description: 'Highlight the first option when the panel opens',
    },
    requireSelection: {
      control: 'boolean',
      description: 'Clear the input on blur unless the value matches an option',
    },
    hideSingleSelectionIndicator: {
      control: 'boolean',
      description: 'Hide the checkmark on the selected option',
    },
    disabledOption: {
      control: 'boolean',
      description: 'Disable one of the options ("Banana")',
    },
    prefixIcon: {
      control: 'text',
      description:
        'Material Symbols name for a `matPrefix` icon (empty for none)',
    },
    disabled: { control: 'boolean' },
  },
  args: {
    label: 'Food',
    placeholder: 'Start typing…',
    appearance: 'outline',
    size: 'default',
    grouped: false,
    autoActiveFirstOption: false,
    requireSelection: false,
    hideSingleSelectionIndicator: false,
    disabledOption: false,
    prefixIcon: '',
    disabled: false,
  },
  render: (args) => ({
    props: {
      ...args,
      query: '',
      sizeClass: sizeClass[args.size],
      filterGroups,
    },
    template,
  }),
};

export default meta;
type Story = StoryObj<AutocompleteArgs>;

export const Playground: Story = {};

export const Filled: Story = { args: { appearance: 'fill' } };

export const Grouped: Story = { args: { grouped: true } };

export const WithSearchIcon: Story = {
  args: { prefixIcon: 'search', autoActiveFirstOption: true },
};

export const Disabled: Story = { args: { disabled: true } };
