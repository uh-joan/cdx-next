import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
} from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'demo-paper-search',
  standalone: true,
  imports: [
    CommonModule,
    MatCheckboxModule,
    MatDividerModule,
    MatIconModule,
    RouterModule,
    MatCardModule,
    TranslateModule,
  ],
  templateUrl: './paper-search.component.html',
  styleUrl: './paper-search.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaperSearchComponent {
  @HostBinding('class') classes = 'mat-elevation-z3';

  @Input() index = 1;
}
