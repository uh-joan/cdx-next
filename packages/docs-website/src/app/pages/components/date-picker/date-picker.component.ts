import { Component, HostBinding } from '@angular/core';

import { ExampleViewerComponent } from '../../../core/example-viewer/example-viewer.component';
import { PageComponent } from '../../../core/page/page.component';
import * as samples from './examples';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss'],
  imports: [PageComponent, ExampleViewerComponent],
})
export class DatePickerComponent {
  @HostBinding('class') hostClass = 'cdx-section';

  sampleList = Object.values(samples);
}
