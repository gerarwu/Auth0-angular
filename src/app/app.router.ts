import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { MiembrosComponent } from './components/miembros/miembros.component';
import { GuardsAuth0Service } from './services/guardsAuth0.service';

const ROUTES : Routes = [
    { path: 'inicio', component:InicioComponent },
    { path : 'catalogo', component :CatalogoComponent },
    { path : 'miembros', component : MiembrosComponent,  canActivate : [GuardsAuth0Service]},
    { path : '**', component:InicioComponent}
];

@NgModule({
    imports: [
        RouterModule.forRoot( ROUTES )
    ],
    exports : [RouterModule]
})

export class AppRoutingModule{

}