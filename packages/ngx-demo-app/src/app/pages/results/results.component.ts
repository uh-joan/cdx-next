import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    imports: [
        CommonModule,
        MatIconModule,
        MatDividerModule,
        MatCardModule,
        TranslateModule,
    ],
    templateUrl: './results.component.html',
    styleUrl: './results.component.scss'
})
export class ResultsComponent {}
