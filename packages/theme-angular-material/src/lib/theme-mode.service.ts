import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  currentThemeMode$: BehaviorSubject<string> = new BehaviorSubject('light');

  constructor(@Inject(DOCUMENT) private document: Document) {
    const initialThemeValue = this.getThemeMode();
    if (initialThemeValue) {
      this.setThemeMode(initialThemeValue);
      this.currentThemeMode$.next(initialThemeValue);
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
}
