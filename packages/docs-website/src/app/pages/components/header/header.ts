import { Component, HostBinding } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';

import { Highlight } from '../../../components/highlight/highlight';
import { StorybookEmbed } from '../../../components/storybook-embed/storybook-embed';
import { ExampleViewer } from '../../../core/example-viewer/example-viewer';
import { Page } from '../../../core/page/page';
import * as samples from './examples';

@Component({
  selector: 'cdx-header-page',
  templateUrl: './header.html',
  styleUrls: ['./header.scss'],
  imports: [Page, ExampleViewer, MatDividerModule, Highlight, StorybookEmbed],
})
export class Header {
  @HostBinding('class') hostClass = 'cdx-section';

  moduleText = `import { HelixHeaderModule } from '@cdx/ngx-branding';`;

  sampleList = Object.values(samples);
}
