import { Component, HostBinding } from '@angular/core';

import { ExampleViewer } from '../../../core/example-viewer/example-viewer';
import { Page } from '../../../core/page/page';
import * as samples from './examples';

@Component({
  selector: 'app-divider',
  templateUrl: './divider.html',
  styleUrls: ['./divider.scss'],
  imports: [Page, ExampleViewer],
})
export class Divider {
  @HostBinding('class') hostClass = 'cdx-section';

  sampleList = Object.values(samples);
}
