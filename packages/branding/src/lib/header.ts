import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

import style from './header.scss';

@customElement('cdx-header')
export class Header extends LitElement {
  static get styles() {
    return style;
  }

  protected render() {
    return html`
      <header class="cdx-header">
        <div class="cdx-header__global-bar">
          <div class="cdx-header__logo--clarivate"></div>
          <slot name="cdx-header-global"></slot>
        </div>
        <div class="cdx-header__product-bar">
          <slot name="cdx-header-product-logo"></slot>
          <slot
            name="cdx-header-product-name"
            class="cdx-header__product-name"
          ></slot>
          <slot></slot>
        </div>
      </header>
    `;
  }
}
