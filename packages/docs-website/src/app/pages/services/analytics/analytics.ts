import { Component, HostBinding } from '@angular/core';
import { MatDivider } from '@angular/material/divider';

import { ExternalLink } from '../../../components/external-link/external-link';
import { Highlight } from '../../../components/highlight/highlight';
import { Page } from '../../../core/page/page';
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
  templateUrl: './analytics.html',
  styleUrls: ['./analytics.scss'],
  imports: [Page, ExternalLink, MatDivider, Highlight],
})
export class Analytics {
  @HostBinding('class') hostClass = 'cdx-section';

  appModuleAngular = appModuleAngular;
  analyticsSettingsAngular = analyticsSettingsAngular;
  contextAngular = contextAngular;

  appModuleReact = appModuleReact;
  structuredEventReact = structuredEventReact;
  analyticModuleReact = analyticModuleReact;
  contextReact = contextReact;
}
