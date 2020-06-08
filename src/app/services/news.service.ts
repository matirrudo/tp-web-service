import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
 
  constructor(private _http:HttpClient) { }
   public getNews():Observable<any>{
    const httpOptions={
      headers: new HttpHeaders({
        'X-RapidAPI-Host':'livescore6.p.rapidapi.com',
        'X-RapidAPI-Key':'de72ee6741msh5833842e85d5a75p17b09cjsne2f91feb4a6e' })
    }
     return this._http.get("https://livescore6.p.rapidapi.com/news/list?category=basketball",httpOptions);
   }
}
