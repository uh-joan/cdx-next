import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

/** @title Select with multiple selection */
@Component({
  selector: 'cdx-next-select-multiple-selection-demo',
  templateUrl: 'select-multiple-selection-demo.component.html',
})
export class SelectMultipleSelectionDemoComponent {
  @Input()
  appearance = 'fill';

  toppings = new FormControl();
  toppingList: string[] = [
    'Extra cheese',
    'Mushroom',
    'Onion',
    'Pepperoni',
    'Sausage',
    'Tomato',
  ];
}
