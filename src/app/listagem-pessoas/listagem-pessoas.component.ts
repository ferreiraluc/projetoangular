import { Component, OnInit } from '@angular/core';
import { Pessoa } from '../pessoa.model';

@Component({
  selector: 'app-listagem-pessoas',
  templateUrl: './listagem-pessoas.component.html',
  styleUrls: ['./listagem-pessoas.component.scss']
})

export class ListagemPessoasComponent implements OnInit {

  pessoas: Pessoa[] = [
    new Pessoa('João', 25),
    new Pessoa('Maria', 31),
    new Pessoa('Carlos', 28),
    new Pessoa('Ana', 35),
    new Pessoa('Pedro', 40),
    new Pessoa('Luiza', 32),
    new Pessoa('Ricardo', 29),
    new Pessoa('Julia', 33),
    new Pessoa('Bruno', 26),
    new Pessoa('Camila', 38),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}