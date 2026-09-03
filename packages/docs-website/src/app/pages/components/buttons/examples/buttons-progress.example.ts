import { Component, signal } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatProgressSpinner } from '@angular/material/progress-spinner';

import { InputViewerComponent } from '../../../../core/example-viewer/example-viewer.model';

const htmlCode = `<div class="story">
  <div class="story__box">
    <div class="story__row">
      <button
        matButton="filled"
        [showProgress]="saving()"
        [disabled]="saving()"
        (click)="save()"
      >
        <mat-icon>save</mat-icon>
        {{ saving() ? 'Saving…' : 'Save' }}
        <mat-progress-spinner progressIndicator mode="indeterminate" diameter="20" />
      </button>

      <button
        class="hlx-btn-accent"
        matButton="outlined"
        [showProgress]="saving()"
        [disabled]="saving()"
        (click)="save()"
      >
        Save
        <mat-progress-spinner progressIndicator mode="indeterminate" diameter="20" />
      </button>
    </div>

    <p class="story__hint">Saved {{ savedCount() }} time(s).</p>
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
}

.story__hint {
  margin: 0;
  padding-left: 0.5rem;
  color: var(--mat-sys-on-surface-variant);
}`;

const tsCode = `import { Component, signal } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatProgressSpinner } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-buttons-progress-example',
  templateUrl: './buttons-progress-example.html',
  styleUrl: './buttons-progress-example.scss',
  imports: [MatButton, MatIcon, MatProgressSpinner],
})
export class ButtonsProgressExample {
  protected readonly saving = signal(false);
  protected readonly savedCount = signal(0);

  protected save(): void {
    this.saving.set(true);
    setTimeout(() => {
      this.saving.set(false);
      this.savedCount.update((count) => count + 1);
    }, 1500);
  }
}`;

@Component({
  template: htmlCode,
  imports: [MatButton, MatIcon, MatProgressSpinner],
  styles: [styleCode],
})
class SampleComponent {
  protected readonly saving = signal(false);
  protected readonly savedCount = signal(0);

  protected save(): void {
    this.saving.set(true);
    setTimeout(() => {
      this.saving.set(false);
      this.savedCount.update((count) => count + 1);
    }, 1500);
  }
}

export const ButtonsProgressComponent: InputViewerComponent = {
  exampleName: 'Buttons Progress',
  dynamicComponent: SampleComponent,
  height: 40,
  htmlCode,
  cssCode: styleCode,
  tsCode,
};
