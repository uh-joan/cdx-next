import { inject, Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import * as ar_SA from './i18n/ar_SA.json';
import * as en from './i18n/en.json';
import * as es_ES from './i18n/es_ES.json';
import * as ja from './i18n/ja.json';
import * as ko_KR from './i18n/ko_KR.json';
import * as pt_BR from './i18n/pt_BR.json';
import * as ru_RU from './i18n/ru_RU.json';
import * as zh_CN from './i18n/zh_CN.json';
import * as zh_TW from './i18n/zh_TW.json';

const CDX_TRANSLATIONS: { [key: string]: any } = {
  ar_SA,
  en,
  es_ES,
  ja,
  ko_KR,
  pt_BR,
  ru_RU,
  zh_CN,
  zh_TW,
};

@Injectable({
  providedIn: 'root',
})
export class NgxTranslationsService {
  private translateService = inject(TranslateService);

  public mergeTranslationsLabels(appLanguages?: string[]): void {
    if (appLanguages?.length) {
      this.translateService.addLangs(appLanguages);
    }
    this.translateService.langs.forEach((lang) => {
      if (CDX_TRANSLATIONS[lang]?.default) {
        CDX_TRANSLATIONS[lang] = CDX_TRANSLATIONS[lang].default;
      }
      this.translateService.translations[lang] = {
        ...CDX_TRANSLATIONS[lang],
        ...this.translateService.translations[lang],
      };
    });
  }
}
