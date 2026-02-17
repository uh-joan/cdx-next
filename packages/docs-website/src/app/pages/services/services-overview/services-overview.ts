import { Component, HostBinding } from '@angular/core';

import { Page } from '../../../core/page/page';

@Component({
  selector: 'cdx-services-overview',
  templateUrl: './services-overview.html',
  styleUrls: ['./services-overview.scss'],
  imports: [Page],
})
export class ServicesOverview {
  @HostBinding('class') hostClass = 'cdx-section';
}
