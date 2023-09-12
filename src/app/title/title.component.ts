import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})

// criando interface do OnInit
// a interface espera um metodo

export class TitleComponent implements OnInit, OnChanges {

  // Criando tratamento do metodo

    @Input () nome: string = '';

  constructor () {
   // console.log ("Constructor");
  }

// interface de inicialização do OnChanges
// ele vem antes do Oninit sempre
// ativo sempre que um valor muda e esta atrelado ao Input , pois deve ter um valor alterado

  ngOnChanges(): void {
   // console.log ("ngOnChanges");
  }



  // interface de inicialização do Oninit
  // com isso podemos ao inicalizar o componente determinar uma ação logo de inicio
  // conforme a minha necessidade


  ngOnInit(): void {
   // console.log ("OnInit");
  }

}
