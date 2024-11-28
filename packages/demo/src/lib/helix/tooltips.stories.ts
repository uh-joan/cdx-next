import { Overlay, OverlayContainer } from '@angular/cdk/overlay';
import { Platform } from '@angular/cdk/platform';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {
  MAT_TOOLTIP_SCROLL_STRATEGY,
  MatTooltip,
  MatTooltipModule,
} from '@angular/material/tooltip';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ThemeModule } from '@cdx/theme-angular-material';
import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';

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

const tooltipsMeta: Meta<MatTooltip> = {
  title: 'helix/Tooltips',
  component: MatTooltip,
  decorators: [
    moduleMetadata({
      imports: [
        MatTooltipModule,
        ThemeModule,
        MatIconModule,
        MatButtonModule,
        BrowserAnimationsModule,
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
    }),
  ],
};

export default tooltipsMeta;
type TooltipStory = StoryObj<MatTooltip>;

const TooltipsTemplate = `<ng-container>
      <h3>Tooltip</h3>
      <div class="story story--sections">
        <button
          mat-flat-button
          color="primary"
          matTooltip="Info about the action"
          [matTooltipTouchGestures]="false"
          aria-label="Button that displays a tooltip when focused or hovered over"
        >
          Action
        </button>
        <mat-icon matTooltip="More information here" [matTooltipTouchGestures]="false">help_outline</mat-icon>
      </div>
    </ng-container>
  `;

export const tooltips: TooltipStory = {
  render: (args) => ({
    props: args,
    template: TooltipsTemplate,
  }),
};
