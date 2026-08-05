import { DOCUMENT, inject, Service, signal } from '@angular/core';

export const THEMES = ['cdx', 'helix'];

@Service()
export class ThemeService {
  readonly currentThemeMode = signal<string>('light');
  readonly currentTheme = signal<string>('');
  readonly themes = THEMES;

  private document = inject(DOCUMENT);

  constructor() {
    const initialThemeValue = this.getThemeMode();
    if (initialThemeValue) {
      this.setThemeMode(initialThemeValue);
      this.currentThemeMode.set(initialThemeValue);
    }
    const themeColor = localStorage.getItem('themeColor');
    if (themeColor && THEMES.includes(themeColor)) {
      this.selectTheme(themeColor);
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
      if (className.endsWith('theme-material')) {
        document.body.classList.remove(className);
      }
    });
    document.body.classList.add(`${theme}-theme-material`);

    this.currentTheme.set(theme);
  }
}
