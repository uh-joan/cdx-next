import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonComponent } from './mat-button.component';
import { MatButtonLinkComponent } from './mat-button-link.component';
import { MatFabButtonComponent } from './mat-fab-button.component';
import { MatFabButtonLinkComponent } from './mat-fab-button-link.component';
import { MatFlatButtonComponent } from './mat-flat-button.component';
import { MatFlatButtonLinkComponent } from './mat-flat-button-link.component';
import { MatIconButtonComponent } from './mat-icon-button.component';
import { MatMiniFabButtonComponent } from './mat-mini-fab-button.component';
import { MatMiniFabButtonLinkComponent } from './mat-mini-fab-button-link.component';
import { MatRaisedButtonComponent } from './mat-raised-button.component';
import { MatRaisedButtonLinkComponent } from './mat-raised-button-link.component';
import { MatStrokedButtonComponent } from './mat-stroked-button.component';
import { MatStrokedButtonLinkComponent } from './mat-stroked-button-link.component';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    BrowserAnimationsModule,
    BrowserModule,
  ],
  declarations: [
    MatButtonComponent,
    MatRaisedButtonComponent,
    MatStrokedButtonComponent,
    MatFlatButtonComponent,
    MatIconButtonComponent,
    MatFabButtonComponent,
    MatMiniFabButtonComponent,
    MatButtonLinkComponent,
    MatRaisedButtonLinkComponent,
    MatStrokedButtonLinkComponent,
    MatFlatButtonLinkComponent,
    MatFabButtonLinkComponent,
    MatMiniFabButtonLinkComponent,
  ],
})
export class MatButtonsElementsModule {}
