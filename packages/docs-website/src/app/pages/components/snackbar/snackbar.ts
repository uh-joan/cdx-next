import { Component, HostBinding } from '@angular/core';

import { ExampleViewer } from '../../../core/example-viewer/example-viewer';
import { InputViewerComponent } from '../../../core/example-viewer/example-viewer.model';
import { Page } from '../../../core/page/page';
import * as samples from './examples';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.html',
  styleUrls: ['./snackbar.scss'],
  imports: [Page, ExampleViewer],
})
export class Snackbar {
  @HostBinding('class') hostClass = 'cdx-section';

  sampleList = Object.values(samples) as InputViewerComponent[];
}
