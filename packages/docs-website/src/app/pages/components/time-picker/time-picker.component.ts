import { Component, HostBinding } from '@angular/core';
import { ExampleViewerComponent } from 'src/app/core/example-viewer/example-viewer.component';
import { PageComponent } from 'src/app/core/page/page.component';

import * as samples from './examples';

@Component({
  selector: 'app-text-input',
  templateUrl: './time-picker.component.html',
  imports: [PageComponent, ExampleViewerComponent],
})
export class TimePickerComponent {
  @HostBinding('class') hostClass = 'cdx-section';

  sampleList = Object.values(samples);
}
