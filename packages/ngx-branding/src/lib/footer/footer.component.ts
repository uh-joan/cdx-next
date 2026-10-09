import { NgTemplateOutlet } from '@angular/common';
import {
  booleanAttribute,
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
  ViewEncapsulation,
} from '@angular/core';
import { ThemeOptionsBranding } from '@hlx/theme-angular-material';
import { TranslatePipe } from '@ngx-translate/core';

import { OneTrustService } from '../one-trust/one-trust.service';
import { FooterGroupComponent } from './footer-group.component';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'footer[cdx-footer]',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FooterGroupComponent, NgTemplateOutlet, TranslatePipe],
})
export class FooterComponent {
  shouldShowTranslations = input(false, { transform: booleanAttribute });
  groupCompanyLinks = input(false, { transform: booleanAttribute });
  slim = input(false, { transform: booleanAttribute });
  branded = input(false, { transform: booleanAttribute });
  theme = input<ThemeOptionsBranding>();

  currentYear = new Date().getFullYear();

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
