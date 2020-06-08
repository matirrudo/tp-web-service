import { Component, OnInit } from '@angular/core';
import { CovidService } from './../../services/covid.service';

@Component({
  selector: 'app-covid',
  templateUrl: './covid.component.html',
  styleUrls: ['./covid.component.css']
})
export class CovidComponent implements OnInit {
  resultados: Array<any>;
  resultados2: Array<any>;
  pais: string;
  fecha: string;
  pais01 = {
    'nombre': '',
    'confirmados': '',
    'recuperados': '',
    'fallecidos': ''
  }

  constructor(private _covidService: CovidService) {
    this.pais= "Chile";
    this.fecha= "2020-06-06";
    this.obtenerDatoPais();
    this.cargarTodos()
  }
  obtenerDatoPais() {
    this._covidService.getDatos(this.pais, this.fecha).subscribe(
      (result) => {
        this.resultados2 = result;
        this.pais01.nombre = this.resultados2[0].country;
        this.pais01.confirmados = this.resultados2[0].confirmed;
        this.pais01.recuperados = this.resultados2[0].recovered;
        this.pais01.fallecidos = this.resultados2[0].deaths;

      },
      (error) => {
        console.log(error);
      }
    )
  }
  cargarTodos() {
    this._covidService.getAllDatos().subscribe(
      (result) => {
        this.resultados = result;
        console.log(this.resultados);
      }
    );
  }

  ngOnInit(): void {
  }

}
