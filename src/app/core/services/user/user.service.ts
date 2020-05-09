import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
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
  public updateUser(id: string, user: User): Observable<User> {
    return this.httpClient.patch<User>(`${environment.urlBackend}users/${id}`, user);
  }

  public deleteUser(id: string): Observable<any> {
    return this.httpClient.delete<any>(`${environment.urlBackend}users/${id}`);
 }

  public getAllUser(): Observable<User[]> {
    return this.httpClient.get<any>(`${environment.urlBackend}users`)
      .pipe(map(result => result._embedded.users));
  }

  public findById(id: string): Observable<User> {
    return this.httpClient.get<User>(`${environment.urlBackend}users/${id}`);
  }

  public usernameExist(username: string): Observable<boolean> {
    const httapParams = new HttpParams().append('username', username);
    return this.httpClient.get<boolean>(`${environment.urlBackend}users/search/usernameExists`, {params: httapParams});
  }
}
