import { EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Idle, LocalStorage } from '@ng-idle/core';
import {
  createServiceFactory,
  SpectatorService,
} from '@ngneat/spectator/vitest';
import { TranslateService } from '@ngx-translate/core';

import { IDLE_CONFIG } from './session-activity.config';
import { SESSION_ACTIVITY_SETTINGS } from './session-activity.injectors';
import { LOGOUT_TYPE, SessionActivitySettings } from './session-activity.model';
import { SessionActivityModule } from './session-activity.module';
import { SessionActivityService } from './session-activity.service';

const dialogClosed = new EventEmitter<null>();

const matDialogMock = {
  open: vi.fn().mockReturnValue({ afterClosed: () => dialogClosed }),
  closeAll: vi.fn(),
};

const idleMock = {
  onIdleStart: new EventEmitter<void>(),
  onIdleEnd: new EventEmitter<void>(),
  onTimeoutWarning: new EventEmitter<number>(),
  onTimeout: new EventEmitter<void>(),
  onInterrupt: new EventEmitter<void>(),
  setIdle: vi.fn(),
  setTimeout: vi.fn(),
  setInterrupts: vi.fn(),
  clearInterrupts: vi.fn(),
  watch: vi.fn(),
  stop: vi.fn(),
  interrupt: vi.fn(),
  getIdle: vi.fn().mockReturnValue(8),
  getTimeout: vi.fn().mockReturnValue(2),
};

const localStorageMock = {
  getItem: vi.fn(),
  setItem: vi.fn(),
  removeItem: vi.fn(),
};

describe('SessionActivityService', () => {
  let spectator: SpectatorService<SessionActivityService>;
  const createService = createServiceFactory({
    service: SessionActivityService,
    imports: [SessionActivityModule.forRoot()],
    providers: [
      {
        provide: TranslateService,
        useValue: { instant: vi.fn() },
      },
      {
        provide: MatDialog,
        useValue: matDialogMock,
      },
      {
        provide: Idle,
        useValue: idleMock,
      },
      {
        provide: LocalStorage,
        useValue: localStorageMock,
      },
    ],
  });

  describe('when Initialize method is called without parameters and without providing configuration in the module', () => {
    beforeEach(() => {
      spectator = createService();
      spectator.service.initialize();
    });

    it('Default value from config file should be set', () => {
      expect(spectator.service.idleMinutes).toEqual(
        IDLE_CONFIG.IDLE_MINUTES_DEFAULT,
      );
      expect(spectator.service.timeoutMinutes).toEqual(
        IDLE_CONFIG.IDLE_TIMEOUT_MINUTES_DEFAULT,
      );
      expect(spectator.service.pingIntervalMinutes).toEqual(
        IDLE_CONFIG.PING_INTERVAL_MINUTES_DEFAULT,
      );
    });
  });

  describe('when Initialize method is called without parameters, but providing configuration in the module', () => {
    const sessionActivitySettings: SessionActivitySettings = {
      expireDurationMinutes: 10,
      expireWarningMinutes: 2,
      pingIntervalMinutes: 20,
    };
    beforeEach(() => {
      spectator = createService({
        providers: [
          {
            provide: SESSION_ACTIVITY_SETTINGS,
            useValue: sessionActivitySettings,
          },
        ],
      });
      spectator.service.initialize();
    });

    it('Default value should be overridden where idleMinutes is calculated by subtraction between expireDurationMinutes and expireWarningMinutes', () => {
      expect(spectator.service.idleMinutes).toEqual(
        sessionActivitySettings.expireDurationMinutes -
          sessionActivitySettings.expireWarningMinutes,
      );
      expect(spectator.service.timeoutMinutes).toEqual(
        sessionActivitySettings.expireWarningMinutes,
      );
      expect(spectator.service.pingIntervalMinutes).toEqual(
        sessionActivitySettings.pingIntervalMinutes,
      );
    });
  });

  describe('when Initialize method is called with parameters and providing configuration in the module', () => {
    const sessionActivitySettingsInModule: SessionActivitySettings = {
      expireDurationMinutes: 10,
      expireWarningMinutes: 2,
      pingIntervalMinutes: 20,
    };
    const sessionActivitySettingsInFunction: SessionActivitySettings = {
      expireDurationMinutes: 20,
      expireWarningMinutes: 5,
      pingIntervalMinutes: 20,
    };
    beforeEach(() => {
      spectator = createService({
        providers: [
          {
            provide: SESSION_ACTIVITY_SETTINGS,
            useValue: sessionActivitySettingsInModule,
          },
        ],
      });

      spectator.service.initialize(sessionActivitySettingsInFunction);
    });

    it('Value provided in the module should be overridden from the one provided in the function', () => {
      expect(spectator.service.idleMinutes).toEqual(
        sessionActivitySettingsInFunction.expireDurationMinutes -
          sessionActivitySettingsInFunction.expireWarningMinutes,
      );
      expect(spectator.service.timeoutMinutes).toEqual(
        sessionActivitySettingsInFunction.expireWarningMinutes,
      );
      expect(spectator.service.pingIntervalMinutes).toEqual(
        sessionActivitySettingsInFunction.pingIntervalMinutes,
      );
    });
  });

  describe('when Initialize method is called with parameters', () => {
    const sessionActivitySettings: SessionActivitySettings = {
      expireDurationMinutes: 10,
      expireWarningMinutes: 2,
      pingIntervalMinutes: 20,
    };

    beforeEach(() => {
      spectator = createService({
        providers: [
          {
            provide: SESSION_ACTIVITY_SETTINGS,
            useValue: sessionActivitySettings,
          },
        ],
      });
      spectator.service.initialize();
    });

    it('openInactivityDialog should be called when idle starts and sessionActivityEvent should contain logout event on timeout', () => {
      const openInactivityDialogSpy = vi.spyOn(
        spectator.service,
        'openInactivityDialog',
      );

      expect(openInactivityDialogSpy).not.toHaveBeenCalled();

      // Simulate idle start
      idleMock.onIdleStart.emit();

      expect(openInactivityDialogSpy).toHaveBeenCalledTimes(1);

      // Simulate timeout
      idleMock.onTimeout.emit();

      expect(spectator.service.sessionActivityEvent()?.type).toEqual(
        LOGOUT_TYPE.SESSION_EXPIRED,
      );
    });

    it('openInactivityDialog should not be called before idle starts', () => {
      const openInactivityDialogSpy = vi.spyOn(
        spectator.service,
        'openInactivityDialog',
      );

      expect(openInactivityDialogSpy).not.toHaveBeenCalled();

      // Don't trigger any idle events
      expect(openInactivityDialogSpy).not.toHaveBeenCalled();
    });
  });
});
