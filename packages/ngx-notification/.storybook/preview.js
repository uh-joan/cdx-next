import themeSetup from './theme-setup.scss';

const globalStyles = document.createElement('style');
globalStyles.innerHTML = themeSetup;
document.head.appendChild(globalStyles);

document.body.classList.add('mat-typography');
