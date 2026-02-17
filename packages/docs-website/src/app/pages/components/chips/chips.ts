import { Component, HostBinding } from '@angular/core';

import { ExampleViewer } from '../../../core/example-viewer/example-viewer';
import { Page } from '../../../core/page/page';
import * as samples from './examples';

@Component({
  selector: 'app-chips',
  templateUrl: './chips.html',
  styleUrls: ['./chips.scss'],
  imports: [Page, ExampleViewer],
})
export class Chips {
  @HostBinding('class') hostClass = 'cdx-section';

  sampleList = Object.values(samples);
}
