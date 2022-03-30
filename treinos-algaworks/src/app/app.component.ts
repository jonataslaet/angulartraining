import { Component, ElementRef } from '@angular/core';
import { Event } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'treinos-algaworks';
  adicionado = false;

  adicionar(): void {
    this.adicionado = true;
    this.title += ' ' + Math.round(Math.random() * 100);
  }

  alterarNome(nome: any) {
    this.title = nome.target.value;
  }
}
