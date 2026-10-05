import { Component, HostBinding } from '@angular/core';

import { ExampleViewer } from '../../../core/example-viewer/example-viewer';
import { Page } from '../../../core/page/page';
import * as samples from './examples';

@Component({
  selector: 'cdx-expansion-panel',
  templateUrl: './expansion-panel.html',
  styleUrls: ['./expansion-panel.scss'],
  imports: [Page, ExampleViewer],
})
export class ExpansionPanel {
  @HostBinding('class') hostClass = 'cdx-section';

  sampleList = Object.values(samples);
}
