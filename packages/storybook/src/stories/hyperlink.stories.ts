import { type Meta, type StoryObj } from '@storybook/angular';

type HyperlinkArgs = {
  label: string;
  underline: 'hover' | 'permanent';
  placement: 'standalone' | 'inline';
};

function link(underline: HyperlinkArgs['underline'], inline: boolean): string {
  return `<a
    href="#"
    ${underline === 'permanent' ? 'underline' : ''}
    ${inline ? 'style="font-weight: 600"' : ''}
  >{{ label }}</a>`;
}

function hyperlinkTemplate({ underline, placement }: HyperlinkArgs): string {
  return placement === 'inline'
    ? `<p style="padding: 16px">
        Inline hyperlinks sit in running text, for example
        ${link(underline, true)}, and need a permanent underline.
      </p>`
    : `<div style="padding: 16px">${link(underline, false)}</div>`;
}

const meta: Meta<HyperlinkArgs> = {
  title: 'Components/Hyperlink',
  parameters: {
    docs: {
      description: {
        component:
          'The Helix theme styles every `<a>`: links inherit the surrounding text color (Primary) and are underlined on hover. The `underline` attribute adds a permanent underline for inline links. The Helix Blue and Visited colors have no theme style yet.',
      },
    },
  },
  argTypes: {
    label: { control: 'text' },
    underline: {
      control: 'inline-radio',
      options: ['hover', 'permanent'],
      description:
        'On hover (default) for standalone links; permanent (`underline` attribute) for inline links',
    },
    placement: {
      control: 'inline-radio',
      options: ['standalone', 'inline'],
      description:
        'Standalone link, or inline in running text (semibold, per Helix)',
    },
  },
  args: {
    label: 'View all publications',
    underline: 'hover',
    placement: 'standalone',
  },
  render: (args) => ({ props: args, template: hyperlinkTemplate(args) }),
};

export default meta;
type Story = StoryObj<HyperlinkArgs>;

export const Playground: Story = {};

/** Standalone links are underlined on hover. */
export const Standalone: Story = {};

/** Inline links use semibold weight and a permanent underline. */
export const Inline: Story = {
  args: {
    label: 'the Density guidelines',
    placement: 'inline',
    underline: 'permanent',
  },
};
