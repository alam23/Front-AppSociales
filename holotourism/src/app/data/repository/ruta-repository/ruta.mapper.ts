import { RutaInfoModel } from "src/app/base/models/rutaInfo.model";
import { CommonService } from "src/app/service/commonService";
import { RutaInfoRes } from "./ruta.response";

export class RutaMapper {
  mapFrom(data: RutaInfoModel): RutaInfoModel {
    let commonService: CommonService = new CommonService();
    data.posts = commonService.convertIdToNumber(data.posts, "postId");
    data.posts = commonService.ordenarArrayInverso(data.posts, "postId");

    console.log('HomeMapper', data);
    data.dateCreated = new Date (data.dateCreated);
    return data;
  }
}
