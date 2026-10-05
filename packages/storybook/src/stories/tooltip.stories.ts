import { MatButton, MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatTooltip, type TooltipPosition } from '@angular/material/tooltip';
import { type Meta, moduleMetadata, type StoryObj } from '@storybook/angular';

type TooltipArgs = {
  message: string;
  trigger: 'icon-button' | 'button' | 'icon';
  icon: string;
  position: TooltipPosition;
  positionAtOrigin: boolean;
  showDelay: number;
  hideDelay: number;
  touchGestures: 'auto' | 'on' | 'off';
  disabled: boolean;
};

const TOOLTIP_BINDINGS = `
  [matTooltip]="message"
  [matTooltipPosition]="position"
  [matTooltipPositionAtOrigin]="positionAtOrigin"
  [matTooltipShowDelay]="showDelay"
  [matTooltipHideDelay]="hideDelay"
  [matTooltipTouchGestures]="touchGestures"
  [matTooltipDisabled]="disabled"`;

function triggerTemplate({ trigger }: TooltipArgs): string {
  switch (trigger) {
    case 'button':
      return `<button matButton="filled" ${TOOLTIP_BINDINGS}>Action</button>`;
    case 'icon':
      return `<mat-icon tabindex="0" [attr.aria-label]="message" ${TOOLTIP_BINDINGS}>{{ icon }}</mat-icon>`;
    default:
      return `<button matIconButton [attr.aria-label]="message" ${TOOLTIP_BINDINGS}>
          <mat-icon>{{ icon }}</mat-icon>
        </button>`;
  }
}

const meta: Meta<TooltipArgs> = {
  title: 'Components/Tooltip',
  decorators: [
    moduleMetadata({
      imports: [MatTooltip, MatButton, MatIconButton, MatIcon],
    }),
  ],
  parameters: {
    docs: {
      description: {
        component:
          'Plain tooltips (`matTooltip`) briefly describe a UI element or action, and are commonly used to label icon-only buttons. For longer content with a title, links or buttons, use the rich tooltip (Branding › Rich tooltip).',
      },
    },
  },
  argTypes: {
    message: {
      control: 'text',
      description: 'Tooltip text (`matTooltip`); keep it brief',
    },
    trigger: {
      control: 'inline-radio',
      options: ['icon-button', 'button', 'icon'],
      description: 'Element the tooltip is attached to',
    },
    icon: {
      control: 'text',
      description: 'Material Symbols name for the icon triggers',
    },
    position: {
      control: 'select',
      options: ['above', 'below', 'left', 'right', 'before', 'after'],
      description: 'Placement relative to the trigger (`matTooltipPosition`)',
    },
    positionAtOrigin: {
      control: 'boolean',
      description:
        'Position the tooltip at the pointer instead of the element (`matTooltipPositionAtOrigin`)',
    },
    showDelay: {
      control: { type: 'number', min: 0, step: 100 },
      description: 'Delay in ms before showing (`matTooltipShowDelay`)',
    },
    hideDelay: {
      control: { type: 'number', min: 0, step: 100 },
      description: 'Delay in ms before hiding (`matTooltipHideDelay`)',
    },
    touchGestures: {
      control: 'inline-radio',
      options: ['auto', 'on', 'off'],
      description: 'Touch gesture handling (`matTooltipTouchGestures`)',
    },
    disabled: {
      control: 'boolean',
      description: 'Stop the tooltip from showing (`matTooltipDisabled`)',
    },
  },
  args: {
    message: 'Download report',
    trigger: 'icon-button',
    icon: 'download',
    position: 'below',
    positionAtOrigin: false,
    showDelay: 0,
    hideDelay: 0,
    touchGestures: 'auto',
    disabled: false,
  },
  render: (args) => ({
    props: args,
    template: `
      <div style="padding: 64px; display: flex; justify-content: center">
        ${triggerTemplate(args)}
      </div>`,
  }),
};

export default meta;
type Story = StoryObj<TooltipArgs>;

export const Playground: Story = {};

export const OnButton: Story = {
  args: {
    trigger: 'button',
    message: 'Save your changes and continue',
    position: 'above',
  },
};

export const HelpIcon: Story = {
  args: {
    trigger: 'icon',
    icon: 'help_outline',
    message: 'More information here',
    position: 'right',
  },
};
