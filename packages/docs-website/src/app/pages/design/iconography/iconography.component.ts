import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'cdx-iconography',
  templateUrl: './iconography.component.html',
  styleUrls: ['./iconography.component.scss'],
})
export class IconographyComponent {
  @HostBinding('class') hostClass = 'cdx-section';
}
