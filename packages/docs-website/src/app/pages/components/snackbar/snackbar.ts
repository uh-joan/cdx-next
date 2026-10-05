import { Component, HostBinding } from '@angular/core';
import { MatDivider } from '@angular/material/divider';

import {
  UsageGuideline,
  UsageGuidelines,
} from '../../../components/usage-guideline/usage-guideline';
import { ExampleViewer } from '../../../core/example-viewer/example-viewer';
import { InputViewerComponent } from '../../../core/example-viewer/example-viewer.model';
import { Page } from '../../../core/page/page';
import * as samples from './examples';

@Component({
  selector: 'cdx-snackbar',
  templateUrl: './snackbar.html',
  styleUrls: ['./snackbar.scss'],
  imports: [Page, ExampleViewer, MatDivider, UsageGuideline, UsageGuidelines],
})
export class Snackbar {
  @HostBinding('class') hostClass = 'cdx-section';

  sampleList = Object.values(samples) as InputViewerComponent[];
}
