import { Component } from '@angular/core';
import { HelixAiAvatarComponent } from '@cdx/ngx-branding';

import { InputViewerComponent } from '../../../../core/example-viewer/example-viewer.model';

const htmlCode = `<div class="story">
  <div class="story__row">
    <hlx-ai-avatar></hlx-ai-avatar>
    <hlx-ai-avatar theme="dark"></hlx-ai-avatar>
    <span>Static</span>
  </div>
  <div class="story__row">
    <hlx-ai-avatar animated></hlx-ai-avatar>
    <hlx-ai-avatar theme="dark" animated></hlx-ai-avatar>
    <span>Animated, for example while a response is generating</span>
  </div>
  <div class="story__row">
    <hlx-ai-avatar class="story__large" animated></hlx-ai-avatar>
    <span>Resized with --hlx-ai-avatar-size</span>
  </div>
</div>`;

const styleCode = `.story {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.story__row {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.story__large {
  --hlx-ai-avatar-size: 64px;
}`;

@Component({
  template: htmlCode,
  imports: [HelixAiAvatarComponent],
  styles: [styleCode],
})
class SampleComponent {}

export const AiAvatarComponent: InputViewerComponent = {
  exampleName: 'AI Avatar',
  dynamicComponent: SampleComponent,
  height: 30,
  htmlCode,
  cssCode: styleCode,
  tsCode: `import { Component } from '@angular/core';
import { HelixAiAvatarComponent } from '@cdx/ngx-branding';

// The animation is skipped for users who prefer reduced motion.
@Component({
  selector: 'app-ai-avatar-example',
  templateUrl: './ai-avatar-example.html',
  styleUrl: './ai-avatar-example.scss',
  imports: [HelixAiAvatarComponent],
})
export class AiAvatarExample {}`,
};
