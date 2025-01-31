export interface NavigationLink {
  path: string;
  label: string;
}

export const links: NavigationLink[] = [
  { path: '/home', label: 'Home' },
  { path: '/development', label: 'Development' },
  { path: '/foundations', label: 'Foundations' },
  { path: '/components', label: 'Components' },
  { path: '/services', label: 'Services' },
  { path: '/patterns', label: 'Patterns' },
];
