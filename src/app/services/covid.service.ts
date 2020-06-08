import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CovidService {
  constructor(private _http:HttpClient) {}
    public getDatos(pais, fecha):Observable<any>{
      let formato="YYYY-MM-DD";
      let json="json";
      const httpOptions={
        headers: new HttpHeaders({
          'X-RapidAPI-Host':'covid-19-data.p.rapidapi.com',
          'X-RapidAPI-Key':'de72ee6741msh5833842e85d5a75p17b09cjsne2f91feb4a6e'
      }),
    }
       return this._http.get("https://covid-19-data.p.rapidapi.com/report/country/name?date-format=YYYY-MM-DD&format=json&date="+fecha+"&name="+pais,httpOptions);
  }
  public getAllDatos():Observable<any>{
    const httpOptions={
      headers: new HttpHeaders({
        'X-RapidAPI-Host':'covid-19-tracking.p.rapidapi.com',
        'X-RapidAPI-Key':'de72ee6741msh5833842e85d5a75p17b09cjsne2f91feb4a6e'
    }),
  }
     return this._http.get("https://covid-19-tracking.p.rapidapi.com/v1",httpOptions);
}
}
