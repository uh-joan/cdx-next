export interface NavigationItem {
  title: string;
  route: string;
}

const developmentNavigationMap: NavigationItem[] = [
  {
    title: 'Getting Started Overview',
    route: '/development/getting-started-overview',
  },
  {
    title: 'Quick Start New Project',
    route: '/development/quick-start-new-project',
  },
  { title: 'Colors', route: '/development/colors' },
  { title: 'Typogrphy', route: '/development/typography' },
  { title: 'Elevation', route: '/development/elevation' },
  { title: 'Density', route: '/development/density' },
  {
    title: 'Responsive Development',
    route: '/development/responsive-development',
  },
];

const componentsNavigationMap: NavigationItem[] = [
  { title: 'Components Overview', route: '/components/components-overview' },
  { title: 'Autocomplete', route: '/components/autocomplete' },
  { title: 'Badge', route: '/components/badge' },
  { title: 'Breadcrumbs', route: '/components/breadcrumbs' },
  { title: 'Buttons', route: '/components/buttons' },
  { title: 'Button Toggle', route: '/components/button-toggle' },
  { title: 'Card', route: '/components/card' },
  { title: 'Checkbox', route: '/components/checkbox' },
  { title: 'Chips', route: '/components/chips' },
  { title: 'Data Grid', route: '/components/data-grid' },
  { title: 'Date Picker', route: '/components/date-picker' },
  { title: 'Dialog', route: '/components/dialog' },
  { title: 'Divider', route: '/components/divider' },
  { title: 'Expansion Panel', route: '/components/expansion-panel' },
  { title: 'Footer', route: '/components/footer' },
  { title: 'Form Field', route: '/components/form-field' },
  { title: 'Header', route: '/components/header' },
  { title: 'Highcharts', route: '/components/highcharts' },
  { title: 'Icons', route: '/components/icons' },
  { title: 'List', route: '/components/list' },
  { title: 'Menu', route: '/components/menu' },
  { title: 'Notifications', route: '/components/notifications' },
  { title: 'Paginator', route: '/components/paginator' },
  { title: 'Progress Bar', route: '/components/progress-bar' },
  { title: 'Progress Spinner', route: '/components/progress-spinner' },
  { title: 'Radio Button', route: '/components/radio-button' },
  { title: 'Select', route: '/components/select' },
  { title: 'Sidenav', route: '/components/sidenav' },
  { title: 'Slide Toggle', route: '/components/slide-toggle' },
  { title: 'Slider', route: '/components/slider' },
  { title: 'Snackbar', route: '/components/snackbar' },
  { title: 'Sort Header', route: '/components/sort-header' },
  { title: 'Stepper', route: '/components/stepper' },
  { title: 'Table', route: '/components/table' },
  { title: 'Tabs', route: '/components/tabs' },
  { title: 'Text Area', route: '/components/text-area' },
  { title: 'Text Input', route: '/components/text-input' },
  { title: 'Toolbar', route: '/components/toolbar' },
  { title: 'Tooltips', route: '/components/tooltips' },
  { title: 'Tree', route: '/components/tree' },
];

const servicesNavigationMap: NavigationItem[] = [
  { title: 'Services Overview', route: '/services/services-overview' },
  { title: 'Analytics', route: '/services/analytics' },
  { title: 'Authentication', route: '/services/authentication' },
  {
    title: 'Session Activity Management',
    route: '/services/session-activity-management',
  },
  { title: 'Translations', route: '/services/translations' },
];

export const navigationMap: NavigationItem[] = [
  ...developmentNavigationMap,
  ...componentsNavigationMap,
  ...servicesNavigationMap,
];
