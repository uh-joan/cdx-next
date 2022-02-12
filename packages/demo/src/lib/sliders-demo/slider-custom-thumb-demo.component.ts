import { Component } from '@angular/core';

/**
 * @title Slider with custom thumb label formatting.
 */
@Component({
  selector: 'demo-slider-custom-thumb',
  templateUrl: 'slider-custom-thumb-demo.component.html',
})
export class SliderCustomThumbComponent {
  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return value;
  }
}
