import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, OnDestroy, Renderer2 } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DEFAULT_INTERRUPTSOURCES, Idle, LocalStorage } from '@ng-idle/core';
import { Subject } from 'rxjs';
import { take, takeWhile } from 'rxjs/operators';

import { InactivityDialogComponent } from './inactivity-dialog/inactivity-dialog.component';
import { IDLE_CONFIG } from './session-activity.config';
import { SESSION_ACTIVITY_SETTINGS } from './session-activity.injectors';
import {
  BROWSER_VISIBILITY,
  DIALOG_RESULTS,
  DialogResultsType,
  LAST_HYDRATE,
  LOGOUT_TYPE,
  OUT_OF_PAGE_TIME,
  SessionActivitySettings,
} from './session-activity.model';

@Injectable({
  providedIn: 'root',
})
export class SessionActivityService implements OnDestroy {
  isThisComponentAlive = true;
  pingIntervalMinutes = IDLE_CONFIG.PING_INTERVAL_MINUTES_DEFAULT;
  idleMinutes?: number;
  timeoutMinutes?: number;
  sessionActivitySubject: Subject<string> = new Subject<string>();
  dialogRef?: MatDialogRef<InactivityDialogComponent>;
  shouldNotRehydrate?: boolean;

  constructor(
    @Inject(SESSION_ACTIVITY_SETTINGS)
    private settings: SessionActivitySettings,
    private idle: Idle,
    private http: HttpClient,
    private dialog: MatDialog,
    private localStorage: LocalStorage,
    private renderer: Renderer2,
  ) {
    this.renderer.listen(
      BROWSER_VISIBILITY.DOCUMENT,
      BROWSER_VISIBILITY.VISIBILITY_CHANGE,
      (event: Event) => {
        this.onVisibilityChange(event.target as Document);
      },
    );

    idle.onIdleStart
      .pipe(takeWhile(() => this.isThisComponentAlive))
      .subscribe(() => {
        if (!this.dialogRef) {
          this.openInactivityDialog();
        }
      });

    idle.onIdleEnd
      .pipe(takeWhile(() => this.isThisComponentAlive))
      .subscribe(() => {
        this.resetIdle();
      });

    idle.onTimeout
      .pipe(takeWhile(() => this.isThisComponentAlive))
      .subscribe(() => {
        this.expireSession();
      });

    idle.onTimeoutWarning
      .pipe(takeWhile(() => this.isThisComponentAlive))
      .subscribe(() => this.idle.clearInterrupts());

    idle.onInterrupt
      .pipe(takeWhile(() => this.isThisComponentAlive))
      .subscribe(() => {
        const lastHydrateMilliSeconds =
          new Date().getTime() -
            Number(this.localStorage.getItem(LAST_HYDRATE)) || 0;
        if (lastHydrateMilliSeconds >= this.pingIntervalMinutes * 60 * 1000) {
          this.rehydrate();
        }
      });
  }

  onVisibilityChange(doc: Document) {
    if (doc.visibilityState === BROWSER_VISIBILITY.VISIBLE) {
      const outOfPageTime = Number(localStorage.getItem(OUT_OF_PAGE_TIME));
      const expirationTime =
        (this.idle.getIdle() + this.idle.getTimeout()) * 1000;
      if (outOfPageTime && Date.now() - outOfPageTime > expirationTime) {
        this.expireSession();
      }
    } else if (doc.visibilityState === BROWSER_VISIBILITY.HIDDEN) {
      localStorage.setItem(OUT_OF_PAGE_TIME, new Date().getTime().toString());
    }
  }

  expireSession() {
    this.dialog.closeAll();
    this.localStorage.removeItem(LAST_HYDRATE);
    this.sessionActivitySubject.next(LOGOUT_TYPE.SESSION_EXPIRED);
  }

  rehydrate() {
    if (!this.shouldNotRehydrate) {
      this.localStorage.setItem(LAST_HYDRATE, Date.now().toString());
      this.http
        .put('api/session/user/rehydrate', null)
        .pipe(take(1))
        .subscribe((data: any) => {
          if (data?.session) {
            this.resetIdle();
          }
        });
    }
  }

  initialize(session?: SessionActivitySettings) {
    this.shouldNotRehydrate =
      !!session?.shouldNotRehydrate || !!this.settings?.shouldNotRehydrate;
    this.pingIntervalMinutes =
      session?.pingIntervalMinutes ||
      this.settings?.pingIntervalMinutes ||
      IDLE_CONFIG.PING_INTERVAL_MINUTES_DEFAULT;
    this.idleMinutes =
      (session?.expireDurationMinutes &&
        session?.expireWarningMinutes &&
        session?.expireDurationMinutes > session?.expireWarningMinutes &&
        session?.expireDurationMinutes - session?.expireWarningMinutes) ||
      (this.settings?.expireDurationMinutes >
        this.settings?.expireWarningMinutes &&
        this.settings.expireDurationMinutes -
          this.settings.expireWarningMinutes) ||
      IDLE_CONFIG.IDLE_MINUTES_DEFAULT;
    this.idle.setIdle(this.idleMinutes * 60);
    this.timeoutMinutes =
      session?.expireWarningMinutes ||
      this.settings?.expireWarningMinutes ||
      IDLE_CONFIG.IDLE_TIMEOUT_MINUTES_DEFAULT;
    this.idle.setTimeout(this.timeoutMinutes * 60);
    this.resetIdle();
    if (!this.localStorage.getItem(LAST_HYDRATE)) {
      this.localStorage.setItem(LAST_HYDRATE, Date.now().toString());
    }
  }

  openInactivityDialog(): void {
    this.dialogRef = this.dialog.open(InactivityDialogComponent, {
      disableClose: true,
      data: {
        shouldShowTranslations: this.settings?.shouldShowTranslations ?? false,
      },
    });

    this.dialogRef
      .afterClosed()
      .pipe(take(1))
      .subscribe((result: DialogResultsType) => {
        this.dialogRef = undefined;
        if (result === DIALOG_RESULTS.LOGOUT) {
          this.idle.interrupt();
          this.localStorage.removeItem(LAST_HYDRATE);
          this.sessionActivitySubject.next(LOGOUT_TYPE.LOGOUT_SELECTED);
        } else if (result === DIALOG_RESULTS.EXTEND) {
          this.resetIdle();
          this.rehydrate();
        }
      });
  }

  resetIdle() {
    this.idle.stop();
    this.idle.clearInterrupts();
    this.idle.setInterrupts(DEFAULT_INTERRUPTSOURCES);
    this.idle.watch();
  }

  ngOnDestroy(): void {
    this.isThisComponentAlive = false;
  }
}
