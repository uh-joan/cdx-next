import { Component, OnDestroy } from '@angular/core';
import { Idle } from '@ng-idle/core';
import { Subscription } from 'rxjs';

import { DIALOG_RESULTS } from '../session-activity.model';

@Component({
  selector: 'cdx-inactivity-dialog',
  templateUrl: './inactivity-dialog.component.html',
  styleUrls: ['./inactivity-dialog.component.scss'],
})
export class InactivityDialogComponent implements OnDestroy {
  public DIALOG_RESULTS = DIALOG_RESULTS;

  countdown?: number;
  timeoutSubscription: Subscription;

  constructor(private idle: Idle) {
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
