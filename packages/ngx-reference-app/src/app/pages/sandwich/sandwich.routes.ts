import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SandwichComponent } from './sandwich.component';

const routes: Routes = [
  {
    path: '',
    component: SandwichComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SandwichRoutingModule {}
