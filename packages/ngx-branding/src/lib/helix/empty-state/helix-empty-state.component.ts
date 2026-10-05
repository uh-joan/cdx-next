import {
  ChangeDetectionStrategy,
  Component,
  computed,
  HostBinding,
  input,
  ViewEncapsulation,
} from '@angular/core';
import { MatIcon } from '@angular/material/icon';

export type HelixEmptyStateTone = 'empty' | 'error';

/**
 * The resting state for a region that has no data to show. Use `tone="empty"`
 * (the default) when a query or list legitimately has no results, and
 * `tone="error"` when a load failed and the user can retry.
 *
 * Content is projected into three optional slots:
 * - `[hlx-empty-state-media]` — a pictogram or illustration. When omitted, the
 *   `icon` input renders a Material Symbol instead.
 * - the default slot — extra explanatory content below the message.
 * - `[hlx-empty-state-actions]` — action buttons (e.g. a Retry button for an
 *   error, or a primary call to action for an empty list).
 *
 * An error tone is announced to assistive technology with `role="alert"`; an
 * empty tone is a quiet region, so it is not announced.
 */
@Component({
  selector: 'hlx-empty-state',
  templateUrl: './helix-empty-state.component.html',
  styleUrls: ['./helix-empty-state.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatIcon],
})
export class HelixEmptyStateComponent {
  /** The short, specific heading, e.g. "No alerts yet". */
  heading = input.required<string>();

  /** A sentence explaining the state and, where useful, the next step. */
  message = input<string>();

  /** `empty` (default) for no data, `error` for a failed load. */
  tone = input<HelixEmptyStateTone>('empty');

  /**
   * A Material Symbol name shown when no `[hlx-empty-state-media]` is projected.
   * Defaults to a tone-appropriate icon.
   */
  icon = input<string>();

  protected readonly resolvedIcon = computed(
    () => this.icon() ?? (this.tone() === 'error' ? 'error_outline' : 'inbox'),
  );

  @HostBinding('class') protected get classes(): string {
    return `hlx-empty-state hlx-empty-state--${this.tone()}`;
  }

  @HostBinding('attr.role') protected get role(): 'alert' | null {
    return this.tone() === 'error' ? 'alert' : null;
  }
}
