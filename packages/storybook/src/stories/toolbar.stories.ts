import { MatButton, MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { type Meta, moduleMetadata, type StoryObj } from '@storybook/angular';

type ToolbarArgs = {
  title: string;
  showMenuButton: boolean;
  actions: 'none' | 'icons' | 'buttons';
  multiRow: boolean;
  secondRowText: string;
};

const template = `
  <mat-toolbar>
    <mat-toolbar-row>
      @if (showMenuButton) {
        <button matIconButton aria-label="Open menu"><mat-icon>menu</mat-icon></button>
      }
      <span>{{ title }}</span>
      <span style="flex: 1 1 auto"></span>
      @switch (actions) {
        @case ('icons') {
          <button matIconButton aria-label="Refresh"><mat-icon>refresh</mat-icon></button>
          <button matIconButton aria-label="More actions"><mat-icon>more_vert</mat-icon></button>
        }
        @case ('buttons') {
          <button matButton>Cancel</button>
          <button matButton="filled">Save</button>
        }
      }
    </mat-toolbar-row>
    @if (multiRow) {
      <mat-toolbar-row>
        <span>{{ secondRowText }}</span>
      </mat-toolbar-row>
    }
  </mat-toolbar>`;

const meta: Meta<ToolbarArgs> = {
  title: 'Components/Toolbar',
  decorators: [
    moduleMetadata({
      imports: [MatToolbarModule, MatButton, MatIconButton, MatIcon],
    }),
  ],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          '`mat-toolbar` is a container for titles, navigation, icons or actions, styled by the Helix theme through design tokens (the Material 2 `color` input is not used).',
      },
    },
  },
  argTypes: {
    title: { control: 'text' },
    showMenuButton: {
      control: 'boolean',
      description: 'Leading menu icon button',
    },
    actions: {
      control: 'inline-radio',
      options: ['none', 'icons', 'buttons'],
      description: 'Trailing actions: icon buttons or text buttons',
    },
    multiRow: {
      control: 'boolean',
      description: 'Add a second `mat-toolbar-row`',
    },
    secondRowText: { control: 'text', description: 'Second row content' },
  },
  args: {
    title: 'My App',
    showMenuButton: false,
    actions: 'none',
    multiRow: false,
    secondRowText: 'Second row',
  },
  render: (args) => ({ props: args, template }),
};

export default meta;
type Story = StoryObj<ToolbarArgs>;

export const Playground: Story = {};

export const WithMenuAndIcons: Story = {
  args: { showMenuButton: true, actions: 'icons' },
};

export const WithButtons: Story = { args: { actions: 'buttons' } };

export const MultipleRows: Story = {
  args: { showMenuButton: true, actions: 'icons', multiRow: true },
};
