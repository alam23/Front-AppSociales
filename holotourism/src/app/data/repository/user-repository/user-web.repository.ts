import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { UserRepository } from 'src/app/base/user.repository';
import { UserModel } from 'src/app/base/models/user.model';
import { UserMapper } from './user.mapper';
@Injectable({
    providedIn: 'root',
  })
  export class UserWebRepository extends UserRepository{

    private userMapper = new UserMapper();
    constructor(_http: HttpClient) {
        super(_http);
      }
    registrarUsuario(username: string, password: string, nombre: string, apellido: string, phone: string): Observable<UserModel> {
        return this.post(`https://localhost:7247/api/Usuario/registro`,
        this.getOptionsRest(),{
            userName: username,
            password: password,
            name: nombre,
            lastName: apellido,
            cellNumber: phone
        }).pipe(
            map((data:any) => {
                return this.userMapper.mapFrom(data);
            }),
            catchError((error) => {
                console.log(error);
                return throwError(error);
            })
        );
    }

    loginUsuario(userName: string, password: string): Observable<UserModel> {
      return this.post(`https://localhost:7247/api/Usuario/login`,
      this.getOptionsRest(),{
          userName: userName,
          password: password
      }).pipe(
          map((data:any) => {
              return this.userMapper.mapFrom(data);
          }),
          catchError((error) => {
              console.log(error);
              return throwError(error);
          })
      );
    }
  }
