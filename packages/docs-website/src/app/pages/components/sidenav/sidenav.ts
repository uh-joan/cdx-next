import { Component, HostBinding } from '@angular/core';

import { ExampleViewer } from '../../../core/example-viewer/example-viewer';
import { Page } from '../../../core/page/page';
import * as samples from './examples';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.html',
  styleUrls: ['./sidenav.scss'],
  imports: [Page, ExampleViewer],
})
export class Sidenav {
  @HostBinding('class') hostClass = 'cdx-section';

  sampleList = Object.values(samples);
}
