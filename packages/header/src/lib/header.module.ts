import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HeaderComponent } from './header.component';
import { HeaderGlobalComponent } from './header-global.component';
import { HeaderProductNameOrLogoComponent } from './header-product-name-or-logo.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    HeaderComponent,
    HeaderGlobalComponent,
    HeaderProductNameOrLogoComponent,
  ],
  exports: [
    HeaderComponent,
    HeaderGlobalComponent,
    HeaderProductNameOrLogoComponent,
  ],
})
export class HeaderModule {}
