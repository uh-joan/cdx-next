import { Component, HostBinding } from '@angular/core';
import { MatDivider } from '@angular/material/divider';

import { InternalLink } from '../../../../components/internal-link/internal-link';
import {
  UsageGuideline,
  UsageGuidelines,
} from '../../../../components/usage-guideline/usage-guideline';
import { Page } from '../../../../core/page/page';

@Component({
  selector: 'cdx-nested-navigation',
  templateUrl: './nested-navigation.html',
  styleUrl: '../../pattern-page.scss',
  imports: [Page, MatDivider, InternalLink, UsageGuideline, UsageGuidelines],
})
export class NestedNavigation {
  @HostBinding('class') hostClass = 'cdx-section';
}
