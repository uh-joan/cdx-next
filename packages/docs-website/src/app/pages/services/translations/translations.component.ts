import { Component, HostBinding } from '@angular/core';

import {
  modulesTranslationsAngular,
  translationsKeysAngular,
  translationsSampleComponentAngular,
  translationsTemplateAngular,
} from './translations.text-highlighted';

@Component({
  selector: 'cdx-translations',
  // eslint-disable-next-line @angular-eslint/prefer-standalone
  standalone: false,
  templateUrl: './translations.component.html',
  styleUrls: ['./translations.component.scss'],
})
export class TranslationsComponent {
  @HostBinding('class') hostClass = 'cdx-section';

  modulesTranslationsAngular = modulesTranslationsAngular;
  translationsTemplateAngular = translationsTemplateAngular;
  translationsSampleComponentAngular = translationsSampleComponentAngular;
  translationsKeysAngular = translationsKeysAngular;
}
