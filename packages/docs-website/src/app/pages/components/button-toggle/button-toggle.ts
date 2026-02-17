import { Component, HostBinding } from '@angular/core';

import { ExampleViewer } from '../../../core/example-viewer/example-viewer';
import { Page } from '../../../core/page/page';
import * as samples from './examples';

@Component({
  selector: 'app-button-toggle',
  templateUrl: './button-toggle.html',
  styleUrls: ['./button-toggle.scss'],

  imports: [Page, ExampleViewer],
})
export class ButtonToggle {
  @HostBinding('class') hostClass = 'cdx-section';

  sampleList = Object.values(samples);
}
