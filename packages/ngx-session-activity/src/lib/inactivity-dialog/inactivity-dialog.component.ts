import { Component, Inject, OnDestroy } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Idle } from '@ng-idle/core';
import { Subscription } from 'rxjs';

import { DIALOG_RESULTS } from '../session-activity.model';

@Component({
    selector: 'cdx-inactivity-dialog',
    templateUrl: './inactivity-dialog.component.html',
    styleUrls: ['./inactivity-dialog.component.scss'],
    standalone: false
})
export class InactivityDialogComponent implements OnDestroy {
  public DIALOG_RESULTS = DIALOG_RESULTS;

  countdown?: number;
  timeoutSubscription: Subscription;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { shouldShowTranslations?: boolean },
    private idle: Idle,
  ) {
    this.timeoutSubscription = this.idle.onTimeoutWarning.subscribe(
      (seconds: number) => {
        this.countdown = seconds;
      },
    );
  }

  ngOnDestroy(): void {
    this.timeoutSubscription?.unsubscribe();
  }
}
