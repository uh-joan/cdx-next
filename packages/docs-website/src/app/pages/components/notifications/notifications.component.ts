import { Component, HostBinding } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { HighlightComponent } from 'src/app/components/highlight/highlight.component';
import { ExampleViewerComponent } from 'src/app/core/example-viewer/example-viewer.component';
import { PageComponent } from 'src/app/core/page/page.component';

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
    property: 'severity',
    type: 'info, success, warn',
    default: 'info',
    description: 'Sets background and color styles',
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
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss'],
  imports: [
    PageComponent,
    ExampleViewerComponent,
    HighlightComponent,
    MatDividerModule,
    MatTableModule,
  ],
})
export class NotificationsComponent {
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
  ]);

  displayedColumns2: string[] = ['property', 'type', 'default', 'description'];
  dataSource2 = new MatTableDataSource<ElementApis>(ELEMENT_APIS);

  moduleText = `import { NotificationModule } from '@cdx/ngx-branding';`;

  htmlText = `<cdx-notification
  title="Title"
  severity="success"
  action="Action"
  presentation="inline"
  dismissable="true"
>
  Notification message
</cdx-notification>`;

  contentProjectionText = `<cdx-notification
  title="Title"
  severity="success"
  action="Action"
  presentation="inline"
  dismissable="true"
>
  Notification message
  <mat-icon icon>check</mat-icon>
  <button mat-button actions>Projected Action</button>
  <button mat-button actions>Another Action</button>
</cdx-notification>`;

  notificationInfoText = `
<cdx-notification title="Title" severity="info" action="Action">
  Notification message
</cdx-notification>`;

  notificationSuccessText = `
<cdx-notification title="Title" severity="success" action="Action">
  Notification message
</cdx-notification>`;

  notificationWarnText = `
<cdx-notification title="Title" severity="warn" action="Action">
  Notification message
</cdx-notification>`;

  dismissableText = `<cdx-notification
  action="Action"
  dismissable="true"
  (dismissEvent)="onDismiss($event)"
  (actionEvent)="onAction($event)"
>
  Notification message
</cdx-notification>`;

  eventListenerText = `onDismiss(event: CustomEvent) {
  // Handle event Dismiss triggered
}

onAction(event: CustomEvent) {
  // Handle event Action triggered
}`;

  sampleList = Object.values(samples);
}
