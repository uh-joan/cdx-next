import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'cdx-figma',
  templateUrl: './figma.component.html',
  styleUrls: ['./figma.component.scss'],
})
export class FigmaComponent {
  @HostBinding('class') hostClass = 'cdx-section';
}
