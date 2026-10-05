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
  selector: 'cdx-text-input',
  templateUrl: './text-input.html',
  styleUrls: ['./text-input.scss'],
  imports: [
    Page,
    ExampleViewer,
    MatDivider,
    InternalLink,
    UsageGuideline,
    UsageGuidelines,
  ],
})
export class TextInput {
  @HostBinding('class') hostClass = 'cdx-section';

  sampleList = Object.values(samples);
}
