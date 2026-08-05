import { DOCUMENT, inject, Service, signal } from '@angular/core';

export const THEMES = [
  'purple',
  'helix',
  'teal-legacy',
  'blue-legacy',
  'custom',
];

@Service()
export class ThemeService {
  currentThemeMode = signal('light');
  currentTheme = signal('');
  themes = THEMES;

  private document: Document = inject(DOCUMENT);

  constructor() {
    const initialThemeValue = this.getThemeMode();
    if (initialThemeValue) {
      this.setThemeMode(initialThemeValue);
      this.currentThemeMode.set(initialThemeValue);
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
      this.currentThemeMode.set(themeMode);
      localStorage.setItem('themeMode', themeMode);
    } else {
      localStorage.removeItem('themeMode');
    }
  }

  selectTheme(theme: string): void {
    localStorage.setItem('themeColor', theme);

    document.body.classList.forEach((className) => {
      if (className.startsWith('cdx-theme-')) {
        document.body.classList.remove(className);
      }
    });
    document.body.classList.add(`cdx-theme-${theme}`);

    this.currentTheme.set(theme);
  }
}
