import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { BrowserModule } from '@angular/platform-browser';

import { MatCheckboxElementComponent } from './mat-checkbox-element.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [MatCheckboxElementComponent],
})
export class MatCheckboxElementsModule {}
