export interface NavigationItem {
  title: string;
  route: string;
}

// Mirrors the left navigation of each section; keep in sync when adding pages.

const foundationsNavigationMap: NavigationItem[] = [
  {
    title: 'Principles & foundations',
    route: '/foundations/principles-and-foundations',
  },
  { title: 'Color', route: '/foundations/color' },
  { title: 'Typography', route: '/foundations/typography' },
  { title: 'Iconography', route: '/foundations/iconography' },
  { title: 'Branding', route: '/foundations/branding' },
  { title: 'Elevation', route: '/foundations/elevation' },
  { title: 'Density', route: '/foundations/density' },
  { title: 'AI', route: '/foundations/ai' },
];

const developmentNavigationMap: NavigationItem[] = [
  {
    title: 'Getting Started Overview',
    route: '/development/getting-started-overview',
  },
  {
    title: 'Quick Start New Project',
    route: '/development/quick-start-new-project',
  },
  { title: 'Color tokens', route: '/development/colors' },
  { title: 'Typography tokens', route: '/development/typography' },
  { title: 'Elevation tokens', route: '/development/elevation' },
  { title: 'Density tokens', route: '/development/density' },
  {
    title: 'Responsive Development',
    route: '/development/responsive-development',
  },
  { title: 'Migration Guide', route: '/development/migration-guide' },
  { title: 'Release Notes', route: '/development/release-notes' },
];

const componentsNavigationMap: NavigationItem[] = [
  { title: 'Component overview', route: '/components/components-overview' },
  { title: 'Autocomplete', route: '/components/autocomplete' },
  { title: 'Badge', route: '/components/badge' },
  { title: 'Breadcrumbs', route: '/components/breadcrumbs' },
  { title: 'Button', route: '/components/buttons' },
  { title: 'Button - FAB', route: '/components/fab' },
  { title: 'Button - Icon button', route: '/components/icon-button' },
  { title: 'Button toggle', route: '/components/button-toggle' },
  { title: 'Card', route: '/components/card' },
  { title: 'Checkbox', route: '/components/checkbox' },
  { title: 'Chip', route: '/components/chips' },
  { title: 'Data grid', route: '/components/data-grid' },
  { title: 'Date picker', route: '/components/date-picker' },
  { title: 'Dialog', route: '/components/dialog' },
  { title: 'Divider', route: '/components/divider' },
  {
    title: 'Expansion panel (accordion)',
    route: '/components/expansion-panel',
  },
  { title: 'Footer', route: '/components/footer' },
  { title: 'Form field', route: '/components/form-field' },
  { title: 'Header', route: '/components/header' },
  { title: 'Highcharts', route: '/components/highcharts' },
  { title: 'Hyperlink', route: '/components/hyperlink' },
  { title: 'Icon', route: '/components/icons' },
  { title: 'Input (text field)', route: '/components/text-input' },
  { title: 'List', route: '/components/list' },
  { title: 'Menu', route: '/components/menu' },
  { title: 'Notifications', route: '/components/notifications' },
  { title: 'Paginator', route: '/components/paginator' },
  { title: 'Progress bar', route: '/components/progress-bar' },
  { title: 'Progress spinner', route: '/components/progress-spinner' },
  { title: 'Radio button', route: '/components/radio-button' },
  { title: 'Select', route: '/components/select' },
  { title: 'Sidenav (Navigation drawer)', route: '/components/sidenav' },
  { title: 'Skeleton loader', route: '/components/skeleton-loader' },
  { title: 'Slide toggle (switch)', route: '/components/slide-toggle' },
  { title: 'Slider', route: '/components/slider' },
  { title: 'Snackbar', route: '/components/snackbar' },
  { title: 'Sort header', route: '/components/sort-header' },
  { title: 'Stepper', route: '/components/stepper' },
  { title: 'Table and data grid', route: '/components/table' },
  { title: 'Tabs', route: '/components/tabs' },
  { title: 'Text area', route: '/components/text-area' },
  { title: 'Time picker', route: '/components/time-picker' },
  { title: 'Toolbar', route: '/components/toolbar' },
  { title: 'Tooltip', route: '/components/tooltips' },
  { title: 'Tree', route: '/components/tree' },
];

const patternsNavigationMap: NavigationItem[] = [
  { title: 'Filters pattern', route: '/patterns/filters' },
  { title: 'Basic filters', route: '/patterns/filters/basic-filters' },
  { title: 'Filter modal', route: '/patterns/filters/filter-modal' },
  { title: 'Filter panel', route: '/patterns/filters/filter-panel' },
  { title: 'Sidebar pattern', route: '/patterns/sidebar' },
  {
    title: 'Header with navigation and sidebar',
    route: '/patterns/sidebar/header-with-navigation',
  },
  { title: 'Nested navigation', route: '/patterns/sidebar/nested-navigation' },
  {
    title: 'Products working best with sidebar',
    route: '/patterns/sidebar/products',
  },
  { title: 'Page states', route: '/patterns/page-states' },
  { title: 'Empty state', route: '/patterns/page-states' },
  { title: 'Error state', route: '/patterns/page-states' },
  { title: 'Loading skeleton', route: '/patterns/page-states' },
];

const servicesNavigationMap: NavigationItem[] = [
  { title: 'Services Overview', route: '/services/services-overview' },
  { title: 'Analytics', route: '/services/analytics' },
  { title: 'Authentication', route: '/services/authentication' },
  {
    title: 'Session Activity Management',
    route: '/services/session-activity-management',
  },
  { title: 'OTI snippet', route: '/services/oti-snippet' },
  { title: 'Translations', route: '/services/translations' },
];

export const navigationMap: NavigationItem[] = [
  ...foundationsNavigationMap,
  ...developmentNavigationMap,
  ...componentsNavigationMap,
  ...patternsNavigationMap,
  ...servicesNavigationMap,
];
