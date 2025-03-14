import { Component, HostBinding } from '@angular/core';

import { PagesCommonModule } from '../../pages-common.module';
import * as samples from './examples';

@Component({
  selector: 'cdx-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss'],

  imports: [PagesCommonModule],
})
export class BadgeComponent {
  @HostBinding('class') hostClass = 'cdx-section';

  sampleList = Object.values(samples);
}
