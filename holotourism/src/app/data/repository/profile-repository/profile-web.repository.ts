import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ProfileRepository } from 'src/app/base/profile.repository';
import { ProfileModel } from 'src/app/base/models/profile.model';
import { ProfileMapper } from './profile.mapper';

@Injectable({
  providedIn: 'root',
})
export class ProfileWebRepository extends ProfileRepository{

  private profileMapper = new ProfileMapper();

  constructor(_http: HttpClient) {
    super(_http);
  }

  editarProfile(userId: string, username?: string, name?: string, lastname?: string, cellnumber?: string):
   Observable<ProfileModel> {
    return this.post(`https://localhost:7247/api/Usuario/updateDatosPerfil`,
     this.getOptionsRest(), {
      userId: userId,
      userName: username,
      name: name,
      lastName: lastname,
      cellNumber: cellnumber
     }).pipe(
      map((data: any) => {
        return data;
      }),
    );
  }

  obtenerProfile(userId: string): Observable<ProfileModel> {
    return this.get(`https://localhost:7247/api/Usuario/listDatosPerfil`+"?UserId="+userId,
     this.getOptionsRest()).pipe(
      map((data:any) => {
        return this.profileMapper.mapFrom(data);
      }),
    );
  }

}
