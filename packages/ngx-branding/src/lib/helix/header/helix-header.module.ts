import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

import { HelixHeaderComponent } from './helix-header.component';
import { HelixHeaderGlobalComponent } from './helix-header-global.component';
import { HelixHeaderProductNameOrLogoComponent } from './helix-header-product-name-or-logo.component';

@NgModule({
  imports: [
    CommonModule,
    MatDividerModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
  ],
  declarations: [
    HelixHeaderComponent,
    HelixHeaderGlobalComponent,
    HelixHeaderProductNameOrLogoComponent,
  ],
  exports: [
    HelixHeaderComponent,
    HelixHeaderGlobalComponent,
    HelixHeaderProductNameOrLogoComponent,
  ],
})
export class HelixHeaderModule {}
