// TODO UPDATE THIS STORY
import { FlatTreeControl } from '@angular/cdk/tree';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {
  MatTreeFlatDataSource,
  MatTreeFlattener,
  MatTreeModule,
} from '@angular/material/tree';

import { InputViewerComponent } from '../../../../core/example-viewer/example-viewer.model';

const htmlCode = `<div class="story">
  <mat-tree [dataSource]="dataSource" 
    [treeControl]="treeControl">
    <mat-tree-node role="treeitem" 
      *matTreeNodeDef="let node" matTreeNodePadding>
      <button mat-icon-button disabled></button>
      {{ node.name }}
    </mat-tree-node>
    <mat-tree-node role="treeitem" 
      *matTreeNodeDef="let node; when: hasChild">
      <button
        mat-icon-button
        matTreeNodeToggle
        [attr.aria-label]="'toggle ' + node.name"
      >
        <mat-icon>
          {{ treeControl.isExpanded(node) 
            ? 'expand_more' : 'chevron_right' }}
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

interface FlatNode {
  expandable: boolean;
  name: string;
  level: number;
}

@Component({
  template: htmlCode,
  imports: [MatTreeModule, MatIconModule, MatButtonModule],
  styles: [styleCode],
})
class SampleComponent {
  public treeControl = new FlatTreeControl<FlatNode>(
    (node: FlatNode) => node.level,
    (node: FlatNode) => node.expandable,
  );
  public treeFlattener = new MatTreeFlattener(
    this.transformer,
    (node: FlatNode) => node.level,
    (node: FlatNode) => node.expandable,
    (node: FoodNode) => node.children,
  );
  public dataSource = new MatTreeFlatDataSource(
    this.treeControl,
    this.treeFlattener,
  );

  constructor() {
    this.dataSource.data = [
      {
        name: 'Fruit',
        children: [{ name: 'Apple' }, { name: 'Banana' }, { name: 'Orange' }],
      },
      {
        name: 'Vegetables',
        children: [{ name: 'Lettuce' }, { name: 'Carrot' }, { name: 'Potato' }],
      },
    ];
  }

  hasChild = (_: number, node: FlatNode) => node.expandable;

  private transformer(node: FoodNode, level: number) {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level,
    };
  }
}

export const TreeSimpleComponent: InputViewerComponent = {
  exampleName: 'Tree Simple',
  dynamicComponent: SampleComponent,
  height: 60,
  htmlCode: htmlCode,
  cssCode: styleCode,
  tsCode: `import { Component } from '@angular/core';
import {
  MatTreeFlatDataSource,
  MatTreeFlattener,
  MatTreeModule,
} from '@angular/material/tree';
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
    template: htmlCode,
    imports: [
      MatTreeModule,
      MatIconModule,
      MatButtonModule
    ],
    styles: [styleCode],
})
class SampleComponent {
  public treeControl = new FlatTreeControl<FlatNode>(
    (node: FlatNode) => node.level,
    (node: FlatNode) => node.expandable,
  );
  public treeFlattener = new MatTreeFlattener(
    this.transformer,
    (node: FlatNode) => node.level,
    (node: FlatNode) => node.expandable,
    (node: FoodNode) => node.children,
  );
  public dataSource = new MatTreeFlatDataSource(
    this.treeControl,
    this.treeFlattener,
  );

  constructor() {
    this.dataSource.data = [
      {
        name: 'Fruit',
        children: [ 
                    { name: 'Apple' }, 
                    { name: 'Banana' },
                    { name: 'Orange' }
                  ],
      },
      {
        name: 'Vegetables',
        children: [
                    { name: 'Lettuce' }, 
                    { name: 'Carrot' },
                    { name: 'Potato' }
                  ],
      },
    ];
  }

  hasChild = (_: number, node: FlatNode) => node.expandable;

  private transformer(node: FoodNode, level: number) {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level,
    };
  }
}`,
};
