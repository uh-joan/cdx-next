import type { ICellRendererParams } from 'ag-grid-community';

/**
 * Shared AG Grid cell renderers for the Helix grid, so every grid doesn't
 * re-implement them. They build DOM with `textContent` (no HTML injection) and
 * style it with the Helix `--hlx-*` custom properties, so no extra stylesheet is
 * needed and the cells follow the app theme.
 */

/**
 * Renders the cell value as a neutral Helix chip (rounded, `surface-minimal`
 * background, `text-secondary`). Use for short categorical values — status,
 * phase, type.
 *
 * ```ts
 * { field: 'phase', cellRenderer: helixChipCellRenderer }
 * ```
 */
export function helixChipCellRenderer(
  params: ICellRendererParams,
): HTMLElement | string {
  const text = params.valueFormatted ?? params.value;
  if (text == null || text === '') {
    return '';
  }
  const chip = document.createElement('span');
  chip.className = 'hlx-grid-chip';
  chip.textContent = String(text);
  chip.style.cssText = [
    'display:inline-block',
    'padding:1px 8px',
    'border-radius:16px',
    'line-height:20px',
    'background:var(--hlx-surface-minimal)',
    'color:var(--hlx-text-secondary)',
    'font-weight:600',
  ].join(';');
  return chip;
}
