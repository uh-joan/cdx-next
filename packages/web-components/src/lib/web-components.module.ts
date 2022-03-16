import { CommonModule } from '@angular/common';
import {
  CUSTOM_ELEMENTS_SCHEMA,
  DoBootstrap,
  Injector,
  NgModule,
} from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { MatDivider } from '@angular/material/divider';
import { MatIcon } from '@angular/material/icon';
import { BrowserModule } from '@angular/platform-browser';
import {
  FooterComponent,
  FooterGroupComponent,
  FooterModule,
  HeaderComponent,
  HeaderGlobalComponent,
  HeaderGlobalUserProfileComponent,
  HeaderProductNameOrLogoComponent,
} from '@cdx/branding';

import { BrandingElementsModule } from './branding/branding.module';
import {
  FooterGroupTitleWrapperComponent,
  FooterLinkDirectiveWrapperComponent,
} from './branding/footer';
import { MatLineWrapperComponent } from './core/line';
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
} from './list/list.component';
import { MatListElementsModule } from './list/list.module';
import {
  MatBadgeIconComponent,
  MatBadgeSpanComponent,
} from './mat-badge/badge';
import { MatBadgeElementsModule } from './mat-badge/badge.module';
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
import { MatCheckboxElementComponent } from './mat-checkbox/mat-checkbox-element.component';
import { MatCheckboxElementsModule } from './mat-checkbox/mat-checkbox-elements.module';
import {
  MatChipInputWrapperComponent,
  MatChipListWrapperComponent,
  MatChipRemoveWrapperComponent,
  MatChipWrapperComponent,
} from './mat-chips/chips';
import { MatChipsElementsModule } from './mat-chips/chips.module';
import { FormFieldInputComponent } from './mat-forms-elements/mat-input.component';
import { MatFormsElementsModule } from './mat-forms-elements/mat-input-elements.module';
import { MatProgressBarComponent } from './mat-progress-bar/mat-progress-bar-element.component';
import { MatProgressBarElementsModule } from './mat-progress-bar/mat-progress-bar-elements.module';
import { MatRadioButtonElementsModule } from './mat-radio-button/mat-radio-button-elements.module';
import { MatRadioButtonItemComponent } from './mat-radio-button/mat-radio-button-item-element.component';
import { MatRadioButtonWrapperComponent } from './mat-radio-button/mat-radio-button-wrapper-element.component';
import { MatSlideToggleElementComponent } from './mat-slide-toggle/mat-slide-toggle-element.component';
import { MatSlideToggleElementsModule } from './mat-slide-toggle/mat-slide-toggle-elements.module';
import { MatProgressSpinnerElementComponent } from './mat-spinner/mat-progress-spinner-element.component';
import { MatSpinnerElementsModule } from './mat-spinner/mat-spinner-elements.module';
import { MatSelectWrapperComponent } from './material/select';
import { MatSelectElementsModule } from './material/select.module';
import { MatPaginatorWrapperComponent } from './table/paginator';
import { MatTableElementsModule } from './table/table.module';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    MatCardsElementsModule,
    MatChipsElementsModule,
    MatButtonsElementsModule,
    MatProgressBarElementsModule,
    FooterModule,
    BrandingElementsModule,
    MatSpinnerElementsModule,
    MatSlideToggleElementsModule,
    MatRadioButtonElementsModule,
    MatCheckboxElementsModule,
    MatFormsElementsModule,
    MatBadgeElementsModule,
    MatSelectElementsModule,
    MatListElementsModule,
    MatTableElementsModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class WebComponentsModule implements DoBootstrap {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    this.addMatCardsComponents();
    this.addMatButtonsComponents();
    this.addMatChipsComponents();
    this.addComp(MatProgressBarComponent, 'c-mat-progress-bar');
    this.addComp(MatProgressSpinnerElementComponent, 'c-mat-progress-spinner');
    this.addComp(MatSlideToggleElementComponent, 'c-mat-slide-toggle');
    this.addComp(MatCheckboxElementComponent, 'c-mat-checkbox');
    this.addBrandingComponents();
    this.addMatRadioButtonComponents();
    this.addMatBadgeComponents();
    this.addListComponents();
    this.addMatTableComponents();
  }

  private addListComponents() {
    this.addComp(MatListWrapperComponent, 'c-mat-list');
    this.addComp(MatListDenseWrapperComponent, 'c-mat-list-dense');
    this.addComp(MatListItemWrapperComponent, 'c-mat-list-item');
    this.addComp(MatListItemLinkWrapperComponent, 'c-mat-list-item-link');
    this.addComp(MatListSubheaderWrapperComponent, 'c-mat-list-subheader');
    //TODO: Mat line not propagating clicks down
    this.addComp(MatLineWrapperComponent, 'c-mat-line');
    this.addComp(MatListIconWrapperComponent, 'c-mat-list-icon');
    this.addComp(MatListAvatarWrapperComponent, 'c-mat-list-avatar');
    this.addComp(MatListOptionWrapperComponent, 'c-mat-list-option');
    this.addComp(MatDivider, 'c-mat-divider');
    this.addComp(MatNavListWrapperComponent, 'c-mat-nav-list');
  }

  private addBrandingComponents() {
    this.addComp(FooterComponent, 'c-footer');
    this.addComp(FooterGroupComponent, 'c-footer-group');
    this.addComp(FooterGroupTitleWrapperComponent, 'c-footer-group-title');
    this.addComp(FooterLinkDirectiveWrapperComponent, 'c-footer-link');

    this.addComp(HeaderComponent, 'c-header');
    this.addComp(HeaderGlobalComponent, 'cdx-header-global'); //TODO Check this targeted content projection
    this.addComp(HeaderProductNameOrLogoComponent, 'c-header-product-name');
    this.addComp(
      HeaderGlobalUserProfileComponent,
      'c-header-global-user-profile',
    );
    this.addComp(MatIcon, 'c-mat-icon');
    this.addComp(FormFieldInputComponent, 'c-form-field-input');
    this.addMatSelectComponents();
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

  private addMatChipsComponents() {
    this.addComp(MatChipInputWrapperComponent, 'c-mat-chip-input');
    this.addComp(MatChipWrapperComponent, 'c-mat-chip');
    this.addComp(MatChipListWrapperComponent, 'c-mat-chip-list');
    this.addComp(MatChipRemoveWrapperComponent, 'c-mat-chip-remove');
  }

  private addMatBadgeComponents() {
    this.addComp(MatBadgeIconComponent, 'c-mat-badge-icon');
    this.addComp(MatBadgeSpanComponent, 'c-mat-badge-span');
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

  private addMatRadioButtonComponents() {
    this.addComp(MatRadioButtonItemComponent, 'c-radio-button-item');
    this.addComp(MatRadioButtonWrapperComponent, 'c-radio-button-wrapper');
  }

  private addMatSelectComponents() {
    this.addComp(MatSelectWrapperComponent, 'c-mat-select');
  }

  private addMatTableComponents() {
    this.addComp(MatPaginatorWrapperComponent, 'c-mat-paginator');
  }

  private addComp(component: any, name: string): void {
    customElements.define(
      name,
      createCustomElement(component, { injector: this.injector }),
    );
  }
}
