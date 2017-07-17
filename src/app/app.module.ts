import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app.router';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/navbar/navbar.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { MiembrosComponent } from './components/miembros/miembros.component';

// services 
import { Auth0Service } from './services/autho.service';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    InicioComponent,
    CatalogoComponent,
    MiembrosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [Auth0Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
