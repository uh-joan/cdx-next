import { Component, HostBinding } from '@angular/core';

import * as samples from './examples';

@Component({
  selector: 'cdx-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss'],
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
