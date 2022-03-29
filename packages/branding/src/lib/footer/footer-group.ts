import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import style from './footer-group.scss';

@customElement('cdx-footer-group')
export class FooterGroupComponent extends LitElement {
  static get styles() {
    return [style];
  }

  @property({ type: String })
  groupTitle?: string;

  override firstUpdated() {
    this._anchors.forEach((anchor: HTMLAnchorElement) => {
      anchor.target = '_blank';
      anchor.rel = 'noopener noreferrer';
    });
  }

  private get _anchors() {
    const slot: HTMLSlotElement =
      this.shadowRoot.querySelector('slot:not([name])');
    return slot.assignedElements().filter((node) => node.matches('a'));
  }

  override render() {
    return html`
      <div class="cdx-footer__group">
        ${this.groupTitle &&
        html`<div class="cdx-footer__group-title">${this.groupTitle}</div>`}
        <slot></slot>
      </div>
    `;
  }
}
