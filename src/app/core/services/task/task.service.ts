import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../../environments/environment';
import {map} from 'rxjs/operators';
import {Project} from '../../models/project';
import {Task} from '../../models/task';
@Injectable({
  providedIn: 'root'
})
export class TaskService {
  task: Task[];

  constructor(private httpClient: HttpClient) { }
  public addTask(task: Task): Observable<Task> {
    return this.httpClient.post<Task>(`${environment.urlBackend}tasks/`, task);
  }
  public updateTask(id: string, task: Task): Observable<Task> {
    return this.httpClient.patch<Task>(`${environment.urlBackend}tasks/${id}`, task);
  }

  public deleteTask(id: string): Observable<any> {
    return this.httpClient.delete<any>(`${environment.urlBackend}users/${id}`);
  }

  public getAllTask(): Observable<Task[]> {
    return this.httpClient.get<any>(`${environment.urlBackend}tasks`)
      .pipe(map(result => result._embedded.tasks));
  }

  public findById(id: string): Observable<Task> {
    return this.httpClient.get<Task>(`${environment.urlBackend}tasks/${id}`);
  }
}
