import { Type } from '@angular/core';

export interface InputViewerComponent {
  exampleName?: string;
  dynamicComponent?: Type<unknown>;
  height?: number;
  verticalView?: boolean;
  hideCss?: boolean;
  htmlCode?: string;
  cssCode?: string;
  tsCode?: string;
}
