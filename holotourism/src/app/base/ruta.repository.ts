import { Observable } from 'rxjs';
import { BasicService } from 'src/app/data/api/basic-service';
import { RutaInfoModel } from './models/rutaInfo.model';

export abstract class RutaRepository extends BasicService {
  abstract obtenerRutaInfo(rutaId: string): Observable<RutaInfoModel>;
  abstract crearPost(userId: string, routeId: string, title: string, body: string, image: string): Observable<boolean>;
  abstract crearComentario(postId: string, userId: string, body: string): Observable<boolean>;
}
