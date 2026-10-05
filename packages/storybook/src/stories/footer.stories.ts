import {
  HelixFooterComponent,
  HelixFooterGroupComponent,
  HelixFooterGroupTitleDirective,
  HelixFooterLinkDirective,
} from '@cdx/ngx-branding';
import { type Meta, moduleMetadata, type StoryObj } from '@storybook/angular';

type FooterArgs = {
  branded: boolean;
  slim: boolean;
  groupCompanyLinks: boolean;
  linkGroups: number;
  background: string;
  color: string;
};

const meta: Meta<FooterArgs> = {
  title: 'Branding/Footer',
  decorators: [
    moduleMetadata({
      imports: [
        HelixFooterComponent,
        HelixFooterGroupComponent,
        HelixFooterGroupTitleDirective,
        HelixFooterLinkDirective,
      ],
    }),
  ],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          "`<footer hlx-footer>` from `@cdx/ngx-branding`. Use `branded` when the product name takes precedence in the header, so the Clarivate logo appears in the footer (Foundations › Branding). Helix footer layouts: Row (default), Logo row (`branded`, only when the logo isn't in the header) and Column (link groups).",
      },
    },
  },
  argTypes: {
    branded: { control: 'boolean', description: 'Show the Clarivate logo' },
    slim: { control: 'boolean', description: 'Single-line slim footer' },
    groupCompanyLinks: {
      control: 'boolean',
      description: 'Render the company links as a footer group',
    },
    linkGroups: {
      control: { type: 'range', min: 0, max: 4, step: 1 },
      description: 'Number of projected `<hlx-footer-group>` link groups',
    },
    background: {
      control: 'color',
      description: '`theme.footer.background`',
    },
    color: { control: 'color', description: '`theme.footer.color`' },
  },
  args: {
    branded: false,
    slim: false,
    groupCompanyLinks: false,
    linkGroups: 0,
    background: '',
    color: '',
  },
  render: (args) => ({
    props: {
      ...args,
      groups: Array.from({ length: args.linkGroups }, (_, i) => i + 1),
      theme:
        args.background || args.color
          ? {
              footer: {
                background: args.background || undefined,
                color: args.color || undefined,
              },
            }
          : undefined,
    },
    template: `
      <footer
        hlx-footer
        [branded]="branded"
        [slim]="slim"
        [groupCompanyLinks]="groupCompanyLinks"
        [theme]="theme"
      >
        @for (group of groups; track group) {
          <hlx-footer-group>
            <div hlxFooterGroupTitle>Group {{ group }}</div>
            <a hlxFooterLink href="#">Link 1</a>
            <a hlxFooterLink href="#">Link 2</a>
            <a hlxFooterLink href="#">Link 3</a>
          </hlx-footer-group>
        }
      </footer>`,
  }),
};

export default meta;
type Story = StoryObj<FooterArgs>;

export const Playground: Story = {};

export const Branded: Story = { args: { branded: true } };

export const Slim: Story = { args: { slim: true, branded: true } };

export const WithLinkGroups: Story = {
  args: { groupCompanyLinks: true, linkGroups: 2 },
};

export const Row: Story = {};

export const LogoRow: Story = { args: { branded: true } };

export const Column: Story = {
  args: { groupCompanyLinks: true, linkGroups: 3 },
};
