import { Component, HostBinding } from '@angular/core';

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
