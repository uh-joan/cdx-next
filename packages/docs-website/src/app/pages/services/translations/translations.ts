import { Component, HostBinding } from '@angular/core';
import { MatDivider } from '@angular/material/divider';

import { Highlight } from '../../../components/highlight/highlight';
import { Page } from '../../../core/page/page';
import {
  modulesTranslationsAngular,
  translationsKeysAngular,
  translationsSampleComponentAngular,
  translationsTemplateAngular,
} from './translations.text-highlighted';

@Component({
  selector: 'cdx-translations',
  templateUrl: './translations.html',
  styleUrls: ['./translations.scss'],
  imports: [Page, MatDivider, Highlight],
})
export class Translations {
  @HostBinding('class') hostClass = 'cdx-section';

  modulesTranslationsAngular = modulesTranslationsAngular;
  translationsTemplateAngular = translationsTemplateAngular;
  translationsSampleComponentAngular = translationsSampleComponentAngular;
  translationsKeysAngular = translationsKeysAngular;
}
