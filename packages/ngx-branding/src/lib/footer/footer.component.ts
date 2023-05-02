import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  Optional,
  ViewEncapsulation,
} from '@angular/core';
import { ThemeOptionsBranding } from '@cdx/theme-angular-material';

import { OneTrustService } from '../one-trust/one-trust.service';

@Component({
  selector: 'footer[cdx-footer]',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  @Input()
  get groupCompanyLinks() {
    return this._groupCompanyLinks;
  }
  set groupCompanyLinks(value: BooleanInput) {
    this._groupCompanyLinks = coerceBooleanProperty(value);
  }
  private _groupCompanyLinks = false;

  @Input()
  get slim() {
    return this._slim;
  }
  set slim(value: BooleanInput) {
    this._slim = coerceBooleanProperty(value);
  }

  @Input() theme?: ThemeOptionsBranding;

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
