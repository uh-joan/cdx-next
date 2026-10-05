import { Component } from '@angular/core';
import { MatFabButton, MatMiniFabButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';

import { InputViewerComponent } from '../../../../core/example-viewer/example-viewer.model';

const htmlCode = `<div class="story hlx-btn-ai">
  <div class="story__row">
    <button matFab aria-label="Ask AI">
      <mat-icon>auto_awesome</mat-icon>
    </button>
    <button matMiniFab aria-label="Ask AI">
      <mat-icon>auto_awesome</mat-icon>
    </button>
    <button matFab extended>
      <mat-icon>auto_awesome</mat-icon>
      Ask AI
    </button>
  </div>

  <div class="story__row">
    <button matFab disabled aria-label="Ask AI">
      <mat-icon>auto_awesome</mat-icon>
    </button>
    <button matMiniFab disabled aria-label="Ask AI">
      <mat-icon>auto_awesome</mat-icon>
    </button>
    <button matFab extended disabled>
      <mat-icon>auto_awesome</mat-icon>
      Ask AI
    </button>
  </div>
</div>
`;

const styleCode = `.story {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
}

.story__row {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.5rem;
}`;

const tsCode = `import { Component } from '@angular/core';
import { MatFabButton, MatMiniFabButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-buttons-ai-fab-example',
  templateUrl: './buttons-ai-fab-example.html',
  styleUrl: './buttons-ai-fab-example.scss',
  imports: [MatFabButton, MatMiniFabButton, MatIcon],
})
export class ButtonsAiFabExample {}`;

@Component({
  template: htmlCode,
  imports: [MatFabButton, MatMiniFabButton, MatIcon],
  styles: [styleCode],
})
class SampleComponent {}

// The hlx-btn-ai class paints the Helix AI gradient on FABs, mini FABs and
// extended FABs; disabled FABs keep the normal disabled look.
export const ButtonsAiFabComponent: InputViewerComponent = {
  exampleName: 'Buttons AI Fab',
  dynamicComponent: SampleComponent,
  height: 50,
  htmlCode,
  cssCode: styleCode,
  tsCode,
};
