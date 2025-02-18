declare global {
  interface Window {
    snowplow: OTISnowplowLib;
    GlobalSnowplowNamespace: string[];
  }
}

export declare interface OTISnowplowLib {
  (...args: unknown[]): void;
  q: any[];
}

export declare interface OTISnowplowTrackerOptions {
  anonymousTracking: boolean;
  appId: string;
  encodeBase64?: boolean;
  eventMethod?: string;
  platform: 'web';
  discoverRootDomain: boolean;
  cookieSameSite?: string;
  withCredentials?: boolean;
  contexts?: {
    gaCookies?: boolean;
    performanceTiming?: boolean;
    webPage?: boolean;
    session?: boolean;
  };
}

export declare interface OTISnowplowStructEvent {
  action: string;
  category: string;
  label: string;
  property?: string;
  value?: string;
  timestamp?: number;
}

export declare interface OTISnowplowPageViewEvent {
  pageTitle?: string;
  pageUrl?: string;
  referrer?: string;
  timestamp?: number;
}

export interface OTISnowplowContextData {
  [key: string]: number | string | undefined;
}

export interface OTISnowplowContextSchema {
  schema: string;
  data: OTISnowplowContextData;
}
