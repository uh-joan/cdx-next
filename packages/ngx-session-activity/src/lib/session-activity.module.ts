import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { NgIdleKeepaliveModule } from '@ng-idle/keepalive';

import { InactivityDialogComponent } from './inactivity-dialog/inactivity-dialog.component';
import { SESSION_ACTIVITY_SETTINGS } from './session-activity.injectors';
import { SessionActivitySettings } from './session-activity.model';

@NgModule({
  declarations: [InactivityDialogComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    NgIdleKeepaliveModule.forRoot(),
    HttpClientModule,
  ],
})
export class SessionActivityModule {
  static forRoot(
    settings?: SessionActivitySettings,
  ): ModuleWithProviders<SessionActivityModule> {
    return {
      ngModule: SessionActivityModule,
      providers: [
        {
          provide: SESSION_ACTIVITY_SETTINGS,
          useValue: settings,
        },
      ],
    };
  }
}
