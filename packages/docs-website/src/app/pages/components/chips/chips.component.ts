import { Component, HostBinding } from '@angular/core';
import { ExampleViewerComponent } from 'src/app/core/example-viewer/example-viewer.component';
import { PageComponent } from 'src/app/core/page/page.component';

import * as samples from './examples';

@Component({
  selector: 'app-chips',
  templateUrl: './chips.component.html',
  styleUrls: ['./chips.component.scss'],
  imports: [PageComponent, ExampleViewerComponent],
})
export class ChipsComponent {
  @HostBinding('class') hostClass = 'cdx-section';

  sampleList = Object.values(samples);
}
