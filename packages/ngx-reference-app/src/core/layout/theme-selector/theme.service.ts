import { DOCUMENT, inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export const THEMES = ['cdx', 'helix'];

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  currentThemeMode$: BehaviorSubject<string> = new BehaviorSubject('light');
  currentTheme$: BehaviorSubject<string> = new BehaviorSubject('');
  themes = THEMES;

  private document: Document = inject(DOCUMENT);

  constructor() {
    const initialThemeValue = this.getThemeMode();
    if (initialThemeValue) {
      this.setThemeMode(initialThemeValue);
      this.currentThemeMode$.next(initialThemeValue);
    }
    const themeColor = localStorage.getItem('themeColor');
    if (themeColor) {
      if (themeColor && THEMES.includes(themeColor)) {
        this.selectTheme(themeColor);
      }
    }
  }

  getThemeMode(): string | undefined {
    const validModes = ['light', 'dark', 'auto'];
    const themeModeCookie = localStorage.getItem('themeMode');

    if (themeModeCookie && validModes.includes(themeModeCookie)) {
      return themeModeCookie;
    }
    return;
  }

  setThemeMode(themeMode: string) {
    const body = this.document.body;
    const themeClasses = ['cdx-light-mode', 'cdx-dark-mode', 'cdx-auto-mode'];

    body.classList.remove(
      ...Array.from(body.classList).filter((bodyClass) =>
        themeClasses.some((themeClass) => bodyClass === themeClass),
      ),
    );
    if (themeMode && themeClasses.includes(`cdx-${themeMode}-mode`)) {
      const themeClass = `cdx-${themeMode}-mode`;
      body.classList.add(themeClass);
      this.currentThemeMode$.next(themeMode);
      localStorage.setItem('themeMode', themeMode);
    } else {
      localStorage.removeItem('themeMode');
    }
  }

  selectTheme(theme: string): void {
    localStorage.setItem('themeColor', theme);

    document.body.classList.forEach((className) => {
      if (className.endsWith('theme-material')) {
        document.body.classList.remove(className);
      }
    });
    document.body.classList.add(`${theme}-theme-material`);

    this.currentTheme$.next(theme);
  }
}
