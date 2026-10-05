import { Component, HostBinding } from '@angular/core';
import { MatDivider } from '@angular/material/divider';

import { ExternalLink } from '../../../components/external-link/external-link';
import { Highlight } from '../../../components/highlight/highlight';
import { Page } from '../../../core/page/page';
import {
  appModuleAuthAngular,
  appModuleAuthAngular2,
  authenticationServiceAngular,
  headerAuthTemplateAngular,
} from './authentication.text-highlighted';

@Component({
  selector: 'cdx-authentication',
  templateUrl: './authentication.html',
  styleUrls: ['./authentication.scss'],
  imports: [Page, ExternalLink, MatDivider, Highlight],
})
export class Authentication {
  @HostBinding('class') hostClass = 'cdx-section';

  appModuleAuthAngular = appModuleAuthAngular;
  appModuleAuthAngular2 = appModuleAuthAngular2;
  authenticationServiceAngular = authenticationServiceAngular;
  headerAuthTemplateAngular = headerAuthTemplateAngular;
}
