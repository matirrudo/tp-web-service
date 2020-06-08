import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { CotizacionComponent } from './component/cotizacion/cotizacion.component';
import { CovidComponent } from './component/covid/covid.component';
import { HoroscopoComponent } from './component/horoscopo/horoscopo.component';
import { NoticiasComponent } from './component/noticias/noticias.component';


const routes: Routes = [
  {path: '',component:NoticiasComponent},
  {path: 'cotizacion',component:CotizacionComponent},
  {path: 'covid',component:CovidComponent},
  {path: 'horoscopo',component:HoroscopoComponent},
  {path: 'noticias',component:NoticiasComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
