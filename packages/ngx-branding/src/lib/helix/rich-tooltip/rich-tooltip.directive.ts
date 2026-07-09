import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import {
  Directive,
  ElementRef,
  HostListener,
  inject,
  input,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { SafeHtml } from '@angular/platform-browser';

import { RichTooltipComponent } from './rich-tooltip.component';

@Directive({
  selector: '[hlxTooltip]',
})
export class RichTooltipDirective {
  content = input.required<TemplateRef<SafeHtml>>({ alias: 'hlxTooltip' });
  tooltipTrigger = input<'hover' | 'click'>('hover');

  private overlayRef!: OverlayRef | null;

  private overlay = inject(Overlay);
  private elementRef = inject(ElementRef);
  private viewContainerRef = inject(ViewContainerRef);

  @HostListener('mouseenter')
  onMouseEnter() {
    if (this.tooltipTrigger() === 'hover') {
      this.show();
    }
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    if (this.tooltipTrigger() === 'hover') {
      this.hide();
    }
  }

  @HostListener('click', ['$event'])
  onClick(event: MouseEvent) {
    if (this.tooltipTrigger() === 'click') {
      event.stopPropagation();
      if (this.overlayRef) {
        this.hide();
      } else {
        this.show();
      }
    }
  }

  show() {
    if (this.overlayRef) return;

    this.overlayRef = this.overlay.create({
      positionStrategy: this.overlay
        .position()
        .flexibleConnectedTo(this.elementRef.nativeElement)
        .withFlexibleDimensions(false)
        .withGrowAfterOpen()
        .withPush(true)
        .withPositions([
          {
            originX: 'center',
            originY: 'bottom',
            overlayX: 'center',
            overlayY: 'top',
            offsetY: 8,
          },
          {
            originX: 'center',
            originY: 'top',
            overlayX: 'center',
            overlayY: 'bottom',
            offsetY: -8,
          },
          {
            originX: 'start',
            originY: 'center',
            overlayX: 'end',
            overlayY: 'center',
            offsetX: -8,
          },
          {
            originX: 'end',
            originY: 'center',
            overlayX: 'start',
            overlayY: 'center',
            offsetX: 8,
          },
        ]),
    });

    const tooltipPortal = new ComponentPortal(
      RichTooltipComponent,
      this.viewContainerRef,
    );
    const tooltipInstance = this.overlayRef.attach(tooltipPortal);
    tooltipInstance.setInput('content', this.content());

    // Handle outside clicks for click-triggered tooltips
    if (this.tooltipTrigger() === 'click') {
      const outsideClicksSubscription = this.overlayRef
        .outsidePointerEvents()
        .subscribe(() => {
          this.hide();
          outsideClicksSubscription.unsubscribe();
        });
    }
  }

  hide() {
    this.overlayRef?.dispose();
    this.overlayRef = null;
  }
}
