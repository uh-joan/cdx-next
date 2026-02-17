import { Component, HostBinding } from '@angular/core';
import { MatDivider } from '@angular/material/divider';

import { ExternalLink } from '../../../components/external-link/external-link';
import { InternalLink } from '../../../components/internal-link/internal-link';
import { Page } from '../../../core/page/page';

@Component({
  selector: 'cdx-getting-started-overview',
  templateUrl: './getting-started-overview.html',
  styleUrls: ['./getting-started-overview.scss'],
  imports: [Page, MatDivider, InternalLink, ExternalLink],
})
export class GettingStartedOverview {
  @HostBinding('class') hostClass = 'cdx-section';
}
