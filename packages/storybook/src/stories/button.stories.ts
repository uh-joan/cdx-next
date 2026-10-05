import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { type Meta, moduleMetadata, type StoryObj } from '@storybook/angular';

type ButtonArgs = {
  label: string;
  variant: 'text' | 'filled' | 'elevated' | 'outlined' | 'tonal';
  color: 'primary' | 'accent' | 'negative' | 'ai' | 'invert';
  size: 'default' | 'large' | 'small' | 'xsmall' | 'xxsmall';
  icon: string;
  iconPosition: 'none' | 'start' | 'end';
  disabled: boolean;
  disabledInteractive: boolean;
};

const colorClass: Record<ButtonArgs['color'], string> = {
  primary: '',
  accent: 'hlx-btn-accent',
  negative: 'hlx-btn-negative',
  ai: 'hlx-btn-ai',
  invert: 'hlx-btn-invert',
};

function buttonClasses({ color, size }: ButtonArgs): string {
  return [colorClass[color], size === 'default' ? '' : `hlx-btn-${size}`]
    .filter(Boolean)
    .join(' ');
}

function buttonTemplate(args: ButtonArgs): string {
  const icon = `<mat-icon${
    args.iconPosition === 'end' ? ' iconPositionEnd' : ''
  }>{{ icon }}</mat-icon>`;

  return `
    <div [class.story-invert]="color === 'invert'" style="padding: 16px">
      <button
        [matButton]="variant"
        [class]="classes"
        [disabled]="disabled"
        [disabledInteractive]="disabledInteractive"
      >
        ${args.iconPosition === 'start' ? icon : ''}
        {{ label }}
        ${args.iconPosition === 'end' ? icon : ''}
      </button>
    </div>`;
}

const meta: Meta<ButtonArgs> = {
  title: 'Components/Button',
  decorators: [moduleMetadata({ imports: [MatButton, MatIcon] })],
  parameters: {
    docs: {
      description: {
        component:
          'Helix buttons are Angular Material buttons styled by the Helix theme. Color and size are applied with `hlx-btn-*` classes; see Foundations › Density for density levels (toolbar).',
      },
    },
  },
  argTypes: {
    label: { control: 'text' },
    variant: {
      control: 'inline-radio',
      options: ['text', 'filled', 'elevated', 'outlined', 'tonal'],
      description: '`matButton` appearance',
    },
    color: {
      control: 'inline-radio',
      options: ['primary', 'accent', 'negative', 'ai', 'invert'],
      description:
        'Primary is the default; accent for extra emphasis (`hlx-btn-accent`); negative for destructive actions (`hlx-btn-negative`); AI for AI-powered actions (`hlx-btn-ai`, AI gradient on `filled` buttons only); invert for dark backgrounds (`hlx-btn-invert`).',
    },
    size: {
      control: 'select',
      options: ['default', 'large', 'small', 'xsmall', 'xxsmall'],
      description: '`hlx-btn-<size>` class',
    },
    icon: { control: 'text', description: 'Material Symbols name' },
    iconPosition: {
      control: 'inline-radio',
      options: ['none', 'start', 'end'],
    },
    disabled: { control: 'boolean' },
    disabledInteractive: {
      control: 'boolean',
      description: 'Keep the disabled button focusable (e.g. for tooltips)',
    },
  },
  args: {
    label: 'Button',
    variant: 'filled',
    color: 'primary',
    size: 'default',
    icon: 'anchor',
    iconPosition: 'none',
    disabled: false,
    disabledInteractive: false,
  },
  render: (args) => ({
    props: { ...args, classes: buttonClasses(args) },
    template: buttonTemplate(args),
  }),
};

export default meta;
type Story = StoryObj<ButtonArgs>;

export const Playground: Story = {};

export const Accent: Story = { args: { color: 'accent' } };

/** The AI gradient (`hlx-btn-ai`) applies to filled buttons. */
export const Ai: Story = {
  name: 'AI',
  args: { color: 'ai', icon: 'auto_awesome', iconPosition: 'start' },
};

export const WithIcon: Story = {
  args: { variant: 'outlined', iconPosition: 'start' },
};

export const Disabled: Story = { args: { disabled: true } };

/** Every variant × color, for a quick visual check against Helix. */
export const Matrix: Story = {
  parameters: { controls: { include: ['label', 'size', 'disabled'] } },
  render: (args) => {
    const variants: ButtonArgs['variant'][] = [
      'text',
      'filled',
      'elevated',
      'outlined',
      'tonal',
    ];
    const colors: ButtonArgs['color'][] = [
      'primary',
      'accent',
      'negative',
      'ai',
      'invert',
    ];
    const rows = colors
      .map(
        (color) => `
        <div class="story-row" [class.story-invert]="${color === 'invert'}">
          ${variants
            .map(
              (variant) =>
                `<button matButton="${variant}" class="${buttonClasses({
                  ...args,
                  color,
                })}" [disabled]="disabled">{{ label }}</button>`,
            )
            .join('')}
        </div>`,
      )
      .join('');
    return { props: args, template: rows };
  },
};
