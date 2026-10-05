import {
  MatButtonToggle,
  MatButtonToggleGroup,
} from '@angular/material/button-toggle';
import { MatIcon } from '@angular/material/icon';
import { type Meta, moduleMetadata, type StoryObj } from '@storybook/angular';

type ButtonToggleArgs = {
  options: string;
  content: 'text' | 'icon' | 'icon-and-text';
  theme: 'default' | 'invert';
  multiple: boolean;
  vertical: boolean;
  hideSelectionIndicator: boolean;
  disabled: boolean;
  disableLastOption: boolean;
};

const ICONS = [
  'format_align_left',
  'format_align_center',
  'format_align_right',
  'format_align_justify',
  'format_list_bulleted',
];

function toggleClasses({ theme }: ButtonToggleArgs): string {
  return [
    'hlx-button-toggle-container',
    theme === 'invert' ? 'hlx-button-toggle-invert' : '',
  ]
    .filter(Boolean)
    .join(' ');
}

function toggleTemplate(args: ButtonToggleArgs): string {
  const labels = args.options
    .split(',')
    .map((label) => label.trim())
    .filter(Boolean);
  const toggles = labels
    .map((label, index) => {
      const icon = `<mat-icon>${ICONS[index % ICONS.length]}</mat-icon>`;
      const content =
        args.content === 'icon'
          ? icon
          : args.content === 'icon-and-text'
            ? `${icon} ${label}`
            : label;
      const disabled =
        index === labels.length - 1 ? ' [disabled]="disableLastOption"' : '';
      const ariaLabel = args.content === 'icon' ? ` aria-label="${label}"` : '';
      return `<mat-button-toggle value="${label}"${index === 0 ? ' checked' : ''}${disabled}${ariaLabel}>${content}</mat-button-toggle>`;
    })
    .join('\n        ');

  return `
    <div style="padding: 16px">
      <mat-button-toggle-group
        [class]="classes"
        aria-label="Options"
        [multiple]="multiple"
        [vertical]="vertical"
        [hideSingleSelectionIndicator]="hideSelectionIndicator"
        [hideMultipleSelectionIndicator]="hideSelectionIndicator"
        [disabled]="disabled"
      >
        ${toggles}
      </mat-button-toggle-group>
    </div>`;
}

const meta: Meta<ButtonToggleArgs> = {
  title: 'Components/Button toggle',
  decorators: [
    moduleMetadata({
      imports: [MatButtonToggleGroup, MatButtonToggle, MatIcon],
    }),
  ],
  parameters: {
    docs: {
      description: {
        component:
          'Helix button toggles are Angular Material button toggle groups with the `hlx-button-toggle-container` class. Add `hlx-button-toggle-invert` for the inverted selected style.',
      },
    },
  },
  argTypes: {
    options: {
      control: 'text',
      description:
        'Comma-separated segment labels. Helix: keep labels short and use no more than five segments.',
    },
    content: {
      control: 'inline-radio',
      options: ['text', 'icon', 'icon-and-text'],
      description:
        'Segment content. Helix: don’t mix icon-only segments with text segments.',
    },
    theme: {
      control: 'inline-radio',
      options: ['default', 'invert'],
      description:
        'Default container, or `hlx-button-toggle-invert` (white selected segment with primary text).',
    },
    multiple: {
      control: 'boolean',
      description: '`multiple` — multi-select segments (e.g. for filtering)',
    },
    vertical: { control: 'boolean', description: '`vertical` layout' },
    hideSelectionIndicator: {
      control: 'boolean',
      description:
        '`hideSingleSelectionIndicator` / `hideMultipleSelectionIndicator` — hide the check mark',
    },
    disabled: { control: 'boolean', description: 'Disable the whole group' },
    disableLastOption: {
      control: 'boolean',
      description: 'Disable only the last segment',
    },
  },
  args: {
    options: 'Fielded, Expert',
    content: 'text',
    theme: 'default',
    multiple: false,
    vertical: false,
    hideSelectionIndicator: false,
    disabled: false,
    disableLastOption: false,
  },
  render: (args) => ({
    props: { ...args, classes: toggleClasses(args) },
    template: toggleTemplate(args),
  }),
};

export default meta;
type Story = StoryObj<ButtonToggleArgs>;

export const Playground: Story = {};

export const Invert: Story = { args: { theme: 'invert' } };

export const Icons: Story = {
  args: {
    options: 'Left, Center, Right, Justify',
    content: 'icon',
    disableLastOption: true,
  },
};

export const MultiSelect: Story = {
  args: { options: 'Articles, Books, Patents, Datasets', multiple: true },
};

/** Default and inverted themes side by side. */
export const Themes: Story = {
  parameters: { controls: { include: ['options', 'content'] } },
  render: (args) => {
    const themes: ButtonToggleArgs['theme'][] = ['default', 'invert'];
    return {
      props: args,
      template: themes
        .map((theme) =>
          toggleTemplate({ ...args, theme }).replace(
            '[class]="classes"',
            `class="${toggleClasses({ ...args, theme })}"`,
          ),
        )
        .join(''),
    };
  },
};
