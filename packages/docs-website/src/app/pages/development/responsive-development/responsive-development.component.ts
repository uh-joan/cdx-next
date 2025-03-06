import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'cdx-responsive-development',
  // eslint-disable-next-line @angular-eslint/prefer-standalone
  standalone: false,
  templateUrl: './responsive-development.component.html',
  styleUrls: ['./responsive-development.component.scss'],
})
export class ResponsiveDevelopmentComponent {
  @HostBinding('class') hostClass = 'cdx-section';
}
