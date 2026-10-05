import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';

import { InputViewerComponent } from '../../../../core/example-viewer/example-viewer.model';

const htmlCode = `<div class="story">
  <div class="story__row hlx-btn-ai">
    <button matButton="filled">Summarize</button>
    <button matButton="filled">
      <mat-icon>auto_awesome</mat-icon>
      Summarize
    </button>
    <button matButton="filled" disabled>
      <mat-icon>auto_awesome</mat-icon>
      Summarize
    </button>
  </div>

  <div class="story__row hlx-btn-ai hlx-btn-small">
    <button matButton="filled">
      <mat-icon>auto_awesome</mat-icon>
      Summarize
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
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-buttons-ai-example',
  templateUrl: './buttons-ai-example.html',
  styleUrl: './buttons-ai-example.scss',
  imports: [MatButton, MatIcon],
})
export class ButtonsAiExample {}`;

@Component({
  template: htmlCode,
  imports: [MatButton, MatIcon],
  styles: [styleCode],
})
class SampleComponent {}

// The hlx-btn-ai class (on the button or a parent) paints the Helix AI
// gradient on filled buttons; disabled buttons keep the normal disabled look.
export const ButtonsAiComponent: InputViewerComponent = {
  exampleName: 'Buttons AI',
  dynamicComponent: SampleComponent,
  height: 40,
  htmlCode,
  cssCode: styleCode,
  tsCode,
};
