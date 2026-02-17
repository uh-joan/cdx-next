import { Component, HostBinding } from '@angular/core';

import { ExampleViewer } from '../../../core/example-viewer/example-viewer';
import { Page } from '../../../core/page/page';
import * as samples from './examples';

@Component({
  selector: 'cdx-autocomplete',
  templateUrl: './autocomplete.html',
  styleUrls: ['./autocomplete.scss'],
  imports: [Page, ExampleViewer],
})
export class Autocomplete {
  @HostBinding('class') hostClass = 'cdx-section';

  sampleList = Object.values(samples);
}
