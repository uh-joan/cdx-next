import { Component, HostBinding } from '@angular/core';

import { PageComponent } from '../../../core/page/page.component';

@Component({
  selector: 'cdx-services-overview',
  templateUrl: './services-overview.component.html',
  styleUrls: ['./services-overview.component.scss'],
  imports: [PageComponent],
})
export class ServicesOverviewComponent {
  @HostBinding('class') hostClass = 'cdx-section';
}
