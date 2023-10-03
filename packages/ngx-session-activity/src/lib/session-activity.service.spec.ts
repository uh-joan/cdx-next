import { createServiceFactory, SpectatorService } from '@ngneat/spectator/jest';
import { TranslateService } from '@ngx-translate/core';
import { of } from 'rxjs';

import { IDLE_CONFIG } from './session-activity.config';
import { SESSION_ACTIVITY_SETTINGS } from './session-activity.injectors';
import { LOGOUT_TYPE, SessionActivitySettings } from './session-activity.model';
import { SessionActivityModule } from './session-activity.module';
import { SessionActivityService } from './session-activity.service';

describe('SessionActivityService', () => {
  let spectator: SpectatorService<SessionActivityService>;
  const createService = createServiceFactory({
    service: SessionActivityService,
    imports: [SessionActivityModule.forRoot()],
    providers: [
      {
        provide: TranslateService,
        useValue: {
          get: (key: unknown) => of(key),
        },
      },
    ],
  });

  describe('when Initialize method is called without parameters and without providing configuration in the module', () => {
    beforeEach(() => {
      spectator = createService();
      spectator.service.initialize();
    });

    it('Default value from config file should be set', () => {
      expect(spectator.service.isThisComponentAlive).toBeTruthy();
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
      jest.useFakeTimers();
      spectator.service.initialize();
    });

    it('openInactivityDialog should be called after expireDurationMinutes - expireWarningMinutes time and after expireWarningMinutes and if no action is performed the sessionActivitySubject should emit a logout event', () => {
      const openInactivityDialogSpy = jest.spyOn(
        spectator.service,
        'openInactivityDialog',
      );

      expect(openInactivityDialogSpy).not.toHaveBeenCalled();

      jest.advanceTimersByTime(
        (sessionActivitySettings.expireDurationMinutes -
          sessionActivitySettings.expireWarningMinutes) *
          60 *
          1000,
      );

      expect(openInactivityDialogSpy).toHaveBeenCalledTimes(1);

      spectator.service.sessionActivitySubject.subscribe((value) => {
        expect(value).toEqual(LOGOUT_TYPE.SESSION_EXPIRED);
      });

      jest.advanceTimersByTime(
        sessionActivitySettings.expireWarningMinutes * 60 * 1000 + 1,
      );
    });

    it('openInactivityDialog should not be called before expireDurationMinutes - expireWarningMinutes amount of time same for the emission of sessionActivitySubject logout event', () => {
      const openInactivityDialogSpy = jest.spyOn(
        spectator.service,
        'openInactivityDialog',
      );

      expect(openInactivityDialogSpy).not.toHaveBeenCalled();

      jest.advanceTimersByTime(
        (sessionActivitySettings.expireDurationMinutes -
          sessionActivitySettings.expireWarningMinutes) *
          60 *
          1000 -
          1,
      );

      expect(openInactivityDialogSpy).not.toHaveBeenCalled();

      spectator.service.sessionActivitySubject.subscribe((value) => {
        expect(value).not.toEqual(LOGOUT_TYPE.SESSION_EXPIRED);
      });

      jest.advanceTimersByTime(
        sessionActivitySettings.expireWarningMinutes * 60 * 1000 + 1,
      );
    });
  });
});
