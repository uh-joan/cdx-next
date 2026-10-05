export interface NavigationLink {
  path: string;
  label: string;
}

export const links: NavigationLink[] = [
  { path: '/home', label: 'Home' },
  { path: '/development', label: 'Development' },
  { path: '/foundations', label: 'Foundations' },
  { path: '/components', label: 'Components' },
  { path: '/patterns', label: 'Patterns' },
  { path: '/services', label: 'Services' },
];
