import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  input,
} from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'cdx-paper-search',
  imports: [
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
  index = input(1);
}
