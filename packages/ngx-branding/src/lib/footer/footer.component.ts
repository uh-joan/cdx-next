import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';
import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
  Optional,
  ViewEncapsulation,
} from '@angular/core';

import { OneTrustService } from '../one-trust/one-trust.service';

@Component({
  selector: 'footer[cdx-footer]',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  @HostBinding('class') private classes = 'cdx-footer';

  @Input()
  get groupCompanyLinks() {
    return this._groupCompanyLinks;
  }
  set groupCompanyLinks(value: BooleanInput) {
    this._groupCompanyLinks = coerceBooleanProperty(value);
  }
  private _groupCompanyLinks = false;

  @Input()
  @HostBinding('class.cdx-footer--slim')
  get slim() {
    return this._slim;
  }
  set slim(value: BooleanInput) {
    this._slim = coerceBooleanProperty(value);
  }

  currentYear = new Date().getFullYear();

  private _slim = false;

  constructor(@Optional() private oneTrustService: OneTrustService) {}

  isCookieManagementEnabled(): boolean {
    return this.oneTrustService?.isReady();
  }

  manageCookiePreferences(): void {
    this.oneTrustService.openInfoDisplay();
  }
}
