import { Component, HostBinding } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

import { Highlight } from '../../../components/highlight/highlight';
import { ExampleViewer } from '../../../core/example-viewer/example-viewer';
import { Page } from '../../../core/page/page';
import * as samples from './examples';

interface ElTable {
  event: string;
  description: string;
}

interface ElementApis {
  property: string;
  type: string;
  default: string;
  description: string;
}

const ELEMENT_APIS: ElementApis[] = [
  {
    property: 'title',
    type: 'string',
    default: '-',
    description: 'Optional title',
  },
  {
    property: 'presentation',
    type: 'inline, banner',
    default: 'inline',
    description: 'Changes layout style',
  },
  {
    property: 'action',
    type: 'string',
    default: '-',
    description: 'Optional button, only shown when a string is provided.',
  },
  {
    property: 'secondaryAction',
    type: 'string',
    default: '-',
    description: 'Optional second button, shown after the action button.',
  },
  {
    property: 'severity',
    type: 'primary, warn, negative, positive',
    default: 'primary',
    description:
      'Sets background and colour styles. info and success are deprecated aliases for primary and positive.',
  },
  {
    property: 'dismissable',
    type: 'boolean',
    default: 'false',
    description:
      'Shows a cross icon / dismiss button which hides the component',
  },
];

@Component({
  selector: 'cdx-notifications',
  templateUrl: './notifications.html',
  styleUrls: ['./notifications.scss'],
  imports: [Page, ExampleViewer, Highlight, MatDividerModule, MatTableModule],
})
export class Notifications {
  @HostBinding('class') hostClass = 'cdx-section';

  displayedColumns: string[] = ['event', 'description'];

  dataSource = new MatTableDataSource<ElTable>([
    {
      event: 'dismissEvent',
      description:
        'Custom event triggered on clicking cross or dismiss button.',
    },
    {
      event: 'actionEvent',
      description: 'Custom event triggered on clicking provided action button.',
    },
    {
      event: 'secondaryActionEvent',
      description:
        'Custom event triggered on clicking provided secondary action button.',
    },
  ]);

  displayedColumns2: string[] = ['property', 'type', 'default', 'description'];
  dataSource2 = new MatTableDataSource<ElementApis>(ELEMENT_APIS);

  moduleText = `import { HelixNotificationComponent } from '@hlx/ngx-branding';`;

  htmlText = `<hlx-notification
  title="Title"
  severity="positive"
  action="Action"
  secondaryAction="Details"
  presentation="inline"
  dismissable="true"
>
  Notification message
</hlx-notification>`;

  contentProjectionText = `<hlx-notification
  title="Title"
  severity="positive"
  action="Action"
  presentation="inline"
  dismissable="true"
>
  Notification message
  <mat-icon icon>check</mat-icon>
  <button matButton actions>Projected Action</button>
  <button matButton actions>Another Action</button>
</hlx-notification>`;

  notificationPrimaryText = `
<hlx-notification title="Title" severity="primary" action="Action">
  Notification message
</hlx-notification>`;

  notificationWarnText = `
<hlx-notification title="Title" severity="warn" action="Action">
  Notification message
</hlx-notification>`;

  notificationNegativeText = `
<hlx-notification title="Title" severity="negative" action="Action">
  Notification message
</hlx-notification>`;

  notificationPositiveText = `
<hlx-notification title="Title" severity="positive" action="Action">
  Notification message
</hlx-notification>`;

  dismissableText = `<hlx-notification
  action="Action"
  dismissable="true"
  (dismissEvent)="onDismiss($event)"
  (actionEvent)="onAction($event)"
  (secondaryActionEvent)="onSecondaryAction($event)"
>
  Notification message
</hlx-notification>`;

  eventListenerText = `onDismiss() {
  // Handle event Dismiss triggered
}

onAction(label: string) {
  // Handle the action button
}

onSecondaryAction(label: string) {
  // Handle the secondary action button
}`;

  sampleList = Object.values(samples);
}
