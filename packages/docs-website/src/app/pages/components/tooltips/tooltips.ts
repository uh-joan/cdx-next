import { Component, HostBinding } from '@angular/core';
import { MatDivider } from '@angular/material/divider';

import { StorybookEmbed } from '../../../components/storybook-embed/storybook-embed';
import {
  UsageGuideline,
  UsageGuidelines,
} from '../../../components/usage-guideline/usage-guideline';
import { ExampleViewer } from '../../../core/example-viewer/example-viewer';
import { Page } from '../../../core/page/page';
import * as samples from './examples';

@Component({
  selector: 'cdx-tooltips',
  templateUrl: './tooltips.html',
  styleUrls: ['./tooltips.scss'],
  imports: [
    Page,
    ExampleViewer,
    MatDivider,
    StorybookEmbed,
    UsageGuideline,
    UsageGuidelines,
  ],
})
export class Tooltips {
  @HostBinding('class') hostClass = 'cdx-section';

  sampleList = Object.values(samples);
}
