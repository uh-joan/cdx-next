import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { OneTrustModule } from '../one-trust/one-trust.module';
import { FooterComponent } from './footer.component';
import { FooterGroupComponent } from './footer-group.component';
import { FooterGroupTitleDirective } from './footer-group-title.directive';
import { FooterLinkDirective } from './footer-link.directive';

@NgModule({
  imports: [CommonModule, OneTrustModule.forChild()],
  declarations: [
    FooterComponent,
    FooterLinkDirective,
    FooterGroupComponent,
    FooterGroupTitleDirective,
  ],
  exports: [
    FooterComponent,
    FooterLinkDirective,
    FooterGroupComponent,
    FooterGroupTitleDirective,
  ],
})
export class FooterModule {}
