import { Component, computed, signal } from '@angular/core';
import { MatButton, MatIconButton } from '@angular/material/button';
import { MatCheckbox } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInput } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';

import { InputViewerComponent } from '../../../../core/example-viewer/example-viewer.model';

interface Topping {
  id: string;
  label: string;
  selected: boolean;
}

const htmlCode = `<div class="story">
    <button
        matButton="filled"
        [matMenuTriggerFor]="menu"
        aria-label="Example menu with 
        complex content in expanded area"
    >
        Complex Menu
    </button>
    <mat-menu #menu="matMenu" 
        yPosition="below">
        <div
            (click)="$event.stopPropagation()"
            class="panel">
            <mat-form-field appearance="fill">
                <mat-label>Search</mat-label>
                <input
                    #searchInput
                    matInput
                    type="text"
                    [value]="search()"
                    (input)="search.set(searchInput.value)"
                />
                @if (search()) {
                    <button
                        matIconButton
                        matSuffix
                        aria-label="Clear"
                        (click)="search.set('')"
                    >
                        <mat-icon>close</mat-icon>
                    </button>
                }
            </mat-form-field>

            <section>
                <h2>Select your toppings:</h2>
                @for (topping of toppings(); track topping.id) {
                    <p class="no-margin">
                        <mat-checkbox
                            [checked]="topping.selected"
                            (change)="toggleTopping(topping.id)"
                        >
                            {{ topping.label }}
                        </mat-checkbox>
                    </p>
                }
            </section>

            <section>
                <h3>You chose:</h3>
                <span class="mat-small">{{ chosenToppings() }}</span>
            </section>
        </div>
    </mat-menu>
</div>`;

const styleCode = `.story {
    margin: 10rem;
}

.panel {
    width: 16rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 20px;
}

.panel .no-margin {
    margin: 0;
}`;

const tsCode = `import { Component, computed, signal } from '@angular/core';
import { MatButton, MatIconButton } from '@angular/material/button';
import { MatCheckbox } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInput } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';

interface Topping {
  id: string;
  label: string;
  selected: boolean;
}

@Component({
  selector: 'app-menu-complex-example',
  templateUrl: './menu-complex-example.html',
  styleUrl: './menu-complex-example.scss',
  imports: [
    MatMenuModule,
    MatButton,
    MatIconButton,
    MatCheckbox,
    MatFormFieldModule,
    MatInput,
    MatIcon,
  ],
})
export class MenuComplexExample {
  protected readonly search = signal('');

  protected readonly toppings = signal<Topping[]>([
    { id: 'pepperoni', label: 'Pepperoni', selected: false },
    { id: 'extracheese', label: 'Extra Cheese', selected: false },
    { id: 'mushroom', label: 'Mushroom', selected: false },
  ]);

  protected readonly chosenToppings = computed(() => {
    const chosen = this.toppings().filter((topping) => topping.selected);
    return chosen.length
      ? chosen.map((topping) => topping.label).join(', ')
      : 'Nothing yet';
  });

  protected toggleTopping(id: string): void {
    this.toppings.update((toppings) =>
      toppings.map((topping) =>
        topping.id === id
          ? { ...topping, selected: !topping.selected }
          : topping,
      ),
    );
  }
}`;

@Component({
  template: htmlCode,
  imports: [
    MatMenuModule,
    MatButton,
    MatIconButton,
    MatCheckbox,
    MatFormFieldModule,
    MatInput,
    MatIcon,
  ],
  styles: [styleCode],
})
class SampleComponent {
  protected readonly search = signal('');

  protected readonly toppings = signal<Topping[]>([
    { id: 'pepperoni', label: 'Pepperoni', selected: false },
    { id: 'extracheese', label: 'Extra Cheese', selected: false },
    { id: 'mushroom', label: 'Mushroom', selected: false },
  ]);

  protected readonly chosenToppings = computed(() => {
    const chosen = this.toppings().filter((topping) => topping.selected);
    return chosen.length
      ? chosen.map((topping) => topping.label).join(', ')
      : 'Nothing yet';
  });

  protected toggleTopping(id: string): void {
    this.toppings.update((toppings) =>
      toppings.map((topping) =>
        topping.id === id
          ? { ...topping, selected: !topping.selected }
          : topping,
      ),
    );
  }
}

export const MenuComplexComponent: InputViewerComponent = {
  exampleName: 'Menu Complex',
  dynamicComponent: SampleComponent,
  height: 70,
  htmlCode,
  cssCode: styleCode,
  tsCode,
};
