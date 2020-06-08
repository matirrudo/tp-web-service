import { Component, OnInit } from '@angular/core';
import {NewsService} from'./../../services/news.service';
import {Noticia } from'./../../models/noticia';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {
  noticias:Array<Noticia>;
  noticia:Noticia;

  constructor(private _newsService:NewsService) { 
    this.cargarNoticias();
  }

  ngOnInit(): void {
  }

  cargarNoticias(){
    this._newsService.getNews().subscribe(
      (result) =>{
        this.noticias = result['arts'];
      }
    );
    
  }

}
