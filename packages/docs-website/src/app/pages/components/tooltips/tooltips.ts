import { Component, HostBinding } from '@angular/core';

import { ExampleViewer } from '../../../core/example-viewer/example-viewer';
import { Page } from '../../../core/page/page';
import * as samples from './examples';

@Component({
  selector: 'app-tooltips',
  templateUrl: './tooltips.html',
  styleUrls: ['./tooltips.scss'],
  imports: [Page, ExampleViewer],
})
export class Tooltips {
  @HostBinding('class') hostClass = 'cdx-section';

  sampleList = Object.values(samples);
}
