import { Component, HostBinding } from '@angular/core';
import { MatDivider } from '@angular/material/divider';

import { HighlightComponent } from '../../../components/highlight/highlight.component';
import { PageComponent } from '../../../core/page/page.component';
import {
  headerSessioNActivityTemplateAngular,
  sessionActivityModuleAngular,
  sessionActivityModuleSampleAngular,
  sessionActivityServiceComponentAngular,
} from './session-activity-management.text-highlighted';

@Component({
  selector: 'cdx-session-activity-management',
  templateUrl: './session-activity-management.component.html',
  styleUrls: ['./session-activity-management.component.scss'],
  imports: [PageComponent, MatDivider, HighlightComponent],
})
export class SessionActivityManagementComponent {
  @HostBinding('class') hostClass = 'cdx-section';

  sessionActivityModuleAngular = sessionActivityModuleAngular;
  sessionActivityModuleSampleAngular = sessionActivityModuleSampleAngular;
  sessionActivityServiceComponentAngular =
    sessionActivityServiceComponentAngular;
  headerSessioNActivityTemplateAngular = headerSessioNActivityTemplateAngular;
}
