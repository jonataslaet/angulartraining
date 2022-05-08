import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appCampoColorido]'
})
export class CampoColoridoDirective {

  @HostBinding('style.backgroundColor') corDeFundo: string;

  @HostListener('focus')
  onFocus() {
    this.corDeFundo = 'yellow';
  }

  @HostListener('blur')
  offFocus() {
    this.corDeFundo = 'transparent';
  }

}
