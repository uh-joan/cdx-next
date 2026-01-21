import { Component, HostBinding } from '@angular/core';
import { ExampleViewerComponent } from 'src/app/core/example-viewer/example-viewer.component';
import { InputViewerComponent } from 'src/app/core/example-viewer/example-viewer.model';
import { PageComponent } from 'src/app/core/page/page.component';

import * as samples from './examples';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
  imports: [PageComponent, ExampleViewerComponent],
})
export class DialogComponent {
  @HostBinding('class') hostClass = 'cdx-section';

  sampleList = Object.values(samples) as InputViewerComponent[];
}
