import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  lastId: number = 0;
  title = 'treinos-algaworks';
  adicionado = false;
  funcionarios = [];

  adicionar(): void {
    this.adicionado = true;
    this.title += ' ' + (this.lastId+1);
    this.funcionarios.push({id: ++this.lastId, name: this.title});
  }

  alterarNome(nome: any) {
    this.title = nome.target.value;
  }
}
