import { Observable } from 'rxjs';
import { BasicService } from 'src/app/data/api/basic-service';
import { ProfileModel } from './models/profile.model';

export abstract class ProfileRepository extends BasicService {
  abstract obtenerProfile(userId: string): Observable<ProfileModel>;
  abstract editarProfile(
                      userId: string,
                      username?:string,
                      nombre?:string,
                      apellido?:string,
                      phone?:string
                    ): Observable<ProfileModel>;
}
