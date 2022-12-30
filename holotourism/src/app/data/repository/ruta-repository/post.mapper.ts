import { PostResponse } from "./post.response";

export class PostMapper {
  mapFrom(data: PostResponse): boolean {
    console.log('HomeMapper', data);

    return true;
  }
}
