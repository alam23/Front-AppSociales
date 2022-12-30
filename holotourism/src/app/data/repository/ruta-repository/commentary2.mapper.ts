import { CommonService } from 'src/app/service/commonService';
import { PostModel } from './../../../base/models/post.model';

export class CommentaryMapper2 {
  mapFrom(data: PostModel): PostModel {
    let commonService: CommonService = new CommonService();
    data.commentaries = commonService.convertIdToNumber(data.commentaries, "commentId");
    data.commentaries = commonService.ordenarArray(data.commentaries, "commentId");

    console.log('COMENTARIOS MAPEADOS', data);

    return data;
  }
}
