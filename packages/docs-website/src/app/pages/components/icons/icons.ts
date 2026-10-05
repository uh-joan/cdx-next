import { Component, HostBinding } from '@angular/core';

import { ExampleViewer } from '../../../core/example-viewer/example-viewer';
import { Page } from '../../../core/page/page';
import * as samples from './examples';

@Component({
  selector: 'cdx-icons',
  templateUrl: './icons.html',
  styleUrls: ['./icons.scss'],
  imports: [Page, ExampleViewer],
})
export class Icons {
  @HostBinding('class') hostClass = 'cdx-section';

  sampleList = Object.values(samples);
}
