import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostBinding,
  Input,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { ThemeOptionsBranding } from '@cdx/theme-angular-material';

@Component({
  selector: 'header[cdx-header]',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class HeaderComponent implements AfterViewInit {
  @HostBinding('class') classes = 'cdx-header';

  @ViewChild('productIdentification')
  productIdentification?: ElementRef;

  @Input() theme?: ThemeOptionsBranding;

  @Input() openExternalLink = false;

  ngAfterViewInit(): void {
    if (!this.productIdentification?.nativeElement.children.length) {
      this.productIdentification?.nativeElement.remove();
    }
  }

  goToMainPage(): void {
    window.open(
      'http://www.clarivate.com',
      this.openExternalLink ? '_blank' : '_self',
    );
  }
}
