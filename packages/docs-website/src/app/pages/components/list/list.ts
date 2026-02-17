import { Component, HostBinding } from '@angular/core';

import { ExampleViewer } from '../../../core/example-viewer/example-viewer';
import { Page } from '../../../core/page/page';
import * as samples from './examples';

@Component({
  selector: 'app-list',
  templateUrl: './list.html',
  styleUrls: ['./list.scss'],
  imports: [Page, ExampleViewer],
})
export class List {
  @HostBinding('class') hostClass = 'cdx-section';

  sampleList = Object.values(samples);
}
