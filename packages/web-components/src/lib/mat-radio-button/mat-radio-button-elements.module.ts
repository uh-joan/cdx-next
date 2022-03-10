import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { BrowserModule } from '@angular/platform-browser';

import { MatRadioButtonItemComponent } from './mat-radio-button-item-element.component';
import { MatRadioButtonWrapperComponent } from './mat-radio-button-wrapper-element.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    MatRadioModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [MatRadioButtonWrapperComponent, MatRadioButtonItemComponent],
})
export class MatRadioButtonElementsModule {}
