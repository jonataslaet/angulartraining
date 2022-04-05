import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-funcionario-form',
  templateUrl: './funcionario-form.component.html',
  styleUrls: ['./funcionario-form.component.css']
})
export class FuncionarioFormComponent implements OnInit {

  lastId: number = 0;
  title = 'treinos-algaworks';
  adicionado = false;
  @Output() 
  funcionarioAdicionado = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  adicionar(): void {
    this.adicionado = true;
    this.title = this.title + ' ' + (this.lastId+1);
    const funcionario = {id: ++this.lastId, name: this.title}
    this.funcionarioAdicionado.emit(funcionario);
  }

  alterarNome(nome: any) {
    this.title = nome.target.value;
  }
}
