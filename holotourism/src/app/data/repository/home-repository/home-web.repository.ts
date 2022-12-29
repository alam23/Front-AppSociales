import { HomeMapper } from './home.mapper';
import { HomeResponse } from './home.response';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HomeRepository } from 'src/app/base/home.repository';
import { RutaModel } from 'src/app/base/models/ruta.model';

@Injectable({
  providedIn: 'root',
})
export class HomeWebRepository extends HomeRepository{
  private homeMapper = new HomeMapper();

  constructor(_http: HttpClient) {
    super(_http);
  }

  listarRutas(userId: string):
   Observable<RutaModel[]> {
    return this.post(`https://ca28d96c-1ab7-4120-833e-2c9e03ceb05a.mock.pstmn.io/Rutas/listRutas`,
     this.getOptionsRest(), {
      userId: userId
     }).pipe(
      map((data: any) => {
        return this.homeMapper.mapFrom(data);
      }),
      catchError((error) => {
        console.log(error);
        return throwError(error);
      })
    );
  }

  buscarRutas(strBusqueda: string):
  Observable<RutaModel[]> {
   return this.post(`https://ca28d96c-1ab7-4120-833e-2c9e03ceb05a.mock.pstmn.io/Rutas/searchRutas`,
    this.getOptionsRest(), {
      strBusqueda: strBusqueda
    }).pipe(
     map((data: any) => {
       return this.homeMapper.mapFrom(data);
     }),
     catchError((error) => {
       console.log(error);
       return throwError(error);
     })
   );
 }

}
