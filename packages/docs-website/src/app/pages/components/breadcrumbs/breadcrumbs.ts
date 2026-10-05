import { Component, HostBinding } from '@angular/core';
import { MatDivider } from '@angular/material/divider';

import { ExternalLink } from '../../../components/external-link/external-link';
import { Highlight } from '../../../components/highlight/highlight';
import { ExampleViewer } from '../../../core/example-viewer/example-viewer';
import { Page } from '../../../core/page/page';
import * as samples from './examples';

@Component({
  selector: 'cdx-breadcrumbs',
  templateUrl: './breadcrumbs.html',
  styleUrls: ['./breadcrumbs.scss'],
  imports: [Page, ExampleViewer, Highlight, ExternalLink, MatDivider],
})
export class Breadcrumbs {
  @HostBinding('class') hostClass = 'cdx-section';

  breadcrumbModuleText = `import { CdxBreadcrumbModule } from '@cdx/theme-xng-breadcrumb';

  @NgModule({
      ...
      imports: [CdxBreadcrumbModule],
      ...
  });`;

  sampleList = Object.values(samples);
}
