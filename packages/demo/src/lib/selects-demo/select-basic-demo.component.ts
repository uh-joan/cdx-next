import { Component, Input } from '@angular/core';

interface Food {
  value: string;
  viewValue: string;
}

/**
 * @title Basic select
 */
@Component({
  selector: 'cdx-next-select-basic-demo',
  templateUrl: 'select-basic-demo.component.html',
})
export class SelectBasicDemoComponent {
  @Input()
  appearance = 'fill';

  foods: Food[] = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' },
  ];
}
