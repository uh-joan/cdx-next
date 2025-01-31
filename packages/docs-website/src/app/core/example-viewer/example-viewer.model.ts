import { Type } from '@angular/core';

export interface InputViewerComponent {
  exampleName?: string;
  dynamicComponent?: Type<any>;
  height?: number;
  verticalView?: boolean;
  hideCss?: boolean;
  htmlCode?: string;
  cssCode?: string;
  tsCode?: string;
}
