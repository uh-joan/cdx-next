import { Component, HostBinding } from '@angular/core';

import { ExampleViewer } from '../../../core/example-viewer/example-viewer';
import { Page } from '../../../core/page/page';
import * as samples from './examples';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.html',
  styleUrls: ['./progress-bar.scss'],
  imports: [Page, ExampleViewer],
})
export class ProgressBar {
  @HostBinding('class') hostClass = 'cdx-section';

  sampleList = Object.values(samples);
}
