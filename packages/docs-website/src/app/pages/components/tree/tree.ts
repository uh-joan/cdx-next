import { Component, HostBinding } from '@angular/core';

import { ExampleViewer } from '../../../core/example-viewer/example-viewer';
import { Page } from '../../../core/page/page';
import * as samples from './examples';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.html',
  styleUrls: ['./tree.scss'],
  imports: [Page, ExampleViewer],
})
export class Tree {
  @HostBinding('class') hostClass = 'cdx-section';

  sampleList = Object.values(samples);
}
