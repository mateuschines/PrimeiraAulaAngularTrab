import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AssinaturaComponent } from './assinatura/assinatura.component';
import { SucessoComponent } from './sucesso/sucesso.component';
import { TrabalhoComponent } from './trabalho/trabalho.component';

@NgModule({
  declarations: [
    AppComponent,
    AssinaturaComponent,
    SucessoComponent,
    TrabalhoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
