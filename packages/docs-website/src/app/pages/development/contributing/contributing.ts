import { Component, HostBinding } from '@angular/core';
import { MatDivider } from '@angular/material/divider';

import { ExternalLink } from '../../../components/external-link/external-link';
import { Page } from '../../../core/page/page';

@Component({
  selector: 'cdx-contributing',
  templateUrl: './contributing.html',
  styleUrls: ['./contributing.scss'],
  imports: [Page, MatDivider, ExternalLink],
})
export class Contributing {
  @HostBinding('class') hostClass = 'cdx-section';
}
