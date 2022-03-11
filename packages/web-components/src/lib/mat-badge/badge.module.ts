import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatBadgeIconComponent, MatBadgeSpanComponent } from './badge';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatBadgeModule,
  ],
  declarations: [MatBadgeSpanComponent, MatBadgeIconComponent],
})
export class MatBadgeElementsModule {}
