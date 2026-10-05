import { Component, HostBinding } from '@angular/core';
import { MatDivider } from '@angular/material/divider';

import { ExternalLink } from '../../../components/external-link/external-link';
import { InternalLink } from '../../../components/internal-link/internal-link';
import {
  UsageGuideline,
  UsageGuidelines,
} from '../../../components/usage-guideline/usage-guideline';
import { ExampleViewer } from '../../../core/example-viewer/example-viewer';
import { Page } from '../../../core/page/page';
import * as samples from './examples';

@Component({
  selector: 'cdx-data-grid',
  templateUrl: './data-grid.html',
  styleUrls: ['./data-grid.scss'],
  imports: [
    Page,
    ExampleViewer,
    MatDivider,
    ExternalLink,
    InternalLink,
    UsageGuideline,
    UsageGuidelines,
  ],
})
export class DataGrid {
  @HostBinding('class') hostClass = 'cdx-section';

  sampleList = Object.values(samples);
}
