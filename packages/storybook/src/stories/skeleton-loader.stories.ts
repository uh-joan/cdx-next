import { type Meta, moduleMetadata, type StoryObj } from '@storybook/angular';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

type SkeletonLoaderArgs = {
  appearance: 'line' | 'circle' | 'square';
  animation: 'progress' | 'progress-dark' | 'pulse' | 'pulse-dark' | 'false';
  count: number;
  width: string;
  height: string;
  borderRadius: string;
  size: number;
  ariaLabel: string;
  loadingText: string;
};

const meta: Meta<SkeletonLoaderArgs> = {
  title: 'Components/Skeleton loader',
  decorators: [moduleMetadata({ imports: [NgxSkeletonLoaderModule] })],
  parameters: {
    docs: {
      description: {
        component:
          'Skeleton placeholders built with `ngx-skeleton-loader`. Configure the shape with `appearance`, the motion with `animation` and the dimensions with `[theme]` (any CSS, as with `ngStyle`).',
      },
    },
  },
  argTypes: {
    appearance: {
      control: 'inline-radio',
      options: ['line', 'circle', 'square'],
      description:
        '`line` for text, `circle` for avatars, `square` for thumbnails (sized with `size`)',
    },
    animation: {
      control: 'inline-radio',
      options: ['progress', 'progress-dark', 'pulse', 'pulse-dark', 'false'],
      description:
        '`progress` is the default; use the `-dark` variants on dark surfaces; `false` disables the animation',
    },
    count: {
      control: { type: 'number', min: 1, max: 20 },
      description: 'Number of placeholder elements',
    },
    width: { control: 'text', description: '`theme.width` (CSS length)' },
    height: { control: 'text', description: '`theme.height` (CSS length)' },
    borderRadius: {
      control: 'text',
      description: '`theme.border-radius` (CSS length)',
    },
    size: {
      control: { type: 'number', min: 8, max: 200 },
      description: 'Width and height in px, for `square` only',
    },
    ariaLabel: {
      control: 'text',
      description: 'Accessible label of the progressbar',
    },
    loadingText: {
      control: 'text',
      description: '`aria-valuetext` announced while loading',
    },
  },
  args: {
    appearance: 'line',
    animation: 'progress',
    count: 3,
    width: '100%',
    height: '20px',
    borderRadius: '',
    size: 64,
    ariaLabel: 'loading',
    loadingText: 'Loading...',
  },
  render: (args) => ({
    props: {
      ...args,
      theme: Object.fromEntries(
        Object.entries({
          width: args.appearance === 'square' ? '' : args.width,
          height: args.appearance === 'square' ? '' : args.height,
          'border-radius': args.borderRadius,
        }).filter(([, value]) => value),
      ),
    },
    template: `
      <div style="padding: 16px; max-width: 480px">
        <ngx-skeleton-loader
          [appearance]="appearance"
          [animation]="animation"
          [count]="count"
          [size]="appearance === 'square' ? size : null"
          [theme]="theme"
          [ariaLabel]="ariaLabel"
          [loadingText]="loadingText"
        />
      </div>`,
  }),
};

export default meta;
type Story = StoryObj<SkeletonLoaderArgs>;

export const Playground: Story = {};

export const Circle: Story = {
  args: { appearance: 'circle', count: 5, width: '48px', height: '48px' },
};

export const Pulse: Story = { args: { animation: 'pulse' } };

export const NoAnimation: Story = { args: { animation: 'false' } };

/** A card placeholder combining an avatar and text lines. */
export const Composition: Story = {
  parameters: { controls: { include: ['animation'] } },
  render: (args) => ({
    props: args,
    template: `
      <div style="padding: 16px; max-width: 480px">
        <div style="display: flex; gap: 16px; align-items: center">
          <ngx-skeleton-loader
            appearance="circle"
            [animation]="animation"
            [theme]="{ width: '64px', height: '64px', margin: 0 }"
          />
          <div style="flex: 1">
            <ngx-skeleton-loader [animation]="animation" [count]="2" [theme]="{ height: '16px' }" />
          </div>
        </div>
        <ngx-skeleton-loader [animation]="animation" [count]="4" [theme]="{ height: '10px' }" />
      </div>`,
  }),
};
