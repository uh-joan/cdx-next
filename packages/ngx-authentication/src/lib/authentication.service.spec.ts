import { createServiceFactory, SpectatorService } from '@ngneat/spectator/jest';
import { localStorage, location } from 'jest-globals';
import { sign } from 'jsonwebtoken';

import { AUTHENTICATION_SETTINGS } from './authentication.injectors';
import { AuthenticationModule } from './authentication.module';
import { AuthenticationService } from './authentication.service';

describe('AuthenticationService', () => {
  let spectator: SpectatorService<AuthenticationService>;
  const createService = createServiceFactory({
    service: AuthenticationService,
    imports: [AuthenticationModule],
  });

  describe('.login()', () => {
    describe('when environment is not set (aka production)', () => {
      beforeEach(() => {
        spectator = createService({
          providers: [
            {
              provide: AUTHENTICATION_SETTINGS,
              useValue: {
                appId: 'foo',
              },
            },
          ],
        });
        spectator.service.login();
      });

      it('should assign browswer location to production federated login ui', () => {
        expect(location.assign).toHaveBeenCalledWith(
          'https://access.clarivate.com/login?app=foo',
        );
      });
    });

    describe('when environment is set', () => {
      beforeEach(() => {
        spectator = createService({
          providers: [
            {
              provide: AUTHENTICATION_SETTINGS,
              useValue: {
                appId: 'foo',
                environment: 'bar',
              },
            },
          ],
        });
        spectator.service.login();
      });

      it('should assign browswer location to environment-specific federated login ui', () => {
        expect(location.assign).toHaveBeenCalledWith(
          'https://access.bar.clarivate.com/login?app=foo',
        );
      });
    });
  });

  describe('.isAuthenticated()', () => {
    beforeEach(() => {
      spectator = createService({
        providers: [
          {
            provide: AUTHENTICATION_SETTINGS,
            useValue: {
              appId: 'foo',
              environment: 'bar',
            },
          },
        ],
      });
    });

    describe('when no token is available in localStorage', () => {
      it('should return false', () => {
        expect(spectator.service.isAuthenticated()).toEqual(false);
      });
    });

    describe('when a token is available in localStorage', () => {
      describe('that is expired', () => {
        beforeEach(() => {
          localStorage.setItem(
            'ls.token',
            `{"token":"${sign(
              {
                exp: Math.floor(Date.now() / 1000) - 30,
              },
              'foo',
            )}"}`,
          );
        });

        it('should return false', () => {
          expect(spectator.service.isAuthenticated()).toEqual(false);
        });
      });

      describe('that is not expired', () => {
        beforeEach(() => {
          localStorage.setItem(
            'ls.token',
            `{"token":"${sign(
              {
                exp: Math.floor(Date.now() / 1000) + 30,
              },
              'foo',
            )}"}`,
          );
        });

        it('should return true', () => {
          expect(spectator.service.isAuthenticated()).toEqual(true);
        });
      });

      describe('that is invalid', () => {
        beforeEach(() => {
          localStorage.setItem('ls.token', `{"token":"not a JWT"}`);
        });

        it('should return false', () => {
          expect(spectator.service.isAuthenticated()).toEqual(false);
        });
      });

      describe('that is not JSON', () => {
        beforeEach(() => {
          localStorage.setItem('ls.token', 'something that is not JSON');
        });

        it('should return false', () => {
          expect(spectator.service.isAuthenticated()).toEqual(false);
        });
      });
    });
  });

  describe('.getTokenPayload()', () => {
    beforeEach(() => {
      spectator = createService({
        providers: [
          {
            provide: AUTHENTICATION_SETTINGS,
            useValue: {},
          },
        ],
      });

      localStorage.setItem(
        'ls.token',
        `{"token":"${sign(
          {
            foo: 'bar',
          },
          'foo',
        )}"}`,
      );
    });

    it('should return the payload of the JWT token', () => {
      expect(spectator.service.getTokenPayload()).toMatchObject({ foo: 'bar' });
    });
  });

  describe('.logout()', () => {
    describe('when environment is not set (aka production)', () => {
      beforeEach(() => {
        spectator = createService({
          providers: [
            {
              provide: AUTHENTICATION_SETTINGS,
              useValue: {
                appId: 'foo',
              },
            },
          ],
        });
        spectator.service.logout();
      });

      it('should assign browswer location to production federated logout ui', () => {
        expect(location.assign).toHaveBeenCalledWith(
          'https://access.clarivate.com/logout?app=foo',
        );
      });
    });

    describe('when environment is set', () => {
      beforeEach(() => {
        spectator = createService({
          providers: [
            {
              provide: AUTHENTICATION_SETTINGS,
              useValue: {
                appId: 'foo',
                environment: 'bar',
              },
            },
          ],
        });
        spectator.service.logout();
      });

      it('should assign browswer location to environment-specific federated logout ui', () => {
        expect(location.assign).toHaveBeenCalledWith(
          'https://access.bar.clarivate.com/logout?app=foo',
        );
      });
    });
  });
});
