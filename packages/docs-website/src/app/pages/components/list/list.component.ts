import { Component, HostBinding } from '@angular/core';

import { ExampleViewerComponent } from '../../../core/example-viewer/example-viewer.component';
import { PageComponent } from '../../../core/page/page.component';
import * as samples from './examples';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  imports: [PageComponent, ExampleViewerComponent],
})
export class ListComponent {
  @HostBinding('class') hostClass = 'cdx-section';

  sampleList = Object.values(samples);
}
