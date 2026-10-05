import { Component, HostBinding } from '@angular/core';
import { MatDivider } from '@angular/material/divider';

import { ExampleViewer } from '../../../core/example-viewer/example-viewer';
import { InputViewerComponent } from '../../../core/example-viewer/example-viewer.model';
import { Page } from '../../../core/page/page';
import * as samples from './examples';

@Component({
  selector: 'cdx-dialog',
  templateUrl: './dialog.html',
  styleUrls: ['./dialog.scss'],
  imports: [Page, ExampleViewer, MatDivider],
})
export class Dialog {
  @HostBinding('class') hostClass = 'cdx-section';

  sampleList = Object.values(samples) as InputViewerComponent[];
}
