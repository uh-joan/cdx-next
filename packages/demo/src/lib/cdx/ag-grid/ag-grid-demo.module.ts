import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';

import { AgGridDemoComponent } from './ag-grid-demo.component';

@NgModule({
  imports: [CommonModule, AgGridAngular],
  declarations: [AgGridDemoComponent],
  exports: [AgGridDemoComponent],
})
export class AgGridDemoModule {}
