import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { PessoalistComponent } from './app/pessoa/pessoalist/pessoalist.component';
import { MenuSuperiorComponent } from './menu-superior/menu-superior.component';
import { ListagemPessoasComponent } from './listagem-pessoas/listagem-pessoas.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    PessoalistComponent,
    MenuSuperiorComponent,
    ListagemPessoasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
