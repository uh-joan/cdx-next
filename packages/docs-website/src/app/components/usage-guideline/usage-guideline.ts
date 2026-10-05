import { Component, computed, input } from '@angular/core';
import { MatIcon } from '@angular/material/icon';

export type UsageGuidelineKind = 'do' | 'dont';

/**
 * A single Do / Don't card for component and pattern usage guidance.
 * Group cards with `<cdx-usage-guidelines>` to lay them out side by side.
 */
@Component({
  selector: 'cdx-usage-guideline',
  templateUrl: './usage-guideline.html',
  styleUrl: './usage-guideline.scss',
  imports: [MatIcon],
  host: {
    '[class]': "'usage-guideline usage-guideline--' + kind()",
  },
})
export class UsageGuideline {
  kind = input.required<UsageGuidelineKind>();
  imageSrc = input<string>();
  imageAlt = input<string>('');

  readonly label = computed(() => (this.kind() === 'do' ? 'Do' : "Don't"));
  readonly icon = computed(() =>
    this.kind() === 'do' ? 'check_circle' : 'cancel',
  );
}

/** Responsive grid wrapper for `<cdx-usage-guideline>` cards. */
@Component({
  selector: 'cdx-usage-guidelines',
  template: '<ng-content></ng-content>',
  styleUrl: './usage-guidelines.scss',
})
export class UsageGuidelines {}
