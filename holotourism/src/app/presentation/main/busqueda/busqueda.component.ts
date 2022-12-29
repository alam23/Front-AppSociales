import { RutaModel } from 'src/app/base/models/ruta.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent {
  lstRutas: RutaModel[] = [];

  ngOnInit(): void{
    if (history.state.lstRutas) this.lstRutas = history.state.lstRutas;
  }
}
