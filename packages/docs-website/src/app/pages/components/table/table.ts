import { Component, HostBinding } from '@angular/core';

import { ExampleViewer } from '../../../core/example-viewer/example-viewer';
import { Page } from '../../../core/page/page';
import * as samples from './examples';

@Component({
  selector: 'app-table',
  templateUrl: './table.html',
  styleUrls: ['./table.scss'],
  imports: [Page, ExampleViewer],
})
export class Table {
  @HostBinding('class') hostClass = 'cdx-section';

  sampleList = Object.values(samples);
}
