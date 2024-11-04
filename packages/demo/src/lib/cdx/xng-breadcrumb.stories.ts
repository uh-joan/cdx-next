import { ThemeModule } from '@cdx/theme-angular-material';
import { Meta, moduleMetadata, StoryFn } from '@storybook/angular';
import { html } from 'common-tags';

import { XngBreadcrumbThemedComponent } from './xng-breadcrumb-demo/xng-breadcrumb-themed.component';
import { BreadcrumbDemoModule } from './xng-breadcrumb-demo/xng-breadcrumb-themed.module';

export default {
  title: 'cdx/XNG Breadcrumb',
  component: XngBreadcrumbThemedComponent,
  decorators: [
    moduleMetadata({
      imports: [BreadcrumbDemoModule, ThemeModule],
    }),
  ],
} as Meta;

const BreadcrumbTemplate: StoryFn = () => ({
  template: html`<demo-xng-breadcrumb></demo-xng-breadcrumb>`,
});

export const breadcrumb = BreadcrumbTemplate.bind({});
