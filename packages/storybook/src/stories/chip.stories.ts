import { MatChipsModule } from '@angular/material/chips';
import { MatIcon } from '@angular/material/icon';
import { type Meta, moduleMetadata, type StoryObj } from '@storybook/angular';

type ChipArgs = {
  labels: string;
  type: 'static' | 'filter' | 'input';
  color:
    | 'basic'
    | 'neutral'
    | 'outlined'
    | 'primary'
    | 'accent'
    | 'negative'
    | 'positive'
    | 'warn'
    | 'info';
  size: 'default' | 'small' | 'xsmall';
  leadingIcon: string;
  removable: boolean;
  selectFirst: boolean;
  disabled: boolean;
};

const COLORS: ChipArgs['color'][] = [
  'basic',
  'neutral',
  'outlined',
  'primary',
  'accent',
  'negative',
  'positive',
  'warn',
  'info',
];

function colorClass(color: ChipArgs['color']): string {
  return color === 'basic' ? '' : `hlx-${color}-chip`;
}

function sizeClass(size: ChipArgs['size']): string {
  return size === 'default' ? '' : `hlx-chip-${size}`;
}

const CONTAINER: Record<ChipArgs['type'], [string, string]> = {
  static: ['mat-chip-set', 'mat-chip'],
  filter: ['mat-chip-listbox', 'mat-chip-option'],
  input: ['mat-chip-grid', 'mat-chip-row'],
};

function chipTemplate(args: ChipArgs, labelList?: string[]): string {
  const [container, chip] = CONTAINER[args.type];
  const labels =
    labelList ??
    args.labels
      .split(',')
      .map((label) => label.trim())
      .filter(Boolean);
  const chips = labels
    .map((label, index) => {
      const selected =
        args.type === 'filter' && index === 0
          ? ' [selected]="selectFirst"'
          : '';
      const icon = args.leadingIcon
        ? `<mat-icon matChipAvatar>${args.leadingIcon}</mat-icon>`
        : '';
      const remove = args.removable
        ? `<button matChipRemove aria-label="Remove ${label}"><mat-icon>cancel</mat-icon></button>`
        : '';
      return `<${chip} class="${colorClass(args.color)}"${selected} [disabled]="disabled">${icon}${label}${remove}</${chip}>`;
    })
    .join('\n        ');
  const input =
    args.type === 'input'
      ? `<input placeholder="Add keyword…" [matChipInputFor]="grid" aria-label="Add keyword" />`
      : '';
  const ref = args.type === 'input' ? ' #grid' : '';
  const multiple = args.type === 'filter' ? ' multiple' : '';

  return `
      <${container}${ref}${multiple} class="${sizeClass(args.size)}" aria-label="Chips">
        ${chips}
        ${input}
      </${container}>`;
}

const meta: Meta<ChipArgs> = {
  title: 'Components/Chip',
  decorators: [moduleMetadata({ imports: [MatChipsModule, MatIcon] })],
  parameters: {
    docs: {
      description: {
        component:
          'Helix chips are Angular Material chips styled with `hlx-<color>-chip` classes on each chip; size is set with `hlx-chip-small` / `hlx-chip-xsmall` on the chip container.',
      },
    },
  },
  argTypes: {
    labels: { control: 'text', description: 'Comma-separated chip labels' },
    type: {
      control: 'inline-radio',
      options: ['static', 'filter', 'input'],
      description:
        'Static `mat-chip` in a `mat-chip-set` (status, assist); selectable `mat-chip-option` in a `mat-chip-listbox` (filter); `mat-chip-row` in a `mat-chip-grid` with a text input (input).',
    },
    color: {
      control: 'select',
      options: COLORS,
      description:
        'Standard: neutral / outlined (default, unselected), primary (emphasis, selected), basic (no class, simple actions), accent (extra emphasis). Semantic: negative, positive, warn, info. Applied as `hlx-<color>-chip`.',
    },
    size: {
      control: 'inline-radio',
      options: ['default', 'small', 'xsmall'],
      description: '`hlx-chip-small` / `hlx-chip-xsmall` on the container',
    },
    leadingIcon: {
      control: 'text',
      description:
        'Leading `matChipAvatar` icon (Material Symbols name; empty for none)',
    },
    removable: {
      control: 'boolean',
      description: 'Trailing `matChipRemove` button',
    },
    selectFirst: {
      control: 'boolean',
      description: 'Select the first chip (filter type only)',
    },
    disabled: { control: 'boolean', description: '`disabled`' },
  },
  args: {
    labels: 'Completed, In progress, Draft',
    type: 'static',
    color: 'neutral',
    size: 'default',
    leadingIcon: '',
    removable: false,
    selectFirst: true,
    disabled: false,
  },
  render: (args) => ({
    props: args,
    template: `<div style="padding: 16px">${chipTemplate(args)}</div>`,
  }),
};

export default meta;
type Story = StoryObj<ChipArgs>;

export const Playground: Story = {};

export const Primary: Story = { args: { color: 'primary' } };

export const WithIcons: Story = {
  args: {
    labels: 'Walk, Cycle, Bus',
    leadingIcon: 'directions_walk',
    removable: true,
  },
};

export const Filter: Story = {
  args: { type: 'filter', labels: 'Articles, Books, Patents, Datasets' },
};

export const Input: Story = {
  args: { type: 'input', labels: 'climate, oncology', removable: true },
};

/** Every color × size, for a quick visual check against Helix. */
export const Matrix: Story = {
  parameters: {
    controls: { include: ['leadingIcon', 'removable', 'disabled'] },
  },
  render: (args) => {
    const sizes: ChipArgs['size'][] = ['default', 'small', 'xsmall'];
    return {
      props: args,
      template: sizes
        .map(
          (size) => `
          <div class="story-row">
            ${COLORS.map((color) =>
              chipTemplate({ ...args, type: 'static', size, color }, [color]),
            ).join('')}
          </div>`,
        )
        .join(''),
    };
  },
};
