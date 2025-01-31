import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'cdx-contributing',
  templateUrl: './contributing.component.html',
  styleUrls: ['./contributing.component.scss'],
})
export class ContributingComponent {
  @HostBinding('class') hostClass = 'cdx-section';
}
