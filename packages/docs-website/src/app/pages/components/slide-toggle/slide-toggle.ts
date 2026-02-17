import { Component, HostBinding } from '@angular/core';

import { ExampleViewer } from '../../../core/example-viewer/example-viewer';
import { Page } from '../../../core/page/page';
import * as samples from './examples';

@Component({
  selector: 'app-slide-toggle',
  templateUrl: './slide-toggle.html',
  styleUrls: ['./slide-toggle.scss'],
  imports: [Page, ExampleViewer],
})
export class SlideToggle {
  @HostBinding('class') hostClass = 'cdx-section';

  sampleList = Object.values(samples);
}
