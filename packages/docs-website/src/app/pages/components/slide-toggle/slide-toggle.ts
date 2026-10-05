import { Component, HostBinding } from '@angular/core';
import { MatDivider } from '@angular/material/divider';

import { InternalLink } from '../../../components/internal-link/internal-link';
import {
  UsageGuideline,
  UsageGuidelines,
} from '../../../components/usage-guideline/usage-guideline';
import { ExampleViewer } from '../../../core/example-viewer/example-viewer';
import { Page } from '../../../core/page/page';
import * as samples from './examples';

@Component({
  selector: 'cdx-slide-toggle',
  templateUrl: './slide-toggle.html',
  styleUrls: ['./slide-toggle.scss'],
  imports: [
    Page,
    ExampleViewer,
    MatDivider,
    InternalLink,
    UsageGuideline,
    UsageGuidelines,
  ],
})
export class SlideToggle {
  @HostBinding('class') hostClass = 'cdx-section';

  sampleList = Object.values(samples);
}
