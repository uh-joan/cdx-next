# CDX PopperJS theme

## Usage

```html
<div class="popper-container">
  <button
    class="cdx-popper-button mdc-button mdc-button--raised my-popper-button"
  >
    <span class="mdc-button__ripple"></span> Pop
  </button>
  <div class="cdx-popper-tooltip my-tooltip" role="tooltip">
    I'm a tooltip
    <div class="cdx-popper-arrow" data-popper-arrow></div>
  </div>
</div>
```

```javascript
window.addEventListener('load', (event) => {
  initPopperJS();
});

const initPopperJS = () => {
  const button = document.querySelector('.my-popper-button');
  const tooltip = document.querySelector('.my-tooltip');

  Popper.createPopper(button, tooltip, {
    placement: 'top',
    applyArrowClass: 'popper-arrow',
    modifiers: [
      {
        name: 'offset',
        options: {
          offset: [0, 8],
        },
      },
    ],
  });
  // show/hide handling by implementor
};
```
