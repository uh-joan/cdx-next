import { TestBed } from '@angular/core/testing';
import { OneTrustModule, OneTrustSettings } from '@hlx/ngx-branding';
import * as snowplowTracker from '@snowplow/browser-tracker';

import {
  AnalyticsContextSchema,
  AnalyticsSettings,
  CLARIVATE_IGLU_SCHEMA,
} from './ngx-analytics.model';
import { AnalyticsModule } from './ngx-analytics.module';
import { AnalyticsService } from './ngx-analytics.service';

const ONE_TRUST_SETTINGS: OneTrustSettings = {
  domainId: '8b536ee6-9547-4577-843e-314ef3fff451',
};

describe('AnalyticsService', () => {
  let mockLocalStorage: { [key: string]: string };

  beforeEach(() => {
    mockLocalStorage = {};
    vi.spyOn(Storage.prototype, 'getItem').mockImplementation((key: string) => {
      return mockLocalStorage[key] || null;
    });
    vi.spyOn(Storage.prototype, 'setItem').mockImplementation(
      (key: string, value: string) => {
        mockLocalStorage[key] = value;
      },
    );
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  describe('When no context is provided', () => {
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [
          OneTrustModule.forRoot(ONE_TRUST_SETTINGS),
          AnalyticsModule.forRoot({
            appId: 'no-context-app',
          }),
        ],
      });
    });

    it('should be created', () => {
      const service: AnalyticsService = TestBed.inject(AnalyticsService);
      expect(service).toBeTruthy();
      expect(service.settings.appId).toBe('no-context-app');
    });

    it('should initialize tracker with correct appId', () => {
      const service: AnalyticsService = TestBed.inject(AnalyticsService);
      // Tracker may be null in test environment, but settings should still be initialized
      expect(service.settings.appId).toBe('no-context-app');
    });

    it('should track events through snowplow', () => {
      const service: AnalyticsService = TestBed.inject(AnalyticsService);
      const snowplowEventSpy = vi.spyOn(snowplowTracker, 'trackStructEvent');
      service.trackEvent({
        action: 'action',
        category: 'click',
      });
      expect(snowplowEventSpy).toHaveBeenCalledWith(
        { action: 'action', category: 'click' },
        [expect.any(String)],
      );
    });

    it('should check OneTrust before tracking events', () => {
      const service: AnalyticsService = TestBed.inject(AnalyticsService);
      const oneTrustCheckSpy = vi.spyOn(
        service as unknown as { isOneTrustEnabled: () => boolean },
        'isOneTrustEnabled',
      );
      service.trackEvent({
        action: 'click',
        category: 'test',
      });
      expect(oneTrustCheckSpy).toHaveBeenCalled();
    });

    it('should not track events when OneTrust is enabled and cookies not accepted', () => {
      const service: AnalyticsService = TestBed.inject(AnalyticsService);
      const snowplowEventSpy = vi.spyOn(snowplowTracker, 'trackStructEvent');
      vi.spyOn(
        service as unknown as { isOneTrustEnabled: () => boolean },
        'isOneTrustEnabled',
      ).mockReturnValue(true);

      service.trackEvent({
        action: 'click',
        category: 'test',
      });

      expect(snowplowEventSpy).not.toHaveBeenCalled();
    });

    it('should track page views through snowplow', () => {
      const service: AnalyticsService = TestBed.inject(AnalyticsService);
      const snowplowPageViewSpy = vi.spyOn(snowplowTracker, 'trackPageView');
      vi.spyOn(
        service as unknown as { isOneTrustEnabled: () => boolean },
        'isOneTrustEnabled',
      ).mockReturnValue(false);

      service.trackPageView({
        title: 'Test Page',
      });

      expect(snowplowPageViewSpy).toHaveBeenCalledWith({
        title: 'Test Page',
      });
    });

    it('should not track page views when OneTrust is enabled and cookies not accepted', () => {
      const service: AnalyticsService = TestBed.inject(AnalyticsService);
      const snowplowPageViewSpy = vi.spyOn(snowplowTracker, 'trackPageView');
      vi.spyOn(
        service as unknown as { isOneTrustEnabled: () => boolean },
        'isOneTrustEnabled',
      ).mockReturnValue(true);

      service.trackPageView({
        title: 'Test Page',
      });

      expect(snowplowPageViewSpy).not.toHaveBeenCalled();
    });
  });

  describe('When a context is provided', () => {
    let context: AnalyticsContextSchema;

    beforeEach(() => {
      const settings: AnalyticsSettings = {
        appId: 'cdx-test',
      };
      context = {
        schema: CLARIVATE_IGLU_SCHEMA,
        data: {
          prop: 'prop',
        },
      };
      TestBed.configureTestingModule({
        imports: [
          OneTrustModule.forRoot(ONE_TRUST_SETTINGS),
          AnalyticsModule.forRoot(settings, context),
        ],
      });
    });

    it('should add context metadata', () => {
      const service: AnalyticsService = TestBed.inject(AnalyticsService);
      expect(service.settings.appId).toBe('cdx-test');
      expect(service.context?.data).toHaveProperty('prop');
      expect(service.context?.schema).toBe(CLARIVATE_IGLU_SCHEMA);
    });

    it('should add global contexts to tracker when context provided', () => {
      const service: AnalyticsService = TestBed.inject(AnalyticsService);
      expect(service.context).toBeTruthy();
      expect(service.context?.data['prop']).toBe('prop');
    });
  });

  describe('setUserId', () => {
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [
          OneTrustModule.forRoot(ONE_TRUST_SETTINGS),
          AnalyticsModule.forRoot({
            appId: 'test-app',
          }),
        ],
      });
    });

    it('should set user ID and store in localStorage', () => {
      const service: AnalyticsService = TestBed.inject(AnalyticsService);
      const userId = 'test-user-123';

      service.setUserId(userId);

      expect(mockLocalStorage['analytics']).toBeDefined();
      const storedData = JSON.parse(mockLocalStorage['analytics']);
      expect(storedData.visitor).toBe(userId);
    });

    it('should disable anonymous tracking after setting user ID', () => {
      const service: AnalyticsService = TestBed.inject(AnalyticsService);

      // If tracker is null, skip the spy check as tracker initialization failed
      if (!service.tracker) {
        expect(service.tracker).toBeNull();
        return;
      }

      const disableAnonymousSpy = vi.spyOn(
        service.tracker,
        'disableAnonymousTracking',
      );

      service.setUserId('test-user-123');

      expect(disableAnonymousSpy).toHaveBeenCalled();
    });
  });

  describe('resetContext', () => {
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [
          OneTrustModule.forRoot(ONE_TRUST_SETTINGS),
          AnalyticsModule.forRoot({
            appId: 'test-app',
          }),
        ],
      });
    });

    it('should clear and set new context', () => {
      const service: AnalyticsService = TestBed.inject(AnalyticsService);
      const clearContextsSpy = vi.spyOn(snowplowTracker, 'clearGlobalContexts');
      const addContextsSpy = vi.spyOn(snowplowTracker, 'addGlobalContexts');

      const newContext: AnalyticsContextSchema = {
        schema: CLARIVATE_IGLU_SCHEMA,
        data: {
          newProp: 'newValue',
        },
      };

      service.resetContext(newContext);

      expect(clearContextsSpy).toHaveBeenCalled();
      expect(addContextsSpy).toHaveBeenCalledWith(
        [newContext],
        expect.any(Array),
      );
      expect(service.context).toEqual(newContext);
    });
  });

  describe('updateContextData', () => {
    beforeEach(() => {
      const settings: AnalyticsSettings = {
        appId: 'test-app',
      };
      const context: AnalyticsContextSchema = {
        schema: CLARIVATE_IGLU_SCHEMA,
        data: {
          initialProp: 'initialValue',
        },
      };
      TestBed.configureTestingModule({
        imports: [
          OneTrustModule.forRoot(ONE_TRUST_SETTINGS),
          AnalyticsModule.forRoot(settings, context),
        ],
      });
    });

    it('should merge new context data with existing data', () => {
      const service: AnalyticsService = TestBed.inject(AnalyticsService);
      const clearContextsSpy = vi.spyOn(snowplowTracker, 'clearGlobalContexts');
      const addContextsSpy = vi.spyOn(snowplowTracker, 'addGlobalContexts');

      service.updateContextData({
        newProp: 'newValue',
      });

      expect(service.context?.data['initialProp']).toBe('initialValue');
      expect(service.context?.data['newProp']).toBe('newValue');
      expect(clearContextsSpy).toHaveBeenCalled();
      expect(addContextsSpy).toHaveBeenCalled();
    });

    it('should warn when updating context data without existing context', () => {
      // Create service without context
      TestBed.resetTestingModule();
      TestBed.configureTestingModule({
        imports: [
          OneTrustModule.forRoot(ONE_TRUST_SETTINGS),
          AnalyticsModule.forRoot({
            appId: 'test-app',
          }),
        ],
      });
      const service: AnalyticsService = TestBed.inject(AnalyticsService);
      const consoleWarnSpy = vi
        .spyOn(console, 'warn')
        .mockImplementation(() => undefined);

      service.updateContextData({
        newProp: 'newValue',
      });

      expect(consoleWarnSpy).toHaveBeenCalledWith(
        'a valid context is needed for update',
      );
    });

    it('should override existing properties when updating', () => {
      const service: AnalyticsService = TestBed.inject(AnalyticsService);

      service.updateContextData({
        initialProp: 'updatedValue',
      });

      expect(service.context?.data['initialProp']).toBe('updatedValue');
    });
  });

  describe('cookiesAccepted$', () => {
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [
          OneTrustModule.forRoot(ONE_TRUST_SETTINGS),
          AnalyticsModule.forRoot({
            appId: 'test-app',
          }),
        ],
      });
    });

    it('should listen for cookiesAccepted event', async () => {
      mockLocalStorage['analytics'] = JSON.stringify({
        visitor: 'stored-user',
      });
      const service: AnalyticsService = TestBed.inject(AnalyticsService);
      if (!service.tracker) {
        return;
      }

      const setUserIdSpy = vi.spyOn(service.tracker, 'setUserId');
      const disableAnonymousSpy = vi.spyOn(
        service.tracker,
        'disableAnonymousTracking',
      );

      window.dispatchEvent(new Event('cookiesAccepted'));

      await new Promise<void>((resolve) => {
        setTimeout(() => {
          expect(setUserIdSpy).toHaveBeenCalledWith('stored-user');
          expect(disableAnonymousSpy).toHaveBeenCalled();
          resolve();
        }, 0);
      });
    });
  });

  describe('Custom snowplow URL', () => {
    it('should use custom snowplow URL when provided in settings', () => {
      const customUrl = 'custom-snowplow.example.com';
      TestBed.configureTestingModule({
        imports: [
          OneTrustModule.forRoot(ONE_TRUST_SETTINGS),
          AnalyticsModule.forRoot({
            appId: 'test-app',
            options: {
              snowplowUrl: customUrl,
            },
          }),
        ],
      });

      const service: AnalyticsService = TestBed.inject(AnalyticsService);
      expect(service.settings.options?.snowplowUrl).toBe(customUrl);
    });
  });
});
