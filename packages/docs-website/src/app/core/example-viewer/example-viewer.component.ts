import {
  AfterViewInit,
  Component,
  HostBinding,
  Input,
  Type,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { HighlightComponent } from 'src/app/components/highlight/highlight.component';

import { InputViewerComponent } from './example-viewer.model';

@Component({
  selector: 'hlx-example-viewer',
  templateUrl: './example-viewer.component.html',
  styleUrls: ['./example-viewer.component.scss'],
  imports: [MatTabsModule, HighlightComponent],
})
export class ExampleViewerComponent implements AfterViewInit {
  @HostBinding('class.vertical') get isVertical() {
    return this.inputViewerComponent?.verticalView;
  }
  @ViewChild('dynamicContainer', { read: ViewContainerRef, static: true })
  container!: ViewContainerRef;

  @Input() inputViewerComponent?: InputViewerComponent;

  ngAfterViewInit() {
    if (this.inputViewerComponent?.dynamicComponent) {
      this.loadComponent(this.inputViewerComponent.dynamicComponent);
    }
  }

  loadComponent(component: Type<unknown>) {
    this.container.clear();
    this.container.createComponent(component);
  }
}
