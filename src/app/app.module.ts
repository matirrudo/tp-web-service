import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { FooterComponent } from './component/footer/footer.component';
import { HeaderComponent } from './component/header/header.component';
import { CotizacionComponent } from './component/cotizacion/cotizacion.component';
import { NoticiasComponent } from './component/noticias/noticias.component';
import { HoroscopoComponent } from './component/horoscopo/horoscopo.component';
import { CovidComponent } from './component/covid/covid.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    CotizacionComponent,
    NoticiasComponent,
    HoroscopoComponent,
    CovidComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
