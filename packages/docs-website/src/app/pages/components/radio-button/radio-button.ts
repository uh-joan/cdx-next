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
  selector: 'cdx-radio-button',
  templateUrl: './radio-button.html',
  styleUrls: ['./radio-button.scss'],
  imports: [Page, ExampleViewer, MatDivider, UsageGuideline, UsageGuidelines],
})
export class RadioButton {
  @HostBinding('class') hostClass = 'cdx-section';

  sampleList = Object.values(samples);
}
