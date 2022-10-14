export type DialogResultsType = 'CLOSE' | 'LOGOUT' | 'EXTEND';

export const DIALOG_RESULTS = {
  CLOSE: 'CLOSE',
  LOGOUT: 'LOGOUT',
  EXTEND: 'EXTEND',
};

export const LOGOUT_TYPE = {
  LOGOUT_SELECTED: 'signout',
  SESSION_EXPIRED: 'security-token-expired',
};

export const LAST_HYDRATE = 'lastHydrateTime';

export interface SessionActivitySettings {
  expireDurationMinutes: number;
  expireWarningMinutes: number;
  pingIntervalMinutes: number;
  shouldNotRehydrate?: boolean;
}
