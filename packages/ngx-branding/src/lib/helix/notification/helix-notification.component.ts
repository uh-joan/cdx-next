import { NgTemplateOutlet } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  ElementRef,
  HostBinding,
  input,
  output,
  ViewEncapsulation,
} from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'hlx-notification',
  templateUrl: './helix-notification.component.html',
  styleUrls: ['./helix-notification.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatIcon, NgTemplateOutlet, MatButton],
})
export class HelixNotificationComponent {
  @HostBinding('class') private get classes(): string {
    return [
      'hlx-notification',
      `hlx-notification--${this.presentation || 'inline'}`,
      `hlx-notification--${this.severity || 'info'}`,
      this.dismissed ? `dismissed` : ``,
    ].join(' ');
  }

  notificationIcons = {
    info: 'info_outline',
    warn: 'warning',
    success: 'check_circle',
  };

  dismissed = false;

  @ContentChild('customIconWrapper') customIconWrapper!: ElementRef;

  title = input<string>();
  presentation = input<'inline' | 'banner'>('inline');
  dismissable = input<boolean | string>(false);
  action = input<string>();
  severity = input<'info' | 'success' | 'warn'>('info');

  actionEvent = output<string>();
  dismissEvent = output<void>();

  onAction(): void {
    this.actionEvent.emit(this.action() ?? '');
  }

  onDismiss(): void {
    this.dismissed = true;
    this.dismissEvent.emit();
  }
}
