import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HoroscopoService {

  constructor(private _http:HttpClient) { }
  public getHoroscopeBySign(sign:string):Observable<any>{
    const httpOptions={
      headers: new HttpHeaders({
        'X-RapidAPI-Host':'horoscope5.p.rapidapi.com',
        'X-RapidAPI-Key':'de72ee6741msh5833842e85d5a75p17b09cjsne2f91feb4a6e'})
    }
     return this._http.get("https://horoscope5.p.rapidapi.com/general/daily?sign="+sign+"&date=2020-06-04",httpOptions);
   }
  public getSignAries():Observable<any>{
    const httpOptions={
      headers: new HttpHeaders({
        'X-RapidAPI-Host':'horoscope5.p.rapidapi.com',
        'X-RapidAPI-Key':'de72ee6741msh5833842e85d5a75p17b09cjsne2f91feb4a6e'})
    }
     return this._http.get("https://horoscope5.p.rapidapi.com/general/daily?sign=aries&date=2020-06-04",httpOptions);
   }
   public getSignLeo():Observable<any>{
    const httpOptions={
      headers: new HttpHeaders({
        'X-RapidAPI-Host':'horoscope5.p.rapidapi.com',
        'X-RapidAPI-Key':'de72ee6741msh5833842e85d5a75p17b09cjsne2f91feb4a6e'})
    }
     return this._http.get("https://horoscope5.p.rapidapi.com/general/daily?sign=leo&date=2020-06-04",httpOptions);
   }
   public getSignSagittarius():Observable<any>{
    const httpOptions={
      headers: new HttpHeaders({
        'X-RapidAPI-Host':'horoscope5.p.rapidapi.com',
        'X-RapidAPI-Key':'de72ee6741msh5833842e85d5a75p17b09cjsne2f91feb4a6e'})
    }
     return this._http.get("https://horoscope5.p.rapidapi.com/general/daily?sign=sagittarius&date=2020-06-04",httpOptions);
   }
   public getSignTaurus():Observable<any>{
    const httpOptions={
      headers: new HttpHeaders({
        'X-RapidAPI-Host':'horoscope5.p.rapidapi.com',
        'X-RapidAPI-Key':'de72ee6741msh5833842e85d5a75p17b09cjsne2f91feb4a6e'})
    }
     return this._http.get("https://horoscope5.p.rapidapi.com/general/daily?sign=taurus&date=2020-06-04",httpOptions);
   }
   public getSignVirgo():Observable<any>{
    const httpOptions={
      headers: new HttpHeaders({
        'X-RapidAPI-Host':'horoscope5.p.rapidapi.com',
        'X-RapidAPI-Key':'de72ee6741msh5833842e85d5a75p17b09cjsne2f91feb4a6e'})
    }
     return this._http.get("https://horoscope5.p.rapidapi.com/general/daily?sign=virgo&date=2020-06-04",httpOptions);
   }
   public getSignCapricorn():Observable<any>{
    const httpOptions={
      headers: new HttpHeaders({
        'X-RapidAPI-Host':'horoscope5.p.rapidapi.com',
        'X-RapidAPI-Key':'de72ee6741msh5833842e85d5a75p17b09cjsne2f91feb4a6e'})
    }
     return this._http.get("https://horoscope5.p.rapidapi.com/general/daily?sign=capricorn&date=2020-06-04",httpOptions);
   }
   public getSignGemini():Observable<any>{
    const httpOptions={
      headers: new HttpHeaders({
        'X-RapidAPI-Host':'horoscope5.p.rapidapi.com',
        'X-RapidAPI-Key':'de72ee6741msh5833842e85d5a75p17b09cjsne2f91feb4a6e'})
    }
     return this._http.get("https://horoscope5.p.rapidapi.com/general/daily?sign=gemini&date=2020-06-04",httpOptions);
   }
   public getSignLibra():Observable<any>{
    const httpOptions={
      headers: new HttpHeaders({
        'X-RapidAPI-Host':'horoscope5.p.rapidapi.com',
        'X-RapidAPI-Key':'de72ee6741msh5833842e85d5a75p17b09cjsne2f91feb4a6e'})
    }
     return this._http.get("https://horoscope5.p.rapidapi.com/general/daily?sign=libra&date=2020-06-04",httpOptions);
   }
   public getSignAquariuss():Observable<any>{
    const httpOptions={
      headers: new HttpHeaders({
        'X-RapidAPI-Host':'horoscope5.p.rapidapi.com',
        'X-RapidAPI-Key':'de72ee6741msh5833842e85d5a75p17b09cjsne2f91feb4a6e'})
    }
     return this._http.get("https://horoscope5.p.rapidapi.com/general/daily?sign=aquarius&date=2020-06-04",httpOptions);
   }
   public getSignCancer():Observable<any>{
    const httpOptions={
      headers: new HttpHeaders({
        'X-RapidAPI-Host':'horoscope5.p.rapidapi.com',
        'X-RapidAPI-Key':'de72ee6741msh5833842e85d5a75p17b09cjsne2f91feb4a6e'})
    }
     return this._http.get("https://horoscope5.p.rapidapi.com/general/daily?date=2020-06-04",httpOptions);
   }
   public getSignsScorpio():Observable<any>{
    const httpOptions={
      headers: new HttpHeaders({
        'X-RapidAPI-Host':'horoscope5.p.rapidapi.com',
        'X-RapidAPI-Key':'de72ee6741msh5833842e85d5a75p17b09cjsne2f91feb4a6e'})
    }
     return this._http.get("https://horoscope5.p.rapidapi.com/general/daily?sign=scorpio&date=2020-06-04",httpOptions);
   }
   public getSignPisces():Observable<any>{
    const httpOptions={
      headers: new HttpHeaders({
        'X-RapidAPI-Host':'horoscope5.p.rapidapi.com',
        'X-RapidAPI-Key':'de72ee6741msh5833842e85d5a75p17b09cjsne2f91feb4a6e'})
    }
     return this._http.get("https://horoscope5.p.rapidapi.com/general/daily?sign=pisces&date=2020-06-04",httpOptions);
   }
}
