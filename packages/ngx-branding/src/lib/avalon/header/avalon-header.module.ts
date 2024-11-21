import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

import { AvalonHeaderComponent } from './avalon-header.component';
import { AvalonHeaderGlobalComponent } from './avalon-header-global.component';
import { AvalonHeaderProductNameOrLogoComponent } from './avalon-header-product-name-or-logo.component';

@NgModule({
  imports: [
    CommonModule,
    MatDividerModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
  ],
  declarations: [
    AvalonHeaderComponent,
    AvalonHeaderGlobalComponent,
    AvalonHeaderProductNameOrLogoComponent,
  ],
  exports: [
    AvalonHeaderComponent,
    AvalonHeaderGlobalComponent,
    AvalonHeaderProductNameOrLogoComponent,
  ],
})
export class AvalonHeaderModule {}
