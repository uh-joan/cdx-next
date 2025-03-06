import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'cdx-contributing',
  // eslint-disable-next-line @angular-eslint/prefer-standalone
  standalone: false,
  templateUrl: './contributing.component.html',
  styleUrls: ['./contributing.component.scss'],
})
export class ContributingComponent {
  @HostBinding('class') hostClass = 'cdx-section';
}
