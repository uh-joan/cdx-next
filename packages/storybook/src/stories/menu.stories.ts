import { MatButton, MatIconButton } from '@angular/material/button';
import { MatDivider } from '@angular/material/divider';
import { MatIcon } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { type Meta, moduleMetadata, type StoryObj } from '@storybook/angular';

type MenuArgs = {
  trigger: 'button' | 'icon-button';
  triggerLabel: string;
  triggerIcon: string;
  itemIcons: boolean;
  disabledItem: boolean;
  divider: boolean;
  submenu: boolean;
  xPosition: 'before' | 'after';
  yPosition: 'above' | 'below';
  overlapTrigger: boolean;
  hasBackdrop: boolean;
};

// Menu panels render in the CDK overlay, outside the themed story wrapper,
// so the panel carries the Helix theme class itself.
const PANEL_CLASS = 'helix-theme-material';

function triggerTemplate({ trigger }: MenuArgs): string {
  return trigger === 'icon-button'
    ? `<button matIconButton [matMenuTriggerFor]="menu" [attr.aria-label]="triggerLabel">
        <mat-icon>{{ triggerIcon }}</mat-icon>
      </button>`
    : `<button matButton="filled" [matMenuTriggerFor]="menu">{{ triggerLabel }}</button>`;
}

function menuTemplate(args: MenuArgs): string {
  const icon = (name: string) =>
    args.itemIcons ? `<mat-icon>${name}</mat-icon>` : '';

  return `
    <div style="padding: 16px 16px 200px">
      ${triggerTemplate(args)}
      <mat-menu
        #menu="matMenu"
        class="${PANEL_CLASS}"
        [xPosition]="xPosition"
        [yPosition]="yPosition"
        [overlapTrigger]="overlapTrigger"
        [hasBackdrop]="hasBackdrop"
      >
        <button mat-menu-item>${icon('edit')}<span>Edit</span></button>
        <button mat-menu-item>${icon('content_copy')}<span>Duplicate</span></button>
        <button mat-menu-item [disabled]="disabledItem">
          ${icon('archive')}<span>Archive</span>
        </button>
        ${
          args.submenu
            ? `<button mat-menu-item [matMenuTriggerFor]="shareMenu">
                ${icon('share')}<span>Share</span>
              </button>`
            : ''
        }
        ${args.divider ? '<mat-divider></mat-divider>' : ''}
        <button mat-menu-item>${icon('delete')}<span>Delete</span></button>
      </mat-menu>
      <mat-menu #shareMenu="matMenu" class="${PANEL_CLASS}">
        <button mat-menu-item>${icon('mail')}<span>Email</span></button>
        <button mat-menu-item>${icon('link')}<span>Copy link</span></button>
      </mat-menu>
    </div>`;
}

const meta: Meta<MenuArgs> = {
  title: 'Components/Menu',
  decorators: [
    moduleMetadata({
      imports: [MatMenuModule, MatButton, MatIconButton, MatIcon, MatDivider],
    }),
  ],
  parameters: {
    docs: {
      description: {
        component:
          'Helix menus are Angular Material menus styled by the Helix theme. Open the menu from its trigger to see the panel.',
      },
    },
  },
  argTypes: {
    trigger: {
      control: 'inline-radio',
      options: ['button', 'icon-button'],
      description:
        'Element that opens the menu: a labelled button or an icon button (e.g. an overflow menu)',
    },
    triggerLabel: {
      control: 'text',
      description: 'Button label, or the `aria-label` of the icon button',
    },
    triggerIcon: {
      control: 'text',
      description: 'Material Symbols name for the icon-button trigger',
      if: { arg: 'trigger', eq: 'icon-button' },
    },
    itemIcons: {
      control: 'boolean',
      description: 'Show a leading icon on each menu item',
    },
    disabledItem: {
      control: 'boolean',
      description: 'Disable the "Archive" item',
    },
    divider: {
      control: 'boolean',
      description: 'Separate the destructive item with a `mat-divider`',
    },
    submenu: {
      control: 'boolean',
      description: 'Add a "Share" item that opens a nested menu',
    },
    xPosition: {
      control: 'inline-radio',
      options: ['before', 'after'],
      description: 'Horizontal position of the panel relative to the trigger',
    },
    yPosition: {
      control: 'inline-radio',
      options: ['above', 'below'],
      description: 'Vertical position of the panel relative to the trigger',
    },
    overlapTrigger: {
      control: 'boolean',
      description: 'Whether the panel overlaps its trigger',
    },
    hasBackdrop: {
      control: 'boolean',
      description: 'Whether the menu has a backdrop (closes on outside click)',
    },
  },
  args: {
    trigger: 'button',
    triggerLabel: 'Menu',
    triggerIcon: 'more_vert',
    itemIcons: false,
    disabledItem: false,
    divider: false,
    submenu: false,
    xPosition: 'after',
    yPosition: 'below',
    overlapTrigger: false,
    hasBackdrop: true,
  },
  render: (args) => ({ props: args, template: menuTemplate(args) }),
};

export default meta;
type Story = StoryObj<MenuArgs>;

export const Playground: Story = {};

/** Overflow menu opened from an icon button. */
export const Overflow: Story = {
  args: {
    trigger: 'icon-button',
    triggerLabel: 'More actions',
    xPosition: 'before',
  },
};

export const WithIcons: Story = { args: { itemIcons: true } };

export const WithSubmenu: Story = {
  args: { itemIcons: true, submenu: true, divider: true },
};

export const DisabledItem: Story = { args: { disabledItem: true } };
