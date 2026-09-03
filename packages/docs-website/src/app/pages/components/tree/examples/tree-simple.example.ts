import { Component } from '@angular/core';
import { MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatTreeModule } from '@angular/material/tree';

import { InputViewerComponent } from '../../../../core/example-viewer/example-viewer.model';

const htmlCode = `<div class="story">
  <mat-tree #tree [dataSource]="dataSource" [childrenAccessor]="childrenAccessor">
    <mat-tree-node *matTreeNodeDef="let node" matTreeNodePadding>
      <button matIconButton disabled></button>
      {{ node.name }}
    </mat-tree-node>

    <mat-tree-node
      *matTreeNodeDef="let node; when: hasChild"
      matTreeNodePadding
      [isExpandable]="true"
    >
      <button
        matIconButton
        matTreeNodeToggle
        [attr.aria-label]="'toggle ' + node.name"
      >
        <mat-icon>
          {{ tree.isExpanded(node) ? 'expand_more' : 'chevron_right' }}
        </mat-icon>
      </button>
      {{ node.name }}
    </mat-tree-node>
  </mat-tree>
</div>`;

const styleCode = `.story {
  min-width: 18rem;
  min-height: 25rem;
  padding: 1rem;
}`;

interface FoodNode {
  name: string;
  children?: FoodNode[];
}

const FOOD_DATA: FoodNode[] = [
  {
    name: 'Fruit',
    children: [{ name: 'Apple' }, { name: 'Banana' }, { name: 'Orange' }],
  },
  {
    name: 'Vegetables',
    children: [{ name: 'Lettuce' }, { name: 'Carrot' }, { name: 'Potato' }],
  },
];

const tsCode = `import { Component } from '@angular/core';
import { MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatTreeModule } from '@angular/material/tree';

interface FoodNode {
  name: string;
  children?: FoodNode[];
}

const FOOD_DATA: FoodNode[] = [
  {
    name: 'Fruit',
    children: [{ name: 'Apple' }, { name: 'Banana' }, { name: 'Orange' }],
  },
  {
    name: 'Vegetables',
    children: [{ name: 'Lettuce' }, { name: 'Carrot' }, { name: 'Potato' }],
  },
];

// FlatTreeControl / MatTreeFlattener are deprecated; mat-tree now takes a
// childrenAccessor (or levelAccessor) and owns the expansion state itself.
@Component({
  selector: 'app-tree-simple-example',
  templateUrl: './tree-simple-example.html',
  styleUrl: './tree-simple-example.scss',
  imports: [MatTreeModule, MatIcon, MatIconButton],
})
export class TreeSimpleExample {
  protected readonly dataSource = FOOD_DATA;

  protected readonly childrenAccessor = (node: FoodNode) => node.children ?? [];

  protected readonly hasChild = (_: number, node: FoodNode) =>
    !!node.children?.length;
}`;

@Component({
  template: htmlCode,
  imports: [MatTreeModule, MatIcon, MatIconButton],
  styles: [styleCode],
})
class SampleComponent {
  protected readonly dataSource = FOOD_DATA;

  protected readonly childrenAccessor = (node: FoodNode) => node.children ?? [];

  protected readonly hasChild = (_: number, node: FoodNode) =>
    !!node.children?.length;
}

export const TreeSimpleComponent: InputViewerComponent = {
  exampleName: 'Tree Simple',
  dynamicComponent: SampleComponent,
  height: 60,
  htmlCode,
  cssCode: styleCode,
  tsCode,
};
