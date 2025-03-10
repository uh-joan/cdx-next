import { Component, HostBinding } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'cdx-migration-guide',
  // eslint-disable-next-line @angular-eslint/prefer-standalone
  standalone: false,
  templateUrl: './migration-guide.component.html',
  styleUrls: ['./migration-guide.component.scss'],
})
export class MigrationGuideComponent {
  @HostBinding('class') hostClass = 'cdx-section';

  helixVersions = [18, 19];

  versionControl1 = new FormControl(18);
  versionControl2 = new FormControl(19);

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
