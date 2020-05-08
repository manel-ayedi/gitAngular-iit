import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../../environments/environment";
import {map} from "rxjs/operators";
import {Project} from "../../models/project";

@Injectable({
  providedIn: 'root'
})
export class ProjectService {


  project: Project[];

  constructor(private httpClient: HttpClient) { }
  public addProject(project: Project): Observable<Project> {
    // @ts-ignore
    return this.httpClient.post<Project>(`${environment.urlBackend}projects/`, project);
  }

  public getAllProject(): Observable<Project[]> {
    // @ts-ignore
    return this.httpClient.get<any>(`${environment.urlBackend}projects`)
      .pipe(map(result => result._embedded.projects));
  }
}
