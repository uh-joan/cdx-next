import { Component } from '@angular/core';
import { HelixNotificationComponent } from '@hlx/ngx-branding';

import { InputViewerComponent } from '../../../../core/example-viewer/example-viewer.model';

const htmlCode = `<div class="story">
  @for (severity of bannerSeverities; track severity) {
    <hlx-notification
      presentation="banner"
      [severity]="severity"
      title="Title"
      action="Button"
      secondaryAction="Button"
    >
      Message
    </hlx-notification>
  }

  <div class="story__inline">
    @for (severity of inlineSeverities; track severity) {
      <hlx-notification
        presentation="inline"
        [severity]="severity"
        title="Title"
        action="Button"
        secondaryAction="Button"
        dismissable="true"
      >
        Message
      </hlx-notification>
    }
  </div>
</div>`;

const styleCode = `.story {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.story__inline {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));
  gap: 1rem;
}`;

@Component({
  template: htmlCode,
  imports: [HelixNotificationComponent],
  styles: [styleCode],
})
class SampleComponent {
  bannerSeverities = ['primary', 'warn', 'negative', 'positive'] as const;
  inlineSeverities = ['primary', 'negative', 'positive'] as const;
}

export const NotificationThemesComponent: InputViewerComponent = {
  exampleName: 'Notification themes',
  dynamicComponent: SampleComponent,
  verticalView: true,
  height: 70,
  htmlCode,
  cssCode: styleCode,
  tsCode: `import { Component } from '@angular/core';
import { HelixNotificationComponent } from '@hlx/ngx-branding';

@Component({
  selector: 'app-notification-themes-example',
  templateUrl: './notification-themes-example.html',
  styleUrl: './notification-themes-example.scss',
  imports: [HelixNotificationComponent],
})
export class NotificationThemesExample {
  bannerSeverities = ['primary', 'warn', 'negative', 'positive'] as const;
  inlineSeverities = ['primary', 'negative', 'positive'] as const;
}`,
};
