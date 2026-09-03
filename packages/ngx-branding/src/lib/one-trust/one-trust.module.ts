import { ModuleWithProviders, NgModule } from '@angular/core';

import {
  ONE_TRUST_INITIALIZER,
  ONE_TRUST_SETTINGS,
} from './one-trust.injectors';
import { OneTrustService } from './one-trust.service';
import type { OneTrustSettings } from './one-trust.types';

@NgModule()
export class OneTrustModule {
  static forRoot(
    settings: OneTrustSettings,
  ): ModuleWithProviders<OneTrustModule> {
    return {
      ngModule: OneTrustModule,
      providers: [
        {
          provide: ONE_TRUST_SETTINGS,
          useValue: settings,
        },
        ONE_TRUST_INITIALIZER,
        OneTrustService,
      ],
    };
  }

  static forChild(): ModuleWithProviders<OneTrustModule> {
    return {
      ngModule: OneTrustModule,
      providers: [OneTrustService],
    };
  }
}
