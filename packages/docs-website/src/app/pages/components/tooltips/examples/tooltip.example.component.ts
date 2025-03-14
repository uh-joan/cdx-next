import { Overlay, OverlayContainer } from '@angular/cdk/overlay';
import { Platform } from '@angular/cdk/platform';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {
  MAT_TOOLTIP_SCROLL_STRATEGY,
  MatTooltipModule,
} from '@angular/material/tooltip';
import { InputViewerComponent } from 'src/app/core/example-viewer/example-viewer.model';

const htmlCode = `<div class="story">
  <button
    mat-flat-button
    (click)="tooltip.toggle()"
    color="primary"
    #tooltip="matTooltip"
    matTooltip="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Pellentesque vel iaculis nunc. Duis magna erat, semper id iaculis 
    eget, luctus nec nisi. Nulla facilisi. In quis urna sit amet erat 
    bibendum varius. In rhoncus eu sapien molestie ullamcorper. 
    In convallis feugiat sem, sed condimentum lectus lobortis at. 
    Donec et elit eu ante gravida dapibus quis et elit. Nunc blandit 
    condimentum diam at iaculis. Sed quis odio sed massa rhoncus 
    volutpat in in arcu. Integer ultricies auctor velit dapibus 
    vulputate. Nulla tincidunt finibus hendrerit."
    aria-label="Button that displays a tooltip when 
    focused or hovered over"
  >
    Action
  </button>
  <button mat-flat-button
   (click)="tooltip.toggle()">
  Toggle
</button>
  <mat-icon matTooltip="More information here"
    [matTooltipTouchGestures]="'off'">help_outline</mat-icon>
</div>`;

const styleCode = `.story {
  padding: 1rem;
  display: flex;
  align-items: center;
  gap: 3rem;
}`;

class AppOverlayContainer extends OverlayContainer {
  override _createContainer(): void {
    const container = document.createElement('div');
    container.classList.add('app-overlay-container');
    if (window?.document) {
      const contentContainer = window?.document.querySelector('body');
      if (contentContainer) {
        contentContainer.appendChild(container);
        console.log('added overlay to container');
      } else {
        console.warn('Content container not found');
      }
    }
    this._containerElement = container;
  }
}

@Component({
  template: htmlCode,
  imports: [MatIconModule, MatButtonModule, MatTooltipModule],
  providers: [
    {
      provide: OverlayContainer,
      useFactory: (doc: Document, platform: Platform) =>
        new AppOverlayContainer(doc, platform),
    },
    {
      provide: MAT_TOOLTIP_SCROLL_STRATEGY,
      deps: [Overlay],
      useFactory: (overlay: Overlay) => () => overlay.scrollStrategies.block(),
    },
  ],
  styles: styleCode,
})
class SampleComponent {}

export const TooltipComponent: InputViewerComponent = {
  exampleName: 'Tooltip',
  dynamicComponent: SampleComponent,
  height: 48,
  hideCss: true,
  htmlCode: htmlCode,
  cssCode: styleCode,
  tsCode: `import { Overlay, OverlayContainer } from '@angular/cdk/overlay';
import { Platform } from '@angular/cdk/platform';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MAT_TOOLTIP_SCROLL_STRATEGY,
  MatTooltipModule } from '@angular/material/tooltip';

class AppOverlayContainer extends OverlayContainer {
  override _createContainer(): void {
    const container = document.createElement('div');
    container.classList.add('app-overlay-container');
    if (window?.document) {
      const contentContainer = window?.document.querySelector('body');
      if (contentContainer) {
        contentContainer.appendChild(container);
        console.log('added overlay to container');
      } else {
        console.warn('Content container not found');
      }
    }
    this._containerElement = container;
  }
}

@Component({
    template: htmlCode,
    imports: [
      MatIconModule,
      MatButtonModule,
      MatTooltipModule
    ],
    providers: [
      {
        provide: OverlayContainer,
        useFactory: (doc: Document, platform: Platform) =>
          new AppOverlayContainer(doc, platform),
      },
      {
        provide: MAT_TOOLTIP_SCROLL_STRATEGY,
        deps: [Overlay],
        useFactory: (overlay: Overlay) => () =>
          overlay.scrollStrategies.block(),
      },
    ],
    styles: styleCode,
})
class SampleComponent {}`,
};
