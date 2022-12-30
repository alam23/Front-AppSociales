export interface CommentaryModel{
  body: string,
  user: UserModel,
  commentId: string,
}

interface UserModel {
  userId: string,
  userName: string,
  password: string,
  name: string,
  lastName: string,
  cellNumber: string,
}
