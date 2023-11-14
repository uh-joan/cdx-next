import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  constructor(@Inject(DOCUMENT) private document: Document) {
    const initialThemeValue = this.getThemeMode();
    this.setThemeMode(initialThemeValue);
  }

  getThemeMode(): string {
    const themeModeCookie = localStorage.getItem('themeMode');

    if (themeModeCookie) {
      return themeModeCookie;
    }
    return '';
  }

  setThemeMode(themeMode: string) {
    console.log('newThemeMode', themeMode);
    const body = this.document.body;
    const themeClasses = ['cdx-light-mode', 'cdx-dark-mode', 'cdx-auto-mode'];

    body.classList.remove(
      ...Array.from(body.classList).filter((bodyClass) =>
        themeClasses.some((themeClass) => bodyClass === themeClass),
      ),
    );
    console.log();
    if (themeMode && themeClasses.includes(`cdx-${themeMode}-mode`)) {
      const themeClass = `cdx-${themeMode}-mode`;
      body.classList.add(themeClass);
      localStorage.setItem('themeMode', themeMode);
    } else {
      localStorage.removeItem('themeMode');
    }
  }
}
