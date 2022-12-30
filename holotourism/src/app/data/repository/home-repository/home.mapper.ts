import { RutaModel } from './../../../base/models/ruta.model';
import { HomeResponse } from "./home.response";

export class HomeMapper {
  mapFrom(data: HomeResponse[]): RutaModel[] {
    console.log('HomeMapper', data);
    data.forEach(val=>{
      if(val.dateCreated){
        val.dateCreated = new Date (val.dateCreated)
      }
    });

    return data;
  }
}
