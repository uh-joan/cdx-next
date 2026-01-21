import {
  AfterViewInit,
  Component,
  HostBinding,
  input,
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
    return this.inputViewerComponent()?.verticalView;
  }
  @ViewChild('dynamicContainer', { read: ViewContainerRef, static: true })
  container!: ViewContainerRef;

  inputViewerComponent = input<InputViewerComponent | undefined>();

  ngAfterViewInit() {
    const dynamicComponent = this.inputViewerComponent()?.dynamicComponent;
    if (dynamicComponent) {
      this.loadComponent(dynamicComponent);
    }
  }

  loadComponent(component: Type<unknown>) {
    this.container.clear();
    this.container.createComponent(component);
  }
}
