import { Component,OnInit,DoCheck,AfterContentChecked,AfterContentInit,AfterViewChecked,AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-check-sample',
  templateUrl: './check-sample.component.html',
  styleUrls: ['./check-sample.component.css']
})
export class CheckSampleComponent implements OnInit,
DoCheck,AfterContentChecked,AfterContentInit,AfterViewChecked,AfterViewInit {


  ngOnInit(): void {
    console.log ('Oninit');
  }
  ngDoCheck(): void {
    console.log ('DoCheck');
  }
  ngAfterContentChecked(): void {
    console.log ('AfterContentChecked');
  }
  ngAfterContentInit(): void {
    console.log ('AfterContentInit');
  }
  ngAfterViewChecked(): void {
    console.log ('AfterViewChecked');
  }
  ngAfterViewInit(): void {
    console.log ('AfterViewInit');
  }

  // vamos usar os metodos que estão acima no import




}
