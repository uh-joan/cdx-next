import { Component, HostBinding } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatOption } from '@angular/material/core';
import { MatDivider } from '@angular/material/divider';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatSelect } from '@angular/material/select';

import { ExternalLink } from '../../../components/external-link/external-link';
import { Highlight } from '../../../components/highlight/highlight';
import { InternalLink } from '../../../components/internal-link/internal-link';
import { Page } from '../../../core/page/page';

@Component({
  selector: 'cdx-migration-guide',
  templateUrl: './migration-guide.html',
  styleUrls: ['./migration-guide.scss'],
  imports: [
    Page,
    ExternalLink,
    MatDivider,
    InternalLink,
    MatFormField,
    MatLabel,
    MatSelect,
    ReactiveFormsModule,
    MatOption,
    Highlight,
  ],
})
export class MigrationGuide {
  @HostBinding('class') hostClass = 'cdx-section';

  helixVersions = [18, 19];

  versionControl1 = new FormControl(this.helixVersions[0]);
  versionControl2 = new FormControl(
    this.helixVersions[this.helixVersions.length - 1],
  );

  headerFooterModule = `//...
import { HelixHeaderModule, HelixFooterModule } from '@hlx/ngx-branding';

@NgModule({
  //...
  imports: [
    //...
    HelixHeaderModule,
    HelixFooterModule
  ],
//...
})`;

  headerFooterComponents = `//...
import { HelixHeaderComponent, HelixHeaderGlobalComponent, HelixHeaderProductNameOrLogoComponent } from '@hlx/ngx-branding';
import { HelixFooterComponent, HelixFooterGroupComponent, HelixFooterLinkDirective, HelixFooterGroupTitleDirective } from '@hlx/ngx-branding';

@NgModule({
  //...
  imports: [
    //...
    HelixHeaderComponent,
    HelixHeaderGlobalComponent,
    HelixHeaderProductNameOrLogoComponent,
    //...
    HelixFooterComponent,
    HelixFooterGroupComponent,
    HelixFooterLinkDirective,
    HelixFooterGroupTitleDirective,
  ],
//...
})`;
}
