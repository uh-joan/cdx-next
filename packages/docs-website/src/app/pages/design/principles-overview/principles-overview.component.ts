import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'cdx-principles-overview',
  templateUrl: './principles-overview.component.html',
  styleUrls: ['./principles-overview.component.scss'],
})
export class PrinciplesOverviewComponent {
  @HostBinding('class') hostClass = 'cdx-section';
}
