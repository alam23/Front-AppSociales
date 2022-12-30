import { PostModel } from "./post.model"

export interface RutaInfoModel {
  routeId: string,
  userOwner: string,
  name: string,
  description: string,
  dateCreated: Date,
  latitudeInit: string,
  longitudInit: string,
  latitudeFin: string,
  longitudFin: string,
  userOwnerNavigation: UserOwner,
  posts: PostModel[],
}

interface UserOwner {
  userId: string,
  userName: string,
  password: string,
  name: string,
  lastName: string,
  cellNumber: string,
}
