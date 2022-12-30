import { RutaModel } from 'src/app/base/models/ruta.model';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-route-card',
  templateUrl: './route-card.component.html',
  styleUrls: ['./route-card.component.css']
})
export class RouteCardComponent {
  @Input() routeModel!: RutaModel;

  constructor(
    private router: Router,
  ) {}

  verRuta(){
    this.router.navigate(['/main/ruta'], {
      state: { rutaId: this.routeModel.routeId},
    });
  }
}
