import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

import { HeaderGlobalUserProfileComponent } from './header-global-user-profile.component';

@NgModule({
  imports: [CommonModule, MatButtonModule, MatIconModule, MatMenuModule],
  declarations: [HeaderGlobalUserProfileComponent],
  exports: [HeaderGlobalUserProfileComponent],
})
export class HeaderGlobalUtilitiesModule {}
