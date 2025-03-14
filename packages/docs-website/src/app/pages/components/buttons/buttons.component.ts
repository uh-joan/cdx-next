import { Component, HostBinding } from '@angular/core';

import { PagesCommonModule } from '../../pages-common.module';
import * as samples from './examples';

@Component({
  selector: 'cdx-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss'],

  imports: [PagesCommonModule],
})
export class ButtonsComponent {
  @HostBinding('class') hostClass = 'cdx-section';

  sampleList = Object.values(samples);
}
