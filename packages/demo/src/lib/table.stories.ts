import { Meta } from '@storybook/angular';

import { DemoModule } from './demo.module';
import { basicTableTemplate } from './tables-demo/table-basic-demo.component';

export default {
  title: 'Table',
  parameters: { docs: { iframeHeight: 700 } },
} as Meta;

export const Table = () => ({
  moduleMetadata: {
    imports: [DemoModule],
  },
  template: `
  <h3>Basic Table</h3>
        <div class="story basic-table">
          <demo-table-basic></demo-table-basic>
        </div>
  `,
});

Table.parameters = {
  docs: {
    source: {
      code: basicTableTemplate,
    },
  },
};
