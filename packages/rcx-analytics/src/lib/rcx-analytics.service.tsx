import {
  addGlobalContexts,
  BrowserTracker,
  clearGlobalContexts,
  CommonEventProperties,
  newTracker,
  PageViewEvent,
  StructuredEvent,
  trackStructEvent,
} from '@snowplow/browser-tracker';

import {
  AnalyticsContextData,
  AnalyticsContextSchema,
  DEFAULT_SETTINGS,
  RcxAnalyticsSettings,
} from './rcx-analytics.model';

export class RcxAnalytics {
  trackerId = 'cdxRcxTracker';
  tracker: BrowserTracker;

  context?: AnalyticsContextSchema;
  settings?: RcxAnalyticsSettings;

  constructor(
    settings: RcxAnalyticsSettings,
    context?: AnalyticsContextSchema,
  ) {
    this.tracker = newTracker(
      this.trackerId,
      settings.options?.snowplowUrl || 'localhost:5000',
      {
        appId: settings.appId,
        anonymousTracking: true,
      },
    );

    this.settings = settings || DEFAULT_SETTINGS;
    if (context) {
      this.context = context;
      addGlobalContexts([context], [this.trackerId]);
    }
  }

  trackPageView(pageViewEvent: PageViewEvent & CommonEventProperties): void {
    this.tracker.trackPageView(pageViewEvent);
  }

  trackEvent(event: StructuredEvent & CommonEventProperties): void {
    trackStructEvent(event, [this.trackerId]);
  }

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
}

export default RcxAnalytics;
