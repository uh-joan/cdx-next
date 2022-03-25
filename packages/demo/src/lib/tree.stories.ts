import { FlatTreeControl } from '@angular/cdk/tree';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {
  MatTreeFlatDataSource,
  MatTreeFlattener,
  MatTreeModule,
} from '@angular/material/tree';
import { Meta } from '@storybook/angular';
import { html } from 'common-tags';

const treeTemplate = `<mat-tree [dataSource]="dataSource" [treeControl]="treeControl">
<mat-tree-node role="treeitem" *matTreeNodeDef="let node" matTreeNodePadding matTreeNodePaddingIndent="16">
  {{ node.name }}
</mat-tree-node>
<mat-tree-node role="treeitem" *matTreeNodeDef="let node; when: hasChild" matTreeNodePadding matTreeNodePaddingIndent="16">
  <button mat-icon-button matTreeNodeToggle [attr.aria-label]="'toggle ' + node.name">
    <mat-icon>
      {{ treeControl.isExpanded(node) ? 'expand_more' : 'chevron_right' }}
    </mat-icon>
  </button>
  {{ node.name }}
</mat-tree-node>
</mat-tree>`;

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
  selector: 'demo-basic-tree',
  template: treeTemplate,
})
class TreeComponent {
  public treeControl = new FlatTreeControl<FlatNode>(
    (node) => node.level,
    (node) => node.expandable,
  );
  public treeFlattener = new MatTreeFlattener(
    this.transformer,
    (node) => node.level,
    (node) => node.expandable,
    (node) => node.children,
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

export default {
  title: 'Tree',
  parameters: {
    layout: 'centered',
  },
} as Meta;

export const Tree = () => ({
  moduleMetadata: {
    imports: [MatTreeModule, MatIconModule, MatButtonModule],
    declarations: [TreeComponent],
  },
  template: html`<demo-basic-tree></demo-basic-tree>`,
});

Tree.parameters = {
  docs: {
    source: {
      code: treeTemplate,
    },
  },
};
