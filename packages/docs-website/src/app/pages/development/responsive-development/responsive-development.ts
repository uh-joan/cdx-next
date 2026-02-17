import { Component, HostBinding } from '@angular/core';

import { ExternalLink } from '../../../components/external-link/external-link';
import { Page } from '../../../core/page/page';

@Component({
  selector: 'cdx-responsive-development',
  templateUrl: './responsive-development.html',
  styleUrls: ['./responsive-development.scss'],
  imports: [Page, ExternalLink],
})
export class ResponsiveDevelopment {
  @HostBinding('class') hostClass = 'cdx-section';
}
