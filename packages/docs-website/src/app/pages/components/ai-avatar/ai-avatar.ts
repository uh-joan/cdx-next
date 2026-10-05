import { Component, HostBinding } from '@angular/core';

import { ExampleViewer } from '../../../core/example-viewer/example-viewer';
import { Page } from '../../../core/page/page';
import * as samples from './examples';

@Component({
  selector: 'app-ai-avatar',
  templateUrl: './ai-avatar.html',
  styleUrls: ['./ai-avatar.scss'],
  imports: [Page, ExampleViewer],
})
export class AiAvatar {
  @HostBinding('class') hostClass = 'cdx-section';

  sampleList = Object.values(samples);
}
