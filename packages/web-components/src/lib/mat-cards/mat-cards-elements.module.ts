import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  MatCardActionsComponent,
  MatCardAvatarComponent,
  MatCardContentComponent,
  MatCardFooterComponent,
  MatCardHeaderComponent,
  MatCardImageComponent,
  MatCardLgImageComponent,
  MatCardMdImageComponent,
  MatCardSmImageComponent,
  MatCardSubtitleComponent,
  MatCardTitleComponent,
  MatCardTitleGroupComponent,
  MatCardWrapperComponent,
  MatCardXlImageComponent,
} from './mat-card';

@NgModule({
  imports: [BrowserModule, MatCardModule, BrowserAnimationsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    MatCardTitleComponent,
    MatCardSubtitleComponent,
    MatCardContentComponent,
    MatCardFooterComponent,
    MatCardWrapperComponent,
    MatCardActionsComponent,
    MatCardHeaderComponent,
    MatCardTitleGroupComponent,
    MatCardImageComponent,
    MatCardAvatarComponent,
    MatCardSmImageComponent,
    MatCardMdImageComponent,
    MatCardLgImageComponent,
    MatCardXlImageComponent,
  ],
})
export class MatCardsElementsModule {}
