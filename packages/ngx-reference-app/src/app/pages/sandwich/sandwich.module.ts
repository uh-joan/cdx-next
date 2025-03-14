import { NgModule } from '@angular/core';

import { SandwichComponent } from './sandwich.component';
import { SandwichRoutingModule } from './sandwich.routes';

@NgModule({
  imports: [SandwichRoutingModule, SandwichComponent],
  exports: [SandwichComponent],
})
export class SandwichModule {}
