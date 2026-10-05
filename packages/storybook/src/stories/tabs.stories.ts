import { MatIcon } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { type Meta, moduleMetadata, type StoryObj } from '@storybook/angular';

type TabsArgs = {
  labels: string;
  color: 'primary' | 'invert';
  fitInkBarToContent: boolean;
  stretchTabs: boolean;
  alignTabs: 'start' | 'center' | 'end';
  headerPosition: 'above' | 'below';
  showIcons: boolean;
  disabledTab: boolean;
  selectedIndex: number;
};

const icons = ['home', 'description', 'bar_chart', 'settings', 'help'];

const meta: Meta<TabsArgs> = {
  title: 'Components/Tabs',
  decorators: [moduleMetadata({ imports: [MatTabsModule, MatIcon] })],
  parameters: {
    docs: {
      description: {
        component:
          'Helix tabs are the Angular Material `mat-tab-group` styled by the Helix theme. Use `hlx-tab-invert` on dark backgrounds; `fitInkBarToContent` sizes the active indicator to the label.',
      },
    },
  },
  argTypes: {
    labels: {
      control: 'text',
      description:
        'Comma-separated tab labels; add more to see horizontal scrolling on overflow',
    },
    color: {
      control: 'inline-radio',
      options: ['primary', 'invert'],
      description: 'Invert applies `hlx-tab-invert` for dark backgrounds',
    },
    fitInkBarToContent: {
      control: 'boolean',
      description:
        'Active indicator fits the label content instead of the full tab width',
    },
    stretchTabs: {
      control: 'boolean',
      description: 'Stretch tabs to fill the header width',
    },
    alignTabs: {
      control: 'inline-radio',
      options: ['start', 'center', 'end'],
      description: 'Tab alignment when not stretched',
    },
    headerPosition: {
      control: 'inline-radio',
      options: ['above', 'below'],
    },
    showIcons: {
      control: 'boolean',
      description:
        'Leading icon on every tab (never mix icon and text-only tabs)',
    },
    disabledTab: {
      control: 'boolean',
      description: 'Disable the last tab',
    },
    selectedIndex: {
      control: { type: 'number', min: 0 },
      description: 'Index of the active tab',
    },
  },
  args: {
    labels: 'Overview, Details, Activity',
    color: 'primary',
    fitInkBarToContent: true,
    stretchTabs: false,
    alignTabs: 'start',
    headerPosition: 'above',
    showIcons: false,
    disabledTab: false,
    selectedIndex: 0,
  },
  render: (args) => ({
    props: {
      ...args,
      tabs: args.labels
        .split(',')
        .map((label) => label.trim())
        .filter(Boolean)
        .map((label, i) => ({ label, icon: icons[i % icons.length] })),
    },
    template: `
      <div style="padding: 16px">
        <mat-tab-group
          [class.hlx-tab-invert]="color === 'invert'"
          [fitInkBarToContent]="fitInkBarToContent"
          [mat-stretch-tabs]="stretchTabs"
          [mat-align-tabs]="alignTabs"
          [headerPosition]="headerPosition"
          [selectedIndex]="selectedIndex"
        >
          @for (tab of tabs; track tab.label; let last = $last) {
            <mat-tab [disabled]="disabledTab && last">
              <ng-template mat-tab-label>
                @if (showIcons) {
                  <mat-icon style="margin-inline-end: 8px">{{ tab.icon }}</mat-icon>
                }
                {{ tab.label }}
              </ng-template>
              <p style="padding: 16px">{{ tab.label }} content</p>
            </mat-tab>
          }
        </mat-tab-group>
      </div>`,
  }),
};

export default meta;
type Story = StoryObj<TabsArgs>;

export const Playground: Story = {};

export const Invert: Story = { args: { color: 'invert' } };

/** Indicator spans the full tab width. */
export const FullWidthIndicator: Story = {
  args: { fitInkBarToContent: false, stretchTabs: true },
};

export const WithIcons: Story = { args: { showIcons: true } };

/** Many tabs scroll horizontally to accommodate overflow. */
export const Overflow: Story = {
  args: {
    labels:
      'Overview, Details, Activity, Members, Permissions, Integrations, Billing, Usage, Audit log, Settings',
  },
};
