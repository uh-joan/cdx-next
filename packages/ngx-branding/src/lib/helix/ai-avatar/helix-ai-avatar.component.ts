import {
  booleanAttribute,
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  input,
  ViewEncapsulation,
} from '@angular/core';

/**
 * Figma "AI Avatar": a 32px circle with three sparkles. When `animated`, the
 * gradient turns and the sparkles pulse through the four Figma keyframes.
 */
@Component({
  selector: 'hlx-ai-avatar',
  template: `
    <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false">
      <path
        class="hlx-ai-avatar__sparkle hlx-ai-avatar__sparkle--large"
        transform="translate(6.4 12)"
        d="M12.8 6.406C9.26 6.406 6.4 3.532 6.4 0 6.4 3.532 3.529 6.406 0 6.406 3.529 6.406 6.4 9.268 6.4 12.8 6.4 9.268 9.26 6.406 12.8 6.406Z"
      />
      <path
        class="hlx-ai-avatar__sparkle hlx-ai-avatar__sparkle--small"
        transform="translate(19.2 19.2)"
        d="M4.8 2.4C3.472 2.4 2.4 1.32 2.4 0 2.4 1.32 1.32 2.4 0 2.4 1.32 2.4 2.4 3.472 2.4 4.8 2.4 3.472 3.472 2.4 4.8 2.4Z"
      />
      <path
        class="hlx-ai-avatar__sparkle hlx-ai-avatar__sparkle--medium"
        transform="translate(15.2 6.4)"
        d="M8.8 4.4C6.366 4.4 4.4 2.434 4.4 0 4.4 2.434 2.434 4.4 0 4.4 2.434 4.4 4.4 6.366 4.4 8.8 4.4 6.366 6.366 4.4 8.8 4.4Z"
      />
    </svg>
  `,
  styleUrls: ['./helix-ai-avatar.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HelixAiAvatarComponent {
  theme = input<'gradient' | 'dark'>('gradient');
  animated = input(false, { transform: booleanAttribute });
  label = input('AI');

  @HostBinding('class') private get classes(): string {
    return [
      'hlx-ai-avatar',
      `hlx-ai-avatar--${this.theme() || 'gradient'}`,
      this.animated() ? 'hlx-ai-avatar--animated' : '',
    ].join(' ');
  }

  @HostBinding('attr.role') readonly role = 'img';

  @HostBinding('attr.aria-label') private get ariaLabel(): string {
    return this.label();
  }
}
