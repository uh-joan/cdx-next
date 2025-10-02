import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';
import { NgTemplateOutlet } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  Input,
  ViewEncapsulation,
} from '@angular/core';
import { ThemeOptionsBranding } from '@cdx/theme-angular-material';
import { TranslateModule } from '@ngx-translate/core';

import { OneTrustService } from '../one-trust/one-trust.service';
import { FooterGroupComponent } from './footer-group.component';
import { FooterGroupTitleDirective } from './footer-group-title.directive';
import { FooterLinkDirective } from './footer-link.directive';

@Component({
  selector: 'footer[cdx-footer]',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    FooterGroupComponent,
    FooterGroupTitleDirective,
    NgTemplateOutlet,
    FooterLinkDirective,
    TranslateModule,
  ],
})
export class FooterComponent {
  @Input() shouldShowTranslations = false;
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

  private oneTrustService: OneTrustService | null = inject(OneTrustService, {
    optional: true,
  });

  isCookieManagementEnabled(): boolean {
    return this.oneTrustService?.isReady() ?? false;
  }

  manageCookiePreferences(): void {
    this.oneTrustService?.openInfoDisplay();
  }
}
