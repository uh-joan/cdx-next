import { Component, HostBinding } from '@angular/core';

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
})
export class SessionActivityManagementComponent {
  @HostBinding('class') hostClass = 'cdx-section';

  sessionActivityModuleAngular = sessionActivityModuleAngular;
  sessionActivityModuleSampleAngular = sessionActivityModuleSampleAngular;
  sessionActivityServiceComponentAngular =
    sessionActivityServiceComponentAngular;
  headerSessioNActivityTemplateAngular = headerSessioNActivityTemplateAngular;
}
