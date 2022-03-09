import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  MatChipInputWrapperComponent,
  MatChipListWrapperComponent,
  MatChipRemoveWrapperComponent,
  MatChipWrapperComponent,
} from './chips';

@NgModule({
  imports: [
    BrowserModule,
    MatChipsModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatFormFieldModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    MatChipInputWrapperComponent,
    MatChipListWrapperComponent,
    MatChipWrapperComponent,
    MatChipRemoveWrapperComponent,
  ],
})
export class MatChipsElementsModule {}
