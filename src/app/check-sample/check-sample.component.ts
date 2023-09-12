import { Component,OnInit,DoCheck,AfterContentChecked
  ,AfterContentInit,AfterViewChecked,AfterViewInit,OnDestroy } from '@angular/core';

@Component({
  selector: 'app-check-sample',
  templateUrl: './check-sample.component.html',
  styleUrls: ['./check-sample.component.css']
})
export class CheckSampleComponent implements OnInit,
DoCheck,AfterContentChecked,AfterContentInit,AfterViewChecked,AfterViewInit,OnDestroy {
   // vamos criar a propriedade quantidade que está no HTML do check-sample
   // variavel quantidade inicial no zero

   quantidade: number = 0;


   // metodo de manuseio da variavel quantidade

   adicionar () {

    this.quantidade += 1;

   }


   decrementar () {

    this.quantidade -= 1;

   };



   // metodo construtor deve existir para nossas interações
  constructor () {}


  ngOnInit(): void {
    console.log ('Oninit');
  }
  ngDoCheck(): void {
    console.log ('DoCheck');
  }
  // apos alguma alteração verifica o conteudo
  ngAfterContentChecked(): void {
    console.log ('AfterContentChecked');
  }

    // quando o conteudo é iniciado
  ngAfterContentInit(): void {
    console.log ('AfterContentInit');
  }
  // apos alguma alteração verifica a view
  ngAfterViewChecked(): void {
    console.log ('AfterViewChecked');
  }
  // depois da inicialização da view
  ngAfterViewInit(): void {
    console.log ('AfterViewInit');
  }
 // para destruir algum componente
  ngOnDestroy(): void {

    console.log ('OnDestroy');
  }

  // vamos usar os metodos que estão acima no import




}
