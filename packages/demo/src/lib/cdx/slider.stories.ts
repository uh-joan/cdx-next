import { MatSliderModule } from '@angular/material/slider';
import { ThemeModule } from '@cdx/theme-angular-material';
import { Meta, moduleMetadata, StoryFn } from '@storybook/angular';
import { html } from 'common-tags';

export default {
  title: 'base/Slider',
  component: MatSliderModule,
  decorators: [
    moduleMetadata({
      imports: [MatSliderModule, ThemeModule],
    }),
  ],
} as Meta;

const SliderTemplate: StoryFn = () => ({
  template: html`
    <h3>Basic Slider</h3>
    <div class="story mat-typography">
      <mat-slider> <input matSliderThumb /> </mat-slider>
    </div>
  `,
});

const DisabledSliderTemplate: StoryFn = () => ({
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
          <input matSliderThumb />
        </mat-slider>
      </div>
    </ng-container>
  `,
});

const SliderWithNumberTemplate: StoryFn = () => ({
  template: html`
    <h3>Slider With Number Label</h3>
    <div class="story">
      <mat-slider
        color="primary"
        discrete="true"
        title="slider with volume options"
        min="0"
        max="100"
        step="1"
      >
        <input matSliderThumb />
      </mat-slider>
    </div>
  `,
});

const SliderRangeTemplate: StoryFn = () => ({
  template: html`
    <h3>Range Slider</h3>
    <div class="story">
      <mat-slider
        color="primary"
        title="range slider"
        min="0"
        max="100"
        step="1"
      >
        <input matSliderStartThumb />
        <input matSliderEndThumb />
      </mat-slider>
    </div>
  `,
});

export const slider = SliderTemplate.bind({});
export const disabledSlider = DisabledSliderTemplate.bind({});
export const sliderWithNumber = SliderWithNumberTemplate.bind({});
export const SliderRange = SliderRangeTemplate.bind({});
