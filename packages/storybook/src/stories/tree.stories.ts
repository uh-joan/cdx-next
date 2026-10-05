import { MatIconButton } from '@angular/material/button';
import { MatCheckbox } from '@angular/material/checkbox';
import { MatIcon } from '@angular/material/icon';
import { MatTreeModule } from '@angular/material/tree';
import { type Meta, moduleMetadata, type StoryObj } from '@storybook/angular';

interface TreeNode {
  name: string;
  children?: TreeNode[];
}

type TreeArgs = {
  selection: 'none' | 'checkbox';
  expanded: boolean;
  disabledLeaves: boolean;
};

const TREE_DATA: TreeNode[] = [
  {
    name: 'Fruit',
    children: [{ name: 'Apple' }, { name: 'Banana' }, { name: 'Orange' }],
  },
  {
    name: 'Vegetables',
    children: [
      {
        name: 'Green',
        children: [{ name: 'Broccoli' }, { name: 'Brussels sprouts' }],
      },
      { name: 'Orange', children: [{ name: 'Pumpkin' }, { name: 'Carrot' }] },
    ],
  },
];

const leaves = (node: TreeNode): TreeNode[] =>
  node.children?.length ? node.children.flatMap(leaves) : [node];

/** Props shared by every tree story: data, accessors and checkbox state. */
function treeProps(args: TreeArgs) {
  const checked = new Set<TreeNode>();
  return {
    ...args,
    dataSource: TREE_DATA,
    childrenAccessor: (node: TreeNode) => node.children ?? [],
    hasChild: (_: number, node: TreeNode) => !!node.children?.length,
    isChecked: (node: TreeNode) => leaves(node).every((n) => checked.has(n)),
    isPartial: (node: TreeNode) => {
      const all = leaves(node);
      const count = all.filter((n) => checked.has(n)).length;
      return count > 0 && count < all.length;
    },
    toggle: (node: TreeNode) => {
      const all = leaves(node);
      const select = !all.every((n) => checked.has(n));
      all.forEach((n) => (select ? checked.add(n) : checked.delete(n)));
    },
  };
}

const checkbox = `
        @if (selection === 'checkbox') {
          <mat-checkbox
            [checked]="isChecked(node)"
            [indeterminate]="isPartial(node)"
            [disabled]="DISABLED"
            (change)="toggle(node)"
          >{{ node.name }}</mat-checkbox>
        } @else {
          {{ node.name }}
        }`;

const template = `
  <mat-tree #tree [dataSource]="dataSource" [childrenAccessor]="childrenAccessor" style="max-width: 360px">
    <mat-tree-node
      *matTreeNodeDef="let node"
      matTreeNodePadding
      [isDisabled]="disabledLeaves"
    >
      <button matIconButton disabled></button>
      ${checkbox.replace('DISABLED', 'disabledLeaves')}
    </mat-tree-node>

    <mat-tree-node
      *matTreeNodeDef="let node; when: hasChild"
      matTreeNodePadding
      [isExpandable]="true"
      [isExpanded]="expanded"
    >
      <button
        matIconButton
        matTreeNodeToggle
        [attr.aria-label]="'Toggle ' + node.name"
      >
        <mat-icon>
          {{ tree.isExpanded(node) ? 'expand_more' : 'chevron_right' }}
        </mat-icon>
      </button>
      ${checkbox.replace('DISABLED', 'false')}
    </mat-tree-node>
  </mat-tree>`;

const meta: Meta<TreeArgs> = {
  title: 'Components/Tree',
  decorators: [
    moduleMetadata({
      imports: [MatTreeModule, MatIconButton, MatIcon, MatCheckbox],
    }),
  ],
  parameters: {
    docs: {
      description: {
        component:
          'Helix trees are Angular Material trees (`mat-tree` with a `childrenAccessor`) styled by the Helix theme. Use them with or without checkboxes.',
      },
    },
  },
  argTypes: {
    selection: {
      control: 'inline-radio',
      options: ['none', 'checkbox'],
      description:
        'Plain nodes, or `mat-checkbox` nodes where selection is needed (parents show an indeterminate state).',
    },
    expanded: {
      control: 'boolean',
      description:
        'Expand every parent node (`[isExpanded]` on `mat-tree-node`)',
    },
    disabledLeaves: {
      control: 'boolean',
      description:
        'Disable the leaf nodes (`[isDisabled]` on `mat-tree-node`, plus the checkbox)',
    },
  },
  args: {
    selection: 'none',
    expanded: false,
    disabledLeaves: false,
  },
  render: (args) => ({ props: treeProps(args), template }),
};

export default meta;
type Story = StoryObj<TreeArgs>;

export const Playground: Story = {};

export const Expanded: Story = { args: { expanded: true } };

export const WithCheckboxes: Story = {
  args: { selection: 'checkbox', expanded: true },
};

export const DisabledLeaves: Story = {
  args: { selection: 'checkbox', expanded: true, disabledLeaves: true },
};
