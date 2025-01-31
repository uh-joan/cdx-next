import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageContentComponent } from 'src/app/core/page-content/page-content.component';

import { EnterpriseDesignSystemStrategyComponent } from './enterprise-design-system-strategy.component';

export const routes: Routes = [
  {
    path: '',
    component: EnterpriseDesignSystemStrategyComponent,
  },
];

@NgModule({
  declarations: [EnterpriseDesignSystemStrategyComponent],
  imports: [CommonModule, RouterModule.forChild(routes), PageContentComponent],
})
export class EnterpriseDesignSystemStrategyModule {}
