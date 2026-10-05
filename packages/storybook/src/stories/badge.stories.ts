import { MatBadge } from '@angular/material/badge';
import { MatButton, MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { type Meta, moduleMetadata, type StoryObj } from '@storybook/angular';

type BadgeArgs = {
  content: string;
  color: 'accent' | 'primary';
  size: 'small' | 'medium' | 'large';
  position: 'above after' | 'above before' | 'below after' | 'below before';
  overlap: boolean;
  host: 'text' | 'icon' | 'icon-button' | 'button';
  hidden: boolean;
  disabled: boolean;
  description: string;
};

const colorClass: Record<BadgeArgs['color'], string> = {
  accent: 'hlx-badge-accent',
  primary: 'hlx-badge-primary',
};

const badgeBindings = `
  [matBadge]="content"
  [matBadgeSize]="size"
  [matBadgePosition]="position"
  [matBadgeOverlap]="overlap"
  [matBadgeHidden]="hidden"
  [matBadgeDisabled]="disabled"
  [matBadgeDescription]="description"
  [class]="classes"`;

function hostTemplate(host: BadgeArgs['host']): string {
  switch (host) {
    case 'icon':
      return `<mat-icon ${badgeBindings}>notifications</mat-icon>`;
    case 'icon-button':
      return `<button matIconButton aria-label="Notifications" ${badgeBindings}>
        <mat-icon>notifications</mat-icon>
      </button>`;
    case 'button':
      return `<button matButton="outlined" ${badgeBindings}>Filters</button>`;
    default:
      return `<span ${badgeBindings}>Notifications</span>`;
  }
}

const meta: Meta<BadgeArgs> = {
  title: 'Components/Badge',
  decorators: [
    moduleMetadata({ imports: [MatBadge, MatButton, MatIconButton, MatIcon] }),
  ],
  parameters: {
    docs: {
      description: {
        component:
          'Helix badges are Angular Material badges (`matBadge`) styled by the Helix theme. Accent is the theme default; use `hlx-badge-primary` for the primary color.',
      },
    },
  },
  argTypes: {
    content: {
      control: 'text',
      description: 'Badge text (`matBadge`); keep it to a short count',
    },
    color: {
      control: 'inline-radio',
      options: ['accent', 'primary'],
      description:
        'Accent is the Helix default (`hlx-badge-accent`); primary uses `hlx-badge-primary`.',
    },
    size: {
      control: 'inline-radio',
      options: ['small', 'medium', 'large'],
      description: '`matBadgeSize`; small renders a dot without text',
    },
    position: {
      control: 'select',
      options: ['above after', 'above before', 'below after', 'below before'],
      description: '`matBadgePosition`',
    },
    overlap: {
      control: 'boolean',
      description:
        '`matBadgeOverlap`; overlap the host (icons) or sit beside it (text)',
    },
    host: {
      control: 'inline-radio',
      options: ['text', 'icon', 'icon-button', 'button'],
      description: 'Element the badge is attached to',
    },
    hidden: { control: 'boolean', description: '`matBadgeHidden`' },
    disabled: { control: 'boolean', description: '`matBadgeDisabled`' },
    description: {
      control: 'text',
      description: '`matBadgeDescription` — accessible label for the badge',
    },
  },
  args: {
    content: '4',
    color: 'accent',
    size: 'medium',
    position: 'above after',
    overlap: false,
    host: 'text',
    hidden: false,
    disabled: false,
    description: '4 unread notifications',
  },
  render: (args) => ({
    props: { ...args, classes: colorClass[args.color] },
    template: `<div style="padding: 24px">${hostTemplate(args.host)}</div>`,
  }),
};

export default meta;
type Story = StoryObj<BadgeArgs>;

export const Playground: Story = {};

export const Primary: Story = { args: { color: 'primary' } };

export const OnIcon: Story = {
  args: { host: 'icon', overlap: true },
};

export const OnButton: Story = {
  args: { host: 'button', content: '3', description: '3 filters applied' },
};

/** Every color × size, for a quick visual check against Helix. */
export const Matrix: Story = {
  parameters: { controls: { include: ['content', 'overlap', 'disabled'] } },
  render: (args) => {
    const sizes: BadgeArgs['size'][] = ['small', 'medium', 'large'];
    const colors: BadgeArgs['color'][] = ['accent', 'primary'];
    const rows = colors
      .map(
        (color) => `
        <div class="story-row" style="gap: 48px">
          ${sizes
            .map(
              (size) =>
                `<span [matBadge]="content" matBadgeSize="${size}" [matBadgeOverlap]="overlap" [matBadgeDisabled]="disabled" class="${colorClass[color]}">${color} ${size}</span>`,
            )
            .join('')}
        </div>`,
      )
      .join('');
    return { props: args, template: rows };
  },
};
