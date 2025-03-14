import { Component, HostBinding } from '@angular/core';

import { PagesCommonModule } from '../../pages-common.module';
import * as samples from './examples';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss'],
  imports: [PagesCommonModule],
})
export class DatePickerComponent {
  @HostBinding('class') hostClass = 'cdx-section';

  sampleList = Object.values(samples);
}
