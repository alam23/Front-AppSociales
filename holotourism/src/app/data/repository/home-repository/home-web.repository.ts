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

  listarRutas():
   Observable<RutaModel[]> {
    return this.get(`https://localhost:7247/api/Routes/listAllRoutes`,
     this.getOptionsRest()).pipe(
      map((data: any) => {
        return this.homeMapper.mapFrom(data);
      }),
      catchError((error) => {
        console.log(error);
        return throwError(error);
      })
    );
  }

  crearRuta(userId: string, name: String, description: String):
  Observable<RutaModel[]> {
    return this.post(`https://localhost:7247/api/Routes/registrarRuta`,
     this.getOptionsRest(), {
      userId: userId,
      name: name,
      description: description
     }).pipe(
      map((data: any) => {
        return this.homeMapper.mapFrom(data);
      })
    );
  }

  listarMisRutas(userId: string): Observable<RutaModel[]> {
    return this.get('https://localhost:7247/api/Routes/listRoutesxUserCreated/'+userId,
     this.getOptionsRest()
    ).pipe(
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
   return this.post(`https://localhost:7247/api/Routes/buscarRoute`,
    this.getOptionsRest(),
      "\""+strBusqueda +"\""
    ).pipe(
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
