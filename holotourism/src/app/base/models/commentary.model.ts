export interface CommentaryModel{
  body: string,
  user: UserModel,
}

interface UserModel {
  userId: string,
  userName: string,
  password: string,
  name: string,
  lastName: string,
  cellNumber: string,
}
