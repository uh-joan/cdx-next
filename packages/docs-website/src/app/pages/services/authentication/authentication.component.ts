import { Component, HostBinding } from '@angular/core';

import {
  appModuleAuthAngular,
  authenticationServiceAngular,
  headerAuthTemplateAngular,
} from './authentication.text-highlighted';

@Component({
  selector: 'cdx-authentication',
  // eslint-disable-next-line @angular-eslint/prefer-standalone
  standalone: false,
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss'],
})
export class AuthenticationComponent {
  @HostBinding('class') hostClass = 'cdx-section';

  appModuleAuthAngular = appModuleAuthAngular;
  authenticationServiceAngular = authenticationServiceAngular;
  headerAuthTemplateAngular = headerAuthTemplateAngular;
}
