import { provideLocationMocks } from '@angular/common/testing';
import { Component, inject, Input, type OnChanges } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { provideRouter, Router, type Routes } from '@angular/router';
import {
  applicationConfig,
  type Meta,
  moduleMetadata,
  type StoryObj,
} from '@storybook/angular';
import { BreadcrumbComponent, BreadcrumbItemDirective } from 'xng-breadcrumb';

/**
 * A small nested route tree carrying breadcrumb data. The router uses an
 * in-memory location so stories never touch the Storybook iframe URL.
 */
const SEGMENTS = [
  { path: 'components', label: 'Components' },
  { path: 'navigation', label: 'Navigation' },
  { path: 'breadcrumbs', label: 'Breadcrumbs' },
];

function nestRoutes(index: number): Routes {
  // An empty-path leaf lets the router stop at any level of the trail.
  const leaf = { path: '', children: [] };
  const segment = SEGMENTS[index];
  if (!segment) return [leaf];
  return [
    leaf,
    {
      path: segment.path,
      data: { breadcrumb: segment.label },
      children: nestRoutes(index + 1),
    },
  ];
}

const routes: Routes = [
  {
    path: '',
    data: { breadcrumb: { label: 'Home', info: 'home' } },
    children: nestRoutes(0),
  },
];

/** Navigates the story router to the requested depth. */
@Component({ selector: 'cdx-story-route', template: '' })
class StoryRoute implements OnChanges {
  @Input() depth = SEGMENTS.length;
  private readonly router = inject(Router);

  ngOnChanges(): void {
    const path = SEGMENTS.slice(0, this.depth)
      .map((segment) => segment.path)
      .join('/');
    void this.router.navigateByUrl(`/${path}`);
  }
}

type BreadcrumbsArgs = {
  depth: number;
  separator: 'chevron' | '>' | '/';
  homeIcon: boolean;
};

// Item styles from the docs example, plus the list spacing
// that <cdx-breadcrumb> (@cdx/theme-xng-breadcrumb) applies.
const helixItemStyles = `
  :host ::ng-deep .xng-breadcrumb-list { gap: 0.5rem; }
  :host ::ng-deep .xng-breadcrumb-separator { margin: 0; }
  .hlx-breadcrumb-home { transform: scale(0.75); }
  .hlx-breadcrumb-last { font-weight: 600; }
  .hlx-breadcrumb-link { color: #5f6368; }
`;

function breadcrumbTemplate(args: BreadcrumbsArgs): string {
  const separator =
    args.separator === 'chevron'
      ? '[separator]="chevron"'
      : `separator="${args.separator}"`;
  return `
    <xng-breadcrumb ${separator} class="mat-body-medium">
      <ng-container
        *xngBreadcrumbItem="let breadcrumb; let info = info; let last = last"
      >
        @if (info && homeIcon) {
          <mat-icon class="hlx-breadcrumb-home">{{ info }}</mat-icon>
        } @else if (last) {
          <span class="hlx-breadcrumb-last">{{ breadcrumb }}</span>
        } @else {
          <span class="hlx-breadcrumb-link">{{ breadcrumb }}</span>
        }
      </ng-container>
    </xng-breadcrumb>
    <ng-template #chevron><mat-icon inline>chevron_right</mat-icon></ng-template>`;
}

const meta: Meta<BreadcrumbsArgs> = {
  title: 'Components/Breadcrumbs',
  decorators: [
    applicationConfig({
      providers: [provideRouter(routes), provideLocationMocks()],
    }),
    moduleMetadata({
      imports: [
        BreadcrumbComponent,
        BreadcrumbItemDirective,
        MatIcon,
        StoryRoute,
      ],
    }),
  ],
  parameters: {
    docs: {
      description: {
        component:
          'Breadcrumbs are built on `xng-breadcrumb`, which derives the trail from the Angular router (`data.breadcrumb` on each route). `<cdx-breadcrumb>` from `@cdx/theme-xng-breadcrumb` is the Helix wrapper (chevron separator, home icon); this story renders `xng-breadcrumb` directly with the Helix item template from the examples so the separator and item options can be explored, using a small in-memory router: Home › Components › Navigation › Breadcrumbs.',
      },
    },
  },
  argTypes: {
    depth: {
      control: { type: 'range', min: 0, max: SEGMENTS.length, step: 1 },
      description: 'How many levels below Home the current route is',
    },
    separator: {
      control: 'inline-radio',
      options: ['chevron', '>', '/'],
      description:
        '`separator` — a string, or a template (chevron icon, as in `<cdx-breadcrumb>`)',
    },
    homeIcon: {
      control: 'boolean',
      description:
        'Show the root crumb as an icon (from `data.breadcrumb.info`) instead of its label',
    },
  },
  args: {
    depth: SEGMENTS.length,
    separator: 'chevron',
    homeIcon: true,
  },
  render: (args) => ({
    props: args,
    styles: [helixItemStyles],
    template: `
      <cdx-story-route [depth]="depth"></cdx-story-route>
      <div style="padding: 16px">${breadcrumbTemplate(args)}</div>`,
  }),
};

export default meta;
type Story = StoryObj<BreadcrumbsArgs>;

export const Playground: Story = {};

export const TextSeparator: Story = { args: { separator: '>' } };

export const TextOnly: Story = { args: { homeIcon: false } };

export const Shallow: Story = { args: { depth: 1 } };
