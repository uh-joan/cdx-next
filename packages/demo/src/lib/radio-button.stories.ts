import { MatRadioModule } from '@angular/material/radio';
import { ThemeModule } from '@cdx/theme/material';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { html } from 'common-tags';

export default {
  title: 'Sprint 1/Components/Radio Button',
  decorators: [
    moduleMetadata({
      imports: [MatRadioModule, ThemeModule],
    }),
  ],
} as Meta;

const FromMaterialTemplate: Story = () => ({
  template: html`
    <div class="mat-typography radio-button-story">
      <mat-radio-group aria-label="Select an option">
        <mat-radio-button value="1" checked>Option 1</mat-radio-button>
        <mat-radio-button value="2">Option 2</mat-radio-button>
        <mat-radio-button value="3" disabled>Option 3</mat-radio-button>
      </mat-radio-group>
    </div>
  `,
});

export const FromMaterial = FromMaterialTemplate.bind({});
