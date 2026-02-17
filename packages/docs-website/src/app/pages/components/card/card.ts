import { Component, HostBinding } from '@angular/core';

import { ExampleViewer } from '../../../core/example-viewer/example-viewer';
import { Page } from '../../../core/page/page';
import * as samples from './examples';

@Component({
  selector: 'app-card',
  templateUrl: './card.html',
  styleUrls: ['./card.scss'],
  imports: [Page, ExampleViewer],
})
export class Card {
  @HostBinding('class') hostClass = 'cdx-section';

  sampleList = Object.values(samples);
}
