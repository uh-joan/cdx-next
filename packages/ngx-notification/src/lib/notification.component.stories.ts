import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Meta, moduleMetadata, StoryFn } from '@storybook/angular';

import { NotificationComponent } from './notification.component';

export default {
  title: 'Notification',
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    presentation: {
      control: 'radio',
      options: ['inline', 'banner'],
      description:
        'Use `inline` for inline notifications and `banner` for banner notifications.',
    },
    severity: {
      control: 'radio',
      options: ['info', 'success', 'warn'],
    },
  },
  component: NotificationComponent,
  decorators: [
    moduleMetadata({
      imports: [MatIconModule, MatButtonModule],
    }),
  ],
} as Meta<NotificationComponent>;

const PrimaryTemplate: StoryFn<NotificationComponent> = (
  args: NotificationComponent,
) => ({
  template: `
  <cdx-notification 
    severity="${args.severity}" 
    action="${args.action}"
    presentation="${args.presentation}"
    [dismissable]="${args.dismissable}"
    title="${args.title}"
    > Notification message </cdx-notification>`,
});

export const InlinePrimary = PrimaryTemplate.bind({});
InlinePrimary.args = {
  presentation: 'banner',
  title: 'Title',
  dismissable: false,
  action: 'Action',
  severity: 'info',
};

const InlineWithProjectionsTemplate: StoryFn<NotificationComponent> = (
  args: NotificationComponent,
) => ({
  template: `
  <cdx-notification 
    severity="${args.severity}" 
    action="${args.action}"
    presentation="${args.presentation}"
    [dismissable]="${args.dismissable}"
    title="${args.title}">
      Notification message
      <mat-icon icon>auto_fix_high</mat-icon>
      <button mat-button color="primary" actions>Action 1</button>
      <button mat-button color="primary" actions>Action 2</button>
    </cdx-notification>`,
  props: {
    onAction: (event: Event) => {
      console.log(event);
    },
  },
});

export const InlineWithProjections = InlineWithProjectionsTemplate.bind({});
InlineWithProjections.args = {
  presentation: 'inline',
  title: 'Title',
  dismissable: false,
  action: '',
  severity: 'info',
};

const InlineDismissableMessageTemplate: StoryFn<NotificationComponent> = (
  args: NotificationComponent,
) => ({
  template: `
  <cdx-notification 
    severity="${args.severity}" 
    action="${args.action}"
    presentation="${args.presentation}"
    [dismissable]="${args.dismissable}"
    (dismissEvent)="onDismiss($event)"
    (actionEvent)="onAction($event)"
    >
      Notification message
      <span icon></span>
    </cdx-notification>`,
  props: {
    onDismiss: (event: CustomEvent) => {
      console.log(event);
    },
    onAction: (event: CustomEvent) => {
      console.log(event);
    },
  },
});

export const InlineDismissableMessage = InlineDismissableMessageTemplate.bind(
  {},
);
InlineDismissableMessage.args = {
  presentation: 'inline',
  dismissable: true,
  action: 'Action',
  severity: 'info',
};

const InlineSuccessTemplate: StoryFn<NotificationComponent> = (
  args: NotificationComponent,
) => ({
  template: `
  <cdx-notification
    title="${args.title}"
    severity="${args.severity}" 
    action="${args.action}"
    [dismissable]="${args.dismissable}"
    presentation="${args.presentation}">
      Success message
    </cdx-notification>`,
});

export const InlineSuccess = InlineSuccessTemplate.bind({});
InlineSuccess.args = {
  presentation: 'inline',
  title: 'Title',
  dismissable: false,
  action: 'Action',
  severity: 'success',
};

const InlineWarningTemplate: StoryFn<NotificationComponent> = (
  args: NotificationComponent,
) => ({
  template: `
  <cdx-notification
    title="${args.title}"
    severity="${args.severity}" 
    action="${args.action}"
    [dismissable]="${args.dismissable}"
    presentation="${args.presentation}">
      Warning message
    </cdx-notification>`,
});

export const InlineWarning = InlineWarningTemplate.bind({});
InlineWarning.args = {
  presentation: 'inline',
  title: 'Title',
  dismissable: false,
  action: 'Action',
  severity: 'warn',
};

const BannerPrimaryTemplate: StoryFn<NotificationComponent> = (
  args: NotificationComponent,
) => ({
  template: `
  <cdx-notification 
    severity="${args.severity}" 
    action="${args.action}"
    presentation="${args.presentation}"
    [dismissable]="${args.dismissable}"
    title="${args.title}"> Notification message </cdx-notification>`,
});

export const BannerPrimary = BannerPrimaryTemplate.bind({});
BannerPrimary.args = {
  presentation: 'banner',
  title: 'Title',
  dismissable: false,
  action: 'Action',
  severity: 'info',
};

const BannerWithProjectionsTemplate: StoryFn<NotificationComponent> = (
  args: NotificationComponent,
) => ({
  template: `
  <cdx-notification 
    severity="${args.severity}" 
    action="${args.action}"
    presentation="${args.presentation}"
    [dismissable]="${args.dismissable}"
    title="${args.title}">
      Notification message
      <mat-icon icon>auto_fix_high</mat-icon>
      <button mat-button color="primary" actions>Action 1</button>
      <button mat-button color="primary" actions>Action 2</button>
    </cdx-notification>`,
});

export const BannerWithProjections = BannerWithProjectionsTemplate.bind({});
BannerWithProjections.args = {
  presentation: 'banner',
  title: 'Title',
  dismissable: false,
  action: '',
  severity: 'info',
};

const BannerDismissableMessageTemplate: StoryFn<NotificationComponent> = (
  args: NotificationComponent,
) => ({
  template: `
  <cdx-notification 
    severity="${args.severity}" 
    action="${args.action}"
    presentation="${args.presentation}"
    [dismissable]="${args.dismissable}">
    Notification message
    <span icon></span>
    </cdx-notification>`,
});

export const BannerDismissableMessage = BannerDismissableMessageTemplate.bind(
  {},
);
BannerDismissableMessage.args = {
  presentation: 'banner',
  dismissable: true,
  action: '',
  severity: 'info',
};

const BannerSuccessTemplate: StoryFn<NotificationComponent> = (
  args: NotificationComponent,
) => ({
  template: `
  <cdx-notification
    title="${args.title}"
    severity="${args.severity}" 
    action="${args.action}"
    [dismissable]="${args.dismissable}"
    presentation="${args.presentation}">
      Success message
    </cdx-notification>`,
});

export const BannerSuccess = BannerSuccessTemplate.bind({});
BannerSuccess.args = {
  presentation: 'banner',
  title: 'Title',
  dismissable: false,
  action: 'Action',
  severity: 'success',
};

const BannerWarningTemplate: StoryFn<NotificationComponent> = (
  args: NotificationComponent,
) => ({
  template: `
  <cdx-notification
    title="${args.title}"
    severity="${args.severity}" 
    action="${args.action}"
    [dismissable]="${args.dismissable}"
    presentation="${args.presentation}">
      Warning message
    </cdx-notification>`,
});

export const BannerWarning = BannerWarningTemplate.bind({});
BannerWarning.args = {
  presentation: 'banner',
  title: 'Title',
  dismissable: false,
  action: 'Action',
  severity: 'warn',
};
