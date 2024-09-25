import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { OneTrustModule } from '../../one-trust/one-trust.module';
import { HelixFooterComponent } from './helix-footer.component';
import { HelixFooterGroupComponent } from './helix-footer-group.component';
import { HelixFooterGroupTitleDirective } from './helix-footer-group-title.directive';
import { HelixFooterLinkDirective } from './helix-footer-link.directive';

@NgModule({
  imports: [
    CommonModule,
    OneTrustModule.forChild(),
    TranslateModule.forChild(),
  ],
  declarations: [
    HelixFooterComponent,
    HelixFooterLinkDirective,
    HelixFooterGroupComponent,
    HelixFooterGroupTitleDirective,
  ],
  exports: [
    HelixFooterComponent,
    HelixFooterLinkDirective,
    HelixFooterGroupComponent,
    HelixFooterGroupTitleDirective,
  ],
})
export class HelixFooterModule {}
