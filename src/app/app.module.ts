import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//servicios
import{NewsService} from'./services/news.service';
import{HoroscopoService} from'./services/horoscopo.service';
import{CurrencyService} from'./services/currency.service';
import{CovidService} from'./services/covid.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { FooterComponent } from './component/footer/footer.component';
import { HeaderComponent } from './component/header/header.component';
import { CotizacionComponent } from './component/cotizacion/cotizacion.component';
import { NoticiasComponent } from './component/noticias/noticias.component';
import { HoroscopoComponent } from './component/horoscopo/horoscopo.component';
import { CovidComponent } from './component/covid/covid.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

 
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
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [ 
    NewsService,
    HoroscopoService,
    CurrencyService,
    CovidService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
