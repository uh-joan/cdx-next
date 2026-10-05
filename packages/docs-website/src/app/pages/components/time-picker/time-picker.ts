import { Component, HostBinding } from '@angular/core';

import { ExampleViewer } from '../../../core/example-viewer/example-viewer';
import { Page } from '../../../core/page/page';
import * as samples from './examples';

@Component({
  selector: 'cdx-time-picker',
  templateUrl: './time-picker.html',
  imports: [Page, ExampleViewer],
})
export class TimePicker {
  @HostBinding('class') hostClass = 'cdx-section';

  sampleList = Object.values(samples);
}
