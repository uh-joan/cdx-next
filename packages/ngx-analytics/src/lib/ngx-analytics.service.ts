import { inject, Injectable } from '@angular/core';
import { OneTrustService } from '@cdx/ngx-branding';
import {
  addGlobalContexts,
  clearGlobalContexts,
  CommonEventProperties,
  newTracker,
  PageViewEvent,
  StructuredEvent,
  trackPageView,
  trackStructEvent,
} from '@snowplow/browser-tracker';
import { BrowserTracker } from '@snowplow/browser-tracker-core';
import { fromEvent, Observable } from 'rxjs';
import { first, map } from 'rxjs/operators';

import {
  ANALYTICS_CONTEXT_DATA,
  ANALYTICS_SETTINGS,
} from './ngx-analytics.injectors';
import {
  AnalyticsContextData,
  AnalyticsContextSchema,
  DEFAULT_SETTINGS,
} from './ngx-analytics.model';

const COLLECTOR_URL =
  'snowplow-collector.staging.userintel.dev.sp.aws.clarivate.net';

@Injectable()
export class AnalyticsService {
  private trackerId = 'cdxNgTracker';

  tracker: BrowserTracker;

  readonly settings = inject(ANALYTICS_SETTINGS) || DEFAULT_SETTINGS;
  context: AnalyticsContextSchema | null = (() => {
    const injected = inject(ANALYTICS_CONTEXT_DATA, { optional: true });
    if (!injected) return null;
    if ('schema' in injected && 'data' in injected)
      return injected as unknown as AnalyticsContextSchema;
    return {
      schema: 'default-schema',
      data: injected as AnalyticsContextData,
    } as AnalyticsContextSchema;
  })();
  private oneTrustService = inject(OneTrustService, { optional: true });

  constructor() {
    this.cookiesAccepted$.subscribe();

    this.tracker = newTracker(
      this.trackerId,
      this.settings.options?.snowplowUrl || COLLECTOR_URL,
      {
        appId: this.settings.appId,
        anonymousTracking: true,
      },
    );

    if (this.context) this.tracker?.core?.addGlobalContexts([this.context]);
  }

  cookiesAccepted$: Observable<void> = fromEvent(
    window,
    'cookiesAccepted',
  ).pipe(
    first(),
    map(() => {
      const user =
        (JSON.parse(localStorage.getItem('analytics') || '') || {}).visitor ||
        '';
      this.tracker.setUserId(user);
      this.tracker.clearUserData();
      this.tracker.disableAnonymousTracking();
      this.cookiesAccepted = true;
    }),
  );
  private cookiesAccepted = false;

  setUserId(userId: string): void {
    this.tracker.setUserId(userId);

    localStorage.setItem(
      'analytics',
      JSON.stringify({
        visitor: userId,
      }),
    );
    this.tracker.disableAnonymousTracking();
  }

  trackPageView(pageViewEvent: PageViewEvent & CommonEventProperties): void {
    if (this.isOneTrustEnabled()) {
      if (!this.cookiesAccepted) {
        return;
      }
    }
    trackPageView(pageViewEvent);
  }

  trackEvent(event: StructuredEvent & CommonEventProperties): void {
    if (this.isOneTrustEnabled() && !this.cookiesAccepted) return;
    trackStructEvent(event, [this.trackerId]);
  }

  resetContext(context: AnalyticsContextSchema): void {
    clearGlobalContexts([this.trackerId]);
    this.context = context;
    addGlobalContexts([context], [this.trackerId]);
  }

  updateContextData(contextData: AnalyticsContextData): void {
    if (this.context) {
      this.context.data = {
        ...this.context.data,
        ...contextData,
      };
      clearGlobalContexts([this.trackerId]);
      addGlobalContexts([this.context], [this.trackerId]);
    } else {
      console.warn('a valid context is needed for update');
    }
  }

  private isOneTrustEnabled(): boolean {
    return this.oneTrustService?.isReady() ?? false;
  }
}
