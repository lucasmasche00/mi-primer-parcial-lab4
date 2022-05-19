import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainMenuComponent } from './componentes/main-menu/main-menu.component';
import { NotFoundComponent } from './componentes/not-found/not-found.component';
import { BienvenidoComponent } from './componentes/bienvenido/bienvenido.component';

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    NotFoundComponent,
    BienvenidoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
