import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  imports: [MatCardModule, TranslatePipe],
  templateUrl: './error.component.html',
  styleUrl: './error.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ErrorComponent {}
