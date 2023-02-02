import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

import { HeaderComponent } from './header.component';
import { HeaderGlobalComponent } from './header-global.component';
import { HeaderProductNameOrLogoComponent } from './header-product-name-or-logo.component';

@NgModule({
  imports: [CommonModule, MatButtonModule, MatIconModule, MatMenuModule],
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
