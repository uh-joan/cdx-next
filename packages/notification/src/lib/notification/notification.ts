import { html, LitElement, TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import style from './notification.scss';

export const NOTIFICATION_ICON = {
  info: 'info_outline',
  warn: 'warning',
  success: 'check_circle',
};

@customElement('cdx-wc-notification')
export class NotificationWComponent extends LitElement {
  static get styles() {
    return [style];
  }

  constructor() {
    super();
  }

  @property({ type: String })
  presentation: 'inline' | 'banner' = 'inline';

  @property({ type: String })
  severity: 'info' | 'success' | 'warn' = 'info';

  @property({ type: String })
  title: string;

  @property({ type: Boolean, reflect: true })
  dismissable = false;

  @property({ type: String })
  action?: string;

  protected render(): TemplateResult {
    this.classList.add(
      'cdx-wc-notification--' + this.presentation,
      'cdx-wc-notification--' + this.severity,
    );

    return html`
      <div class="cdx-wc-notification__icon">
        <slot name="icon">
          <mwc-icon>${NOTIFICATION_ICON[this.severity]}</mwc-icon>
        </slot>
      </div>
      <div class="cdx-wc-notification__content">
        ${
          this.title
            ? html`<div class="cdx-wc-notification__title">${this.title}</div>`
            : html``
        }
        <slot> </slot>

        ${
          this.presentation === 'inline'
            ? html`
                ${html` <div class="cdx-wc-notification__actions">
                  ${this.action
                    ? html`
                        <mwc-button @click="${this.onAction}"
                          >${this.action}</mwc-button
                        >
                      `
                    : html``}
                  <slot name="actions"></slot>
                </div>`}
              `
            : html``
        }
      </div>

      ${
        this.presentation === 'banner'
          ? html`<div class="cdx-wc-notification__actions">
              ${this.dismissable
                ? html` <mwc-button @click="${this.onDismiss}"
                    >Dismiss</mwc-button
                  >`
                : html``}
              <slot name="actions"></slot>
              ${this.action
                ? html`
                    <mwc-button @click="${this.onAction}"
                      >${this.action}</mwc-button
                    >
                  `
                : html``}
            </div>`
          : html``
      }
      
        ${
          this.dismissable && this.presentation === 'inline'
            ? html`<div class="cdx-wc-notification__icon">
                <mwc-button @click="${this.onDismiss}">
                  <mwc-icon>close</mwc-icon>
                </mwc-button>
              </div>`
            : html``
        }
      </div>
    `;
  }

  private onDismiss() {
    const event = new CustomEvent('dismiss', {
      detail: { message: this.title + 'dismiss' },
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(event);

    this.classList.add('dissmissed');
  }

  private onAction() {
    const event = new CustomEvent('action', {
      detail: { message: this.action },
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(event);
  }
}
