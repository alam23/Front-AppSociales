import { Observable } from 'rxjs';
import { BasicService } from 'src/app/data/api/basic-service';
import { ProfileModel } from './models/profile.model';

export abstract class ProfileRepository extends BasicService {
  abstract EditarProfile(userId: string): Observable<ProfileModel[]>;
}
