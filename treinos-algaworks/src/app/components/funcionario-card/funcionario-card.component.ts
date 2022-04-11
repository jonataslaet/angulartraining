import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-funcionario-card',
  templateUrl: './funcionario-card.component.html',
  styleUrls: ['./funcionario-card.component.css']
})
export class FuncionarioCardComponent implements OnInit {

  @Input('func')
  funcionario: any;

  constructor() { }

  ngOnInit(): void {
  }

  getStyle() {
    return this.funcionario.id % 2 == 0 ?
      { 'color': 'red', backgroundColor: 'green' } :
      { 'color': 'blue', backgroundColor: 'yellow' }
  }

  isAdmin() {
    return this.funcionario.name.startsWith('T') || this.funcionario.name.startsWith('t');
  }
}
