import { MatExpansionModule } from '@angular/material/expansion';
import { type Meta, moduleMetadata, type StoryObj } from '@storybook/angular';

type ExpansionPanelArgs = {
  panels: number;
  title: string;
  description: string;
  content: string;
  multi: boolean;
  displayMode: 'default' | 'flat';
  togglePosition: 'after' | 'before';
  hideToggle: boolean;
  firstExpanded: boolean;
  lastDisabled: boolean;
};

function expansionPanelTemplate({ panels }: ExpansionPanelArgs): string {
  const items = Array.from({ length: panels }, (_, index) => {
    const isFirst = index === 0;
    const isLast = index === panels - 1;
    return `
      <mat-expansion-panel
        [expanded]="${isFirst} && firstExpanded"
        [disabled]="${isLast} && lastDisabled"
        [hideToggle]="hideToggle"
      >
        <mat-expansion-panel-header>
          <mat-panel-title>{{ title }} ${index + 1}</mat-panel-title>
          @if (description) {
            <mat-panel-description>{{ description }}</mat-panel-description>
          }
        </mat-expansion-panel-header>
        <p>{{ content }}</p>
      </mat-expansion-panel>`;
  }).join('');

  return `
    <div style="padding: 16px; max-width: 640px">
      <mat-accordion
        [multi]="multi"
        [displayMode]="displayMode"
        [togglePosition]="togglePosition"
      >
        ${items}
      </mat-accordion>
    </div>`;
}

const meta: Meta<ExpansionPanelArgs> = {
  title: 'Components/Expansion panel',
  decorators: [moduleMetadata({ imports: [MatExpansionModule] })],
  parameters: {
    docs: {
      description: {
        component:
          'Helix expansion panels (accordion) are Angular Material `mat-expansion-panel`s grouped in a `mat-accordion`. By default the header shows a toggle icon at its end to indicate whether the panel is expanded or collapsed.',
      },
    },
  },
  argTypes: {
    panels: {
      control: { type: 'range', min: 1, max: 6, step: 1 },
      description: 'Number of panels in the accordion',
    },
    title: { control: 'text', description: '`mat-panel-title` text' },
    description: {
      control: 'text',
      description: 'Optional `mat-panel-description` (summary) text',
    },
    content: { control: 'text', description: 'Panel body content' },
    multi: {
      control: 'boolean',
      description: 'Allow several panels to be expanded at the same time',
    },
    displayMode: {
      control: 'inline-radio',
      options: ['default', 'flat'],
      description:
        '`default` adds spacing around the expanded panel; `flat` keeps panels flush',
    },
    togglePosition: {
      control: 'inline-radio',
      options: ['after', 'before'],
      description: 'Toggle icon position in the header (end by default)',
    },
    hideToggle: {
      control: 'boolean',
      description: 'Hide the expand/collapse toggle icon',
    },
    firstExpanded: {
      control: 'boolean',
      description: 'Expand the first panel',
    },
    lastDisabled: {
      control: 'boolean',
      description: 'Disable the last panel',
    },
  },
  args: {
    panels: 3,
    title: 'Expansion title',
    description: 'Summary of the content',
    content: 'Primary content of the panel.',
    multi: false,
    displayMode: 'default',
    togglePosition: 'after',
    hideToggle: false,
    firstExpanded: false,
    lastDisabled: false,
  },
  render: (args) => ({
    props: args,
    template: expansionPanelTemplate(args),
  }),
};

export default meta;
type Story = StoryObj<ExpansionPanelArgs>;

export const Playground: Story = {};

export const Expanded: Story = { args: { firstExpanded: true } };

export const Multi: Story = { args: { multi: true, firstExpanded: true } };

export const Flat: Story = { args: { displayMode: 'flat' } };

export const Disabled: Story = { args: { lastDisabled: true } };
