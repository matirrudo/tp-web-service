import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { toTypeScript } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  constructor(private _http:HttpClient) { }
   public getConversion(fromType:string, toType:string,fromValue:string):Observable<any>{
    const httpOptions={
      headers: new HttpHeaders({
        'X-RapidAPI-Host':'community-neutrino-currency-conversion.p.rapidapi.com',
        'X-RapidAPI-Key':'de72ee6741msh5833842e85d5a75p17b09cjsne2f91feb4a6e',
        'content-type':'application/x-www-form-urlencoded',
        'useQueryString': 'true'
      }),
      params:{
        'from-type':fromType,
        'to-type':toType,
        'from-value':fromValue
      }
    }
     return this._http.post("https://community-neutrino-currency-conversion.p.rapidapi.com/convert",{'from-type': fromType ,'to-type' : toType,'fromValue': fromValue},httpOptions);
   }
}
