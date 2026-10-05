import { MatButton, MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import {
  HelixHeaderComponent,
  HelixHeaderGlobalComponent,
  HelixHeaderProductNameOrLogoComponent,
} from '@cdx/ngx-branding';
import { type Meta, moduleMetadata, type StoryObj } from '@storybook/angular';

type HeaderArgs = {
  branded: boolean;
  productName: string;
  openExternalLink: boolean;
  showNavigation: boolean;
  showGlobalActions: boolean;
  background: string;
  color: string;
};

const meta: Meta<HeaderArgs> = {
  title: 'Branding/Header',
  decorators: [
    moduleMetadata({
      imports: [
        HelixHeaderComponent,
        HelixHeaderGlobalComponent,
        HelixHeaderProductNameOrLogoComponent,
        MatButton,
        MatIconButton,
        MatIcon,
      ],
    }),
  ],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          '`<header hlx-header>` from `@cdx/ngx-branding`. Use `branded` when Clarivate is the primary brand; turn it off when the product name takes precedence (Foundations › Branding). Helix header types: Default (logo, product name, navigation and global actions), Condensed (no app navigation) and No Clarivate logo (`branded` off).',
      },
    },
  },
  argTypes: {
    branded: {
      control: 'boolean',
      description: 'Show the Clarivate logo (`branded` input)',
    },
    productName: {
      control: 'text',
      description: 'Projected `<hlx-header-product-name>`; empty to omit',
    },
    openExternalLink: {
      control: 'boolean',
      description: 'Open clarivate.com in a new tab from the logo',
    },
    showNavigation: {
      control: 'boolean',
      description: 'Project navigation buttons into the header content',
    },
    showGlobalActions: {
      control: 'boolean',
      description: 'Project `<hlx-header-global>` actions',
    },
    background: {
      control: 'color',
      description: '`theme.header.background`',
    },
    color: { control: 'color', description: '`theme.header.color`' },
  },
  args: {
    branded: true,
    productName: 'Product name',
    openExternalLink: false,
    showNavigation: true,
    showGlobalActions: true,
    background: '',
    color: '',
  },
  render: (args) => ({
    props: {
      ...args,
      theme:
        args.background || args.color
          ? {
              header: {
                background: args.background || undefined,
                color: args.color || undefined,
              },
            }
          : undefined,
    },
    template: `
      <header
        hlx-header
        [branded]="branded"
        [openExternalLink]="openExternalLink"
        [theme]="theme"
      >
        @if (productName) {
          <hlx-header-product-name>{{ productName }}</hlx-header-product-name>
        }
        @if (showNavigation) {
          <button matButton>Home</button>
          <button matButton>Search</button>
          <button matButton>Reports</button>
        }
        @if (showGlobalActions) {
          <hlx-header-global>
            <button matIconButton aria-label="Help">
              <mat-icon>help_outline</mat-icon>
            </button>
            <button matIconButton aria-label="Apps">
              <mat-icon>apps</mat-icon>
            </button>
            <button matIconButton aria-label="Account">
              <mat-icon>account_circle</mat-icon>
            </button>
          </hlx-header-global>
        }
      </header>`,
  }),
};

export default meta;
type Story = StoryObj<HeaderArgs>;

export const Playground: Story = {};

export const ProductNameOnly: Story = {
  args: { branded: false, showNavigation: false, showGlobalActions: false },
};

export const LogoOnly: Story = {
  args: { productName: '', showNavigation: false, showGlobalActions: false },
};

export const Default: Story = {};

export const Condensed: Story = {
  args: { showNavigation: false },
};

export const NoClarivateLogo: Story = {
  args: { branded: false },
};
