import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatBadgeIconComponent, MatBadgeSpanComponent } from './badge';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatBadgeModule,
    MatIconModule,
  ],
  declarations: [MatBadgeSpanComponent, MatBadgeIconComponent],
})
export class MatBadgeElementsModule {}
