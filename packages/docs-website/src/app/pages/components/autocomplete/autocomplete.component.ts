import { Component, HostBinding } from '@angular/core';

import { PagesCommonModule } from '../../pages-common.module';
import * as samples from './examples';

@Component({
  selector: 'cdx-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss'],
  imports: [PagesCommonModule],
})
export class AutocompleteComponent {
  @HostBinding('class') hostClass = 'cdx-section';

  sampleList = Object.values(samples);
}
