export interface AnalyticsSettings {
  appId: string;
  options?: {
    snowplowContextData?: AnalyticsContextData;
    snowplowEnvironment?: AnalyticsEnvironment;
    snowplowUrl?: string;
  };
}

export const CLARIVATE_IGLU_SCHEMA =
  'iglu:ne.clarivate.com/usage/jsonschema/2-0-0';

export interface AnalyticsContextData {
  [key: string]: number | string | undefined;
}

export interface AnalyticsContextSchema {
  schema: string;
  data: AnalyticsContextData;
}

export declare type AnalyticsEnvironment = 'SNAPSHOT' | 'STABLE' | 'PROD';

export const DEFAULT_SETTINGS: AnalyticsSettings = {
  appId: 'myApp',
};
