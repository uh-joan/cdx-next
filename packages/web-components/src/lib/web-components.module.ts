import { CommonModule } from '@angular/common';
import {
  CUSTOM_ELEMENTS_SCHEMA,
  DoBootstrap,
  Injector,
  NgModule,
} from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';

import { MatButtonComponent } from './mat-buttons/mat-button.component';
import { MatButtonLinkComponent } from './mat-buttons/mat-button-link.component';
import { MatButtonsElementsModule } from './mat-buttons/mat-buttons-elements.module';
import { MatFabButtonComponent } from './mat-buttons/mat-fab-button.component';
import { MatFabButtonLinkComponent } from './mat-buttons/mat-fab-button-link.component';
import { MatFlatButtonComponent } from './mat-buttons/mat-flat-button.component';
import { MatFlatButtonLinkComponent } from './mat-buttons/mat-flat-button-link.component';
import { MatIconButtonComponent } from './mat-buttons/mat-icon-button.component';
import { MatMiniFabButtonComponent } from './mat-buttons/mat-mini-fab-button.component';
import { MatMiniFabButtonLinkComponent } from './mat-buttons/mat-mini-fab-button-link.component';
import { MatRaisedButtonComponent } from './mat-buttons/mat-raised-button.component';
import { MatRaisedButtonLinkComponent } from './mat-buttons/mat-raised-button-link.component';
import { MatStrokedButtonComponent } from './mat-buttons/mat-stroked-button.component';
import { MatStrokedButtonLinkComponent } from './mat-buttons/mat-stroked-button-link.component';
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
import { MatProgressBarComponent } from './mat-progress-bar/mat-progress-bar-element.component';
import { MatProgressBarElementsModule } from './mat-progress-bar/mat-progress-bar-elements.module';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    MatCardsElementsModule,
    MatButtonsElementsModule,
    MatProgressBarElementsModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class WebComponentsModule implements DoBootstrap {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    this.addMatCardsComponents();
    this.addMatButtonsComponents();
    this.addComp(MatProgressBarComponent, 'c-mat-progress-bar');
  }

  private addMatCardsComponents() {
    this.addComp(MatCardWrapperComponent, 'c-mat-card');
    this.addComp(MatCardTitleComponent, 'c-mat-card-title');
    this.addComp(MatCardSubtitleComponent, 'c-mat-card-subtitle');
    this.addComp(MatCardContentComponent, 'c-mat-card-content');
    this.addComp(MatCardFooterComponent, 'c-mat-card-footer');
    this.addComp(MatCardActionsComponent, 'c-mat-card-actions');
    this.addComp(MatCardHeaderComponent, 'c-mat-card-header');
    this.addComp(MatCardTitleGroupComponent, 'c-mat-card-title-group');
    this.addComp(MatCardImageComponent, 'c-mat-card-image');
    this.addComp(MatCardAvatarComponent, 'c-mat-card-avatar');
    this.addComp(MatCardSmImageComponent, 'c-mat-card-sm-image');
    this.addComp(MatCardMdImageComponent, 'c-mat-card-md-image');
    this.addComp(MatCardLgImageComponent, 'c-mat-card-lg-image');
    this.addComp(MatCardXlImageComponent, 'c-mat-card-xl-image');
  }

  private addMatButtonsComponents() {
    this.addComp(MatButtonLinkComponent, 'c-mat-button-link');
    this.addComp(MatButtonComponent, 'c-mat-button');
    this.addComp(MatFabButtonLinkComponent, 'c-mat-fab-button-link');
    this.addComp(MatFabButtonComponent, 'c-mat-fab-button');
    this.addComp(MatFlatButtonLinkComponent, 'c-mat-flat-button-link');
    this.addComp(MatFlatButtonComponent, 'c-mat-flat-button');
    this.addComp(MatIconButtonComponent, 'c-mat-icon-button');
    this.addComp(MatMiniFabButtonLinkComponent, 'c-mat-mini-fab-button-link');
    this.addComp(MatMiniFabButtonComponent, 'c-mat-mini-fab-button');
    this.addComp(MatRaisedButtonLinkComponent, 'c-mat-raised-button-link');
    this.addComp(MatRaisedButtonComponent, 'c-mat-raised-button');
    this.addComp(MatStrokedButtonLinkComponent, 'c-mat-stroked-button-link');
    this.addComp(MatStrokedButtonComponent, 'c-mat-stroked-button');
  }

  private addComp(component: any, name: string): void {
    customElements.define(
      name,
      createCustomElement(component, { injector: this.injector }),
    );
  }
}
