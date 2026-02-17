import { Component, HostBinding } from '@angular/core';
import { MatDivider } from '@angular/material/divider';

import { Highlight } from '../../../components/highlight/highlight';
import { Page } from '../../../core/page/page';
import {
  headerSessioNActivityTemplateAngular,
  sessionActivityModuleAngular,
  sessionActivityModuleSampleAngular,
  sessionActivityServiceComponentAngular,
} from './session-activity-management.text-highlighted';

@Component({
  selector: 'cdx-session-activity-management',
  templateUrl: './session-activity-management.html',
  styleUrls: ['./session-activity-management.scss'],
  imports: [Page, MatDivider, Highlight],
})
export class SessionActivityManagement {
  @HostBinding('class') hostClass = 'cdx-section';

  sessionActivityModuleAngular = sessionActivityModuleAngular;
  sessionActivityModuleSampleAngular = sessionActivityModuleSampleAngular;
  sessionActivityServiceComponentAngular =
    sessionActivityServiceComponentAngular;
  headerSessioNActivityTemplateAngular = headerSessioNActivityTemplateAngular;
}
