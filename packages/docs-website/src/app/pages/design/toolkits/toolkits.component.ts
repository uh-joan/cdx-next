import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'cdx-toolkits',
  templateUrl: './toolkits.component.html',
  styleUrls: ['./toolkits.component.scss'],
})
export class ToolkitsComponent {
  @HostBinding('class') hostClass = 'cdx-section';
}
