import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import style from './footer.scss';

@customElement('cdx-footer')
export class FooterComponent extends LitElement {
  static get styles() {
    return [style];
  }

  @property({ type: Boolean })
  groupCompanyLinks = false;

  @property({ type: Boolean })
  cookieManagementEnabled: false;

  override firstUpdated() {
    [...this._anchors, ...this._slottedAnchors].forEach(
      (anchor: HTMLAnchorElement) => {
        anchor.target = '_blank';
        anchor.rel = 'noopener noreferrer';
      },
    );
  }

  private get _anchors() {
    const anchors: HTMLElement = this.shadowRoot.querySelector(
      '.cdx-footer__content',
    );
    return Array.from(anchors.children).filter((node) => node.matches('a'));
  }

  private get _slottedAnchors() {
    const slot: HTMLSlotElement =
      this.shadowRoot.querySelector('slot:not([name])');
    return slot.assignedElements().filter((node) => node.matches('a'));
  }

  handleManageCookiePreferencesClick(): void {
    this.manageCookiePreferences();
  }

  handleManageCookiePreferencesKeydown(event: KeyboardEvent) {
    if (event.key === ' ' || event.key === 'Enter') {
      this.manageCookiePreferences();
    }
  }

  private manageCookiePreferences(): void {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).OneTrust.ToggleInfoDisplay();
  }

  protected render() {
    const companyLinks = html`
      <a href="https://clarivate.com/legal-center/">Legal center</a>
      <a href="https://clarivate.com/privacy-center/">Privacy notice</a>
      <a
        href="https://clarivate.com/privacy-center/notices-policies/cookie-policy/"
      >
        Cookie policy
      </a>
      ${this.cookieManagementEnabled &&
      html`
        <a
          @click="${this.handleManageCookiePreferencesClick}"
          @keydown="${this.handleManageCookiePreferencesKeydown}"
          tabindex="0"
        >
          Manage cookie preferences
        </a>
      `}
    `;

    return html`
      <footer class="cdx-footer">
        <div class="cdx-footer__copyright">© 2022 Clarivate</div>
        <div class="cdx-footer__content">
          ${this.groupCompanyLinks
            ? html`
                <cdx-footer-group groupTitle="Company">
                  ${companyLinks}
                </cdx-footer-group>
              `
            : companyLinks}
          <slot></slot>
        </div>
      </footer>
    `;
  }
}
