import { Component, HostBinding } from '@angular/core';

import { ExampleViewerComponent } from '../../../core/example-viewer/example-viewer.component';
import { PageComponent } from '../../../core/page/page.component';
import * as samples from './examples';

@Component({
  selector: 'cdx-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss'],

  imports: [PageComponent, ExampleViewerComponent],
})
export class ButtonsComponent {
  @HostBinding('class') hostClass = 'cdx-section';

  sampleList = Object.values(samples);
}
