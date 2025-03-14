import { Component, HostBinding } from '@angular/core';
import { MatDivider } from '@angular/material/divider';

import { HighlightComponent } from '../../../components/highlight/highlight.component';
import { PageComponent } from '../../../core/page/page.component';
import {
  modulesTranslationsAngular,
  translationsKeysAngular,
  translationsSampleComponentAngular,
  translationsTemplateAngular,
} from './translations.text-highlighted';

@Component({
  selector: 'cdx-translations',
  templateUrl: './translations.component.html',
  styleUrls: ['./translations.component.scss'],
  imports: [PageComponent, MatDivider, HighlightComponent],
})
export class TranslationsComponent {
  @HostBinding('class') hostClass = 'cdx-section';

  modulesTranslationsAngular = modulesTranslationsAngular;
  translationsTemplateAngular = translationsTemplateAngular;
  translationsSampleComponentAngular = translationsSampleComponentAngular;
  translationsKeysAngular = translationsKeysAngular;
}
