import { UserModel } from "./user.model";

export interface CommentaryModel{
  body: string,
  user: UserModel,
  commentId: number,
}
