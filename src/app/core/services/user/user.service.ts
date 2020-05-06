import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {observableToBeFn} from 'rxjs/internal/testing/TestScheduler';
import {Observable} from 'rxjs';
import {User} from '../../models/user';
import {map} from 'rxjs/operators';
import {environment} from '../../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  user: User[];

  constructor(private httpClient: HttpClient) { }
  public addUser(user: User): Observable<User> {
    return this.httpClient.post<User>(`${environment.urlBackend}users/`, user);
  }

 // public deleteUser(username: string) {
 //   const index = this.user.findIndex(current => current.username);
  //  const deleteItem = this.user.splice(index, 1);
 // }
  public getAllUser(): Observable<User[]> {
    return this.httpClient.get<any>(`${environment.urlBackend}users`)
    .pipe(map(result => result._embedded.users));
  }
}
