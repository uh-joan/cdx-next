import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AgGridModule } from 'ag-grid-angular';

import { AgGridDemoComponent } from './ag-grid-demo.component';

@NgModule({
  imports: [CommonModule, AgGridModule],
  declarations: [AgGridDemoComponent],
  exports: [AgGridDemoComponent],
})
export class AgGridDemoModule {}
