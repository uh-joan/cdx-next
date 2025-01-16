import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    imports: [
        CommonModule,
        MatButtonModule,
        MatDividerModule,
        MatInputModule,
        MatSelectModule,
        FormsModule,
        MatCardModule,
        TranslateModule,
    ],
    templateUrl: './account.component.html',
    styleUrl: './account.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccountComponent {
  selectedState = 'alabama';
}
