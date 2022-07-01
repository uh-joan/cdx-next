import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HeaderComponent } from './header.component';
import { HeaderGlobalComponent } from './header-global.component';
import { HeaderProductNameOrLogoComponent } from './header-product-name-or-logo.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { HeaderGlobalUserProfileComponent } from './header-global-user-profile/header-global-user-profile.component';

@NgModule({
  imports: [CommonModule, MatButtonModule, MatIconModule],
  declarations: [
    HeaderComponent,
    HeaderGlobalComponent,
    HeaderProductNameOrLogoComponent,
    HeaderGlobalUserProfileComponent,
  ],
  exports: [
    HeaderComponent,
    HeaderGlobalComponent,
    HeaderProductNameOrLogoComponent,
    HeaderGlobalUserProfileComponent,
  ],
})
export class HeaderModule {}
