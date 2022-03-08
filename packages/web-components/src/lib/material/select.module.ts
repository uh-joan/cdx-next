import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { MatCommonModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSelectWrapperComponent } from './select';

@NgModule({
  imports: [
    BrowserModule,
    MatSelectModule,
    MatCommonModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [MatSelectWrapperComponent],
})
export class MatSelectElementsModule {}
