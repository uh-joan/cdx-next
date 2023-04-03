import { MatSliderModule } from '@angular/material/slider';
import { ThemeModule } from '@cdx/theme-angular-material';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { html } from 'common-tags';

export default {
  title: 'Slider',
  component: MatSliderModule,
  decorators: [
    moduleMetadata({
      imports: [MatSliderModule, ThemeModule],
    }),
  ],
} as Meta;

const SliderTemplate: Story = () => ({
  template: html`
    <ng-container>
      <h3>Basic Slider</h3>
      <div class="story mat-typography">
        <mat-slider color="primary"> </mat-slider>
      </div>
    </ng-container>
  `,
});

const DisabledSliderTemplate: Story = () => ({
  template: html`
    <ng-container>
      <h3>Disabled Slider</h3>
      <div class="story">
        <mat-slider
          color="primary"
          disabled="true"
          thumbLabel
          title="slider with volume options"
          min="0"
          max="100"
          step="1"
        >
        </mat-slider>
      </div>
    </ng-container>
  `,
});

const SliderWithNumberTemplate: Story = () => ({
  template: html`
    <ng-container>
      <h3>Slider With Number Label</h3>
      <div class="story">
        <mat-slider
          color="primary"
          thumbLabel
          title="slider with volume options"
          min="0"
          max="100"
          step="1"
        >
        </mat-slider>
      </div>
    </ng-container>
  `,
});

export const slider = SliderTemplate.bind({});
export const disabledSlider = DisabledSliderTemplate.bind({});
export const sliderWithNumber = SliderWithNumberTemplate.bind({});
