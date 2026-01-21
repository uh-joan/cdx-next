import { CommonModule } from '@angular/common';
import {
  booleanAttribute,
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
  ViewEncapsulation,
} from '@angular/core';
import { ThemeOptionsBranding } from '@cdx/theme-angular-material';
import { TranslateModule } from '@ngx-translate/core';

import { OneTrustModule } from '../../one-trust/one-trust.module';
import { OneTrustService } from '../../one-trust/one-trust.service';
import { HelixFooterGroupComponent } from './helix-footer-group.component';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'footer[hlx-footer]',
  templateUrl: './helix-footer.component.html',
  styleUrls: ['./helix-footer.component.scss'],
  imports: [
    CommonModule,
    OneTrustModule,
    TranslateModule,
    HelixFooterGroupComponent,
  ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HelixFooterComponent {
  shouldShowTranslations = input(false);
  groupCompanyLinks = input(false);
  slim = input(false, { transform: booleanAttribute });
  branded = input(false, { transform: booleanAttribute });
  theme = input<ThemeOptionsBranding>();

  currentYear = new Date().getFullYear();

  private oneTrustService = inject(OneTrustService, { optional: true });

  isCookieManagementEnabled(): boolean {
    return this.oneTrustService?.isReady() ?? false;
  }

  manageCookiePreferences(): void {
    this.oneTrustService?.openInfoDisplay();
  }
}
