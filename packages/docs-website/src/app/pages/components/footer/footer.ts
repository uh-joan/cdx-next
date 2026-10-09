import { Component, HostBinding } from '@angular/core';
import { MatDivider } from '@angular/material/divider';

import { Highlight } from '../../../components/highlight/highlight';
import { ExampleViewer } from '../../../core/example-viewer/example-viewer';
import { Page } from '../../../core/page/page';
import * as samples from './examples';

@Component({
  selector: 'cdx-footer-page',
  templateUrl: './footer.html',
  styleUrls: ['./footer.scss'],
  imports: [Page, ExampleViewer, MatDivider, Highlight],
})
export class Footer {
  @HostBinding('class') hostClass = 'cdx-section';

  moduleText = `import { HelixFooterModule } from '@hlx/ngx-branding';`;

  sampleList = Object.values(samples);
}
