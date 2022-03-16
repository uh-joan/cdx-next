import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatPaginatorWrapperComponent } from './paginator';

@NgModule({
  imports: [BrowserModule, MatPaginatorModule, BrowserAnimationsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [MatPaginatorWrapperComponent],
})
export class MatChipsElementsModule {}
