import { Component, inject, input, signal } from '@angular/core';
import { MatButton, MatIconButton } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogModule,
} from '@angular/material/dialog';
import { MatIcon } from '@angular/material/icon';
import { type Meta, moduleMetadata, type StoryObj } from '@storybook/angular';

type DialogArgs = {
  triggerLabel: string;
  title: string;
  content: string;
  actions: 'acknowledge' | 'confirm';
  confirmLabel: string;
  dismissLabel: string;
  confirmColor: 'primary' | 'negative';
  actionsAlign: 'start' | 'center' | 'end';
  showCloseButton: boolean;
  disableClose: boolean;
  width: string;
};

const confirmClass: Record<DialogArgs['confirmColor'], string> = {
  primary: '',
  negative: 'hlx-btn-negative',
};

@Component({
  selector: 'cdx-story-dialog-content',
  imports: [MatDialogModule, MatButton, MatIconButton, MatIcon],
  template: `
    <h2 mat-dialog-title>{{ data.title }}</h2>
    @if (data.showCloseButton) {
      <button
        matIconButton
        mat-dialog-close
        aria-label="Close dialog"
        style="position: absolute; top: 12px; right: 12px"
      >
        <mat-icon>close</mat-icon>
      </button>
    }
    <mat-dialog-content>
      <p>{{ data.content }}</p>
    </mat-dialog-content>
    <mat-dialog-actions [align]="data.actionsAlign">
      @if (data.actions === 'confirm') {
        <button matButton [mat-dialog-close]="false">
          {{ data.dismissLabel }}
        </button>
      }
      <button
        matButton="filled"
        [class]="confirmClass[data.confirmColor]"
        [mat-dialog-close]="true"
      >
        {{ data.confirmLabel }}
      </button>
    </mat-dialog-actions>
  `,
})
class StoryDialogContent {
  protected readonly data = inject<DialogArgs>(MAT_DIALOG_DATA);
  protected readonly confirmClass = confirmClass;
}

/** Opens the dialog with the current args (dialogs are service-driven). */
@Component({
  selector: 'cdx-story-dialog-trigger',
  imports: [MatButton],
  template: `
    <button matButton="filled" (click)="open()">
      {{ config().triggerLabel }}
    </button>
    @if (result() !== undefined) {
      <p>Dialog result: {{ result() }}</p>
    }
  `,
})
class StoryDialogTrigger {
  readonly config = input.required<DialogArgs>();

  private readonly dialog = inject(MatDialog);
  protected readonly result = signal<string | undefined>(undefined);

  open(): void {
    const config = this.config();
    this.dialog
      .open(StoryDialogContent, {
        data: config,
        width: config.width || undefined,
        disableClose: config.disableClose,
        // The dialog renders in the CDK overlay, outside the themed wrapper.
        panelClass: ['helix-theme-material', 'mat-typography'],
      })
      .afterClosed()
      .subscribe((value) => this.result.set(String(value)));
  }
}

const meta: Meta<DialogArgs> = {
  title: 'Components/Dialog',
  decorators: [moduleMetadata({ imports: [StoryDialogTrigger] })],
  parameters: {
    docs: {
      description: {
        component:
          'Helix dialogs are Angular Material dialogs opened with the `MatDialog` service. Use them for a single task: one action to acknowledge, or two actions to confirm or dismiss. Click the button to open the dialog with the current args.',
      },
    },
  },
  argTypes: {
    triggerLabel: {
      control: 'text',
      description: 'Label of the button that opens the dialog',
    },
    title: { control: 'text', description: '`mat-dialog-title` text' },
    content: { control: 'text', description: '`mat-dialog-content` text' },
    actions: {
      control: 'inline-radio',
      options: ['acknowledge', 'confirm'],
      description:
        'One action for an acknowledgement, or two actions (confirm + dismiss)',
    },
    confirmLabel: {
      control: 'text',
      description: 'Primary action label; describe the action, avoid “Yes”',
    },
    dismissLabel: {
      control: 'text',
      description: 'Dismiss action label (confirm mode)',
    },
    confirmColor: {
      control: 'inline-radio',
      options: ['primary', 'negative'],
      description:
        'Primary action color; negative (`hlx-btn-negative`) for destructive actions',
    },
    actionsAlign: {
      control: 'inline-radio',
      options: ['start', 'center', 'end'],
      description: '`mat-dialog-actions` alignment',
    },
    showCloseButton: {
      control: 'boolean',
      description: 'Show a close icon button in the top corner',
    },
    disableClose: {
      control: 'boolean',
      description: 'Prevent closing with Escape or a backdrop click',
    },
    width: {
      control: 'text',
      description: 'Dialog width (CSS value); empty for the default',
    },
  },
  args: {
    triggerLabel: 'Open dialog',
    title: 'Delete project?',
    content:
      'This permanently deletes the project and all of its files. You can’t undo this action.',
    actions: 'confirm',
    confirmLabel: 'Delete project',
    dismissLabel: 'Cancel',
    confirmColor: 'negative',
    actionsAlign: 'end',
    showCloseButton: false,
    disableClose: false,
    width: '',
  },
  render: (args) => ({
    props: { config: args },
    template: `
      <div style="padding: 16px">
        <cdx-story-dialog-trigger [config]="config" />
      </div>`,
  }),
};

export default meta;
type Story = StoryObj<DialogArgs>;

export const Playground: Story = {};

export const Acknowledgement: Story = {
  args: {
    title: 'Export complete',
    content: 'Your report has been exported and sent to your email address.',
    actions: 'acknowledge',
    confirmLabel: 'Got it',
    confirmColor: 'primary',
  },
};

export const Confirmation: Story = {
  args: {
    title: 'Publish changes?',
    content: 'Your changes will be visible to everyone with access.',
    confirmLabel: 'Publish',
    confirmColor: 'primary',
  },
};

export const WithCloseButton: Story = {
  args: { showCloseButton: true, width: '480px' },
};
