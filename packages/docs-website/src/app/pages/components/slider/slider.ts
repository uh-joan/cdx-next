import { Component, HostBinding } from '@angular/core';

import { ExampleViewer } from '../../../core/example-viewer/example-viewer';
import { Page } from '../../../core/page/page';
import * as samples from './examples';

@Component({
  selector: 'cdx-slider',
  templateUrl: './slider.html',
  styleUrls: ['./slider.scss'],
  imports: [Page, ExampleViewer],
})
export class Slider {
  @HostBinding('class') hostClass = 'cdx-section';

  sampleList = Object.values(samples);
}
