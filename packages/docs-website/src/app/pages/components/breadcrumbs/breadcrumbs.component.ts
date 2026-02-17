import { Component, HostBinding } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';

import { ExternalLinkComponent } from '../../../components/external-link/external-link.component';
import { HighlightComponent } from '../../../components/highlight/highlight.component';
import { ExampleViewerComponent } from '../../../core/example-viewer/example-viewer.component';
import { PageComponent } from '../../../core/page/page.component';
import * as samples from './examples';

@Component({
  selector: 'cdx-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss'],
  imports: [
    PageComponent,
    ExampleViewerComponent,
    HighlightComponent,
    ExternalLinkComponent,
    MatDividerModule,
  ],
})
export class BreadcrumbsComponent {
  @HostBinding('class') hostClass = 'cdx-section';

  breadcrumbModuleText = `import { CdxBreadcrumbModule } from '@cdx/theme-xng-breadcrumb';

  @NgModule({
      ...
      imports: [CdxBreadcrumbModule],
      ...
  });`;

  sampleList = Object.values(samples);
}
