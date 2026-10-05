import { Component, HostBinding } from '@angular/core';
import { MatDivider } from '@angular/material/divider';

import { InternalLink } from '../../../../components/internal-link/internal-link';
import {
  UsageGuideline,
  UsageGuidelines,
} from '../../../../components/usage-guideline/usage-guideline';
import { Page } from '../../../../core/page/page';

@Component({
  selector: 'cdx-header-with-navigation',
  templateUrl: './header-with-navigation.html',
  styleUrl: '../../pattern-page.scss',
  imports: [Page, MatDivider, InternalLink, UsageGuideline, UsageGuidelines],
})
export class HeaderWithNavigation {
  @HostBinding('class') hostClass = 'cdx-section';
}
