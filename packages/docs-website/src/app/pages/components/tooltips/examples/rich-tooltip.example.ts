import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RichTooltipDirective } from '@cdx/ngx-branding';

import { InputViewerComponent } from '../../../../core/example-viewer/example-viewer.model';

const htmlCode = `<div class="story">
  <button mat-flat-button [hlxTooltip]="tooltipTemplate">
    Hover me
  </button>
  <button mat-flat-button [hlxTooltip]="tooltipTemplate" [tooltipTrigger]="'click'">
    Click me
  </button>
  <ng-template #tooltipTemplate>
  <div class="tooltip-content">
    <h6 >Rich tooltip</h6>
    <p>Rich tooltips bring attention to a particular element of feature that warrants the user's focus</p>
  </div>
  </ng-template>
</div>`;

const styleCode = `.story {
  padding: 1rem;
  display: flex;
  gap: 1rem;
}
.tooltip-content {
  width: 280px;
  padding: 12px 16px;
}
`;

@Component({
  template: htmlCode,
  imports: [MatButtonModule, RichTooltipDirective],
  styles: [styleCode],
})
class SampleComponent {}

export const RichTooltipComponent: InputViewerComponent = {
  exampleName: 'Rich Tooltip',
  dynamicComponent: SampleComponent,
  height: 36,
  hideCss: false,
  htmlCode: htmlCode,
  cssCode: styleCode,
  tsCode: `import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RichTooltipDirective } from '@cdx/ngx-branding';

@Component({
  template: htmlCode,
  imports: [MatButtonModule, RichTooltipDirective],
  styles: [styleCode],
})
class SampleComponent {}`,
};
