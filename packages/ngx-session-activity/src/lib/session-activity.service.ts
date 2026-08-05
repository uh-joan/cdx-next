import { HttpClient } from '@angular/common/http';
import {
  DestroyRef,
  inject,
  OnDestroy,
  Renderer2,
  Service,
  signal,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DEFAULT_INTERRUPTSOURCES, Idle, LocalStorage } from '@ng-idle/core';

import { InactivityDialogComponent } from './inactivity-dialog/inactivity-dialog.component';
import { IDLE_CONFIG } from './session-activity.config';
import { SESSION_ACTIVITY_SETTINGS } from './session-activity.injectors';
import {
  BROWSER_VISIBILITY,
  DIALOG_RESULTS,
  DialogResultsType,
  LAST_HYDRATE,
  LOGOUT_TYPE,
  LogoutType,
  OUT_OF_PAGE_TIME,
  SessionActivityEvent,
  SessionActivitySettings,
} from './session-activity.model';

@Service()
export class SessionActivityService implements OnDestroy {
  pingIntervalMinutes = IDLE_CONFIG.PING_INTERVAL_MINUTES_DEFAULT;
  idleMinutes?: number;
  timeoutMinutes?: number;
  sessionActivityEvent = signal<SessionActivityEvent | null>(null);
  dialogRef?: MatDialogRef<InactivityDialogComponent>;
  shouldNotRehydrate?: boolean;

  private destroyRef: DestroyRef = inject(DestroyRef);
  private idle: Idle = inject(Idle);
  private http: HttpClient = inject(HttpClient);
  private dialog: MatDialog = inject(MatDialog);
  private localStorage: LocalStorage = inject(LocalStorage);
  private renderer: Renderer2 = inject(Renderer2);
  private settings = inject(SESSION_ACTIVITY_SETTINGS);
  private removeVisibilityListener: VoidFunction = () => undefined;

  constructor() {
    this.removeVisibilityListener = this.renderer.listen(
      BROWSER_VISIBILITY.DOCUMENT,
      BROWSER_VISIBILITY.VISIBILITY_CHANGE,
      (event: Event) => {
        this.onVisibilityChange(event.target as Document);
      },
    );

    this.idle.onIdleStart
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(() => {
        if (!this.dialogRef) {
          this.openInactivityDialog();
        }
      });

    this.idle.onIdleEnd
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(() => {
        this.resetIdle();
      });

    this.idle.onTimeout
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(() => {
        this.expireSession();
      });

    this.idle.onTimeoutWarning
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(() => this.idle.clearInterrupts());

    this.idle.onInterrupt
      .pipe(takeUntilDestroyed(this.destroyRef))
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
    this.emitSessionActivity(LOGOUT_TYPE.SESSION_EXPIRED);
  }

  rehydrate() {
    if (!this.shouldNotRehydrate) {
      this.localStorage.setItem(LAST_HYDRATE, Date.now().toString());
      this.http
        .put<{ session: string }>('api/session/user/rehydrate', null)
        .subscribe((data) => {
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

    this.dialogRef.afterClosed().subscribe((result: DialogResultsType) => {
      this.dialogRef = undefined;
      if (result === DIALOG_RESULTS.LOGOUT) {
        this.idle.interrupt();
        this.localStorage.removeItem(LAST_HYDRATE);
        this.emitSessionActivity(LOGOUT_TYPE.LOGOUT_SELECTED);
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

  private emitSessionActivity(type: LogoutType) {
    this.sessionActivityEvent.set({ type, timestamp: Date.now() });
  }

  ngOnDestroy(): void {
    this.removeVisibilityListener();
  }
}
