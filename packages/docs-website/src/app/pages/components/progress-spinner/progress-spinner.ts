import { Component, HostBinding } from '@angular/core';
import { MatDivider } from '@angular/material/divider';

import {
  UsageGuideline,
  UsageGuidelines,
} from '../../../components/usage-guideline/usage-guideline';
import { ExampleViewer } from '../../../core/example-viewer/example-viewer';
import { Page } from '../../../core/page/page';
import * as samples from './examples';

@Component({
  selector: 'cdx-progress-spinner',
  templateUrl: './progress-spinner.html',
  styleUrls: ['./progress-spinner.scss'],
  imports: [Page, ExampleViewer, MatDivider, UsageGuideline, UsageGuidelines],
})
export class ProgressSpinner {
  @HostBinding('class') hostClass = 'cdx-section';

  sampleList = Object.values(samples);
}
