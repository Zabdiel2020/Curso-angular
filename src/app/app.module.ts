import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
// import { ContadorComponent } from './contador/contador/contador.component';
import {ContadorModule} from './contador/contador.module'
import { DbzModule } from './dbz/dbz.module';

// import { HeroeComponent } from './heroes/heroe/heroe/heroe.component'; Ya tienen su propio modulo
// import { ListadoComponent } from './heroes/listado/listado.component';Ya tienen su propio modulo
import { HeroesModule } from './heroes/heroes.module';



@NgModule({
  declarations: [
    AppComponent,
    // ContadorComponent, Ya no funcionará
    // HeroeComponent,
    // ListadoComponent
  ],
  imports: [
    BrowserModule,
    HeroesModule,
    ContadorModule,
    DbzModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
