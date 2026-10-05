import { MatIcon } from '@angular/material/icon';
import { type Meta, moduleMetadata, type StoryObj } from '@storybook/angular';

type IconColor =
  | 'default'
  | 'primary'
  | 'secondary'
  | 'disabled'
  | 'invert'
  | 'info'
  | 'positive'
  | 'warn'
  | 'negative'
  | 'brand'
  | 'accent';

type IconArgs = {
  name: string;
  color: IconColor;
  size: 'small' | 'medium' | 'large' | 'xlarge';
  ariaLabel: string;
};

const COLORS: IconColor[] = [
  'default',
  'primary',
  'secondary',
  'disabled',
  'invert',
  'info',
  'positive',
  'warn',
  'negative',
  'brand',
  'accent',
];

/** Font size in px; 24px (large) is the `mat-icon` default. */
const SIZES: Record<IconArgs['size'], number> = {
  small: 16,
  medium: 20,
  large: 24,
  xlarge: 32,
};

/** Semantic colors are used on their matching surface (as in the docs). */
const SURFACES: Partial<Record<IconColor, string>> = {
  invert: 'var(--mat-sys-inverse-surface)',
  info: 'var(--hlx-surface-info, #d7e8f7)',
  warn: 'var(--hlx-surface-warn, #ffefd1)',
};

function colorClass(color: IconColor): string {
  return color === 'default' ? '' : `hlx-icon-${color}`;
}

function iconTemplate(color: IconColor): string {
  const surface = SURFACES[color];
  return `
    <div
      class="${colorClass(color)}"
      style="display: inline-flex; padding: 8px;${
        surface ? ` background: ${surface};` : ''
      }"
    >
      <mat-icon
        [inline]="true"
        [style.font-size.px]="fontSize"
        [attr.aria-hidden]="ariaLabel ? null : 'true'"
        [attr.aria-label]="ariaLabel || null"
        [attr.role]="ariaLabel ? 'img' : null"
      >{{ name }}</mat-icon>
    </div>`;
}

const meta: Meta<IconArgs> = {
  title: 'Components/Icon',
  decorators: [moduleMetadata({ imports: [MatIcon] })],
  parameters: {
    docs: {
      description: {
        component:
          'Helix icons are Angular Material `mat-icon`s using Google Material Symbols. Color them with an `hlx-icon-<color>` class on the icon or its container: standard (primary, secondary, disabled, invert), semantic (info, positive, warn, negative, used on their matching surface) and distinct (brand, accent). See Foundations › Iconography.',
      },
    },
  },
  argTypes: {
    name: { control: 'text', description: 'Material Symbols name' },
    color: {
      control: 'select',
      options: COLORS,
      description:
        '`hlx-icon-<color>` class. Standard: primary, secondary, disabled, invert. Semantic: info, positive, warn, negative. Distinct: brand, accent.',
    },
    size: {
      control: 'inline-radio',
      options: Object.keys(SIZES),
      description:
        'Icon size: small 16px, medium 20px, large 24px (default), xlarge 32px',
    },
    ariaLabel: {
      control: 'text',
      description:
        'Accessible label for meaningful icons; leave empty for decorative icons (`aria-hidden`)',
    },
  },
  args: {
    name: 'check_circle',
    color: 'default',
    size: 'large',
    ariaLabel: '',
  },
  render: (args) => ({
    props: { ...args, fontSize: SIZES[args.size] },
    template: `<div style="padding: 16px">${iconTemplate(args.color)}</div>`,
  }),
};

export default meta;
type Story = StoryObj<IconArgs>;

export const Playground: Story = {};

export const Semantic: Story = { args: { name: 'error', color: 'negative' } };

export const Distinct: Story = {
  args: { name: 'auto_awesome', color: 'brand' },
};

export const ExtraLarge: Story = { args: { name: 'settings', size: 'xlarge' } };

/** Every Helix icon color, for a quick visual check against Helix. */
export const Colors: Story = {
  parameters: { controls: { include: ['name', 'size'] } },
  render: (args) => ({
    props: { ...args, fontSize: SIZES[args.size] },
    template: `
      <div class="story-row">
        ${COLORS.map(
          (color) => `
          <figure style="margin: 0; text-align: center">
            ${iconTemplate(color)}
            <figcaption class="mat-body-small">${color}</figcaption>
          </figure>`,
        ).join('')}
      </div>`,
  }),
};
