import { RutaModel } from 'src/app/base/models/ruta.model';
import { UserModel } from 'src/app/base/models/user.model';
import { HomeRepository } from 'src/app/base/home.repository';
import { Component } from '@angular/core';
import { UserResponse } from 'src/app/data/repository/user-repository/user.response';

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
    this.homeRepo.listarMisRutas("2").subscribe((res) => {
      console.log(res);
      this.lstRutas = res;
    });
  }
}
