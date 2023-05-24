import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { NgxTranslationsService } from './ngx-translations.service';

@NgModule({
  imports: [CommonModule, TranslateModule],
  providers: [NgxTranslationsService],
})
export class NgxTranslationsModule {}
