import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { HelixNotificationComponent } from '@cdx/ngx-branding';
import { type Meta, moduleMetadata, type StoryObj } from '@storybook/angular';

type NotificationArgs = {
  severity: 'info' | 'success' | 'warn';
  presentation: 'inline' | 'banner';
  title: string;
  message: string;
  action: string;
  dismissable: boolean;
  customIcon: string;
  projectedActions: boolean;
};

const meta: Meta<NotificationArgs> = {
  title: 'Branding/Notification',
  decorators: [
    moduleMetadata({
      imports: [HelixNotificationComponent, MatButton, MatIcon],
    }),
  ],
  parameters: {
    docs: {
      description: {
        component:
          '`<hlx-notification>` from `@cdx/ngx-branding`. Severity sets the colors and default icon; `presentation` switches between an inline message and a full-width banner. Custom icons and extra buttons are projected with the `icon` and `actions` attributes.',
      },
    },
  },
  argTypes: {
    severity: {
      control: 'inline-radio',
      options: ['info', 'success', 'warn'],
      description: 'Status of the message (`severity` input)',
    },
    presentation: {
      control: 'inline-radio',
      options: ['inline', 'banner'],
      description: 'Layout style (`presentation` input)',
    },
    title: {
      control: 'text',
      description: 'Optional title (`title` input); empty to omit',
    },
    message: { control: 'text', description: 'Projected message content' },
    action: {
      control: 'text',
      description:
        'Label of the built-in action button (`action` input); empty to omit',
    },
    dismissable: {
      control: 'boolean',
      description:
        'Show a close icon (inline) or Dismiss button (banner) that hides the notification',
    },
    customIcon: {
      control: 'text',
      description:
        'Material icon name projected with the `icon` attribute; empty to use the severity icon',
    },
    projectedActions: {
      control: 'boolean',
      description: 'Project extra buttons with the `actions` attribute',
    },
  },
  args: {
    severity: 'info',
    presentation: 'inline',
    title: 'Title',
    message: 'Notification message',
    action: 'Action',
    dismissable: false,
    customIcon: '',
    projectedActions: false,
  },
  render: (args) => ({
    props: args,
    template: `
      <div style="padding: 16px">
        <hlx-notification
          [severity]="severity"
          [presentation]="presentation"
          [title]="title"
          [action]="action"
          [dismissable]="dismissable"
        >
          @if (customIcon) {
            <mat-icon icon>{{ customIcon }}</mat-icon>
          }
          {{ message }}
          @if (projectedActions) {
            <button matButton actions>Projected action</button>
            <button matButton actions>Another action</button>
          }
        </hlx-notification>
      </div>`,
  }),
};

export default meta;
type Story = StoryObj<NotificationArgs>;

export const Playground: Story = {};

export const Success: Story = { args: { severity: 'success' } };

export const Warn: Story = { args: { severity: 'warn' } };

export const Banner: Story = {
  args: { presentation: 'banner', dismissable: true },
};

export const Dismissable: Story = { args: { dismissable: true } };

export const CustomIconAndActions: Story = {
  args: { customIcon: 'notifications', projectedActions: true, action: '' },
};

export const AllSeverities: Story = {
  argTypes: { severity: { table: { disable: true } } },
  render: (args) => ({
    props: { ...args, severities: ['info', 'success', 'warn'] },
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px; padding: 16px">
        @for (s of severities; track s) {
          <hlx-notification
            [severity]="s"
            [presentation]="presentation"
            [title]="title"
            [action]="action"
            [dismissable]="dismissable"
          >
            {{ message }}
          </hlx-notification>
        }
      </div>`,
  }),
};
