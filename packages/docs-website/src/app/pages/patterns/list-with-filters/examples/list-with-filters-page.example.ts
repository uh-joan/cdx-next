import { Component, computed, signal } from '@angular/core';
import { MatButton, MatIconButton } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInput } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { HelixEmptyStateComponent } from '@cdx/ngx-branding';

import { InputViewerComponent } from '../../../../core/example-viewer/example-viewer.model';

interface Row {
  drug: string;
  phase: string;
  updated: string;
}

const PHASES = ['Preclinical', 'Phase I', 'Phase II', 'Phase III'];

const htmlCode = `<div class="list">
  <div class="list__toolbar">
    <mat-form-field class="list__search" appearance="outline" subscriptSizing="dynamic">
      <mat-icon matPrefix>search</mat-icon>
      <input matInput placeholder="Search drugs" [value]="search()"
        (input)="search.set($any($event.target).value)" />
    </mat-form-field>

    <button matButton="outlined" [matMenuTriggerFor]="phaseMenu">
      <mat-icon>filter_list</mat-icon>
      Phase @if (phases().size) { ({{ phases().size }}) }
    </button>
    <mat-menu #phaseMenu="matMenu">
      @for (p of allPhases; track p) {
        <button mat-menu-item (click)="togglePhase(p); $event.stopPropagation()">
          <mat-checkbox [checked]="phases().has(p)" (click)="$event.preventDefault()" />
          {{ p }}
        </button>
      }
    </mat-menu>

    <span class="list__spacer"></span>
    <button matButton><mat-icon>download</mat-icon> Export</button>
  </div>

  @if (activeChips().length) {
    <mat-chip-set class="list__chips" aria-label="Applied filters">
      @for (chip of activeChips(); track chip.key) {
        <mat-chip-row (removed)="removeChip(chip)">
          {{ chip.label }}
          <button matChipRemove [attr.aria-label]="'Remove ' + chip.label">
            <mat-icon>cancel</mat-icon>
          </button>
        </mat-chip-row>
      }
      <button matButton class="list__clear" (click)="clearAll()">Clear all</button>
    </mat-chip-set>
  }

  <p class="list__count">{{ rows().length }} of {{ allRows.length }}</p>

  @if (rows().length) {
    <table mat-table [dataSource]="rows()" class="list__table">
      <ng-container matColumnDef="drug">
        <th mat-header-cell *matHeaderCellDef>Drug</th>
        <td mat-cell *matCellDef="let r">{{ r.drug }}</td>
      </ng-container>
      <ng-container matColumnDef="phase">
        <th mat-header-cell *matHeaderCellDef>Phase</th>
        <td mat-cell *matCellDef="let r">{{ r.phase }}</td>
      </ng-container>
      <ng-container matColumnDef="updated">
        <th mat-header-cell *matHeaderCellDef>Updated</th>
        <td mat-cell *matCellDef="let r">{{ r.updated }}</td>
      </ng-container>
      <tr mat-header-row *matHeaderRowDef="columns"></tr>
      <tr mat-row *matRowDef="let row; columns: columns"></tr>
    </table>
  } @else {
    <hlx-empty-state
      heading="No results match your filters"
      message="Try removing a filter or broadening your search."
    >
      <button hlx-empty-state-actions matButton="filled" class="hlx-btn-accent" (click)="clearAll()">
        Clear filters
      </button>
    </hlx-empty-state>
  }
</div>`;

const styleCode = `.list { padding: 1rem; }
.list__toolbar {
  display: flex;
  align-items: center;
  gap: var(--hlx-spacing-1, 8px);
  flex-wrap: wrap;
}
.list__search { width: 240px; }
.list__spacer { flex: 1; }
.list__chips {
  margin: var(--hlx-spacing-2, 16px) 0 0;
  align-items: center;
}
.list__count {
  color: var(--hlx-text-secondary, #59676b);
  font: var(--sys-body-small, 400 13px/16px 'Source Sans 3', sans-serif);
  margin: var(--hlx-spacing-2, 16px) 0;
}
.list__table { width: 100%; }`;

@Component({
  template: htmlCode,
  imports: [
    MatFormFieldModule,
    MatInput,
    MatButton,
    MatIconButton,
    MatIcon,
    MatMenuModule,
    MatCheckboxModule,
    MatChipsModule,
    MatTableModule,
    HelixEmptyStateComponent,
  ],
  styles: [styleCode],
})
class SampleComponent {
  readonly allPhases = PHASES;
  readonly columns = ['drug', 'phase', 'updated'];

  readonly allRows: Row[] = [
    { drug: 'Pembrolizumab', phase: 'Phase III', updated: '2 Oct 2026' },
    { drug: 'Osimertinib', phase: 'Phase III', updated: '28 Sep 2026' },
    { drug: 'Sotorasib', phase: 'Phase II', updated: '21 Sep 2026' },
    { drug: 'Adagrasib', phase: 'Phase II', updated: '14 Sep 2026' },
    { drug: 'Divarasib', phase: 'Phase I', updated: '9 Sep 2026' },
    { drug: 'BI-2493', phase: 'Preclinical', updated: '1 Sep 2026' },
  ];

  readonly search = signal('');
  readonly phases = signal<ReadonlySet<string>>(new Set());

  readonly rows = computed(() => {
    const q = this.search().trim().toLowerCase();
    const phases = this.phases();
    return this.allRows.filter(
      (r) =>
        (!q || r.drug.toLowerCase().includes(q)) &&
        (phases.size === 0 || phases.has(r.phase)),
    );
  });

  readonly activeChips = computed(() => {
    const chips: { key: string; label: string }[] = [];
    const q = this.search().trim();
    if (q) chips.push({ key: 'search', label: `Search: ${q}` });
    for (const p of this.phases()) chips.push({ key: `phase:${p}`, label: p });
    return chips;
  });

  togglePhase(p: string): void {
    this.phases.update((set) => {
      const next = new Set(set);
      if (next.has(p)) {
        next.delete(p);
      } else {
        next.add(p);
      }
      return next;
    });
  }

  removeChip(chip: { key: string }): void {
    if (chip.key === 'search') {
      this.search.set('');
    } else if (chip.key.startsWith('phase:')) {
      this.togglePhase(chip.key.slice('phase:'.length));
    }
  }

  clearAll(): void {
    this.search.set('');
    this.phases.set(new Set());
  }
}

export const ListWithFiltersPage: InputViewerComponent = {
  exampleName: 'List with filters',
  dynamicComponent: SampleComponent,
  height: 58,
  verticalView: true,
  htmlCode,
  cssCode: styleCode,
  tsCode: `import { Component, computed, signal } from '@angular/core';
import { HelixEmptyStateComponent } from '@cdx/ngx-branding';
// + Material form-field, input, button, menu, checkbox, chips, table, icon

// Filter inputs are signals; the visible rows, the chips and the count all
// derive from them with computed(), so they can never disagree. For large data,
// swap mat-table for the AG Grid Data grid — the toolbar, chips and states stay.
@Component({ /* … */ })
export class AlertsListPage {
  readonly search = signal('');
  readonly phases = signal<ReadonlySet<string>>(new Set());

  readonly rows = computed(() => {
    const q = this.search().trim().toLowerCase();
    const phases = this.phases();
    return this.allRows.filter(
      (r) =>
        (!q || r.drug.toLowerCase().includes(q)) &&
        (phases.size === 0 || phases.has(r.phase)),
    );
  });
}`,
};
