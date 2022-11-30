import RcxAnalytics from './rcx-analytics.service';

describe('RcxAnalytics', () => {
  const appId = 'testAppId';
  const context = {
    schema: 'testSchema',
    data: {
      testKey: 'testValue',
    },
  };
  const settings = {
    appId,
    options: {
      snowplowUrl: 'testUrl',
    },
  };
  const rcxAnalytics: RcxAnalytics = new RcxAnalytics(settings, context);

  describe('constructor', () => {
    it('should create a new RcxAnalytics instance', () => {
      expect(rcxAnalytics).toBeInstanceOf(RcxAnalytics);
    });

    it('should create a new Snowplow tracker', () => {
      expect(rcxAnalytics.tracker).toBeDefined();
    });

    it('should set the provided settings', () => {
      expect(rcxAnalytics.settings).toEqual(settings);
    });

    it('should set the provided context', () => {
      expect(rcxAnalytics.context).toEqual(context);
    });

    it('should not set a context if none is provided', () => {
      const analytics = new RcxAnalytics(settings);
      expect(analytics.context).toBeUndefined();
    });
  });

  describe('trackPageView', () => {
    it('should call trackPageView on the Snowplow tracker with the provided event', () => {
      const pageViewEvent = {
        title: 'testTitle',
      };
      const trackPageViewSpy = jest.spyOn(rcxAnalytics, 'trackPageView');
      rcxAnalytics.trackPageView(pageViewEvent);
      expect(trackPageViewSpy).toHaveBeenCalledWith(pageViewEvent);
    });
  });

  describe('trackEvent', () => {
    it('should call trackStructEvent on the Snowplow tracker with the provided event and trackerId', () => {
      const event = {
        category: 'testCategory',
        action: 'testAction',
        label: 'testLabel',
      };

      const trackEventSpy = jest.spyOn(rcxAnalytics, 'trackEvent');
      rcxAnalytics.trackEvent(event);
      expect(trackEventSpy).toHaveBeenCalledWith(event);
    });
  });

  describe('setUserId', () => {
    it('should set the user ID for the tracker', () => {
      const userId = 'testUserId';

      const setUserIdSpy = jest.spyOn(rcxAnalytics, 'setUserId');
      rcxAnalytics.setUserId(userId);
      expect(setUserIdSpy).toHaveBeenCalledWith(userId);
    });

    it('should disable anonymous tracking', () => {
      const anonymousTrackingSpy = jest.spyOn(
        rcxAnalytics.tracker,
        'disableAnonymousTracking',
      );
      rcxAnalytics.setUserId('testUserId');
      expect(anonymousTrackingSpy).toHaveBeenCalled();
    });

    it('should store the visitor ID in localStorage', () => {
      rcxAnalytics.setUserId('testUserId');
      expect(localStorage.getItem('analytics')).toBeDefined();
    });
  });

  describe('updateContextData', () => {
    it('should update the context data', () => {
      rcxAnalytics.updateContextData({ newTestKey: 'newTestValue' });
      expect(rcxAnalytics.context?.data).toEqual({
        testKey: 'testValue',
        newTestKey: 'newTestValue',
      });
    });

    it('should not update the context data if no context is set', () => {
      const rcxAnalyticsWithoutContext = new RcxAnalytics(settings);
      rcxAnalyticsWithoutContext.updateContextData({ testKey: 'newTestValue' });
      expect(rcxAnalyticsWithoutContext.context).toBeUndefined();
    });
  });

  describe('resetContext', () => {
    it('should set a new global context', () => {
      const newContext = {
        schema: 'newTestSchema',
        data: {
          newTestKey: 'newTestValue',
        },
      };
      rcxAnalytics.resetContext(newContext);
      expect(rcxAnalytics.context).toEqual(newContext);
    });
  });
});
