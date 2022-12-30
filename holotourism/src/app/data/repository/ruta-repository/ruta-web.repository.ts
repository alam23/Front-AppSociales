import { CommentaryMapper3 } from './commentary3.mapper';
import { PostModel } from './../../../base/models/post.model';
import { CommentaryMapper } from './commentary.mapper';
import { RutaMapper } from './ruta.mapper';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { RutaRepository } from 'src/app/base/ruta.repository';
import { RutaInfoModel } from 'src/app/base/models/rutaInfo.model';
import { PostMapper } from './post.mapper';
import { CommentaryModel } from 'src/app/base/models/commentary.model';
import { CommentaryMapper2 } from './commentary2.mapper';

@Injectable({
  providedIn: 'root',
})
export class RutaWebRepository extends RutaRepository{

  private rutaMapper = new RutaMapper();
  private postMapper = new PostMapper();
  private commentaryMapper = new CommentaryMapper();
  private commentaryMapper2 = new CommentaryMapper2();
  private commentaryMapper3 = new CommentaryMapper3();

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

  obtenerComentario(postId: string): Observable<PostModel> {
    return this.get('https://localhost:7247/api/Routes/Post/'+postId,
     this.getOptionsRest()
    ).pipe(
      map((data: any) => {
        return this.commentaryMapper2.mapFrom(data);
      }),
      catchError((error) => {
        console.log(error);
        return throwError(error);
      })
    );
  }

  obtenerUsuarioComentario(commentId: string): Observable<CommentaryModel> {
    return this.get('https://localhost:7247/api/Routes/Comment/'+commentId,
     this.getOptionsRest()
    ).pipe(
      map((data: any) => {
        return this.commentaryMapper3.mapFrom(data);
      }),
      catchError((error) => {
        console.log(error);
        return throwError(error);
      })
    );
  }

}
