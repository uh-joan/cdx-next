import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'cdx-logos',
  templateUrl: './logos.component.html',
  styleUrls: ['./logos.component.scss'],
})
export class LogosComponent {
  @HostBinding('class') hostClass = 'cdx-section';
}
