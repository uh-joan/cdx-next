import { Component, HostBinding } from '@angular/core';

import { PagesCommonModule } from '../../pages-common.module';
import * as samples from './examples';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
  imports: [PagesCommonModule],
})
export class StepperComponent {
  @HostBinding('class') hostClass = 'cdx-section';

  sampleList = Object.values(samples);
}
