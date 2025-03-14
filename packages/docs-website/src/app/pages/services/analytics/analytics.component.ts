import { Component, HostBinding } from '@angular/core';
import { MatDivider } from '@angular/material/divider';

import { ExternalLinkComponent } from '../../../components/external-link/external-link.component';
import { HighlightComponent } from '../../../components/highlight/highlight.component';
import { PageComponent } from '../../../core/page/page.component';
import {
  analyticModuleReact,
  analyticsSettingsAngular,
  appModuleAngular,
  appModuleReact,
  contextAngular,
  contextReact,
  structuredEventReact,
} from './analytics.text-highlighted';

@Component({
  selector: 'cdx-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.scss'],
  imports: [
    PageComponent,
    ExternalLinkComponent,
    MatDivider,
    HighlightComponent,
  ],
})
export class AnalyticsComponent {
  @HostBinding('class') hostClass = 'cdx-section';

  appModuleAngular = appModuleAngular;
  analyticsSettingsAngular = analyticsSettingsAngular;
  contextAngular = contextAngular;

  appModuleReact = appModuleReact;
  structuredEventReact = structuredEventReact;
  analyticModuleReact = analyticModuleReact;
  contextReact = contextReact;
}
