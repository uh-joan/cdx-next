import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostBinding,
  input,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { ThemeOptionsBranding } from '@hlx/theme-angular-material';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'header[cdx-header]',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements AfterViewInit {
  @HostBinding('class') classes = 'cdx-header';

  @ViewChild('productIdentification')
  productIdentification?: ElementRef;

  theme = input<ThemeOptionsBranding>();

  openExternalLink = input<boolean>(false);

  ngAfterViewInit(): void {
    if (!this.productIdentification?.nativeElement.children.length) {
      this.productIdentification?.nativeElement.remove();
    }
  }

  goToMainPage(): void {
    window.open(
      'http://www.clarivate.com',
      this.openExternalLink() ? '_blank' : '_self',
    );
  }
}
