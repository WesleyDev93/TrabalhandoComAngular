import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})

// criando interface do OnInit
// a interface espera um metodo

export class TitleComponent implements OnInit {

  // Criando tratamento do metodo

  nome: string = 'Wesley Oliveira';

  constructor () {}



  // interface de inicialização da classe
  // com isso podemos ao inicalizar o componente determinar uma ação logo de inicio
  // conforme a minha necessidade


  ngOnInit(): void {
    this.nome = ` ola  ${this.nome}`
  }

}
