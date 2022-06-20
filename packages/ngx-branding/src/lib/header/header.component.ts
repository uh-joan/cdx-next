import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostBinding,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';

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

  ngAfterViewInit(): void {
    if (!this.productIdentification?.nativeElement.children.length) {
      this.productIdentification?.nativeElement.remove();
    }
  }
}
