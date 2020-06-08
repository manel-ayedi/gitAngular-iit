import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../../environments/environment';
import {map} from 'rxjs/operators';
import {Project} from '../../models/project';
import {User} from '../../models/user';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {


  project: Project[];

  constructor(private httpClient: HttpClient) { }
  public addProject(project: Project): Observable<Project> {
    return this.httpClient.post<Project>(`${environment.urlBackend}projects/`, project);
  }
  public updateProject(id: string, project: Project): Observable<Project> {
    return this.httpClient.patch<Project>(`${environment.urlBackend}projects/${id}`, project);
  }

  public deleteProject(id: string): Observable<any> {
    return this.httpClient.delete<any>(`${environment.urlBackend}projects/${id}`);
  }

  public getAllProject(): Observable<User[]> {
    return this.httpClient.get<any>(`${environment.urlBackend}projects`)
      .pipe(map(result => result._embedded.projects));
  }

  public findById(id: string): Observable<Project> {
    return this.httpClient.get<Project>(`${environment.urlBackend}projects/${id}`);
  }

  public usernameExist(username: string): Observable<boolean> {
    const httapParams = new HttpParams().append('username', username);
    return this.httpClient.get<boolean>(`${environment.urlBackend}projects/search/usernameExists`, {params: httapParams});
  }

}
