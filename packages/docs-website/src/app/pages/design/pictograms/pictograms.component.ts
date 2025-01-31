import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'cdx-pictograms',
  templateUrl: './pictograms.component.html',
  styleUrls: ['./pictograms.component.scss'],
})
export class PictogramsComponent {
  @HostBinding('class') hostClass = 'cdx-section';
}
