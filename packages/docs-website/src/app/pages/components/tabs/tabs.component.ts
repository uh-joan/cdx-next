import { Component, HostBinding } from '@angular/core';

import { ExampleViewerComponent } from '../../../core/example-viewer/example-viewer.component';
import { PageComponent } from '../../../core/page/page.component';
import * as samples from './examples';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
  imports: [PageComponent, ExampleViewerComponent],
})
export class TabsComponent {
  @HostBinding('class') hostClass = 'cdx-section';

  sampleList = Object.values(samples);
}
