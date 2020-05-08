import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ProjectService} from "../../../core/services/project/project.service";
import {fromEvent} from "rxjs";
import {Project} from "../../../core/models/project";
import {User} from "../../../core/models/user";


@Component({
  selector: 'app-add-projects',
  templateUrl: './add-projects.component.html',
  styleUrls: ['./add-projects.component.css']
})
export class AddProjectsComponent implements OnInit {
  private  responsables = ['ali','mourad','amir'].map(this.createResponsable);
  private  developers = ['amal','melek','amir'].map(this.createDeveloper);


  constructor ( private formBuilder: FormBuilder , private projectService: ProjectService) {
  }

  private project: Project = new Project(
    '',
    '',
    null,
    []
  );
  // @ts-ignore


  ngOnInit() {
    const observable = fromEvent(document, 'click');
    observable.subscribe(event => console.log(event));
  }
  public submit() {
    // this.subjectService.subject.next(this.user.username);
    this.projectService.addProject(this.project).subscribe();
  }

  createResponsable (name){
    return new User(name,name,name,name,name,'responsable' );
  }
  createDeveloper (name){
    return new User(name,name,name,name,name,'Developer' );
  }


}
