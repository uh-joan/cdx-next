import { KeyValuePipe } from '@angular/common';
import { Component, effect, inject, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { NgxTranslationsService } from '@cdx/ngx-translations';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

import * as ar_SA from '../../../assets/i18n/ar_SA.json';
import * as en from '../../../assets/i18n/en.json';
import * as es_ES from '../../../assets/i18n/es_ES.json';
import * as ja from '../../../assets/i18n/ja.json';
import * as ko_KR from '../../../assets/i18n/ko_KR.json';
import * as pt_BR from '../../../assets/i18n/pt_BR.json';
import * as ru_RU from '../../../assets/i18n/ru_RU.json';
import * as zh_CN from '../../../assets/i18n/zh_CN.json';
import * as zh_TW from '../../../assets/i18n/zh_TW.json';

@Component({
  selector: 'app-language-selector',
  templateUrl: './language-selector.html',
  styleUrls: ['./language-selector.scss'],
  imports: [
    MatSelectModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    TranslatePipe,
    KeyValuePipe,
  ],
})
export class LanguageSelector {
  readonly MAP_LANGUAGE_NAME = {
    en: 'English',
    ar_SA: 'عربي',
    es_ES: 'Español',
    ja: '日本語',
    ko_KR: '한국인',
    pt_BR: 'Português',
    ru_RU: 'Russo',
    zh_CN: '简体中文',
    zh_TW: '中國傳統的',
  };

  readonly MAP_LANGUAGE_FLAG = {
    en: '🇺🇸',
    ar_SA: '🇸🇦',
    es_ES: '🇪🇸',
    ja: '🇯🇵',
    ko_KR: '🇰🇷',
    pt_BR: '🇧🇷',
    ru_RU: '🇷🇺',
    zh_CN: '🇨🇳',
    zh_TW: '🇹🇼',
  };

  readonly APP_TRANSLATIONS = {
    en,
    es_ES,
    ar_SA,
    ja,
    ko_KR,
    pt_BR,
    ru_RU,
    zh_CN,
    zh_TW,
  };

  readonly currentLanguage = signal<string>(
    localStorage.getItem('language') || 'en',
  );

  private ngxTranslationsService = inject(NgxTranslationsService);
  private translateService = inject(TranslateService);

  constructor() {
    const appLanguages = Object.keys(this.APP_TRANSLATIONS);
    this.translateService.addLangs(appLanguages);

    for (const lang of appLanguages) {
      this.translateService.setTranslation(
        lang,
        this.APP_TRANSLATIONS[lang as keyof typeof this.APP_TRANSLATIONS],
      );
    }

    this.ngxTranslationsService.mergeTranslationsLabels(appLanguages);

    const initialLang = localStorage.getItem('language') || 'en';
    this.currentLanguage.set(initialLang);
    this.translateService.use(initialLang);
    this.updateDirection(initialLang);

    effect(() => {
      const lang = this.currentLanguage();
      this.translateService.use(lang);
      localStorage.setItem('language', lang);
      this.updateDirection(lang);
    });
  }

  getLanguageFlag(langCode: string): string {
    return (this.MAP_LANGUAGE_FLAG as Record<string, string>)[langCode];
  }

  selectLanguage(languageValue: string): void {
    this.currentLanguage.set(languageValue);
  }

  private updateDirection(lang: string): void {
    document.documentElement.setAttribute(
      'dir',
      lang === 'ar_SA' ? 'rtl' : 'ltr',
    );
  }
}
