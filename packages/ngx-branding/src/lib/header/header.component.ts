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
import { ThemeOptionsWithBranding } from '@cdx/theme-react-mui';

@Component({
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

  @Input() theme?: ThemeOptionsWithBranding;

  ngAfterViewInit(): void {
    if (!this.productIdentification?.nativeElement.children.length) {
      this.productIdentification?.nativeElement.remove();
    }
  }
}
