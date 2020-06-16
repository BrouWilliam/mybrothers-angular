import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { QuemSomosComponent } from './quem-somos/quem-somos.component';
import { AcidentesPessoaisComponent } from './acidentes-pessoais/acidentes-pessoais.component';
import { MaisSeguraComponent } from './mais-segura/mais-segura.component';
import { ContatosComponent } from './contatos/contatos.component';
import { HomeComponent } from './home/home.component';


const APP_ROUTES: Routes = [
    {path: 'quem-somos', component: QuemSomosComponent},
    {path: 'acidentes-pessoais', component: AcidentesPessoaisComponent},
    {path: 'mais-segura', component: MaisSeguraComponent},
    {path: 'contatos', component: ContatosComponent},
    {path: '', component:  HomeComponent},
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);