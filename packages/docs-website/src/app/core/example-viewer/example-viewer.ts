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

import { Highlight } from '../../components/highlight/highlight';
import { InputViewerComponent } from './example-viewer.model';

@Component({
  selector: 'hlx-example-viewer',
  templateUrl: './example-viewer.html',
  styleUrls: ['./example-viewer.scss'],
  imports: [MatTabsModule, Highlight],
})
export class ExampleViewer implements AfterViewInit {
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
