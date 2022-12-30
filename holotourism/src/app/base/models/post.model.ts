import { CommentaryModel } from "./commentary.model";

export interface PostModel {
  postId: string,
  userId: string,
  routeId: string,
  title: string,
  body: string,
  image: string,
  route: string,
  user: UserModel,
  commentaries: CommentaryModel[]
}

interface UserModel {
  userId: string,
  userName: string,
  password: string,
  name: string,
  lastName: string,
  cellNumber: number
}
