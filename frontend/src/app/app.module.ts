import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogginComponent } from './components/loggin/loggin.component';
import { HomeComponent } from './components/home/home.component';
import { EscolarComponent } from './components/escolar/escolar.component';
import { ActividadesComponent } from './components/actividades/actividades.component';
import { TrabajosComponent } from './components/trabajos/trabajos.component';

@NgModule({
  declarations: [
    AppComponent,
    LogginComponent,
    HomeComponent,
    EscolarComponent,
    ActividadesComponent,
    TrabajosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
