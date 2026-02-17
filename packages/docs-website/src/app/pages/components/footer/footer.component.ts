import { Component, HostBinding } from '@angular/core';
import { MatDivider } from '@angular/material/divider';

import { HighlightComponent } from '../../../components/highlight/highlight.component';
import { ExampleViewerComponent } from '../../../core/example-viewer/example-viewer.component';
import { PageComponent } from '../../../core/page/page.component';
import * as samples from './examples';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  imports: [
    PageComponent,
    ExampleViewerComponent,
    MatDivider,
    HighlightComponent,
  ],
})
export class FooterComponent {
  @HostBinding('class') hostClass = 'cdx-section';

  moduleText = `import { HelixFooterModule } from '@cdx/ngx-branding';`;

  sampleList = Object.values(samples);
}
