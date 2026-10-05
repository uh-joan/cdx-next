/**
 * Demo-only plumbing: the Helix dialog size presets live on the overlay panel,
 * which renders at the document body, so a component's scoped styles can't reach
 * it. In a real app these classes ship from the theme (or your global styles);
 * here we inject them once so the pattern examples size and dock correctly.
 */
let injected = false;

export function ensureDialogSizeStyles(): void {
  if (injected || typeof document === 'undefined') return;
  injected = true;

  const style = document.createElement('style');
  style.dataset['helixDialogSizes'] = '';
  style.textContent = `
    .hlx-dialog-sm { width: 400px; max-width: 92vw; }
    .hlx-dialog-md { width: 560px; max-width: 92vw; }
    .hlx-dialog-lg { width: 800px; max-width: 92vw; }
    .hlx-dialog-side {
      position: fixed; inset: 0 0 0 auto; height: 100%;
      width: 480px; max-width: 92vw;
    }
    .hlx-dialog-fullscreen { width: 100vw; max-width: 100vw; height: 100%; }
  `;
  document.head.appendChild(style);
}
