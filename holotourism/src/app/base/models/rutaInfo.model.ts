import { PostModel } from "./post.model"
import { UserModel } from "./user.model";

export interface RutaInfoModel {
  routeId: number,
  userOwner: string,
  name: string,
  description: string,
  dateCreated: Date,
  latitudeInit: string,
  longitudInit: string,
  latitudeFin: string,
  longitudFin: string,
  userOwnerNavigation: UserModel,
  posts: PostModel[],
}
