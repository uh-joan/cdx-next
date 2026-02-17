import { Component, HostBinding } from '@angular/core';

import { ExampleViewer } from '../../../core/example-viewer/example-viewer';
import { Page } from '../../../core/page/page';
import * as samples from './examples';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.html',
  styleUrls: ['./text-input.scss'],
  imports: [Page, ExampleViewer],
})
export class TextInput {
  @HostBinding('class') hostClass = 'cdx-section';

  sampleList = Object.values(samples);
}
