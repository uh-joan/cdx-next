export interface ThemeOptionsBranding {
  header?: {
    background: string;
    color: string;
  };
  footer?: {
    background: string;
    color: string;
  };
}

export const brandingThemeOption: ThemeOptionsBranding = {
  header: {
    background: 'black',
    color: 'white',
  },
  footer: {
    background: 'black',
    color: 'white',
  },
};
