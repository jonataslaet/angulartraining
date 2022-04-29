import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pessoas-pesquisa',
  templateUrl: './pessoas-pesquisa.component.html',
  styleUrls: ['./pessoas-pesquisa.component.css']
})
export class PessoasPesquisaComponent implements OnInit {

  pessoas = [
    { nome: 'Jonatas Laet', cidade: 'Teresina', estado: 'Piauí', status: 'ATIVO' },
    { nome: 'Dérick Wenner', cidade: 'Teresina', estado: 'Piauí', status: 'INATIVO' },
    { nome: 'Ismael Teles', cidade: 'Teresina', estado: 'Piauí', status: 'ATIVO' },
    { nome: 'Prisco Cleyton', cidade: 'Teresina', estado: 'Piauí', status: 'ATIVO' },
    { nome: 'Marcos Aurélio', cidade: 'Teresina', estado: 'Piauí', status: 'ATIVO' },
    { nome: 'Diego Rozado', cidade: 'Teresina', estado: 'Piauí', status: 'ATIVO' },
    { nome: 'Ítalo Guilherme', cidade: 'Teresina', estado: 'Piauí', status: 'INATIVO' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
