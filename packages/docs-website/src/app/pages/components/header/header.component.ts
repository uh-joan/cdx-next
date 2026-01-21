import { Component, HostBinding } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { HighlightComponent } from 'src/app/components/highlight/highlight.component';
import { ExampleViewerComponent } from 'src/app/core/example-viewer/example-viewer.component';
import { PageComponent } from 'src/app/core/page/page.component';

import * as samples from './examples';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [
    PageComponent,
    ExampleViewerComponent,
    MatDividerModule,
    HighlightComponent,
  ],
})
export class HeaderComponent {
  @HostBinding('class') hostClass = 'cdx-section';

  moduleText = `import { HelixHeaderModule } from '@cdx/ngx-branding';`;

  sampleList = Object.values(samples);
}
