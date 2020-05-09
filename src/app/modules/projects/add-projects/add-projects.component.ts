import {Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {ProjectService} from '../../../core/services/project/project.service';
import {fromEvent} from 'rxjs';
import {Project} from '../../../core/models/project';
import {User} from '../../../core/models/user';
import {UsersService} from '../../../core/services/user/user.service';


@Component({
  selector: 'app-add-projects',
  templateUrl: './add-projects.component.html',
  styleUrls: ['./add-projects.component.css']
})
export class AddProjectsComponent implements OnInit {
  private responsables = [];
  private developers = [];


  constructor(private projectService: ProjectService, private userService: UsersService) {
  }

  private project: Project = new Project(
    '',
    '',
    null,
    []
  );

  ngOnInit() {
    this.userService.getAllUser().subscribe(users => {
      this.responsables = users.filter(user => user.role === 'PROJECT_MANAGER');
      this.developers = users.filter(user => user.role === 'DEVELOPER');
    });
  }

  public submit() {
    this.projectService.addProject(this.project).subscribe();
  }


}
