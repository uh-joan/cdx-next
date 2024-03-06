import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'demo-data-box',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './data-box.component.html',
  styleUrl: './data-box.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DataBoxComponent {
  @HostBinding('class') classes = 'mat-elevation-z3';
}
