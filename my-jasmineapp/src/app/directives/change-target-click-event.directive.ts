//app/directives
import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appChangeTargetClickEvent]'
})
export class ChangeTargetClickEventDirective {
  @HostListener('click', ['$event'])
  onClick(event: PointerEvent): void {
    event.preventDefault();
    event.stopPropagation();
    const target = (event.target as HTMLElement);
    target.parentElement.dispatchEvent(
      new MouseEvent('click', {
        view: window,
        bubbles: true,
        cancelable: true
      })
    );
  }
}
