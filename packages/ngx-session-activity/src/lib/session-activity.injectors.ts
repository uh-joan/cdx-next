import { InjectionToken } from '@angular/core';

import { SessionActivitySettings } from './session-activity.model';

export const SESSION_ACTIVITY_SETTINGS =
  new InjectionToken<SessionActivitySettings>('Session activity settings');
