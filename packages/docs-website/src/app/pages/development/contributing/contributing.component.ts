import { Component, HostBinding } from '@angular/core';
import { MatDivider } from '@angular/material/divider';

import { ExternalLinkComponent } from '../../../components/external-link/external-link.component';
import { PageComponent } from '../../../core/page/page.component';

@Component({
  selector: 'cdx-contributing',
  templateUrl: './contributing.component.html',
  styleUrls: ['./contributing.component.scss'],
  imports: [PageComponent, MatDivider, ExternalLinkComponent],
})
export class ContributingComponent {
  @HostBinding('class') hostClass = 'cdx-section';
}
