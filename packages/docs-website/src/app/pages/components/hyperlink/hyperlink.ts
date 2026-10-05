import { Component, HostBinding } from '@angular/core';

import { ExampleViewer } from '../../../core/example-viewer/example-viewer';
import { Page } from '../../../core/page/page';
import * as samples from './examples';

@Component({
  selector: 'app-hyperlink',
  templateUrl: './hyperlink.html',
  styleUrls: ['./hyperlink.scss'],
  imports: [Page, ExampleViewer],
})
export class Hyperlink {
  @HostBinding('class') hostClass = 'cdx-section';

  sampleList = Object.values(samples);
}
