import { Component, HostBinding } from '@angular/core';

import { ExampleViewer } from '../../../core/example-viewer/example-viewer';
import { Page } from '../../../core/page/page';
import * as samples from './examples';

@Component({
  selector: 'app-select',
  templateUrl: './select.html',
  styleUrls: ['./select.scss'],
  imports: [Page, ExampleViewer],
})
export class Select {
  @HostBinding('class') hostClass = 'cdx-section';

  sampleList = Object.values(samples);
}
