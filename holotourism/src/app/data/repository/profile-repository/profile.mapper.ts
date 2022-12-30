import { ProfileModel } from 'src/app/base/models/profile.model';
import { UserModel } from "src/app/base/models/user.model";

export class ProfileMapper {
    mapFrom(data: ProfileModel[]): ProfileModel{
        console.log('ProfileMapper', data);
        return data[0];
    }
}
