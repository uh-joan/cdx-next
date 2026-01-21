import { Component, HostBinding } from '@angular/core';
import { ExampleViewerComponent } from 'src/app/core/example-viewer/example-viewer.component';
import { PageComponent } from 'src/app/core/page/page.component';

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
