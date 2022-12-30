import { RutaModel } from 'src/app/base/models/ruta.model';
import { HomeRepository } from 'src/app/base/home.repository';
import { Component } from '@angular/core';

@Component({
  selector: 'app-mis-rutas',
  templateUrl: './mis-rutas.component.html',
  styleUrls: ['./mis-rutas.component.css']
})
export class MisRutasComponent {
  lstRutas: RutaModel[] = [];
  constructor(
    private homeRepo: HomeRepository,
  ) { }

  ngOnInit() {
    this.listarRutas();
  }

  listarRutas(){
    this.homeRepo.listarMisRutas('2').subscribe((res) => {
      console.log(res);
      this.lstRutas = res;
    });
  }
}
