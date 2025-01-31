import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ContentChild,
  ContentChildren,
  ElementRef,
  HostListener,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';

import { ParagraphComponent } from '../../components/paragraph/paragraph.component';
import { BookmarkComponent } from '../bookmark/bookmark.component';

@Component({
  selector: 'cdx-bookmarked-content',
  templateUrl: './bookmarked-content.component.html',
  styleUrls: ['./bookmarked-content.component.scss'],
  standalone: true,
  imports: [BookmarkComponent],
})
export class BookmarkedContentComponent {
  @ContentChildren(ParagraphComponent)
  bookmarks!: QueryList<ParagraphComponent>;
  @ContentChildren(ParagraphComponent, { read: ElementRef })
  bookmarkRefs!: QueryList<ParagraphComponent>;

  @HostListener('window:scroll', ['$event'])
  track(event: any) {
    console.log('Scroll Event', event);
  }
}
