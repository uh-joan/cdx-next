import { TestBed } from '@angular/core/testing';
import { OneTrustModule, OneTrustSettings } from '@cdx/ngx-branding';
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
    it('should track events through snowplow', async () => {
      const service: AnalyticsService = TestBed.inject(AnalyticsService);
      const snowplowEventSpy = jest.spyOn(snowplowTracker, 'trackStructEvent');
      service.trackEvent({
        action: 'action',
        category: 'click',
      });
      expect(snowplowEventSpy).toHaveBeenCalled();
    });
    it('should check OneTrust before tracking events', () => {
      const service: AnalyticsService = TestBed.inject(AnalyticsService);
      const oneTrustCheckSpy = jest.spyOn<AnalyticsService, any>(
        service,
        'isOneTrustEnabled',
      );
      service.trackEvent({
        action: 'click',
        category: 'test',
      });
      expect(oneTrustCheckSpy).toHaveBeenCalled();
    });
  });
  describe('When a context is provided', () => {
    beforeEach(() => {
      const settings: AnalyticsSettings = {
        appId: 'cdx-test',
      };
      const context: AnalyticsContextSchema = {
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
    });
  });
});
