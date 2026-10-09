import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { RichTooltipDirective } from '@hlx/ngx-branding';

import { InputViewerComponent } from '../../../../core/example-viewer/example-viewer.model';

const htmlCode = `<div class="story">
  <button matButton="filled" [hlxTooltip]="tooltipTemplate">
    Hover me
  </button>
  <button matButton="filled" [hlxTooltip]="tooltipTemplate" [tooltipTrigger]="'click'">
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

const tsCode = `import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { RichTooltipDirective } from '@hlx/ngx-branding';

// hlxTooltip is a Helix (ngx-branding) directive, not an Angular Material one.
@Component({
  selector: 'app-rich-tooltip-example',
  templateUrl: './rich-tooltip-example.html',
  styleUrl: './rich-tooltip-example.scss',
  imports: [MatButton, RichTooltipDirective],
})
export class RichTooltipExample {}`;

@Component({
  template: htmlCode,
  imports: [MatButton, RichTooltipDirective],
  styles: [styleCode],
})
class SampleComponent {}

export const RichTooltipComponent: InputViewerComponent = {
  exampleName: 'Rich Tooltip',
  dynamicComponent: SampleComponent,
  height: 36,
  hideCss: false,
  htmlCode,
  cssCode: styleCode,
  tsCode,
};
