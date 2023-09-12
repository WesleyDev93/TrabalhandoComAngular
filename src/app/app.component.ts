import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  // Essa propriedade diz se ele esta vivo ou morto agora
  // e atribuimos ela ao HTML
  isAlive : boolean = true;

  // Propriedade do botão

  dispose(): void {

    this.isAlive = false;
  }
}
