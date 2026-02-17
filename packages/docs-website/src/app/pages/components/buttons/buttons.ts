import { Component, HostBinding } from '@angular/core';

import { ExampleViewer } from '../../../core/example-viewer/example-viewer';
import { Page } from '../../../core/page/page';
import * as samples from './examples';

@Component({
  selector: 'cdx-buttons',
  templateUrl: './buttons.html',
  styleUrls: ['./buttons.scss'],

  imports: [Page, ExampleViewer],
})
export class Buttons {
  @HostBinding('class') hostClass = 'cdx-section';

  sampleList = Object.values(samples);
}
