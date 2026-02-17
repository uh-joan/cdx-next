import { Component, HostBinding } from '@angular/core';

import { ExampleViewer } from '../../../core/example-viewer/example-viewer';
import { Page } from '../../../core/page/page';
import * as samples from './examples';

@Component({
  selector: 'app-sort-header',
  templateUrl: './sort-header.html',
  styleUrls: ['./sort-header.scss'],
  imports: [Page, ExampleViewer],
})
export class SortHeader {
  @HostBinding('class') hostClass = 'cdx-section';

  sampleList = Object.values(samples);
}
