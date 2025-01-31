import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'cdx-grid-system',
  templateUrl: './grid-system.component.html',
  styleUrls: ['./grid-system.component.scss'],
})
export class GridSystemComponent {
  @HostBinding('class') hostClass = 'cdx-section';
}
