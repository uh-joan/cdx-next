import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import {
  NgxTranslationsModule,
  NgxTranslationsService,
} from '@hlx/ngx-translations';
import { TranslateService } from '@ngx-translate/core';

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
  selector: 'cdx-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.scss'],
  imports: [
    CommonModule,
    MatSelectModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatTooltipModule,
    NgxTranslationsModule,
  ],
})
export class LanguageSelectorComponent implements OnInit {
  MAP_LANGUAGE_NAME = {
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

  MAP_LANGUAGE_FLAG = {
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

  APP_TRANSLATIONS = {
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

  formLanguage = new FormGroup({
    language: new FormControl('en'),
  });

  private ngxTranslationsService: NgxTranslationsService = inject(
    NgxTranslationsService,
  );
  private translateService: TranslateService = inject(TranslateService);

  ngOnInit(): void {
    Object.entries(this.APP_TRANSLATIONS).forEach(([lang, translations]) => {
      this.translateService.setTranslation(lang, translations);
    });
    this.ngxTranslationsService.mergeTranslationsLabels(
      Object.keys(this.APP_TRANSLATIONS),
    );
    this.formLanguage.valueChanges.subscribe((formLanguageSelected) => {
      if (formLanguageSelected.language) {
        this.translateService.use(formLanguageSelected.language);
        localStorage.setItem('language', formLanguageSelected.language);
      }
    });
    const initialLang = localStorage.getItem('language');

    this.selectLanguage(initialLang ? initialLang : 'en');
  }

  getLanguageFlag(langCode: string): string {
    return (this.MAP_LANGUAGE_FLAG as Record<string, string>)[langCode];
  }

  selectLanguage(languageValue: string): void {
    this.formLanguage.get('language')?.setValue(languageValue);
    localStorage.setItem('language', languageValue);
  }
}
