import { Component, HostBinding } from '@angular/core';
import { ExampleViewerComponent } from 'src/app/core/example-viewer/example-viewer.component';
import { PageComponent } from 'src/app/core/page/page.component';

import * as samples from './examples';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  imports: [PageComponent, ExampleViewerComponent],
})
export class SliderComponent {
  @HostBinding('class') hostClass = 'cdx-section';

  sampleList = Object.values(samples);
}
