import { Component } from '@angular/core';

/**
 * @title Configurable slider
 */
@Component({
  selector: 'demo-slider-configurable',
  templateUrl: 'slider-configurable-demo.component.html',
})
export class SliderConfigurableDemoComponent {
  autoTicks = false;
  disabled = false;
  invert = false;
  max = 100;
  min = 0;
  showTicks = false;
  step = 1;
  thumbLabel = false;
  value = 0;
  vertical = false;
  tickInterval = 1;

  getSliderTickInterval(): number | 'auto' {
    if (this.showTicks) {
      return this.autoTicks ? 'auto' : this.tickInterval;
    }

    return 0;
  }
}
