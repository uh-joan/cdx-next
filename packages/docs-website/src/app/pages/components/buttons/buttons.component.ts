import { Component, HostBinding } from '@angular/core';

import * as samples from './examples';

@Component({
  selector: 'cdx-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss'],
})
export class ButtonsComponent {
  @HostBinding('class') hostClass = 'cdx-section';

  sampleList = Object.values(samples);
}
