import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AgGridModule } from 'ag-grid-angular';

import { AgGridDemoComponent } from './ag-grid-demo.component';

@NgModule({
  imports: [CommonModule, AgGridModule, HttpClientModule],
  declarations: [AgGridDemoComponent],
  exports: [AgGridDemoComponent],
})
export class AgGridDemoModule {}
