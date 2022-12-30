import { RutaModel } from 'src/app/base/models/ruta.model';
import { HomeRepository } from 'src/app/base/home.repository';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  lstRutas: RutaModel[] = [];
  constructor(
    private homeRepo: HomeRepository,
  ) { }

  ngOnInit() {
    this.listarRutas();
  }

  listarRutas(){
    this.homeRepo.listarRutas().subscribe((res) => {
      console.log(res);
      this.lstRutas = res;
    });
  }



}
