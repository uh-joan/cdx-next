import { MatRadioModule } from '@angular/material/radio';
import { ThemeModule } from '@cdx/theme-angular-material';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { html } from 'common-tags';

export default {
  title: 'Radio Button',
  component: MatRadioModule,
  decorators: [
    moduleMetadata({
      imports: [MatRadioModule, ThemeModule],
    }),
  ],
} as Meta;

const RadioButtonTemplate: Story = () => ({
  template: html`
    <h3>Radio Button</h3>
    <div class="story story--sections">
      <div class="story__section">
        <h3>Radio Buttons</h3>
        <div class="story__section__content">
          <mat-radio-group role="radiogroup" class="columns">
            <mat-radio-button color="primary" value="1" role="radio" checked
              >Option 1</mat-radio-button
            >
            <mat-radio-button color="primary" value="2" role="radio"
              >Option 2</mat-radio-button
            >
          </mat-radio-group>
        </div>
      </div>
      <div class="story__section">
        <h3>Disabled Radio Buttons</h3>
        <div class="story__section__content">
          <mat-radio-group role="radiogroup" class="columns">
            <mat-radio-button
              color="primary"
              value="1"
              role="radio"
              checked
              disabled
              >Option 1</mat-radio-button
            >
            <mat-radio-button color="primary" value="2" role="radio" disabled
              >Option 2</mat-radio-button
            >
          </mat-radio-group>
        </div>
      </div>
    </div>
  `,
});

export const radioButton = RadioButtonTemplate.bind({});
