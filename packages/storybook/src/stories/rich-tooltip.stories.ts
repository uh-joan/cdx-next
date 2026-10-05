import { MatButton } from '@angular/material/button';
import { RichTooltipDirective } from '@cdx/ngx-branding';
import { type Meta, moduleMetadata, type StoryObj } from '@storybook/angular';

type RichTooltipArgs = {
  trigger: 'hover' | 'click';
  triggerLabel: string;
  title: string;
  body: string;
  linkText: string;
  actionLabel: string;
  width: number;
};

const meta: Meta<RichTooltipArgs> = {
  title: 'Branding/Rich tooltip',
  decorators: [moduleMetadata({ imports: [RichTooltipDirective, MatButton] })],
  parameters: {
    docs: {
      description: {
        component:
          '`[hlxTooltip]` from `@cdx/ngx-branding` shows an `ng-template` in a Helix-styled overlay. Use rich tooltips when an element or new feature needs more detail, with an optional title, links and buttons. Use `tooltipTrigger="click"` when the content is interactive.',
      },
    },
  },
  argTypes: {
    trigger: {
      control: 'inline-radio',
      options: ['hover', 'click'],
      description:
        'Open on hover, or toggle on click and close on an outside click (`tooltipTrigger`)',
    },
    triggerLabel: {
      control: 'text',
      description: 'Label of the button the tooltip is attached to',
    },
    title: { control: 'text', description: 'Optional title; empty to omit' },
    body: { control: 'text', description: 'Supporting text' },
    linkText: { control: 'text', description: 'Optional link; empty to omit' },
    actionLabel: {
      control: 'text',
      description: 'Optional action button; empty to omit',
    },
    width: {
      control: { type: 'range', min: 200, max: 400, step: 10 },
      description: 'Content width in pixels',
    },
  },
  args: {
    trigger: 'hover',
    triggerLabel: 'Hover me',
    title: 'Rich tooltip',
    body: 'Rich tooltips bring attention to a particular element or feature that warrants the user’s focus.',
    linkText: '',
    actionLabel: '',
    width: 280,
  },
  render: (args) => ({
    props: args,
    template: `
      <div style="padding: 16px 16px 200px">
        <button matButton="filled" [hlxTooltip]="content" [tooltipTrigger]="trigger">
          {{ triggerLabel }}
        </button>
        <ng-template #content>
          <div [style.width.px]="width" style="padding: 12px 16px">
            @if (title) {
              <h6 style="margin: 0 0 4px">{{ title }}</h6>
            }
            <p style="margin: 0">{{ body }}</p>
            @if (linkText || actionLabel) {
              <div style="display: flex; align-items: center; gap: 16px; margin-top: 12px">
                @if (linkText) {
                  <a href="#" (click)="$event.preventDefault()">{{ linkText }}</a>
                }
                @if (actionLabel) {
                  <button matButton>{{ actionLabel }}</button>
                }
              </div>
            }
          </div>
        </ng-template>
      </div>`,
  }),
};

export default meta;
type Story = StoryObj<RichTooltipArgs>;

export const Playground: Story = {};

/** Interactive content needs the click trigger so users can reach it. */
export const WithActions: Story = {
  args: {
    trigger: 'click',
    triggerLabel: 'Click me',
    linkText: 'Learn more',
    actionLabel: 'Got it',
  },
};

export const WithoutTitle: Story = { args: { title: '' } };
