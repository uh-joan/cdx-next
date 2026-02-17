import { Component, HostBinding } from '@angular/core';

import { ExampleViewer } from '../../../core/example-viewer/example-viewer';
import { Page } from '../../../core/page/page';
import * as samples from './examples';

@Component({
  selector: 'app-progress-spinner',
  templateUrl: './progress-spinner.html',
  styleUrls: ['./progress-spinner.scss'],
  imports: [Page, ExampleViewer],
})
export class ProgressSpinner {
  @HostBinding('class') hostClass = 'cdx-section';

  sampleList = Object.values(samples);
}
