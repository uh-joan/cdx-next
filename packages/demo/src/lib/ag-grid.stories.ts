import { MatCheckboxModule } from '@angular/material/checkbox';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { html } from 'common-tags';

import { AgGridDemoModule } from './ag-grid/ag-grid-demo.module';

export default {
  title: 'AgGrid',
  component: MatCheckboxModule,
  decorators: [
    moduleMetadata({
      imports: [AgGridDemoModule],
    }),
  ],
} as Meta;

const AgGridTemplate: Story = () => ({
  template: html` <demo-ag-grid></demo-ag-grid> `,
});

export const AgGrid = AgGridTemplate.bind({});
