import { Component, HostBinding } from '@angular/core';

import { ExampleViewerComponent } from '../../../core/example-viewer/example-viewer.component';
import { InputViewerComponent } from '../../../core/example-viewer/example-viewer.model';
import { PageComponent } from '../../../core/page/page.component';
import * as samples from './examples';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss'],
  imports: [PageComponent, ExampleViewerComponent],
})
export class SnackbarComponent {
  @HostBinding('class') hostClass = 'cdx-section';

  sampleList = Object.values(samples) as InputViewerComponent[];
}
