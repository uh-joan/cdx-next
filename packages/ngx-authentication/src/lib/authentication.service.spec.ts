import { APP_BASE_HREF } from '@angular/common';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  convertToParamMap,
  Router,
} from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { createServiceFactory, SpectatorService } from '@ngneat/spectator/jest';
import { localStorage, location } from 'jest-globals';
import { sign } from 'jsonwebtoken';

import { AUTHENTICATION_SETTINGS } from './authentication.injectors';
import { AuthenticationModule } from './authentication.module';
import { AuthenticationService } from './authentication.service';
import { LS_TOKEN } from './authentication.types';

describe('AuthenticationService', () => {
  let spectator: SpectatorService<AuthenticationService>;
  const createService = createServiceFactory({
    service: AuthenticationService,
    imports: [AuthenticationModule, RouterTestingModule],
    mocks: [Router],
    providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
  });

  describe('.enterApplicationAfterAuthentication()', () => {
    describe('when referrer is present in snapshot query params', () => {
      const snapshot = {
        queryParamMap: convertToParamMap({
          referrer: 'referrerUrl',
        }),
      } as ActivatedRouteSnapshot;

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
            {
              provide: ActivatedRoute,
              useValue: '',
            },
          ],
        });
        spectator.service.enterApplicationAfterAuthentication(snapshot);
      });

      it('should navigate according to referrer URL', () => {
        const router = spectator.inject<Router>(Router);

        expect(router.navigateByUrl).toHaveBeenCalledWith(
          snapshot.queryParamMap.get('referrer'),
        );
      });
    });
  });

  describe('.login()', () => {
    const router = { url: 'dummyurl' } as Router;
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
            {
              provide: ActivatedRoute,
              useValue: '',
            },
          ],
        });
        spectator.service.router = router;
        spectator.service.login();
      });

      it('should assign browswer location to production federated login ui', () => {
        expect(location.assign).toHaveBeenCalledWith(
          'https://access.clarivate.com/login?app=foo&referrer=dummyurl',
        );
      });
    });

    describe('when environment is set getting it from the url', () => {
      beforeEach(() => {
        spectator = createService({
          providers: [
            {
              provide: AUTHENTICATION_SETTINGS,
              useValue: {
                appId: 'foo',
              },
            },
            {
              provide: ActivatedRoute,
              useValue: {
                snapshot: {
                  paramMap: convertToParamMap({ 'x-clv-environment': 'prod' }),
                },
              },
            },
          ],
        });
        spectator.service.router = router;
        spectator.service.login();
      });

      it('should assign browswer location to the environment set from url', () => {
        expect(location.assign).toHaveBeenCalledWith(
          'https://access.prod.clarivate.com/login?app=foo&referrer=dummyurl',
        );
      });
    });

    describe('when environment is set getting it from the url and from the settings', () => {
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
            {
              provide: ActivatedRoute,
              useValue: {
                snapshot: {
                  paramMap: convertToParamMap({ 'x-clv-environment': 'prod' }),
                },
              },
            },
          ],
        });
        spectator.service.router = router;
        spectator.service.login();
      });

      it('should assign browswer location to the environment set from url', () => {
        expect(location.assign).toHaveBeenCalledWith(
          'https://access.prod.clarivate.com/login?app=foo&referrer=dummyurl',
        );
      });
    });

    describe('when environment is set', () => {
      const router = { url: 'dummyurl' } as Router;

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
            {
              provide: ActivatedRoute,
              useValue: '',
            },
          ],
        });
        spectator.service.router = router;
        spectator.service.login();
      });

      it('should assign browswer location to environment-specific federated login ui', () => {
        expect(location.assign).toHaveBeenCalledWith(
          'https://access.bar.clarivate.com/login?app=foo&referrer=dummyurl',
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
          {
            provide: ActivatedRoute,
            useValue: '',
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
            LS_TOKEN,
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
            LS_TOKEN,
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
          localStorage.setItem(LS_TOKEN, `{"token":"not a JWT"}`);
        });

        it('should return false', () => {
          expect(spectator.service.isAuthenticated()).toEqual(false);
        });
      });

      describe('that is not JSON', () => {
        beforeEach(() => {
          localStorage.setItem(LS_TOKEN, 'something that is not JSON');
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
          {
            provide: ActivatedRoute,
            useValue: '',
          },
        ],
      });

      localStorage.setItem(
        LS_TOKEN,
        `{"token":"${sign(
          {
            foo: 'bar',
          },
          'foo',
        )}"}`,
      );
    });

    it('should return the payload of the JWT token', () => {
      expect(spectator.service.getTokenPayload()).toMatchObject({
        foo: 'bar',
      });
    });
  });

  describe('.logout()', () => {
    const router = { url: 'dummyurl' } as Router;

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
            {
              provide: ActivatedRoute,
              useValue: '',
            },
          ],
        });
        spectator.service.router = router;
        spectator.service.logout();
      });

      it('should assign browswer location to production federated logout ui', () => {
        expect(location.assign).toHaveBeenCalledWith(
          'https://access.clarivate.com/logout?app=foo&referrer=dummyurl',
        );
      });
    });

    describe('when environment is set', () => {
      const router = { url: 'dummyurl' } as Router;

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
            {
              provide: ActivatedRoute,
              useValue: '',
            },
          ],
        });
        spectator.service.router = router;
        spectator.service.logout();
      });

      it('should assign browswer location to environment-specific federated logout ui', () => {
        expect(location.assign).toHaveBeenCalledWith(
          'https://access.bar.clarivate.com/logout?app=foo&referrer=dummyurl',
        );
      });
    });
  });
});
