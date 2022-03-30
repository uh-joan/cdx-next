# CDX Button Toggle

## Usage

```html
<div class="cdx-button-toggle my-button-group">
  <button class="mdc-button active">File</button>
  <button class="mdc-button">Edit</button>
  <button class="mdc-button">Selection</button>
</div>
```

```javascript
// example implementation to handle state management in the button-group

window.addEventListener('load', (event) => {
  addButtonGroupListeners();
});

let groupedButtons = [];

const addButtonGroupListeners = () => {
  groupedButtons =
    document.getElementsByClassName('my-button-group')[0].children;
  Array.from(groupedButtons).forEach((el) => {
    el.addEventListener('click', onButtonClick, el);
  });
};

const onButtonClick = (el) => {
  let e = document
    .getElementsByClassName('active')[0]
    .classList.remove('active');
  el.currentTarget.classList.add('active');
};
```
