import { inject, Service } from '@angular/core';
import type { TranslationObject } from '@ngx-translate/core';
import { TranslateService } from '@ngx-translate/core';

import ar_SA from './i18n/ar_SA.json';
import en from './i18n/en.json';
import es_ES from './i18n/es_ES.json';
import ja from './i18n/ja.json';
import ko_KR from './i18n/ko_KR.json';
import pt_BR from './i18n/pt_BR.json';
import ru_RU from './i18n/ru_RU.json';
import zh_CN from './i18n/zh_CN.json';
import zh_TW from './i18n/zh_TW.json';

const CDX_TRANSLATIONS: Record<string, TranslationObject> = {
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

@Service()
export class NgxTranslationsService {
  private translateService = inject(TranslateService);

  public mergeTranslationsLabels(appLanguages?: string[]): void {
    if (appLanguages?.length) {
      this.translateService.addLangs(appLanguages);
    }
    this.translateService.getLangs().forEach((lang) => {
      this.translateService.setTranslation(lang, CDX_TRANSLATIONS[lang], true);
    });
  }
}
