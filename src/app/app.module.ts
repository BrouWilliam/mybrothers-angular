import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { QuemSomosComponent } from './quem-somos/quem-somos.component';
import { AcidentesPessoaisComponent } from './acidentes-pessoais/acidentes-pessoais.component';
import { MaisSeguraComponent } from './mais-segura/mais-segura.component';
import { ContatosComponent } from './contatos/contatos.component';
import { routing } from './app.routing';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    QuemSomosComponent,
    AcidentesPessoaisComponent,
    MaisSeguraComponent,
    ContatosComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    routing,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
