import { RutaModel } from './models/ruta.model';
import { Observable } from 'rxjs';
import { BasicService } from 'src/app/data/api/basic-service';

export abstract class HomeRepository extends BasicService {
  abstract listarRutas(userId: string): Observable<RutaModel[]>;
  abstract buscarRutas(strBusqueda: string): Observable<RutaModel[]>;
}
