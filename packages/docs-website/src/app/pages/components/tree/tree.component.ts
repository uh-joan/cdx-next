import { Component, HostBinding } from '@angular/core';

import { PagesCommonModule } from '../../pages-common.module';
import * as samples from './examples';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss'],
  imports: [PagesCommonModule],
})
export class TreeComponent {
  @HostBinding('class') hostClass = 'cdx-section';

  sampleList = Object.values(samples);
}
