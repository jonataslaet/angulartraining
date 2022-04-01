import { Component, ElementRef } from '@angular/core';
import { Event } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  lastId: number = 0;
  title = 'treinos-algaworks';
  adicionado = false;
  names = [];

  adicionar(): void {
    this.adicionado = true;
    this.title += ' ' + (this.lastId+1);
    this.names.push({id: ++this.lastId, name: this.title});
  }

  alterarNome(nome: any) {
    this.title = nome.target.value;
  }
}
