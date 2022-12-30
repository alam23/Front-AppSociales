import { RutaModel } from './../../../base/models/ruta.model';
import { HomeResponse } from "./home.response";

export class HomeMapper {
  mapFrom(data: HomeResponse[]): RutaModel[] {
    console.log('HomeMapper', data);


    return data;
  }
}
