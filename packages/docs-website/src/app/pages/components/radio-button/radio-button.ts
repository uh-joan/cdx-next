import { Component, HostBinding } from '@angular/core';

import { ExampleViewer } from '../../../core/example-viewer/example-viewer';
import { Page } from '../../../core/page/page';
import * as samples from './examples';

@Component({
  selector: 'app-radio-button',
  templateUrl: './radio-button.html',
  styleUrls: ['./radio-button.scss'],
  imports: [Page, ExampleViewer],
})
export class RadioButton {
  @HostBinding('class') hostClass = 'cdx-section';

  sampleList = Object.values(samples);
}
