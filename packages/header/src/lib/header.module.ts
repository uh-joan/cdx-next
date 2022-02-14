import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HeaderComponent } from './header.component';
import { HeaderUtilityNavigationComponent } from './header-utility-navigation.component';

@NgModule({
  imports: [CommonModule],
  declarations: [HeaderComponent, HeaderUtilityNavigationComponent],
  exports: [HeaderComponent, HeaderUtilityNavigationComponent],
})
export class HeaderModule {}
