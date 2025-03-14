import { Component, HostBinding } from '@angular/core';
import { MatDivider } from '@angular/material/divider';

import { ExternalLinkComponent } from '../../../components/external-link/external-link.component';
import { HighlightComponent } from '../../../components/highlight/highlight.component';
import { PageComponent } from '../../../core/page/page.component';
import {
  appModuleAuthAngular,
  authenticationServiceAngular,
  headerAuthTemplateAngular,
} from './authentication.text-highlighted';

@Component({
  selector: 'cdx-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss'],
  imports: [
    PageComponent,
    ExternalLinkComponent,
    MatDivider,
    HighlightComponent,
  ],
})
export class AuthenticationComponent {
  @HostBinding('class') hostClass = 'cdx-section';

  appModuleAuthAngular = appModuleAuthAngular;
  authenticationServiceAngular = authenticationServiceAngular;
  headerAuthTemplateAngular = headerAuthTemplateAngular;
}
