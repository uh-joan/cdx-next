import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {
  ModuleWithProviders,
  NgModule,
  Renderer2,
  RendererFactory2,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { NgIdleKeepaliveModule } from '@ng-idle/keepalive';
import { TranslateModule } from '@ngx-translate/core';

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
    TranslateModule.forChild(),
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
        {
          provide: Renderer2,
          useFactory: rendererFactory,
          deps: [RendererFactory2],
        },
      ],
    };
  }
}

export function rendererFactory(rendererFactory: RendererFactory2): Renderer2 {
  return rendererFactory.createRenderer(null, null);
}
