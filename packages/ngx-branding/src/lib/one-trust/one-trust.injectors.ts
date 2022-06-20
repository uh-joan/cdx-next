import { DOCUMENT } from '@angular/common';
import {
  APP_INITIALIZER,
  InjectionToken,
  isDevMode,
  Provider,
} from '@angular/core';

import { OneTrustSettings } from './one-trust.types';

export const ONE_TRUST_SETTINGS = new InjectionToken<OneTrustSettings>(
  'OneTrust Settings',
);

export const ONE_TRUST_INITIALIZER: Provider = {
  provide: APP_INITIALIZER,
  multi: true,
  useFactory: oneTrustInitializer,
  deps: [ONE_TRUST_SETTINGS, DOCUMENT],
};

export function oneTrustInitializer(
  settings: OneTrustSettings,
  document: Document,
) {
  return async () => {
    if (!settings.domainId) {
      if (isDevMode()) {
        console.error(
          'Empty domainId for OneTrust. Make sure to provide one when initilizing OneTrustModule.',
        );
      }
      return;
    }

    /*
     * The order of these 3 script elements is mandated by the implementation guide/snippet for OneTrust.
     *
     * As per the guide, the order should be:
     * 1. auto block (if applicable)
     * 2. sdk stub
     * 3. opt anon wrapper
     */

    await createAndAppendScriptWithWait((script) => {
      script.id = 'one-trust-auto-block';
      script.src = `https://cdn.cookielaw.org/consent/${settings.domainId}/OtAutoBlock.js`;
    }, document);

    await createAndAppendScriptWithWait((script) => {
      script.id = 'one-trust-sdk-stub';
      script.src = 'https://cdn.cookielaw.org/scripttemplates/otSDKStub.js';
      script.setAttribute(
        'data-domain-script',
        `${settings.domainId}${isDevMode() ? '-test' : ''}`,
      );
    }, document);

    createAndAppendScript((script) => {
      if (document.getElementById('analytics-opt-anon-wrapper')) return;
      script.id = 'one-trust-opt-anon-wrapper';
      script.appendChild(
        document.createTextNode(`
          function OptanonWrapper() { }`),
      );
    }, document);
  };
}

async function createAndAppendScriptWithWait(
  prepare: (script: HTMLScriptElement) => void,
  document: Document,
) {
  return new Promise<void>((resolve, reject) => {
    const script = createAndAppendScript(prepare, document);

    script.addEventListener('load', () => resolve());
    script.addEventListener('error', () => reject());
  });
}

function createAndAppendScript(
  prepare: (script: HTMLScriptElement) => void,
  document: Document,
) {
  const script = document.createElement('script');
  script.type = 'text/javascript';
  prepare(script);
  document.head.appendChild(script);

  return script;
}
