import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'cdx-foundations-overview',
  templateUrl: './foundations-overview.component.html',
  styleUrls: ['./foundations-overview.component.scss'],
})
export class FoundationsOverviewComponent {
  @HostBinding('class') hostClass = 'cdx-section';
}
