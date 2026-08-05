import { TestBed } from '@angular/core/testing';
import {
  provideTranslateService,
  TranslatePipe,
  TranslateService,
} from '@ngx-translate/core';

import { NgxTranslationsService } from './ngx-translations.service';

describe('NgxTranslationsService', () => {
  let service: NgxTranslationsService;
  let translateService: TranslateService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TranslatePipe],
      providers: [NgxTranslationsService, provideTranslateService()],
    });
    service = TestBed.inject(NgxTranslationsService);
    translateService = TestBed.inject(TranslateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('mergeTranslationsLabels', () => {
    it('should add languages when appLanguages provided', () => {
      const appLanguages = ['en', 'es_ES', 'ja'];
      const addLangsSpy = jest.spyOn(translateService, 'addLangs');

      service.mergeTranslationsLabels(appLanguages);

      expect(addLangsSpy).toHaveBeenCalledWith(appLanguages);
    });

    it('should not add languages when appLanguages is undefined', () => {
      const addLangsSpy = jest.spyOn(translateService, 'addLangs');

      service.mergeTranslationsLabels(undefined);

      expect(addLangsSpy).not.toHaveBeenCalled();
    });

    it('should not add languages when appLanguages is empty array', () => {
      const addLangsSpy = jest.spyOn(translateService, 'addLangs');

      service.mergeTranslationsLabels([]);

      expect(addLangsSpy).not.toHaveBeenCalled();
    });

    it('should set translations for each language in langs array', () => {
      const setTranslationSpy = jest.spyOn(translateService, 'setTranslation');
      jest.spyOn(translateService, 'getLangs').mockReturnValue(['en', 'es_ES']);

      service.mergeTranslationsLabels();

      expect(setTranslationSpy).toHaveBeenCalledTimes(2);
      expect(setTranslationSpy).toHaveBeenCalledWith(
        'en',
        expect.any(Object),
        true,
      );
      expect(setTranslationSpy).toHaveBeenCalledWith(
        'es_ES',
        expect.any(Object),
        true,
      );
    });

    it('should merge translations with true flag to avoid overwriting', () => {
      const setTranslationSpy = jest.spyOn(translateService, 'setTranslation');
      jest.spyOn(translateService, 'getLangs').mockReturnValue(['en']);

      service.mergeTranslationsLabels();

      expect(setTranslationSpy).toHaveBeenCalledWith(
        expect.any(String),
        expect.any(Object),
        true,
      );
    });

    it('should handle all supported languages', () => {
      const supportedLanguages = [
        'ar_SA',
        'en',
        'es_ES',
        'ja',
        'ko_KR',
        'pt_BR',
        'ru_RU',
        'zh_CN',
        'zh_TW',
      ];
      const setTranslationSpy = jest.spyOn(translateService, 'setTranslation');
      jest
        .spyOn(translateService, 'getLangs')
        .mockReturnValue(supportedLanguages);

      service.mergeTranslationsLabels(supportedLanguages);

      expect(setTranslationSpy).toHaveBeenCalledTimes(
        supportedLanguages.length,
      );
      supportedLanguages.forEach((lang) => {
        expect(setTranslationSpy).toHaveBeenCalledWith(
          lang,
          expect.any(Object),
          true,
        );
      });
    });

    it('should unwrap default property from translation object if it exists', () => {
      const setTranslationSpy = jest.spyOn(translateService, 'setTranslation');
      jest.spyOn(translateService, 'getLangs').mockReturnValue(['en']);

      service.mergeTranslationsLabels();

      // Verify that setTranslation is called with the translation object
      const call = setTranslationSpy.mock.calls[0];
      expect(call[0]).toBe('en');
      expect(call[1]).toBeDefined();
      expect(call[2]).toBe(true);
    });

    it('should handle languages not in CDX_TRANSLATIONS gracefully', () => {
      const setTranslationSpy = jest.spyOn(translateService, 'setTranslation');
      jest.spyOn(translateService, 'getLangs').mockReturnValue(['fr', 'de']); // Languages not in CDX_TRANSLATIONS

      expect(() => {
        service.mergeTranslationsLabels();
      }).not.toThrow();

      // Should still call setTranslation for each lang
      expect(setTranslationSpy).toHaveBeenCalledTimes(2);
    });
  });
});
