import { Component } from '@angular/core';
import {
  MatButton,
  MatFabButton,
  MatMiniFabButton,
} from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';

import { InputViewerComponent } from '../../../../core/example-viewer/example-viewer.model';

const htmlCode = `<div class="story">
  <div class="story__row">
    <button class="hlx-btn-ai" matButton="filled">
      <mat-icon>auto_awesome</mat-icon>
      Summarise
    </button>
    <button class="hlx-btn-ai" matButton="outlined">
      <mat-icon>auto_awesome</mat-icon>
      Summarise
    </button>
    <button class="hlx-btn-ai" matButton>Summarise</button>
    <button class="hlx-btn-ai" matButton="filled" disabled>Summarise</button>
  </div>

  <div class="story__row">
    <button class="hlx-btn-ai" matFab aria-label="Ask AI">
      <mat-icon>auto_awesome</mat-icon>
    </button>
    <button class="hlx-btn-ai" matMiniFab aria-label="Ask AI">
      <mat-icon>auto_awesome</mat-icon>
    </button>
    <button class="hlx-btn-ai" matFab extended>
      <mat-icon>auto_awesome</mat-icon>
      Ask AI
    </button>
  </div>
</div>`;

const styleCode = `.story {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.story__row {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1rem;
}`;

const tsCode = `import { Component } from '@angular/core';
import { MatButton, MatFabButton, MatMiniFabButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';

// hlx-btn-ai applies the Helix AI gradient to filled, outlined and FAB buttons.
@Component({
  selector: 'app-buttons-ai-example',
  templateUrl: './buttons-ai-example.html',
  styleUrl: './buttons-ai-example.scss',
  imports: [MatButton, MatFabButton, MatMiniFabButton, MatIcon],
})
export class ButtonsAiExample {}`;

@Component({
  template: htmlCode,
  imports: [MatButton, MatFabButton, MatMiniFabButton, MatIcon],
  styles: [styleCode],
})
class SampleComponent {}

export const ButtonsAiComponent: InputViewerComponent = {
  exampleName: 'Buttons AI',
  dynamicComponent: SampleComponent,
  height: 40,
  htmlCode,
  cssCode: styleCode,
  tsCode,
};
