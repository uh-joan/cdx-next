import { Component, HostBinding } from '@angular/core';

import { ExampleViewer } from '../../../core/example-viewer/example-viewer';
import { Page } from '../../../core/page/page';
import * as samples from './examples';

@Component({
  selector: 'app-text-area',
  templateUrl: './text-area.html',
  styleUrls: ['./text-area.scss'],
  imports: [Page, ExampleViewer],
})
export class TextArea {
  @HostBinding('class') hostClass = 'cdx-section';

  sampleList = Object.values(samples);
}
