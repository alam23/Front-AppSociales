import { PostModel } from './../../../base/models/post.model';
import { CommentaryResponse } from './commentary.response';

export class CommentaryMapper2 {
  mapFrom(data: PostModel): PostModel {
    console.log('HomeMapper', data);

    return data;
  }
}
