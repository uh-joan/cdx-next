import { CdkScrollable } from '@angular/cdk/scrolling';
import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatButton } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';
import { Idle } from '@ng-idle/core';
import { TranslateModule } from '@ngx-translate/core';

import { DIALOG_RESULTS } from '../session-activity.model';

@Component({
  selector: 'cdx-inactivity-dialog',
  templateUrl: './inactivity-dialog.component.html',
  styleUrls: ['./inactivity-dialog.component.scss'],
  imports: [
    MatDialogTitle,
    CdkScrollable,
    MatDialogContent,
    MatDialogActions,
    MatButton,
    MatDialogClose,
    TranslateModule,
  ],
})
export class InactivityDialogComponent {
  public DIALOG_RESULTS = DIALOG_RESULTS;

  public data: { shouldShowTranslations?: boolean } = inject(MAT_DIALOG_DATA);
  private idle: Idle = inject(Idle);
  countdown = toSignal(this.idle.onTimeoutWarning, { initialValue: undefined });
}
