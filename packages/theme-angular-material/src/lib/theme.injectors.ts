import { FocusMonitor } from '@angular/cdk/a11y';
import {
  DOCUMENT,
  EnvironmentProviders,
  inject,
  provideAppInitializer,
} from '@angular/core';

export const THEME_INITIALIZER: EnvironmentProviders = provideAppInitializer(
  () => {
    const initializerFn = themeInitializer(
      inject(FocusMonitor),
      inject(DOCUMENT),
    );
    return initializerFn();
  },
);

export function themeInitializer(
  focusMonitor: FocusMonitor,
  document: Document,
): () => void {
  return () => {
    focusMonitor.monitor(document.body, true);
  };
}
