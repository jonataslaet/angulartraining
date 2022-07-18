import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cano-conversor',
  templateUrl: './cano-conversor.component.html',
  styleUrls: ['./cano-conversor.component.css']
})
export class CanoConversorComponent implements OnInit {

  nome = 'Jonatas Laet';
  dataAniversario = new Date(1993, 2, 5);
  preco = 12855.32;
  troco = 0.57392;

  constructor() { }

  ngOnInit(): void {
  }

}
