import { Component, HostBinding } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PagesCommonModule } from '../../pages-common.module';
import * as samples from './examples';

@Component({
  selector: 'cdx-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss'],
  imports: [RouterModule, PagesCommonModule],
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
