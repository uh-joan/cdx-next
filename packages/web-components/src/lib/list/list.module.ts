import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  MatListAvatarWrapperComponent,
  MatListDenseWrapperComponent,
  MatListIconWrapperComponent,
  MatListItemLinkWrapperComponent,
  MatListItemWrapperComponent,
  MatListOptionWrapperComponent,
  MatListSubheaderWrapperComponent,
  MatListWrapperComponent,
  MatNavListWrapperComponent,
} from './list.component';

@NgModule({
  imports: [
    BrowserModule,
    MatListModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatSidenavModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    MatListWrapperComponent,
    MatNavListWrapperComponent,
    MatListAvatarWrapperComponent,
    MatListIconWrapperComponent,
    MatListSubheaderWrapperComponent,
    MatListItemWrapperComponent,
    MatListOptionWrapperComponent,
    MatListItemLinkWrapperComponent,
    MatListDenseWrapperComponent,
  ],
})
export class MatListElementsModule {}
