import { Component, HostBinding } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatOption } from '@angular/material/core';
import { MatDivider } from '@angular/material/divider';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatSelect } from '@angular/material/select';

import { ExternalLinkComponent } from '../../../components/external-link/external-link.component';
import { HighlightComponent } from '../../../components/highlight/highlight.component';
import { InternalLinkComponent } from '../../../components/internal-link/internal-link.component';
import { PageComponent } from '../../../core/page/page.component';

@Component({
  selector: 'cdx-migration-guide',
  templateUrl: './migration-guide.component.html',
  styleUrls: ['./migration-guide.component.scss'],
  imports: [
    PageComponent,
    ExternalLinkComponent,
    MatDivider,
    InternalLinkComponent,
    MatFormField,
    MatLabel,
    MatSelect,
    ReactiveFormsModule,
    MatOption,
    HighlightComponent,
  ],
})
export class MigrationGuideComponent {
  @HostBinding('class') hostClass = 'cdx-section';

  helixVersions = [18, 19];

  versionControl1 = new FormControl(this.helixVersions[0]);
  versionControl2 = new FormControl(
    this.helixVersions[this.helixVersions.length - 1],
  );

  headerFooterModule = `//...
import { HelixHeaderModule, HelixFooterModule } from '@cdx/ngx-branding';

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
import { HelixHeaderComponent, HelixHeaderGlobalComponent, HelixHeaderProductNameOrLogoComponent } from '@cdx/ngx-branding';
import { HelixFooterComponent, HelixFooterGroupComponent, HelixFooterLinkDirective, HelixFooterGroupTitleDirective } from '@cdx/ngx-branding';

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
