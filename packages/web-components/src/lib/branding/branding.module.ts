import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterModule } from '@cdx/branding';

import {
  FooterGroupTitleWrapperComponent,
  FooterLinkDirectiveWrapperComponent,
} from './footer';

@NgModule({
  imports: [BrowserModule, BrowserAnimationsModule, FooterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    FooterLinkDirectiveWrapperComponent,
    FooterGroupTitleWrapperComponent,
  ],
})
export class BrandingElementsModule {}
