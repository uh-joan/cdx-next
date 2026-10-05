import 'vite/client';

declare global {
  interface ImportMetaEnv {
    /** Base URL of the Storybook build embedded in component pages. */
    readonly VITE_STORYBOOK_URL?: string;
  }
}
