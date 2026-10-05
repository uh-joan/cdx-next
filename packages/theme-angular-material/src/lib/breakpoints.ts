/**
 * Helix responsive breakpoints, mirroring the SCSS tokens in
 * `styles/theme/helix/variables/breakpoints.scss`. The pixel values align with
 * Angular CDK's `BreakpointObserver` bands, so SCSS media queries and TypeScript
 * breakpoint checks agree.
 *
 * Use the ready-made `HELIX_MEDIA` queries with `BreakpointObserver`:
 *
 * ```ts
 * private readonly breakpoints = inject(BreakpointObserver);
 * readonly isCompact = toSignal(
 *   this.breakpoints.observe(HELIX_MEDIA.ltMd).pipe(map((s) => s.matches)),
 *   { initialValue: false },
 * );
 * ```
 */
export const HELIX_BREAKPOINTS = {
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1920,
} as const;

export type HelixBreakpoint = keyof typeof HELIX_BREAKPOINTS;

/**
 * Media-query strings for `BreakpointObserver`. `gt*` is min-width (this
 * breakpoint and wider); `lt*` is max-width (below this breakpoint).
 */
export const HELIX_MEDIA = {
  gtSm: `(min-width: ${HELIX_BREAKPOINTS.sm}px)`,
  gtMd: `(min-width: ${HELIX_BREAKPOINTS.md}px)`,
  gtLg: `(min-width: ${HELIX_BREAKPOINTS.lg}px)`,
  gtXl: `(min-width: ${HELIX_BREAKPOINTS.xl}px)`,
  ltSm: `(max-width: ${HELIX_BREAKPOINTS.sm - 0.02}px)`,
  ltMd: `(max-width: ${HELIX_BREAKPOINTS.md - 0.02}px)`,
  ltLg: `(max-width: ${HELIX_BREAKPOINTS.lg - 0.02}px)`,
  ltXl: `(max-width: ${HELIX_BREAKPOINTS.xl - 0.02}px)`,
} as const;
