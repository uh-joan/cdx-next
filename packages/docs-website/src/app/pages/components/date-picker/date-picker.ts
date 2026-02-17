import { Component, HostBinding } from '@angular/core';

import { ExampleViewer } from '../../../core/example-viewer/example-viewer';
import { Page } from '../../../core/page/page';
import * as samples from './examples';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.html',
  styleUrls: ['./date-picker.scss'],
  imports: [Page, ExampleViewer],
})
export class DatePicker {
  @HostBinding('class') hostClass = 'cdx-section';

  sampleList = Object.values(samples);
}
