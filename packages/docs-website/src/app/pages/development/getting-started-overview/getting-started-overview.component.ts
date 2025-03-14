import { Component, HostBinding } from '@angular/core';
import { MatDivider } from '@angular/material/divider';

import { ExternalLinkComponent } from '../../../components/external-link/external-link.component';
import { InternalLinkComponent } from '../../../components/internal-link/internal-link.component';
import { PageComponent } from '../../../core/page/page.component';

@Component({
  selector: 'cdx-getting-started-overview',
  templateUrl: './getting-started-overview.component.html',
  styleUrls: ['./getting-started-overview.component.scss'],
  imports: [
    PageComponent,
    MatDivider,
    InternalLinkComponent,
    ExternalLinkComponent,
  ],
})
export class GettingStartedOverviewComponent {
  @HostBinding('class') hostClass = 'cdx-section';
}
