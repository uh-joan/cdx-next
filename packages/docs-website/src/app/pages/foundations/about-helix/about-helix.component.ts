import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'cdx-about-helix',
  templateUrl: './about-helix.component.html',
  styleUrl: './about-helix.component.scss',
})
export class AboutHelixComponent {
  @HostBinding('class') hostClass = 'cdx-section';
}
