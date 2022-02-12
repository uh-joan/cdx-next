import { Meta, moduleMetadata, Story } from '@storybook/angular';

import { DemoModule } from './demo.module';
import { InputDemoComponent } from './input-demo/input-demo.component';

export default {
  title: 'Sprint 1/Components/Input',
  component: InputDemoComponent,
  decorators: [
    moduleMetadata({
      imports: [DemoModule],
    }),
  ],
  argTypes: {
    fontSize: {
      control: { type: 'range', min: 10, max: 16, step: 1 },
    },
  },
} as Meta;

const InputStory: Story = (args) => ({
  props: args,
  template: `
    <div class="mat-typography">
      <demo-input
        *ngFor="let appearance of ['outline', 'standard', 'fill']"
        [appearance]="appearance"
        [fontSize]="fontSize">
      </demo-input>
    </div>
  `,
});

export const FromMaterial = InputStory.bind({});
FromMaterial.parameters = {
  controls: { hideNoControlsWarning: true },
};
FromMaterial.args = {
  fontSize: 16,
};
