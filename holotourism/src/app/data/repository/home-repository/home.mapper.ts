import { CommonService } from 'src/app/service/commonService';
import { RutaModel } from './../../../base/models/ruta.model';
import { HomeResponse } from "./home.response";

export class HomeMapper {
  mapFrom(data: HomeResponse[]): RutaModel[] {
    console.log('HomeMapper', data);
    let commonService: CommonService = new CommonService();
    data = commonService.convertIdToNumber(data, "routeId");
    data = commonService.ordenarArrayInverso(data, "routeId");

    data.forEach(val=>{
      if(val.dateCreated){
        val.dateCreated = new Date (val.dateCreated)
      }
    });


    return data;
  }
}
