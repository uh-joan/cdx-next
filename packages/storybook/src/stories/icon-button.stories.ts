import { MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatTooltip } from '@angular/material/tooltip';
import { type Meta, moduleMetadata, type StoryObj } from '@storybook/angular';

type IconButtonArgs = {
  icon: string;
  ariaLabel: string;
  color: 'primary' | 'accent' | 'negative' | 'invert';
  density: '0' | '-1' | '-2' | '-3';
  tooltip: string;
  disabled: boolean;
};

const COLORS: IconButtonArgs['color'][] = [
  'primary',
  'accent',
  'negative',
  'invert',
];

const DENSITIES: IconButtonArgs['density'][] = ['0', '-1', '-2', '-3'];

const colorClass: Record<IconButtonArgs['color'], string> = {
  primary: '',
  accent: 'hlx-btn-accent',
  negative: 'hlx-btn-negative',
  invert: 'hlx-btn-invert',
};

/** Same classes the density toolbar puts on `<body>`, scoped to the story. */
function densityClass(density: IconButtonArgs['density']): string {
  return density === '0' ? '' : `hlx-density-${density.replace('-', 'minus-')}`;
}

function iconButton(color: IconButtonArgs['color'], density = '0'): string {
  return `
    <div
      class="story-row ${colorClass[color]} ${densityClass(
        density as IconButtonArgs['density'],
      )}"
      [class.story-invert]="${color === 'invert'}"
    >
      <button
        matIconButton
        [disabled]="disabled"
        [attr.aria-label]="ariaLabel"
        [matTooltip]="tooltip"
      >
        <mat-icon>{{ icon }}</mat-icon>
      </button>
    </div>`;
}

const meta: Meta<IconButtonArgs> = {
  title: 'Components/Icon button',
  decorators: [
    moduleMetadata({ imports: [MatIconButton, MatIcon, MatTooltip] }),
  ],
  parameters: {
    docs: {
      description: {
        component:
          'Helix icon buttons are Angular Material `matIconButton`s styled by the Helix theme. Color is applied with `hlx-btn-*` classes on a parent. Size comes from density (0 to -3), which changes the hover effect and target area but not the icon size; use the density toolbar or `mat.icon-button-density()`.',
      },
    },
  },
  argTypes: {
    icon: { control: 'text', description: 'Material Symbols name' },
    ariaLabel: {
      control: 'text',
      description: 'Accessible name (icon buttons have no visible label)',
    },
    color: {
      control: 'inline-radio',
      options: COLORS,
      description:
        'Primary is the default; accent for extra emphasis (`hlx-btn-accent`); negative for destructive actions (`hlx-btn-negative`); invert for dark backgrounds (`hlx-btn-invert`).',
    },
    density: {
      control: 'inline-radio',
      options: DENSITIES,
      description:
        'Density level for this story only (adds to the density toolbar).',
    },
    tooltip: {
      control: 'text',
      description: 'Tooltip describing the action, shown on hover',
    },
    disabled: { control: 'boolean' },
  },
  args: {
    icon: 'favorite',
    ariaLabel: 'Add to favorites',
    color: 'primary',
    density: '0',
    tooltip: 'Add to favorites',
    disabled: false,
  },
  render: (args) => ({
    props: args,
    template: iconButton(args.color, args.density),
  }),
};

export default meta;
type Story = StoryObj<IconButtonArgs>;

export const Playground: Story = {};

export const Accent: Story = { args: { color: 'accent' } };

export const Negative: Story = {
  args: {
    color: 'negative',
    icon: 'delete',
    ariaLabel: 'Delete',
    tooltip: 'Delete',
  },
};

export const Invert: Story = { args: { color: 'invert' } };

export const Disabled: Story = { args: { disabled: true } };

/** Every color, for a quick visual check against Helix. */
export const Colors: Story = {
  parameters: { controls: { include: ['icon', 'density', 'disabled'] } },
  render: (args) => ({
    props: args,
    template: COLORS.map((color) => iconButton(color, args.density)).join(''),
  }),
};

/** The four Helix sizes (density 0 to -3). */
export const Densities: Story = {
  parameters: { controls: { include: ['icon', 'color', 'disabled'] } },
  render: (args) => ({
    props: args,
    template: DENSITIES.map((density) => iconButton(args.color, density)).join(
      '',
    ),
  }),
};
