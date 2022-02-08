import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

/** @title Disabled select */
@Component({
  selector: 'cdx-next-select-disabled-demo',
  templateUrl: 'select-disabled-demo.component.html',
})
export class SelectDisabledDemoComponent {
  @Input()
  appearance = 'fill';

  disableSelect = new FormControl(false);
}
