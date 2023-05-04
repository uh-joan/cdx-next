import { ThemeModule } from '@cdx/theme-angular-material';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { html } from 'common-tags';

import { BreadcrumbDemoModule } from './xng-breadcrumb-demo/xng-breadcrumb-themed.module';

export default {
  title: 'XNG Breadcrumb',
  component: BreadcrumbDemoModule,
  decorators: [
    moduleMetadata({
      imports: [BreadcrumbDemoModule, ThemeModule],
    }),
  ],
} as Meta;

const BreadcrumbTemplate: Story = () => ({
  template: html`<demo-xng-breadcrumb></demo-xng-breadcrumb>`,
});

export const breadcrumb = BreadcrumbTemplate.bind({});
