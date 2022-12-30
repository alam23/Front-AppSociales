import { RutaModel } from './../../../base/models/ruta.model';
import { HomeResponse } from "./home.response";

export class HomeMapper2 {
  mapFrom(data: HomeResponse): RutaModel {
    console.log('HomeMapper', data);

    return data;
  }
}
