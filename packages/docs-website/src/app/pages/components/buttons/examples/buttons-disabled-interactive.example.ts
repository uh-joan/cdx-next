import { Component, signal } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatTooltip } from '@angular/material/tooltip';

import { InputViewerComponent } from '../../../../core/example-viewer/example-viewer.model';

const htmlCode = `<div class="story">
  <div class="story__box">
    <div class="story__row">
      <button matButton="outlined" (click)="toggle()">
        {{ disabled() ? 'Enable' : 'Disable' }} the buttons
      </button>
    </div>

    <div class="story__row">
      <button matButton="filled" [disabled]="disabled()">Plain disabled</button>

      <button
        matButton="filled"
        [disabled]="disabled()"
        [disabledInteractive]="true"
        matTooltip="Focusable while disabled, so the reason can be announced"
      >
        Disabled interactive
      </button>
    </div>
  </div>
</div>
`;

const styleCode = `.story {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.story__box {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.story__row {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.5rem;
}`;

const tsCode = `import { Component, signal } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatTooltip } from '@angular/material/tooltip';

// \`disabledInteractive\` keeps a disabled button focusable so screen readers can
// reach it and read the tooltip explaining why the action is unavailable.
@Component({
  selector: 'app-buttons-disabled-interactive-example',
  templateUrl: './buttons-disabled-interactive-example.html',
  styleUrl: './buttons-disabled-interactive-example.scss',
  imports: [MatButton, MatTooltip],
})
export class ButtonsDisabledInteractiveExample {
  protected readonly disabled = signal(true);

  protected toggle(): void {
    this.disabled.update((disabled) => !disabled);
  }
}`;

@Component({
  template: htmlCode,
  imports: [MatButton, MatTooltip],
  styles: [styleCode],
})
class SampleComponent {
  protected readonly disabled = signal(true);

  protected toggle(): void {
    this.disabled.update((disabled) => !disabled);
  }
}

export const ButtonsDisabledInteractiveComponent: InputViewerComponent = {
  exampleName: 'Buttons Disabled Interactive',
  dynamicComponent: SampleComponent,
  height: 40,
  htmlCode,
  cssCode: styleCode,
  tsCode,
};
