import {
  OTISnowplowContextData,
  OTISnowplowContextSchema,
} from './model/oti-integration-snowplow.model';

export declare interface OTICookiesChangeEvent {
  initial: boolean;
  next: string[];
  prev?: string[];
}

export declare interface OTIHttpHeaders {
  [k: string]: string;
}

export declare interface OTLibrary {
  ToggleInfoDisplay: () => void;
}

export declare interface OTIPendoDetails {
  visitor?: {
    id?: string;
    [k: string]: unknown;
  };
  [k: string]: unknown;
}

export declare type OTIPendoDetailsCallback = () => OTIPendoDetails;

export type OTIPendoPayload = unknown;

export declare type OTIPendoPayloadCallback = (
  visitoryId: string | undefined,
) => OTIPendoPayload;

export declare type OTIPendoVisitorIdGeneratorCallback = () => string;

export declare interface OTIOptions {
  app_id: string;
  user_id?: string;
  ot_key?: string;
  ot_language?: string;
  ot_localStorage?: boolean;
  prod_domain?: string | null;
  prod_env?: boolean | null;
  pendo_key?: string;
  pendo_details?: OTIPendoDetailsCallback | OTIPendoDetails;
  pendo_optimize_requests?: boolean;
  pendo_dnp_url?: string;
  pendo_dnp_method?: string;
  pendo_visitor_url?: string;
  pendo_visitor_payload?: OTIPendoPayloadCallback | OTIPendoPayload;
  pendo_visitor_method?: string;
  pendo_metadata_url?: string;
  pendo_metadata_method?: string;
  pendo_url?: string;
  pendo_cname_content?: string;
  pendo_cname_data?: string;
  pendo_visitor_id_generator?: OTIPendoVisitorIdGeneratorCallback;
  request_headers?: OTIHttpHeaders;
  request_with_credentials?: boolean;
  snowplow_enabled?: boolean;
  snowplow_context_data?: OTISnowplowContextData;
  snowplow_event_method?: string;
  snowplow_session_id?: string;
  snowplow_url?: string;
  zendesk_appName?: string;
  zendesk_environment?: string;
  zendesk_key?: string;
  zendesk_hide_article_link?: boolean;
  zendesk_redirect_to_help_center?: boolean;
  zendesk_position?: 'left' | 'right';
  zendesk_url?: string;
}

export declare interface OtiIntegrationInterfaceConfig {
  options: OTIOptions;
  isOnProduction: boolean;
}

export declare type OTICookiesValue = string[];

export declare interface OTICookiesPreferences {
  next: OTICookiesValue | null;
  prev: OTICookiesValue | null;
}

export declare interface OTIOTDataLayerItem {
  event: string;
  [k: string]: string;
}
export declare type OTIOTDataLayer = OTIOTDataLayerItem[];

export declare interface OTIPendoLib {
  isReady: () => boolean;
  get_visitor_id: () => string;
  startGuides: () => void;
  startSendingEvents: () => void;
  stopGuides: () => void;
  stopSendingEvents: () => void;
  track: (name: string, props?: unknown) => string;
  initialize: (details: OTIPendoDetails) => void;
}

export declare interface OTIPendoTrackEvent {
  name: string;
  props?: { [k: string]: unknown };
}

export declare interface OTICookiesSession {
  functionalCookies: string | null;
  targetingCookies: string | null;
}

export declare interface OTIUserDetails {
  userId: string;
}
