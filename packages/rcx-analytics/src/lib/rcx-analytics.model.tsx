export interface AnalyticsContextData {
  [key: string]: number | string | undefined;
}

export interface AnalyticsContextSchema {
  schema: string;
  data: AnalyticsContextData;
}

export const CLARIVATE_IGLU_SCHEMA =
  'iglu:ne.clarivate.com/usage/jsonschema/2-0-0';

export const DEFAULT_SETTINGS: RcxAnalyticsSettings = {
  appId: 'myApp',
};
/* eslint-disable-next-line */
export interface RcxAnalyticsSettings {
  appId: string;
  options?: {
    snowplowContextData?: AnalyticsContextData;
    snowplowEnvironment?: AnalyticsEnvironment;
    snowplowUrl?: string;
  };
}

export declare type AnalyticsEnvironment = 'SNAPSHOT' | 'STABLE' | 'PROD';
