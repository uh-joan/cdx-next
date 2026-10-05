export const modulesTranslationsAngular = `import { NgxTranslationsModule } from '@cdx/ngx-translations';
import { provideTranslateService } from '@ngx-translate/core';

bootstrapApplication(AppComponent, {
  providers: [
    provideTranslateService({
      fallbackLang: 'en',
    }),
  ],
});`;

export const translationsTemplateAngular = `<header cdx-header>
    <cdx-header-global>
        <cdx-header-global-user-profile [shouldShowTranslations]="true">
            </cdx-header-global-user-profile>
        </cdx-header-global>
    </header>
<footer cdx-footer [shouldShowTranslations]="true"></footer>`;

export const translationsSampleComponentAngular = `import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgxTranslationsService } from '@cdx/ngx-translations';
import { TranslateService } from '@ngx-translate/core';

import * as ar_SA from '../assets/i18n/ar_SA.json';
import * as en from '../assets/i18n/en.json';
import * as es_ES from '../assets/i18n/es_ES.json';
import * as ja from '../assets/i18n/ja.json';
import * as ko_KR from '../assets/i18n/ko_KR.json';
import * as pt_BR from '../assets/i18n/pt_BR.json';
import * as ru_RU from '../assets/i18n/ru_RU.json';
import * as zh_CN from '../assets/i18n/zh_CN.json';
import * as zh_TW from '../assets/i18n/zh_TW.json';

export class AppComponent implements OnInit {

 APP_LANGUAGES = [
 'ar_SA',
 'en',
 'es_ES',
 'ja',
 'pt_BR',
 'ko_KR',
 'ru_RU',
 'zh_CN',
 'zh_TW',
];

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

 formLanguage = new FormGroup({ language: new FormControl('en') });

 constructor (
     private ngxTranslationsService: NgxTranslationsService,
     private translateService: TranslateService
 ) {}

 ngOnInit(): void {
 this.formLanguage.get('language')?.setValue('en');
 this.translateService.translations = this.APP_TRANSLATIONS;
 this.ngxTranslationsService.mergeTranslationsLabels(this.APP_LANGUAGES);
 this.formLanguage.valueChanges.subscribe(formLanguageSelected => {
   (formLanguageSelected.language) && this.translateService.use(formLanguageSelected.language);
 });
}`;

export const translationsKeysAngular = `
{
    "FOOTER": {
      "COMPANY": "Company",
      "COOKIE_POLICY": "Cookie policy",
      "LEGAL_CENTER": "Legal center",
      "MANAGE_COOKIE_PREFERENCES": "Manage cookie preferences",
      "PRIVACY_NOTICE": "privacy notice"
    },
    "HEADER": {
      "SIGN_IN": "Sign in",
      "SIGN_OUT": "Sign out"
    },
    "INACTIVITY_DIALOG": {
      "CONTINUE_SESSION": "Continue session",
      "LOGOUT": "Logout",
      "REDIRECTION_MESSAGE": "You'll be redirected in {{ countdown }} seconds",
      "SESSION_EXPIRE_WARNING": "Session expire warning",
      "SESSION_EXPIRING": "Your session is about to expire"
    },
    "lang": "en"
  }`;
