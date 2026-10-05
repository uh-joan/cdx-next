import { MatFabButton, MatMiniFabButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { type Meta, moduleMetadata, type StoryObj } from '@storybook/angular';

type FabArgs = {
  type: 'fab' | 'mini' | 'extended';
  icon: string;
  label: string;
  color: 'primary' | 'accent' | 'negative' | 'invert';
  disabled: boolean;
};

const TYPES: FabArgs['type'][] = ['fab', 'mini', 'extended'];

const COLORS: FabArgs['color'][] = ['primary', 'accent', 'negative', 'invert'];

const colorClass: Record<FabArgs['color'], string> = {
  primary: '',
  accent: 'hlx-btn-accent',
  negative: 'hlx-btn-negative',
  invert: 'hlx-btn-invert',
};

function fabButton(type: FabArgs['type']): string {
  switch (type) {
    case 'mini':
      return `<button matMiniFab [disabled]="disabled" [attr.aria-label]="label">
        <mat-icon>{{ icon }}</mat-icon>
      </button>`;
    case 'extended':
      return `<button matFab extended [disabled]="disabled">
        <mat-icon>{{ icon }}</mat-icon>
        {{ label }}
      </button>`;
    default:
      return `<button matFab [disabled]="disabled" [attr.aria-label]="label">
        <mat-icon>{{ icon }}</mat-icon>
      </button>`;
  }
}

function fabRow(color: FabArgs['color'], types: FabArgs['type'][]): string {
  return `
    <div
      class="story-row ${colorClass[color]}"
      [class.story-invert]="${color === 'invert'}"
      style="align-items: center"
    >
      ${types.map(fabButton).join('')}
    </div>`;
}

const meta: Meta<FabArgs> = {
  title: 'Components/FAB',
  decorators: [
    moduleMetadata({ imports: [MatFabButton, MatMiniFabButton, MatIcon] }),
  ],
  parameters: {
    docs: {
      description: {
        component:
          'Helix floating action buttons are Angular Material `matFab` (default size), `matMiniFab` (small size) and `matFab extended` (with a label), styled by the Helix theme. Color is applied with `hlx-btn-*` classes on a parent. The Helix AI color has no theme class yet.',
      },
    },
  },
  argTypes: {
    type: {
      control: 'inline-radio',
      options: TYPES,
      description:
        '`matFab` (default size), `matMiniFab` (small size) or `matFab extended` (icon and label)',
    },
    icon: { control: 'text', description: 'Material Symbols name' },
    label: {
      control: 'text',
      description: 'Label of the extended FAB; accessible name otherwise',
    },
    color: {
      control: 'inline-radio',
      options: COLORS,
      description:
        'Primary is the default; accent for extra emphasis (`hlx-btn-accent`); invert for dark backgrounds (`hlx-btn-invert`). Negative (`hlx-btn-negative`) exists in the theme but is not a Helix FAB color.',
    },
    disabled: { control: 'boolean' },
  },
  args: {
    type: 'fab',
    icon: 'add',
    label: 'Create',
    color: 'primary',
    disabled: false,
  },
  render: (args) => ({
    props: args,
    template: fabRow(args.color, [args.type]),
  }),
};

export default meta;
type Story = StoryObj<FabArgs>;

export const Playground: Story = {};

export const MiniFab: Story = { args: { type: 'mini' } };

export const ExtendedFab: Story = { args: { type: 'extended' } };

export const Accent: Story = { args: { color: 'accent' } };

export const Invert: Story = { args: { color: 'invert' } };

export const Disabled: Story = { args: { disabled: true } };

/** Every Helix FAB color × size, for a quick visual check against Helix. */
export const Matrix: Story = {
  parameters: { controls: { include: ['icon', 'label', 'disabled'] } },
  render: (args) => ({
    props: args,
    template: (['primary', 'accent', 'invert'] as FabArgs['color'][])
      .map((color) => fabRow(color, TYPES))
      .join(''),
  }),
};
