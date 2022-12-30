import { Observable } from 'rxjs';
import { BasicService } from 'src/app/data/api/basic-service';
import { UserModel } from './models/user.model';

export abstract class UserRepository extends BasicService{
    abstract registrarUsuario(
        username:string,
        password: string,
        nombre:string,
        apellido:string,
        phone:string
    ): Observable<UserModel>;
}