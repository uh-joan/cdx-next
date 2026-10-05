import { Component, HostBinding } from '@angular/core';
import { MatDivider } from '@angular/material/divider';

import { InternalLink } from '../../../../components/internal-link/internal-link';
import {
  UsageGuideline,
  UsageGuidelines,
} from '../../../../components/usage-guideline/usage-guideline';
import { Page } from '../../../../core/page/page';

@Component({
  selector: 'cdx-filter-panel',
  templateUrl: './filter-panel.html',
  styleUrl: '../../pattern-page.scss',
  imports: [Page, MatDivider, InternalLink, UsageGuideline, UsageGuidelines],
})
export class FilterPanel {
  @HostBinding('class') hostClass = 'cdx-section';
}
