import { Component, HostBinding } from '@angular/core';
import { MatDivider } from '@angular/material/divider';

import { InternalLink } from '../../../../components/internal-link/internal-link';
import { Page } from '../../../../core/page/page';

@Component({
  selector: 'cdx-sidebar-overview',
  templateUrl: './sidebar-overview.html',
  styleUrl: '../../pattern-page.scss',
  imports: [Page, MatDivider, InternalLink],
})
export class SidebarOverview {
  @HostBinding('class') hostClass = 'cdx-section';
}
