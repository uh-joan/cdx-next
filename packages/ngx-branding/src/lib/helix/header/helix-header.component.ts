import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  ElementRef,
  HostBinding,
  inject,
  Input,
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
  @HostBinding('class') classes = 'hlx-header';

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

  @Input() theme?: ThemeOptionsBranding;

  @Input() branded?: boolean = true;

  @Input() openExternalLink = false;

  private cdr = inject(ChangeDetectorRef);

  ngAfterViewInit() {
    const hasChildren =
      this.productIdentification?.nativeElement.children.length > 0;
    const hasGloalHeaderChildren =
      this.headerGlobal?.nativeElement.querySelector('.hlx-header__global')
        .children.length > 0;

    this.showDivider = hasChildren;
    this.showHeaderGlobalDivider = hasGloalHeaderChildren;

    this.cdr.markForCheck();
  }

  goToMainPage(): void {
    window.open(
      'http://www.clarivate.com',
      this.openExternalLink ? '_blank' : '_self',
    );
  }
}
