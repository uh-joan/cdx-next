import { MatDivider } from '@angular/material/divider';
import { MatIcon } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { type Meta, moduleMetadata, type StoryObj } from '@storybook/angular';

type DividerArgs = {
  orientation: 'horizontal' | 'vertical';
  inset: boolean;
  theme: 'light' | 'dark';
  items: number;
};

function labels(count: number): string[] {
  return Array.from({ length: count }, (_, index) => `Item ${index + 1}`);
}

function dividerTemplate({ orientation, items }: DividerArgs): string {
  const divider = `<mat-divider [vertical]="${
    orientation === 'vertical'
  }" [inset]="inset"></mat-divider>`;

  if (orientation === 'vertical') {
    const content = labels(items)
      .map((label) => `<span style="padding: 0 16px">${label}</span>`)
      .join(divider);
    return `<div style="display: flex; align-items: stretch; height: 48px">${content}</div>`;
  }

  // Inset dividers line up with the text of avatar/icon list items.
  const content = labels(items)
    .map(
      (label) => `
        <mat-list-item>
          <mat-icon matListItemIcon>article</mat-icon>
          <span matListItemTitle>${label}</span>
        </mat-list-item>`,
    )
    .join(divider);
  return `<mat-list style="max-width: 360px">${content}</mat-list>`;
}

const meta: Meta<DividerArgs> = {
  title: 'Components/Divider',
  decorators: [
    moduleMetadata({ imports: [MatDivider, MatIcon, MatListModule] }),
  ],
  parameters: {
    docs: {
      description: {
        component:
          'Helix dividers are Angular Material `mat-divider` lines that separate components, sections or content. They can be horizontal or vertical, full width or inset.',
      },
    },
  },
  argTypes: {
    orientation: {
      control: 'inline-radio',
      options: ['horizontal', 'vertical'],
      description: 'Horizontal (default) or vertical (`[vertical]="true"`)',
    },
    inset: {
      control: 'boolean',
      description:
        'Inset divider (`[inset]="true"`), aligned with list item text instead of full width',
    },
    theme: {
      control: 'inline-radio',
      options: ['light', 'dark'],
      description: 'Show the divider on a light or dark (inverse) surface',
    },
    items: {
      control: { type: 'range', min: 2, max: 6, step: 1 },
      description: 'Number of items the dividers separate',
    },
  },
  args: {
    orientation: 'horizontal',
    inset: false,
    theme: 'light',
    items: 3,
  },
  render: (args) => ({
    props: args,
    template: `
      <div
        [class.story-invert]="theme === 'dark'"
        [style.--mat-divider-color]="theme === 'dark' ? 'var(--mat-sys-outline)' : null"
        [style.color]="theme === 'dark' ? 'var(--mat-sys-inverse-on-surface)' : null"
        [style.--mat-list-list-item-label-text-color]="theme === 'dark' ? 'var(--mat-sys-inverse-on-surface)' : null"
        [style.--mat-list-list-item-leading-icon-color]="theme === 'dark' ? 'var(--mat-sys-inverse-on-surface)' : null"
        style="padding: 16px"
      >
        ${dividerTemplate(args)}
      </div>`,
  }),
};

export default meta;
type Story = StoryObj<DividerArgs>;

export const Playground: Story = {};

export const Inset: Story = { args: { inset: true } };

export const Vertical: Story = { args: { orientation: 'vertical' } };

export const Dark: Story = { args: { theme: 'dark' } };
