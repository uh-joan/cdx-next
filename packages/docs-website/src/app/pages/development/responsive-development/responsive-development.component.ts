import { Component, HostBinding } from '@angular/core';

import { ExternalLinkComponent } from '../../../components/external-link/external-link.component';
import { PageComponent } from '../../../core/page/page.component';

@Component({
  selector: 'cdx-responsive-development',
  templateUrl: './responsive-development.component.html',
  styleUrls: ['./responsive-development.component.scss'],
  imports: [PageComponent, ExternalLinkComponent],
})
export class ResponsiveDevelopmentComponent {
  @HostBinding('class') hostClass = 'cdx-section';
}
