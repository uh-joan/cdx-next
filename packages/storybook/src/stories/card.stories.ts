import { MatButton } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { type Meta, moduleMetadata, type StoryObj } from '@storybook/angular';

type CardArgs = {
  appearance: 'raised' | 'outlined' | 'filled';
  title: string;
  subtitle: string;
  content: string;
  showAvatar: boolean;
  showImage: boolean;
  showActions: boolean;
  actionsAlign: 'start' | 'end';
  showFooter: boolean;
  width: number;
};

const IMAGE = 'https://material.angular.dev/assets/img/examples/shiba2.jpg';
const AVATAR = 'https://material.angular.dev/assets/img/examples/shiba1.jpg';

function cardTemplate(args: CardArgs): string {
  return `
    <mat-card [appearance]="appearance" [style.width.px]="width">
      <mat-card-header>
        ${
          args.showAvatar
            ? `<img mat-card-avatar src="${AVATAR}" alt="" />`
            : ''
        }
        <mat-card-title>{{ title }}</mat-card-title>
        @if (subtitle) {
          <mat-card-subtitle>{{ subtitle }}</mat-card-subtitle>
        }
      </mat-card-header>
      ${
        args.showImage
          ? `<img mat-card-image src="${IMAGE}" alt="Photo of a Shiba Inu" />`
          : ''
      }
      <mat-card-content>
        <p>{{ content }}</p>
      </mat-card-content>
      ${
        args.showActions
          ? `<mat-card-actions [align]="actionsAlign">
        <button matButton="outlined">Secondary</button>
        <button matButton="filled">Primary</button>
      </mat-card-actions>`
          : ''
      }
      ${
        args.showFooter
          ? `<mat-card-footer style="padding: 0 16px 16px">
        <small>Updated 2 days ago</small>
      </mat-card-footer>`
          : ''
      }
    </mat-card>`;
}

const meta: Meta<CardArgs> = {
  title: 'Components/Card',
  decorators: [moduleMetadata({ imports: [MatCardModule, MatButton] })],
  parameters: {
    docs: {
      description: {
        component:
          'Helix cards are Angular Material cards styled by the Helix theme (rounded shape and surface color). Cards can hold any content; their layout and size adapt to it.',
      },
    },
  },
  argTypes: {
    appearance: {
      control: 'inline-radio',
      options: ['raised', 'outlined', 'filled'],
      description: '`mat-card` `appearance`',
    },
    title: { control: 'text', description: '`mat-card-title`' },
    subtitle: {
      control: 'text',
      description: '`mat-card-subtitle` (hidden when empty)',
    },
    content: { control: 'text', description: '`mat-card-content` text' },
    showAvatar: {
      control: 'boolean',
      description: '`mat-card-avatar` image in the header',
    },
    showImage: { control: 'boolean', description: '`mat-card-image` media' },
    showActions: {
      control: 'boolean',
      description: '`mat-card-actions` with two buttons',
    },
    actionsAlign: {
      control: 'inline-radio',
      options: ['start', 'end'],
      description: '`mat-card-actions` `align`',
    },
    showFooter: { control: 'boolean', description: '`mat-card-footer`' },
    width: {
      control: { type: 'range', min: 200, max: 600, step: 20 },
      description: 'Card width in px (story only)',
    },
  },
  args: {
    appearance: 'raised',
    title: 'Card title',
    subtitle: 'Card subtitle',
    content: 'Card content goes here.',
    showAvatar: false,
    showImage: false,
    showActions: true,
    actionsAlign: 'start',
    showFooter: false,
    width: 360,
  },
  render: (args) => ({
    props: args,
    template: `<div style="padding: 16px">${cardTemplate(args)}</div>`,
  }),
};

export default meta;
type Story = StoryObj<CardArgs>;

export const Playground: Story = {};

export const Outlined: Story = { args: { appearance: 'outlined' } };

export const WithMedia: Story = {
  args: {
    title: 'Shiba Inu',
    subtitle: 'Dog breed',
    content:
      'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.',
    showAvatar: true,
    showImage: true,
  },
};

/** Helix: cards can be shown together in a grid, vertical list or carousel. */
export const Grid: Story = {
  parameters: {
    controls: {
      include: [
        'appearance',
        'subtitle',
        'content',
        'showActions',
        'actionsAlign',
      ],
    },
  },
  render: (args) => ({
    props: args,
    template: `
      <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap: 16px; padding: 16px">
        ${[1, 2, 3, 4, 5, 6]
          .map((n) =>
            cardTemplate({
              ...args,
              showAvatar: false,
              showImage: false,
              showFooter: false,
            })
              .replace('[style.width.px]="width"', '')
              .replace('{{ title }}', `Card ${n}`),
          )
          .join('')}
      </div>`,
  }),
};
