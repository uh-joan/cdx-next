import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { BrowserModule } from '@angular/platform-browser';

import { MatSlideToggleElementComponent } from './mat-slide-toggle-element.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    MatSlideToggleModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [MatSlideToggleElementComponent],
})
export class MatSlideToggleElementsModule {}
