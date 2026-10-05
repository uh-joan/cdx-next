import { type Meta, type StoryObj } from '@storybook/angular';

type HyperlinkArgs = {
  label: string;
  color: 'primary' | 'blue' | 'visited';
  underline: 'hover' | 'permanent';
  inline: boolean;
};

const colorClass: Record<HyperlinkArgs['color'], string> = {
  primary: '',
  blue: 'hlx-link-blue',
  visited: 'hlx-link-visited',
};

function linkClasses({ color, inline }: HyperlinkArgs): string {
  return [colorClass[color], inline ? 'hlx-link-inline' : '']
    .filter(Boolean)
    .join(' ');
}

function link(args: HyperlinkArgs): string {
  const classes = linkClasses(args);
  // hlx-link-inline already adds the permanent underline.
  const underline = args.underline === 'permanent' && !args.inline;
  return `<a
    href="#"
    ${classes ? `class="${classes}"` : ''}
    ${underline ? 'underline' : ''}
  >{{ label }}</a>`;
}

function hyperlinkTemplate(args: HyperlinkArgs): string {
  return args.inline
    ? `<p style="padding: 16px">
        Inline hyperlinks sit in running text, for example
        ${link(args)}, and need a permanent underline.
      </p>`
    : `<div style="padding: 16px">${link(args)}</div>`;
}

const meta: Meta<HyperlinkArgs> = {
  title: 'Components/Hyperlink',
  parameters: {
    docs: {
      description: {
        component:
          'The Helix theme styles every `<a>`: links inherit the surrounding text color (Primary) and are underlined on hover. `hlx-link-blue` makes a link blue (and the Visited color once visited), `hlx-link-visited` forces the Visited color, and `hlx-link-inline` gives inline links semibold weight and a permanent underline. The `underline` attribute adds only the permanent underline.',
      },
    },
  },
  argTypes: {
    label: { control: 'text' },
    color: {
      control: 'inline-radio',
      options: ['primary', 'blue', 'visited'],
      description:
        'Primary (default, inherits the text color); blue for emphasis (`hlx-link-blue`); visited (`hlx-link-visited`)',
    },
    underline: {
      control: 'inline-radio',
      options: ['hover', 'permanent'],
      description:
        'On hover (default) for standalone links; permanent (`underline` attribute). Inline links are always underlined.',
    },
    inline: {
      control: 'boolean',
      description:
        'Inline in running text: semibold with a permanent underline (`hlx-link-inline`)',
    },
  },
  args: {
    label: 'View all publications',
    color: 'primary',
    underline: 'hover',
    inline: false,
  },
  render: (args) => ({ props: args, template: hyperlinkTemplate(args) }),
};

export default meta;
type Story = StoryObj<HyperlinkArgs>;

export const Playground: Story = {};

/** Standalone links are underlined on hover. */
export const Standalone: Story = {};

/** Blue links (`hlx-link-blue`) turn the Visited color once visited. */
export const Blue: Story = { args: { color: 'blue' } };

/** `hlx-link-visited` forces the Visited color. */
export const Visited: Story = { args: { color: 'visited' } };

/** Inline links use semibold weight and a permanent underline. */
export const Inline: Story = {
  args: { label: 'the Density guidelines', inline: true },
};
