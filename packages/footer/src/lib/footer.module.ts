import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FooterComponent } from './footer.component';
import { FooterGroupComponent } from './footer-group.component';
import { FooterGroupTitleComponent } from './footer-group-title.component';
import { FooterLinkDirective } from './footer-link.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [
    FooterComponent,
    FooterLinkDirective,
    FooterGroupComponent,
    FooterGroupTitleComponent,
  ],
  exports: [
    FooterComponent,
    FooterLinkDirective,
    FooterGroupComponent,
    FooterGroupTitleComponent,
  ],
})
export class FooterModule {}
