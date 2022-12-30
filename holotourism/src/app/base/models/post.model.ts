import { CommentaryModel } from "./commentary.model";
import { UserModel } from "./user.model";

export interface PostModel {
  postId: number,
  userId: number,
  routeId: number,
  title: string,
  body: string,
  image: string,
  route: string,
  user: UserModel,
  commentaries: CommentaryModel[]
}
