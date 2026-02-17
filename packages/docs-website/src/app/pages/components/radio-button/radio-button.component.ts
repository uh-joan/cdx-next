import { Component, HostBinding } from '@angular/core';

import { ExampleViewerComponent } from '../../../core/example-viewer/example-viewer.component';
import { PageComponent } from '../../../core/page/page.component';
import * as samples from './examples';

@Component({
  selector: 'app-radio-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.scss'],
  imports: [PageComponent, ExampleViewerComponent],
})
export class RadioButtonComponent {
  @HostBinding('class') hostClass = 'cdx-section';

  sampleList = Object.values(samples);
}
