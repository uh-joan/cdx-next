import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  ElementRef,
  HostBinding,
  Input,
  QueryList,
  ViewChild,
} from '@angular/core';
import { ThemeOptionsBranding } from '@cdx/theme-angular-material';

@Component({
    selector: 'header[ava-header]',
    templateUrl: './avalon-header.component.html',
    styleUrls: ['./avalon-header.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class AvalonHeaderComponent implements AfterViewInit {
  @HostBinding('class') classes = 'ava-header';

  @ContentChildren(
    'ava-header-product-name, a[ava-header-product-logo], img[ava-header-product-logo], ava-header-product-name, a[ava-header-product-name]',
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

  @Input() openExternalLink = false;

  constructor(private cdr: ChangeDetectorRef) {}

  ngAfterViewInit() {
    const hasChildren =
      this.productIdentification?.nativeElement.children.length > 0;
    const hasGloalHeaderChildren =
      this.headerGlobal?.nativeElement.querySelector('.ava-header__global')
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
