import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { BrowserModule } from '@angular/platform-browser';

import { MatProgressSpinnerElementComponent } from './mat-progress-spinner-element.component';

@NgModule({
  imports: [
    CommonModule,
    MatMenuModule,
    BrowserModule,
    MatProgressSpinnerModule,
  ],
  declarations: [MatProgressSpinnerElementComponent],
})
export class MatSpinnerElementsModule {}
