import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Meta, moduleMetadata, StoryFn } from '@storybook/angular';

import { HelixNotificationComponent } from './helix-notification.component';

export default {
  title: 'Helix/Notification',
  component: HelixNotificationComponent,
  decorators: [
    moduleMetadata({
      imports: [MatButtonModule, MatIconModule],
    }),
  ],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    presentation: {
      control: 'radio',
      options: ['inline', 'banner'],
      description: 'Choose between `inline` or `banner` notification display',
    },
    severity: {
      control: 'radio',
      options: ['info', 'success', 'warn'],
    },
  },
} as Meta<HelixNotificationComponent>;

const PrimaryTemplate: StoryFn<HelixNotificationComponent> = (args) => ({
  props: args,
  template: `
    <hlx-notification
      [severity]="severity"
      [action]="action"
      [presentation]="presentation"
      [dismissable]="dismissable"
      [title]="title"
    >
      Notification message
    </hlx-notification>
  `,
});

export const InlinePrimary = PrimaryTemplate.bind({});
InlinePrimary.args = {
  presentation: 'banner',
  title: 'Title',
  dismissable: false,
  action: 'Action',
  severity: 'info',
};

export const InlineWithProjections = (args: HelixNotificationComponent) => ({
  props: {
    ...args,
    onAction: (event: Event) => {
      console.log(event);
    },
  },
  template: `
    <hlx-notification
      [severity]="severity"
      [action]="action"
      [presentation]="presentation"
      [dismissable]="dismissable"
      [title]="title"
    >
      Notification message
      <mat-icon icon>auto_fix_high</mat-icon>
      <button mat-button color="primary" actions>Action 1</button>
      <button mat-button color="primary" actions>Action 2</button>
    </hlx-notification>
  `,
});

InlineWithProjections.args = {
  presentation: 'inline',
  title: 'Title',
  dismissable: false,
  action: '',
  severity: 'info',
};

export const InlineDismissableMessage = PrimaryTemplate.bind({});
InlineDismissableMessage.args = {
  presentation: 'inline',
  dismissable: true,
  action: 'Action',
  severity: 'info',
};

export const InlineSuccess = PrimaryTemplate.bind({});
InlineSuccess.args = {
  presentation: 'inline',
  title: 'Title',
  dismissable: false,
  action: 'Action',
  severity: 'success',
};

export const InlineWarning = PrimaryTemplate.bind({});
InlineWarning.args = {
  presentation: 'inline',
  title: 'Title',
  dismissable: false,
  action: 'Action',
  severity: 'warn',
};

export const BannerPrimary = PrimaryTemplate.bind({});
BannerPrimary.args = {
  presentation: 'banner',
  title: 'Title',
  dismissable: false,
  action: 'Action',
  severity: 'info',
};

export const BannerWithProjections = (args: HelixNotificationComponent) => ({
  props: {
    ...args,
    onAction: (event: Event) => {
      console.log(event);
    },
  },
  template: `
    <hlx-notification
      [severity]="severity"
      [action]="action"
      [presentation]="presentation"
      [dismissable]="dismissable"
      [title]="title"
    >
      Notification message
      <mat-icon icon>auto_fix_high</mat-icon>
      <button mat-button color="primary" actions>Action 1</button>
      <button mat-button color="primary" actions>Action 2</button>
    </hlx-notification>
  `,
});

BannerWithProjections.args = {
  presentation: 'banner',
  title: 'Title',
  dismissable: false,
  severity: 'info',
};

export const BannerSuccess = PrimaryTemplate.bind({});
BannerSuccess.args = {
  presentation: 'banner',
  title: 'Title',
  dismissable: false,
  action: 'Action',
  severity: 'success',
};

export const BannerWarning = PrimaryTemplate.bind({});
BannerWarning.args = {
  presentation: 'banner',
  title: 'Title',
  dismissable: false,
  action: 'Action',
  severity: 'warn',
};
