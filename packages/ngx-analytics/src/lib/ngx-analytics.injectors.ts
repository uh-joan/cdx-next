import {
  DOCUMENT,
  EnvironmentProviders,
  inject,
  InjectionToken,
  isDevMode,
  provideAppInitializer,
} from '@angular/core';
import { OneTrustModule } from '@cdx/ngx-branding';
import { ContextPrimitive } from '@snowplow/browser-tracker';

import {
  AnalyticsContextData,
  AnalyticsEnvironment,
  AnalyticsSettings,
} from './ngx-analytics.model';

export const ANALYTICS_SETTINGS = new InjectionToken<AnalyticsSettings>(
  'ANALYTICS_SETTINGS',
);

const DEFAULT_CONTEXT: ContextPrimitive = { data: {}, schema: '' };

export const ANALYTICS_INITIALIZER: EnvironmentProviders =
  provideAppInitializer(() => {
    const oneTrustModule = inject(OneTrustModule, { optional: true });
    const context: ContextPrimitive = oneTrustModule
      ? { data: { oneTrustModule }, schema: '' }
      : DEFAULT_CONTEXT;

    const initializerFn = analyticsInitializer(
      inject(ANALYTICS_SETTINGS),
      inject(DOCUMENT),
      context,
    );
    return initializerFn();
  });

export const ANALYTICS_CONTEXT_DATA = new InjectionToken<AnalyticsContextData>(
  'ANALYTICS_CONTEXT_DATA',
);

export const ANALYTICS_CONTEXT_SCHEMA = new InjectionToken<string>(
  'ANALYTICS_CONTEXT_SCHEMA',
);
export const ANALYTICS_ENVIRONMENT = new InjectionToken<AnalyticsEnvironment>(
  'ANALYTICS_ENVIRONMENT',
);

export function analyticsInitializer(
  settings: AnalyticsSettings,
  document: Document,
  context: ContextPrimitive,
) {
  return async () => {
    if (!settings.appId) {
      if (isDevMode()) {
        console.error(
          'Empty appId for Analytics. Make sure to provide one when initilizing AnalyticsModule.',
        );
      }
      return;
    }

    if (!context) {
      context = DEFAULT_CONTEXT;
    }

    createAndAppendScript((script) => {
      script.id = 'analytics-opt-anon-wrapper';
      script.appendChild(
        document.createTextNode(`
          function OptanonWrapper() {
              const GUEST_OBJ_MOCK = { visitor: {
                  id: 'guest'
              }};
              let dataLayer = window.dataLayer;
              let GroupsArr = dataLayer.filter(
              (item) => item.event === "OneTrustGroupsUpdated");
              let user = (JSON.parse(localStorage.getItem("analytics")) || {}).visitor || {};
              const visitorId = user.id ? user.id : GUEST_OBJ_MOCK.visitor.id

              const hasAccepted = (list) => list['OnetrustActiveGroups'].split(',').indexOf('C0003') !== -1;

              if (GroupsArr.length > 1) { 
                      
                  if (hasAccepted(GroupsArr[GroupsArr.length-2]) && !hasAccepted(GroupsArr[GroupsArr.length-2])) {
                      localStorage.setItem("analytics", JSON.stringify(guestObj));
                  } else if (!hasAccepted(GroupsArr[GroupsArr.length-2]) && hasAccepted(GroupsArr[GroupsArr.length-1])) { 
                    createVisitorId(user, visitorId, true);
                  }
              } else if (GroupsArr.length === 1) {
                hasAccepted(GroupsArr[GroupsArr.length-1]) ? 
                  createVisitorId(user, visitorId) : 
                  localStorage.setItem("analytics", JSON.stringify(GUEST_OBJ_MOCK));
              }
          }
                  
          function createVisitorId(user, visitorId, existing) {
              const event = new Event('cookiesAccepted');
              dispatchEvent(event);
              const newId = Math.floor(Math.random() * 1000000000) + '';
                localStorage.setItem("analytics", JSON.stringify({  visitor: { id: Math.floor(Math.random() * 1000000000) + ''}}
              ));
          }
            
            `),
      );
    }, document);
  };
}

function createAndAppendScript(
  prepare: (script: HTMLScriptElement) => void,
  document: Document,
) {
  if (!document) return;
  const script = document.createElement('script');
  script.type = 'text/javascript';
  prepare(script);

  document.head.appendChild(script);

  return script;
}
