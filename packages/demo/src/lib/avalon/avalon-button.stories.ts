import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ThemeModule } from '@cdx/theme-angular-material';
import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';

const meta = {
  component: MatButton,
  title: 'Avalon/Button',
  docs: {
    description: {
      component: 'Avalon Buttons',
    },
  },
  parameters: {
    label: 'Button',
  },
  argTypes: {
    label: {
      control: 'text',
    },
    size: {
      control: 'select',
      options: ['xsmall', 'small', 'standard', 'large', 'promotional'],
      defaultValue: 'standard',
      description: 'Size',
    },
    appearance: {
      control: 'select',
      options: ['ghost', 'raised', 'stroked', 'flat', 'fab'],
      defaultValue: 'primary',
      description: 'Appearance',
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary', 'error', 'success'],
      defaultValue: 'primary',
      description: 'Appearance',
    },
  },
  args: {
    label: 'Button',
    size: 'standard',
    appearance: 'raised',
    color: 'primary',
  },
  decorators: [
    moduleMetadata({
      imports: [MatButton, MatButtonModule, MatIconModule, ThemeModule],
    }),
  ],
} as Meta<typeof MatButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic = {
  args: {
    size: 'standard',
    appearance: 'raised',
  },
  render: (args) => ({
    props: args,
    template: `
      <div>
      <ng-container *ngIf="appearance === 'ghost'">
          <button mat-button class="ava-btn-{{size}} ava-btn-{{color}}">
            {{label}}
          </button>
        </ng-container>
        <ng-container *ngIf="appearance === 'raised'">
          <button mat-raised-button class="ava-btn-{{size}} ava-btn-{{color}}">
            {{label}}
          </button>
        </ng-container>
        <ng-container *ngIf="appearance === 'stroked'">
          <button mat-stroked-button class="ava-btn-{{size}} ava-btn-{{color}}"
            >
            {{label}}
          </button>
        </ng-container>
        <ng-container *ngIf="appearance === 'flat'">
          <button mat-flat-button class="ava-btn-{{size}} ava-btn-{{color}}"
            >
            {{label}}
          </button>
        </ng-container>
        <ng-container *ngIf="appearance === 'fab'">
          <button mat-fab class="ava-btn-{{size}} ava-btn-{{color}}"
            >
            <mat-icon>home</mat-icon>
          </button>
        </ng-container>
        <ng-container *ngIf="appearance === 'basic'">
          <button mat-button class="ava-btn-{{size}} ava-btn-{{color}}"
            >
            {{label}}
          </button>
        </ng-container>
      </div>
    `,
  }),
} as Story;

export const Sizes = {
  render: (args) => ({
    props: args,
    template: `
    <h3>Sizes</h3>
    <div class="story">
      <button mat-flat-button class="ava-btn-small">{{label}}</button>
      <button mat-flat-button>{{label}}</button>
      <button mat-flat-button class="ava-btn-large">{{label}}</button>
      <button mat-flat-button class="ava-btn-promotional">{{label}}</button>
    </div>`,
  }),
} as Story;

export const Colors = {
  render: (args) => ({
    props: args,
    template: `
    <h3>Colors</h3>
    <div class="story">
      <button mat-flat-button>{{label}}</button>
      <button mat-flat-button class="ava-btn-secondary">{{label}}</button>
      <button mat-flat-button class="ava-btn-tertiary">{{label}}</button>
      <button mat-flat-button class="ava-btn-error">{{label}}</button>
      <button mat-flat-button class="ava-btn-success">{{label}}</button>
    </div>`,
  }),
} as Story;
