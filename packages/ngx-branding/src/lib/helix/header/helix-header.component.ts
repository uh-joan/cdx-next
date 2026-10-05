import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  booleanAttribute,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  ElementRef,
  HostBinding,
  inject,
  input,
  QueryList,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { ThemeOptionsBranding } from '@cdx/theme-angular-material';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'header[hlx-header]',
  templateUrl: './helix-header.component.html',
  styleUrls: ['./helix-header.component.scss'],
  encapsulation: ViewEncapsulation.None,
  imports: [
    CommonModule,
    MatDividerModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HelixHeaderComponent implements AfterViewInit {
  @HostBinding('class') private get classes(): string {
    return `hlx-header hlx-header--${this.condensed() ? 'condensed' : 'default'}`;
  }

  @ContentChildren(
    'hlx-header-product-name, a[hlx-header-product-logo], img[hlx-header-product-logo], hlx-header-product-name, a[hlx-header-product-name]',
  )
  contentItems!: QueryList<ElementRef>;

  // @ViewChild('headerProductContent') headerContent!: ElementRef;
  @ViewChild('headerProductContent', { static: false })
  headerProductContent: ElementRef | undefined;

  @ViewChild('productIdentification')
  productIdentification?: ElementRef;

  @ViewChild('headerGlobal', { static: false })
  headerGlobal?: ElementRef;

  showDivider = false;
  showHeaderGlobalDivider = false;

  theme = input<ThemeOptionsBranding>();
  branded = input(true, { transform: booleanAttribute });
  /**
   * Figma Header "condensed" (one dark bar) when true, or "default" (dark
   * utility bar above a white product bar) when false.
   */
  condensed = input(true, { transform: booleanAttribute });
  openExternalLink = input({
    transform: Boolean,
    required: false,
    default: false,
  });

  private cdr = inject(ChangeDetectorRef);

  ngAfterViewInit() {
    const hasChildren =
      this.productIdentification?.nativeElement?.children?.length > 0;

    const globalEl = this.headerGlobal?.nativeElement?.querySelector(
      '.hlx-header__global',
    );
    const hasGloalHeaderChildren = globalEl
      ? globalEl.children.length > 0
      : false;

    this.showDivider = hasChildren;
    this.showHeaderGlobalDivider = hasGloalHeaderChildren;

    this.cdr.markForCheck();
  }

  goToMainPage(): void {
    window.open(
      'http://www.clarivate.com',
      this.openExternalLink() ? '_blank' : '_self',
    );
  }
}
