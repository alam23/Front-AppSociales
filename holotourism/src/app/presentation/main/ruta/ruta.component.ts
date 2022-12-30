import { RutaModel } from 'src/app/base/models/ruta.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ruta',
  templateUrl: './ruta.component.html',
  styleUrls: ['./ruta.component.css']
})
export class RutaComponent {
  rutaInfo!: RutaModel;

  constructor() {}

  ngOnInit(): void {
    if (history.state.rutaInfo) this.rutaInfo = history.state.rutaInfo;
    console.log(this.rutaInfo);
  }
}
