import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NavigationEnd, Router } from '@angular/router';
import {
  AnalyticsContextData,
  AnalyticsContextSchema,
  AnalyticsService,
  CLARIVATE_IGLU_SCHEMA,
} from '@cdx/ngx-analytics';
import { NgxTranslationsService } from '@cdx/ngx-translations';
import { TranslateService } from '@ngx-translate/core';
import { filter, map } from 'rxjs';

import * as ar_SA from '../assets/i18n/ar_SA.json';
import * as en from '../assets/i18n/en.json';
import * as es_ES from '../assets/i18n/es_ES.json';
import * as ja from '../assets/i18n/ja.json';
import * as ko_KR from '../assets/i18n/ko_KR.json';
import * as pt_BR from '../assets/i18n/pt_BR.json';
import * as ru_RU from '../assets/i18n/ru_RU.json';
import * as zh_CN from '../assets/i18n/zh_CN.json';
import * as zh_TW from '../assets/i18n/zh_TW.json';

@Component({
  selector: 'cdx-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit {
  routerEvents$;

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
  MAP_LANGUAGES = [
    {
      name: 'عربي',
      value: 'ar_SA',
    },
    {
      name: 'English',
      value: 'en',
    },
    {
      name: 'Espanol',
      value: 'es_ES',
    },
    {
      name: '日本',
      value: 'ja',
    },
    {
      name: '한국인',
      value: 'ko_KR',
    },
    {
      name: 'Português',
      value: 'pt_BR',
    },
    {
      name: 'Russo',
      value: 'ru_RU',
    },
    {
      name: '简体中文',
      value: 'zh_CN',
    },
    {
      name: '中國傳統的',
      value: 'zh_TW',
    },
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

  constructor(
    private analyticsService: AnalyticsService,
    private router: Router,
    private ngxTranslationsService: NgxTranslationsService,
    private translateService: TranslateService,
  ) {
    this.routerEvents$ = this.router.events
      .pipe(
        filter((ev) => ev instanceof NavigationEnd),
        map((ev) => this.trackPageView((ev as NavigationEnd).url)),
      )
      .subscribe();
  }

  onClickLogo(): void {
    this.analyticsService.trackEvent({
      action: 'Header',
      category: 'click',
      label: 'Clarivate Logo',
      context: [
        {
          schema: CLARIVATE_IGLU_SCHEMA,
          data: {
            test: 'test',
          },
        },
      ],
    });
  }

  trackPageView(url: string): void {
    this.analyticsService.trackPageView({ title: url });
  }

  private createNewGlobalContext(): void {
    const newContext: AnalyticsContextSchema = {
      schema: CLARIVATE_IGLU_SCHEMA,
      data: {
        newProp: 'newProp',
      },
    };
    this.analyticsService.resetContext(newContext);
  }

  private updateCurrentGlobalContext(): void {
    const newContextData: AnalyticsContextData = {
      contextProp: 'updatedContextProp',
      newProp: 'newProp',
    };
    this.analyticsService.updateContextData(newContextData);
  }

  ngOnInit(): void {
    this.formLanguage.get('language')?.setValue('en');
    this.translateService.translations = this.APP_TRANSLATIONS;
    this.ngxTranslationsService.mergeTranslationsLabels(this.APP_LANGUAGES);
    this.formLanguage.valueChanges.subscribe((formLanguageSelected) => {
      if (formLanguageSelected.language)
        this.translateService.use(formLanguageSelected.language);
    });
  }
}
