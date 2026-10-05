import { Component, HostBinding } from '@angular/core';
import { MatDivider } from '@angular/material/divider';

import { Highlight } from '../../../components/highlight/highlight';
import { StorybookEmbed } from '../../../components/storybook-embed/storybook-embed';
import { ExampleViewer } from '../../../core/example-viewer/example-viewer';
import { Page } from '../../../core/page/page';
import * as samples from './examples';

@Component({
  selector: 'cdx-footer-page',
  templateUrl: './footer.html',
  styleUrls: ['./footer.scss'],
  imports: [Page, ExampleViewer, MatDivider, Highlight, StorybookEmbed],
})
export class Footer {
  @HostBinding('class') hostClass = 'cdx-section';

  moduleText = `import { HelixFooterModule } from '@cdx/ngx-branding';`;

  sampleList = Object.values(samples);
}
