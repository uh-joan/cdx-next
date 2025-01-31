import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'cdx-invision',
  templateUrl: './invision.component.html',
  styleUrls: ['./invision.component.scss'],
})
export class InvisionComponent {
  @HostBinding('class') hostClass = 'cdx-section';
}
