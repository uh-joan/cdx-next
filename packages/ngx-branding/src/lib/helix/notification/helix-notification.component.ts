import { NgTemplateOutlet } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  ContentChild,
  ElementRef,
  HostBinding,
  input,
  output,
  ViewEncapsulation,
} from '@angular/core';
import { MatButton, MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';

/**
 * Figma Notifications themes. `info` and `success` are deprecated aliases
 * for `primary` and `positive`.
 */
export type HelixNotificationSeverity =
  'primary' | 'warn' | 'negative' | 'positive' | 'info' | 'success';

const SEVERITY_ALIASES: Partial<
  Record<HelixNotificationSeverity, HelixNotificationSeverity>
> = {
  info: 'primary',
  success: 'positive',
};

@Component({
  selector: 'hlx-notification',
  templateUrl: './helix-notification.component.html',
  styleUrls: ['./helix-notification.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatIcon, NgTemplateOutlet, MatButton, MatIconButton],
})
export class HelixNotificationComponent {
  @HostBinding('class') private get classes(): string {
    return [
      'hlx-notification',
      `hlx-notification--${this.presentation() || 'inline'}`,
      `hlx-notification--${this.theme()}`,
      this.dismissed ? `dismissed` : ``,
    ].join(' ');
  }

  @HostBinding('attr.role') private get role(): string {
    return this.theme() === 'negative' ? 'alert' : 'status';
  }

  notificationIcons: Record<string, string> = {
    primary: 'info_outline',
    warn: 'warning',
    negative: 'warning',
    positive: 'check_circle',
  };

  dismissed = false;

  @ContentChild('customIconWrapper') customIconWrapper!: ElementRef;

  title = input<string>();
  presentation = input<'inline' | 'banner'>('inline');
  dismissable = input<boolean | string>(false);
  action = input<string>();
  secondaryAction = input<string>();
  severity = input<HelixNotificationSeverity>('primary');

  /** The severity with deprecated aliases resolved to the Figma theme names. */
  theme = computed(() => {
    const severity = this.severity() || 'primary';
    return SEVERITY_ALIASES[severity] ?? severity;
  });

  actionEvent = output<string>();
  secondaryActionEvent = output<string>();
  dismissEvent = output<void>();

  onAction(): void {
    this.actionEvent.emit(this.action() ?? '');
  }

  onSecondaryAction(): void {
    this.secondaryActionEvent.emit(this.secondaryAction() ?? '');
  }

  onDismiss(): void {
    this.dismissed = true;
    this.dismissEvent.emit();
  }
}
