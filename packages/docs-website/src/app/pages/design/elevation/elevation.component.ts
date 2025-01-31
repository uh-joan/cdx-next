import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'cdx-elevation',
  templateUrl: './elevation.component.html',
  styleUrls: ['./elevation.component.scss'],
})
export class ElevationComponent {
  @HostBinding('class') hostClass = 'cdx-section';
}
