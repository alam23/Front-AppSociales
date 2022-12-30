import { CommentaryModel } from 'src/app/base/models/commentary.model';
import { PostModel } from './../../../base/models/post.model';

export class CommentaryMapper3 {
  mapFrom(data: CommentaryModel): CommentaryModel {

    console.log('HomeMapper', data);

    return data;
  }
}
