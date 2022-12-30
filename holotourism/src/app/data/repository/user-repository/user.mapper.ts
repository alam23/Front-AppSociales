import { UserModel } from "src/app/base/models/user.model";
import { UserResponse } from "./user.response";
export class UserMapper {
    mapFrom(data: UserResponse): UserModel{
        console.log('UserMapper', data);
        return data;
    }
}