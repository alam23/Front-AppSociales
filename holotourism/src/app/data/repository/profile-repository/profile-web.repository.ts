import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ProfileRepository } from 'src/app/base/profile.repository';
import { ProfileModel } from 'src/app/base/models/profile.model';

@Injectable({
  providedIn: 'root',
})
export class ProfileWebRepository extends ProfileRepository{

  constructor(_http: HttpClient) {
    super(_http);
  }

  EditarProfile(userId: string, username?: string, name?: string, lastname?: string, cellnumber?: string):
   Observable<ProfileModel> {
    return this.put(`https://ca28d96c-1ab7-4120-833e-2c9e03ceb05a.mock.pstmn.io/profile/editprofile`,
     this.getOptionsRest(), {
      userId: userId,
      username: username,
      name: name,
      lastname: lastname,
      cellnumber: cellnumber
     }).pipe(
      map((data: any) => {
        return data;
      }),
    );
  }

}
