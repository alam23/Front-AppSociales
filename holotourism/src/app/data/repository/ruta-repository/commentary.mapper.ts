import { CommentaryResponse } from './commentary.response';

export class CommentaryMapper {
  mapFrom(data: CommentaryResponse): boolean {
    console.log('HomeMapper', data);

    return true;
  }
}
