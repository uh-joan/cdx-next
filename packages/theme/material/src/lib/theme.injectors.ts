import { FocusMonitor } from '@angular/cdk/a11y';
import { DOCUMENT } from '@angular/common';
import { APP_INITIALIZER, Provider } from '@angular/core';

export const THEME_INITIALIZER: Provider = {
  provide: APP_INITIALIZER,
  multi: true,
  useFactory: themeInitializer,
  deps: [FocusMonitor, DOCUMENT],
};

export function themeInitializer(
  focusMonitor: FocusMonitor,
  document: Document,
): () => void {
  return () => {
    focusMonitor.monitor(document.body, true);
  };
}
