import { MatDivider } from '@angular/material/divider';
import { MatIcon } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { type Meta, moduleMetadata, type StoryObj } from '@storybook/angular';

type ListArgs = {
  type: 'list' | 'action' | 'selection';
  items: number;
  subheader: string;
  lines: 1 | 2 | 3;
  leadingIcon: string;
  trailingIcon: string;
  dividers: boolean;
  multiple: boolean;
  togglePosition: 'before' | 'after';
  disabled: boolean;
};

const ITEMS = ['Books', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers', 'Boots'];

function itemContent({ lines, leadingIcon, trailingIcon }: ListArgs): string {
  const supporting =
    lines > 1
      ? `<span matListItemLine>Supporting text${
          lines > 2 ? ' that wraps onto a second line to describe the item' : ''
        }</span>`
      : '';
  return `
    ${leadingIcon ? `<mat-icon matListItemIcon>${leadingIcon}</mat-icon>` : ''}
    <span matListItemTitle>{{ label }}</span>
    ${supporting}
    ${trailingIcon ? `<mat-icon matListItemMeta>${trailingIcon}</mat-icon>` : ''}`;
}

function listTemplate(args: ListArgs): string {
  const lines = `[lines]="${args.lines}"`;
  const divider = args.dividers ? '<mat-divider></mat-divider>' : '';
  const subheader = args.subheader
    ? '<div matSubheader>{{ subheader }}</div>'
    : '';
  const loop = (item: string) => `
    @for (label of labels; track label; let first = $first) {
      ${item}
      @if (!$last) { ${divider} }
    }`;

  if (args.type === 'selection') {
    // Leading icons conflict with a 'before' checkbox, so only the meta slot is used.
    return `
      <mat-selection-list [multiple]="multiple" [disabled]="disabled">
        ${subheader}
        ${loop(`
          <mat-list-option ${lines} [togglePosition]="togglePosition" [selected]="first">
            ${itemContent({ ...args, leadingIcon: args.togglePosition === 'before' ? '' : args.leadingIcon })}
          </mat-list-option>`)}
      </mat-selection-list>`;
  }

  if (args.type === 'action') {
    return `
      <mat-action-list>
        ${subheader}
        ${loop(`
          <button mat-list-item ${lines} [disabled]="disabled">
            ${itemContent(args)}
          </button>`)}
      </mat-action-list>`;
  }

  return `
    <mat-list>
      ${subheader}
      ${loop(`
        <mat-list-item ${lines} [disabled]="disabled">
          ${itemContent(args)}
        </mat-list-item>`)}
    </mat-list>`;
}

const meta: Meta<ListArgs> = {
  title: 'Components/List',
  decorators: [
    moduleMetadata({ imports: [MatListModule, MatIcon, MatDivider] }),
  ],
  parameters: {
    docs: {
      description: {
        component:
          'Helix lists are Angular Material lists: vertical groups of text, icons or other elements designed for easy scanning. Items can be static (`mat-list`), actions (`mat-action-list`) or selectable (`mat-selection-list`).',
      },
    },
  },
  argTypes: {
    type: {
      control: 'inline-radio',
      options: ['list', 'action', 'selection'],
      description:
        '`mat-list` (static), `mat-action-list` (buttons) or `mat-selection-list` (options)',
    },
    items: {
      control: { type: 'range', min: 1, max: ITEMS.length, step: 1 },
      description: 'Number of items',
    },
    subheader: {
      control: 'text',
      description: '`matSubheader` text; empty to hide',
    },
    lines: {
      control: 'inline-radio',
      options: [1, 2, 3],
      description: 'One-, two- or three-line items (`[lines]`)',
    },
    leadingIcon: {
      control: 'text',
      description:
        'Leading `matListItemIcon` (Material Symbols name); empty to hide',
    },
    trailingIcon: {
      control: 'text',
      description: 'Trailing `matListItemMeta` icon; empty to hide',
    },
    dividers: {
      control: 'boolean',
      description: 'Separate items with `mat-divider`',
    },
    multiple: {
      control: 'boolean',
      description: 'Selection list: allow multiple selected options',
    },
    togglePosition: {
      control: 'inline-radio',
      options: ['before', 'after'],
      description: 'Selection list: checkbox/radio position',
    },
    disabled: { control: 'boolean', description: 'Disable the items' },
  },
  args: {
    type: 'list',
    items: 4,
    subheader: 'Groceries',
    lines: 1,
    leadingIcon: '',
    trailingIcon: '',
    dividers: false,
    multiple: true,
    togglePosition: 'after',
    disabled: false,
  },
  render: (args) => ({
    props: { ...args, labels: ITEMS.slice(0, args.items) },
    template: `<div style="padding: 16px; max-width: 360px">${listTemplate(args)}</div>`,
  }),
};

export default meta;
type Story = StoryObj<ListArgs>;

export const Playground: Story = {};

export const WithIcons: Story = {
  args: { leadingIcon: 'account_circle', trailingIcon: 'chevron_right' },
};

export const TwoLine: Story = {
  args: { lines: 2, leadingIcon: 'folder', dividers: true },
};

export const Actions: Story = {
  args: { type: 'action', trailingIcon: 'chevron_right' },
};

export const Selection: Story = {
  args: { type: 'selection', subheader: 'List with selection' },
};
