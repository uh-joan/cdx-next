import { Component, HostBinding } from '@angular/core';

import { ExampleViewerComponent } from '../../../core/example-viewer/example-viewer.component';
import { PageComponent } from '../../../core/page/page.component';
import * as samples from './examples';

@Component({
  selector: 'cdx-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss'],

  imports: [PageComponent, ExampleViewerComponent],
})
export class BadgeComponent {
  @HostBinding('class') hostClass = 'cdx-section';

  sampleList = Object.values(samples);
}
