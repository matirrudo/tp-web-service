import { Component, OnInit } from '@angular/core';
import {CurrencyService} from'./../../services/currency.service';
import {Currency} from'./../../models/currency';
@Component({
  selector: 'app-cotizacion',
  templateUrl: './cotizacion.component.html',
  styleUrls: ['./cotizacion.component.css']
})
export class CotizacionComponent implements OnInit {
  monedas:Array<Currency>;
  currency:Currency;
  resultado:string;
  valid:boolean;
  fromValue:string;
  toType:string;
  fromType:string;
  listaDivisa:string[]=["ARS","USD","EUR", "BRL"];

  constructor(private _currencyService:CurrencyService) {
    this.monedas= new Array<Currency>();
    this.currency=new Currency();
    this.resultado="0";
    this.obtenerValoresDeMoneda();
    }
   ngOnInit(): void {
    }    
    convertirMoneda(){
      this. _currencyService.getConversion(this.fromType,this.toType,this.fromValue).subscribe(
        (result) =>{
          this.currency=result;
        }
       );
    }
    obtenerValorEurToDls(){
      this.getCurrencyValue("EUR","DLS","1");
    }
    obtenerValorArsToDls(){
      this.getCurrencyValue("ARS","DLS","1");
    }
    obtenerValorBrlToDls(){
      this.getCurrencyValue("BRL","DLS","1");
    }
    obtenerValorDlsToEur(){
      this.getCurrencyValue("USD","EUR","1");
    }
    obtenerValorDlsToArs(){
      this.getCurrencyValue("USD","ARS","1");
    }
    obtenerValorDlsToBrl(){
      this.getCurrencyValue("USD","BRL","1");
    }
    obtenerValorEurToArs(){
      this.getCurrencyValue("EUR","ARS","1");
    }
    obtenerValorEurToBrl(){
      this.getCurrencyValue("EUR","ARS","1");
    }
    obtenerValorArsToEur(){
      this.getCurrencyValue("ARS","EUR","1");
    }
    obtenerValorBrlToEur(){
      this.getCurrencyValue("BRL","DLS","1");
    }
    obtenerValorBrlToArs(){
      this.getCurrencyValue("BRL","ARS","1");
    }
    obtenerValorArsToBrl(){
      this.getCurrencyValue("BRL","ARS","1");
    }
    obtenerValoresDeMoneda(){
      this.obtenerValorEurToDls();
      this.obtenerValorArsToDls();
      this.obtenerValorBrlToDls();
      this.obtenerValorDlsToEur();
      this.obtenerValorDlsToArs();
      this.obtenerValorDlsToBrl();
      this.obtenerValorDlsToEur();
      this.obtenerValorArsToEur();
      this.obtenerValorBrlToEur();
      this.obtenerValorEurToDls();
      this.obtenerValorEurToArs();
      this.obtenerValorEurToBrl();
      this.obtenerValorDlsToArs();
      this.obtenerValorEurToArs();
      this.obtenerValorBrlToArs();
      this.obtenerValorArsToBrl();
    }
    public getCurrencyValue(fromType:string, toType:string, fromValue:string) {
      this. _currencyService.getConversion(fromType,toType,fromValue).subscribe(
       (result) =>{
         this.currency=result;
         this.monedas.push(result);
       }
      );}
}