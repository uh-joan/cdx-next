import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { type Meta, moduleMetadata, type StoryObj } from '@storybook/angular';

type SidenavArgs = {
  mode: 'side' | 'over' | 'push';
  position: 'start' | 'end';
  opened: boolean;
  hasBackdrop: 'default' | 'true' | 'false';
  disableClose: boolean;
  showIcons: boolean;
  destinations: string;
};

const backdrop: Record<SidenavArgs['hasBackdrop'], boolean | null> = {
  default: null,
  true: true,
  false: false,
};

const icons = ['home', 'search', 'folder', 'bar_chart', 'settings'];

const meta: Meta<SidenavArgs> = {
  title: 'Components/Sidenav',
  decorators: [
    moduleMetadata({
      imports: [MatSidenavModule, MatListModule, MatButton, MatIcon],
    }),
  ],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Helix sidenav (navigation drawer) is the Angular Material `mat-sidenav` styled by the Helix theme. Standard drawers use `mode="side"`; modal drawers use `over` (or `push`) with a backdrop.',
      },
    },
  },
  argTypes: {
    mode: {
      control: 'inline-radio',
      options: ['side', 'over', 'push'],
      description:
        '`side` = standard drawer next to the content; `over` / `push` = modal drawer',
    },
    position: {
      control: 'inline-radio',
      options: ['start', 'end'],
      description: 'Side of the container the drawer opens from',
    },
    opened: { control: 'boolean', description: 'Open or closed state' },
    hasBackdrop: {
      control: 'inline-radio',
      options: ['default', 'true', 'false'],
      description:
        'Container backdrop; `default` shows one only for `over` / `push`',
    },
    disableClose: {
      control: 'boolean',
      description: 'Prevent closing with Escape or a backdrop click',
    },
    showIcons: {
      control: 'boolean',
      description: 'Show a leading icon on each destination',
    },
    destinations: {
      control: 'text',
      description:
        'Comma-separated destination labels; put the most frequently used first',
    },
  },
  args: {
    mode: 'side',
    position: 'start',
    opened: true,
    hasBackdrop: 'default',
    disableClose: false,
    showIcons: true,
    destinations: 'Home, Search, Projects, Reports, Settings',
  },
  render: (args) => ({
    props: {
      ...args,
      backdrop: backdrop[args.hasBackdrop],
      items: args.destinations
        .split(',')
        .map((label) => label.trim())
        .filter(Boolean)
        .map((label, i) => ({ label, icon: icons[i % icons.length] })),
    },
    template: `
      <mat-sidenav-container style="height: 360px" [hasBackdrop]="backdrop">
        <mat-sidenav
          #drawer
          [mode]="mode"
          [position]="position"
          [opened]="opened"
          [disableClose]="disableClose"
        >
          <mat-nav-list>
            @for (item of items; track item.label; let first = $first) {
              <a mat-list-item href="#" [activated]="first" (click)="$event.preventDefault()">
                @if (showIcons) {
                  <mat-icon matListItemIcon>{{ item.icon }}</mat-icon>
                }
                <span matListItemTitle>{{ item.label }}</span>
              </a>
            }
          </mat-nav-list>
        </mat-sidenav>
        <mat-sidenav-content style="padding: 16px">
          <button matButton="outlined" (click)="drawer.toggle()">Toggle sidenav</button>
          <p>Main content</p>
        </mat-sidenav-content>
      </mat-sidenav-container>`,
  }),
};

export default meta;
type Story = StoryObj<SidenavArgs>;

export const Playground: Story = {};

/** Standard drawer: sits next to the content and can stay open. */
export const Standard: Story = { args: { mode: 'side', opened: true } };

/** Modal drawer: overlays the content with a backdrop. */
export const Modal: Story = { args: { mode: 'over', opened: true } };

export const End: Story = { args: { position: 'end' } };

export const TextOnly: Story = { args: { showIcons: false } };
