import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'cdx-abstract',
  templateUrl: './abstract.component.html',
  styleUrls: ['./abstract.component.scss'],
})
export class AbstractComponent {
  @HostBinding('class') hostClass = 'cdx-section';
}
