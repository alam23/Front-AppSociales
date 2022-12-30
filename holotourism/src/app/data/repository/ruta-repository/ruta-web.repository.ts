import { CommentaryMapper } from './commentary.mapper';
import { RutaMapper } from './ruta.mapper';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { RutaRepository } from 'src/app/base/ruta.repository';
import { RutaInfoModel } from 'src/app/base/models/rutaInfo.model';
import { PostMapper } from './post.mapper';

@Injectable({
  providedIn: 'root',
})
export class RutaWebRepository extends RutaRepository{


  private rutaMapper = new RutaMapper();
  private postMapper = new PostMapper();
  private commentaryMapper = new CommentaryMapper();

  constructor(_http: HttpClient) {
    super(_http);
  }

  obtenerRutaInfo(rutaId: string): Observable<RutaInfoModel> {
    return this.get('https://localhost:7247/api/Routes/Route/'+rutaId,
     this.getOptionsRest()
    ).pipe(
      map((data: any) => {
        return this.rutaMapper.mapFrom(data);
      }),
      catchError((error) => {
        console.log(error);
        return throwError(error);
      })
    );
  }

  crearPost(userId: string, routeId: string, title: string, body: string, image: string): Observable<boolean> {
    return this.post('https://localhost:7247/api/Routes/newPost',
     this.getOptionsRest(),{
      userId: userId,
      routeId: routeId,
      title: title,
      body: body,
      image: image
     }
    ).pipe(
      map((data: any) => {
        return this.postMapper.mapFrom(data);
      }),
      catchError((error) => {
        console.log(error);
        return throwError(error);
      })
    );
  }

  crearComentario(postId: string, userId: string, body: string): Observable<boolean> {
    return this.post('https://localhost:7247/api/Routes/newCommet',
     this.getOptionsRest(),{
      postId: postId,
      userId: userId,
      body: body
     }
    ).pipe(
      map((data: any) => {
        return this.commentaryMapper.mapFrom(data);
      }),
      catchError((error) => {
        console.log(error);
        return throwError(error);
      })
    );
  }

}
