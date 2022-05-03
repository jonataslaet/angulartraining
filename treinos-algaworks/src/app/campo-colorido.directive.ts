import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCampoColorido]'
})
export class CampoColoridoDirective {

  constructor(
    private elementRef: ElementRef,
    private render: Renderer2
  ) {
    
  }

  @HostListener('focus')
  onFocus() {
    this.render.setStyle(this.elementRef.nativeElement, 'background-color', 'yellow');
  }

  @HostListener('blur')
  offFocus() {
    this.render.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');
  }

}
