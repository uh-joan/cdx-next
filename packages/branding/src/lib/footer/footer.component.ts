import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';
import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
  Optional,
  ViewEncapsulation,
} from '@angular/core';
import { OneTrustService } from '@cdx/cookies';

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

  constructor(@Optional() private oneTrustService: OneTrustService) {}

  isCookieManagementEnabled(): boolean {
    return this.oneTrustService?.isReady();
  }

  manageCookiePreferences(): void {
    this.oneTrustService.openInfoDisplay();
  }
}
