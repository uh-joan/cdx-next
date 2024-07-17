export const LS_TOKEN = 'token';

export interface AutenticationsSettings {
  appId: string;
  environment?: string;
  tokenLabel?: string;
  brokerRoute?: string;
  legacyTokenSupport?: boolean;
}

export interface JwtToken {
  [key: string]: unknown;
  '1p:app'?: string;
  '1p:eml': string;
  '1p:fnm': string;
  '1p:gp'?: number;
  '1p:host'?: string;
  '1p:llt'?: number;
  '1p:lnm': string;
  '1p:lns'?: string;
  '1p:logintype'?: string;
  '1p:peml'?: string;
  '1p:pid'?: string;
  '1p:prd'?: string;
  '1p:products'?: [];
  '1p:ssid'?: string;
  '1p:tpwd'?: boolean;
  '1p:truids'?: [];
  '1p:type'?: string;
  '1p:uri'?: string;
  aud?: string;
  exp: number;
  iat?: number;
  iss?: string;
  jti?: string;
  sub?: string;
}
