import { InjectionToken } from '@angular/core';

import { AutenticationsSettings } from './authentication.types';

export const AUTHENTICATION_SETTINGS =
  new InjectionToken<AutenticationsSettings>('Authentication settings');
