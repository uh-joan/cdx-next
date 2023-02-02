import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HeaderGlobalSessionManagementDirective } from './header-global-session-management.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [HeaderGlobalSessionManagementDirective],
  exports: [HeaderGlobalSessionManagementDirective],
})
export class HeaderGlobalSessionManagementModule {}
