import { CommonModule } from '@angular/common';
import {
  CUSTOM_ELEMENTS_SCHEMA,
  DoBootstrap,
  Injector,
  NgModule,
} from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';

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
} from './mat-cards/mat-card';
import { MatCardsElementsModule } from './mat-cards/mat-cards-elements.module';

@NgModule({
  imports: [CommonModule, BrowserModule, MatCardsElementsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class WebComponentsModule implements DoBootstrap {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    this.addComponentWithName(MatCardWrapperComponent, 'c-mat-card');
    this.addComponentWithName(MatCardTitleComponent, 'c-mat-card-title');
    this.addComponentWithName(MatCardSubtitleComponent, 'c-mat-card-subtitle');
    this.addComponentWithName(MatCardContentComponent, 'c-mat-card-content');
    this.addComponentWithName(MatCardFooterComponent, 'c-mat-card-footer');
    this.addComponentWithName(MatCardActionsComponent, 'c-mat-card-actions');
    this.addComponentWithName(MatCardHeaderComponent, 'c-mat-card-header');
    this.addComponentWithName(
      MatCardTitleGroupComponent,
      'c-mat-card-title-group',
    );
    this.addComponentWithName(MatCardImageComponent, 'c-mat-card-image');
    this.addComponentWithName(MatCardAvatarComponent, 'c-mat-card-avatar');
    this.addComponentWithName(MatCardSmImageComponent, 'c-mat-card-sm-image');
    this.addComponentWithName(MatCardMdImageComponent, 'c-mat-card-md-image');
    this.addComponentWithName(MatCardLgImageComponent, 'c-mat-card-lg-image');
    this.addComponentWithName(MatCardXlImageComponent, 'c-mat-card-xl-image');
  }

  private addComponentWithName(component: any, name: string): void {
    customElements.define(
      name,
      createCustomElement(component, { injector: this.injector }),
    );
  }
}
