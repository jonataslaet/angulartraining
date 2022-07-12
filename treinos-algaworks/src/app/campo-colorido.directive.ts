import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appCampoColorido]',
  exportAs: 'ColoracaoDeCampo'
})
export class CampoColoridoDirective {

  @Input('appCampoColorido')cor = 'gray';

  @HostBinding('style.backgroundColor') corDeFundo: string;

  @HostListener('focus')
  onColor() {
    this.corDeFundo = this.cor;
  }

  @HostListener('blur')
  offColor() {
    this.corDeFundo = 'transparent';
  }

}
