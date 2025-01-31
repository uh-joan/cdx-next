import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'cdx-getting-started-overview',
  templateUrl: './getting-started-overview.component.html',
  styleUrls: ['./getting-started-overview.component.scss'],
})
export class GettingStartedOverviewComponent {
  @HostBinding('class') hostClass = 'cdx-section';
}
