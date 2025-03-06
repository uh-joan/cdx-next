import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'cdx-about-helix',
  // eslint-disable-next-line @angular-eslint/prefer-standalone
  standalone: false,
  templateUrl: './about-helix.component.html',
  styleUrl: './about-helix.component.scss',
})
export class AboutHelixComponent {
  @HostBinding('class') hostClass = 'cdx-section';
}
