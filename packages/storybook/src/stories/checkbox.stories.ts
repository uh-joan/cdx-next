import { MatCheckbox } from '@angular/material/checkbox';
import { type Meta, moduleMetadata, type StoryObj } from '@storybook/angular';

type CheckboxArgs = {
  label: string;
  checked: boolean;
  indeterminate: boolean;
  disabled: boolean;
  disabledInteractive: boolean;
  required: boolean;
  labelPosition: 'after' | 'before';
};

const meta: Meta<CheckboxArgs> = {
  title: 'Components/Checkbox',
  decorators: [moduleMetadata({ imports: [MatCheckbox] })],
  parameters: {
    docs: {
      description: {
        component:
          'Helix checkboxes are Angular Material checkboxes styled by the Helix theme. Use them for multiple selection or to turn a setting on and off; use radio buttons when only one option can be selected.',
      },
    },
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'Label text. Helix: keep labels scannable.',
    },
    checked: { control: 'boolean', description: '`checked`' },
    indeterminate: {
      control: 'boolean',
      description:
        '`indeterminate` — mixed state, e.g. a parent with some children selected',
    },
    disabled: { control: 'boolean', description: '`disabled`' },
    disabledInteractive: {
      control: 'boolean',
      description: 'Keep the disabled checkbox focusable (e.g. for tooltips)',
    },
    required: { control: 'boolean', description: '`required`' },
    labelPosition: {
      control: 'inline-radio',
      options: ['after', 'before'],
      description: '`labelPosition`',
    },
  },
  args: {
    label: 'Remember me',
    checked: false,
    indeterminate: false,
    disabled: false,
    disabledInteractive: false,
    required: false,
    labelPosition: 'after',
  },
  render: (args) => ({
    props: args,
    template: `
      <div style="padding: 16px">
        <mat-checkbox
          [checked]="checked"
          [indeterminate]="indeterminate"
          [disabled]="disabled"
          [disabledInteractive]="disabledInteractive"
          [required]="required"
          [labelPosition]="labelPosition"
        >{{ label }}</mat-checkbox>
      </div>`,
  }),
};

export default meta;
type Story = StoryObj<CheckboxArgs>;

export const Playground: Story = {};

export const Checked: Story = { args: { checked: true } };

export const Indeterminate: Story = { args: { indeterminate: true } };

export const Disabled: Story = { args: { disabled: true, checked: true } };

/** Unchecked, checked and indeterminate, enabled and disabled. */
export const States: Story = {
  parameters: { controls: { include: ['labelPosition'] } },
  render: (args) => ({
    props: args,
    template: [false, true]
      .map(
        (disabled) => `
        <div class="story-row">
          <mat-checkbox [labelPosition]="labelPosition" [disabled]="${disabled}">Unchecked</mat-checkbox>
          <mat-checkbox [labelPosition]="labelPosition" [disabled]="${disabled}" [checked]="true">Checked</mat-checkbox>
          <mat-checkbox [labelPosition]="labelPosition" [disabled]="${disabled}" [indeterminate]="true">Indeterminate</mat-checkbox>
        </div>`,
      )
      .join(''),
  }),
};

/** Helix: use a parent checkbox to select or deselect all items at once. */
export const ParentChild: Story = {
  parameters: { controls: { include: ['disabled'] } },
  render: (args) => {
    const items = [
      { name: 'Articles', checked: true },
      { name: 'Books', checked: false },
      { name: 'Patents', checked: false },
    ];
    return {
      props: {
        ...args,
        items,
        all: () => items.every((item) => item.checked),
        some: () =>
          items.some((item) => item.checked) &&
          !items.every((item) => item.checked),
        setAll: (checked: boolean) =>
          items.forEach((item) => (item.checked = checked)),
      },
      template: `
        <div style="padding: 16px">
          <mat-checkbox
            [checked]="all()"
            [indeterminate]="some()"
            [disabled]="disabled"
            (change)="setAll($event.checked)"
          >All document types</mat-checkbox>
          <ul style="list-style: none; margin: 0; padding-left: 24px">
            @for (item of items; track item.name) {
              <li>
                <mat-checkbox
                  [checked]="item.checked"
                  (change)="item.checked = $event.checked"
                  [disabled]="disabled"
                >{{ item.name }}</mat-checkbox>
              </li>
            }
          </ul>
        </div>`,
    };
  },
};
