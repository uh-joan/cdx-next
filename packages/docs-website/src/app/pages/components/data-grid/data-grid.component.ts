import { Component, HostBinding } from '@angular/core';

import { PagesCommonModule } from '../../pages-common.module';
import * as samples from './examples';

@Component({
  selector: 'app-data-grid',

  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.scss'],
  imports: [PagesCommonModule],
})
export class DataGridComponent {
  @HostBinding('class') hostClass = 'cdx-section';

  sampleList = Object.values(samples);
}
