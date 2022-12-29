import { RutaModel } from 'src/app/base/models/ruta.model';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-route-card',
  templateUrl: './route-card.component.html',
  styleUrls: ['./route-card.component.css']
})
export class RouteCardComponent {
  @Input() routeModel!: RutaModel;

  constructor() {}

}
