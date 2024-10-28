import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { HelixNotificationComponent } from './helix-notification.component';

@NgModule({
  imports: [CommonModule, MatIconModule, MatButtonModule],
  declarations: [HelixNotificationComponent],
  exports: [HelixNotificationComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class NotificationModule {}
