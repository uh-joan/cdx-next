import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'cdx-services-overview',
  // eslint-disable-next-line @angular-eslint/prefer-standalone
  standalone: false,
  templateUrl: './services-overview.component.html',
  styleUrls: ['./services-overview.component.scss'],
})
export class ServicesOverviewComponent {
  @HostBinding('class') hostClass = 'cdx-section';
}
