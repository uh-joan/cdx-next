import { Component, HostBinding } from '@angular/core';

import { PagesCommonModule } from '../../pages-common.module';
import * as samples from './examples';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  imports: [PagesCommonModule],
})
export class TableComponent {
  @HostBinding('class') hostClass = 'cdx-section';

  sampleList = Object.values(samples);
}
