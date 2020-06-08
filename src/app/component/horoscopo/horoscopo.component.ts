import { Component, OnInit } from '@angular/core';
import { HoroscopoService } from './../../services/horoscopo.service';
import { Signo } from './../../models/signo';

@Component({
  selector: 'app-horoscopo',
  templateUrl: './horoscopo.component.html',
  styleUrls: ['./horoscopo.component.css']
})
export class HoroscopoComponent implements OnInit {
  signos: Array<Signo>;
  signo: Signo;
  signo1: Signo;
  signo2: Signo;
  signo3: Signo;
  signo4: Signo;
  constructor(private _horoscopoService: HoroscopoService) {
    this.cargarSignos()
  }

  cargarSignos() {
    let signs = new Set(["aries", "leo", "sagittarius", "taurus", "virgo"]);
    signs["nombre"] = "horoscope";
    this.signos = new Array<Signo>()
    this.signo = new Signo();
    this._horoscopoService.getSignAries().subscribe(
      (result) => {
        this.signo = result['result'];
      }
    );
    this._horoscopoService.getSignLeo().subscribe(
      (result) => {
        this.signo1 = result['result'];
      }
    );
    this._horoscopoService.getSignSagittarius().subscribe(
      (result) => {
        this.signo2 = result['result'];
      }
    );
    this._horoscopoService.getSignTaurus().subscribe(
      (result) => {
        this.signo3 = result['result'];
      }
    );
    this._horoscopoService.getSignVirgo().subscribe(
      (result) => {
        this.signo4 = result['result'];
      }
    );
  }

  ngOnInit(): void {
  }

}
