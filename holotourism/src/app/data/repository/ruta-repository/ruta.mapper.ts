import { RutaInfoModel } from "src/app/base/models/rutaInfo.model";
import { RutaInfoRes } from "./ruta.response";

export class RutaMapper {
  mapFrom(data: RutaInfoRes): RutaInfoModel {
    console.log('HomeMapper', data);
    data.dateCreated = new Date (data.dateCreated);
    return data;
  }
}
