import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  ElementRef,
  EventEmitter,
  HostBinding,
  Input,
  Output,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'cdx-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class NotificationComponent {
  @HostBinding('class') private get classes(): string {
    return [
      'cdx-notification',
      `cdx-notification--${this.presentation || 'inline'}`,
      `cdx-notification--${this.severity || 'info'}`,
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

  @Input() title?: string;

  @Input() presentation?: 'inline' | 'banner' = 'inline';

  @Input() dismissable?: boolean | string = false;

  @Input() action?: string;

  @Input() severity: 'info' | 'success' | 'warn' = 'info';

  @Output() actionEvent: EventEmitter<string> = new EventEmitter<string>();

  @Output() dismissEvent: EventEmitter<void> = new EventEmitter<void>();

  onAction(): void {
    this.actionEvent.emit(this.action);
  }

  onDismiss(): void {
    this.dismissed = true;
    this.dismissEvent.emit();
  }
}
