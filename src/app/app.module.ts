// basico para trabalhar com  modulos
import { NgModule } from '@angular/core';
//basico para trabalhar com  modulos


import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TituloComponente  } from './title/title.component';
import { CheckSampleComponent } from './check-sample/check-sample.component';






@NgModule({
  // os componentes  devem ser declarados aqui e ser importados acima
  declarations: [
    AppComponent,
    TituloComponente,
    CheckSampleComponent,
  ],
  // podemos importar os modulos aqui
  imports: [
    BrowserModule,
    AppRoutingModule
  ],

  // vamos adicionar o exports ele serve para exportar nossos modulos
  exports: [],
  // camada de serviço
  providers: [],
  // inicialização dos componentes
  bootstrap: [AppComponent]
})
export class AppModule { }
