import { Component, HostBinding } from '@angular/core';

import { ExampleViewer } from '../../../core/example-viewer/example-viewer';
import { Page } from '../../../core/page/page';
import * as samples from './examples';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.html',
  styleUrls: ['./checkbox.scss'],
  imports: [Page, ExampleViewer],
})
export class Checkbox {
  @HostBinding('class') hostClass = 'cdx-section';

  sampleList = Object.values(samples);
}
