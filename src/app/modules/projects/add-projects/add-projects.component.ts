import {Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {ProjectService} from '../../../core/services/project/project.service';
import {fromEvent} from 'rxjs';
import {Project} from '../../../core/models/project';
import {User} from '../../../core/models/user';
import {UsersService} from '../../../core/services/user/user.service';
import {ActivatedRoute, Router} from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-add-projects',
  templateUrl: './add-projects.component.html',
  styleUrls: ['./add-projects.component.css']
})
export class AddProjectsComponent implements OnInit {
  private responsables = [];
  private developers = [];

  // tslint:disable-next-line:max-line-length variable-name
  constructor(private projectService: ProjectService, private userService: UsersService, private router: Router, private activatedRoute: ActivatedRoute, private _snackBar: MatSnackBar ) {
    this.userService.getAllUser().subscribe(users => {
      this.responsables = users.filter(user => user.role === 'PROJECT_MANAGER');
      this.developers = users.filter(user => user.role === 'DEVELOPER' +
        ''); });
  }

  private id: string;
  private project: Project = new Project(
    '',
    '',
    null,
    []
  );

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
         const id = params.id;
         if (id) {
            this.id = id;
            this.projectService.findById(this.id).subscribe(project => {
           this.project = project;
           });
          }
         });
  }

  public submit() {
    if (this.id) {
      this.projectService.updateProject(this.id, this.project).subscribe(project => this.router.navigate(['/projects/list']));
      this._snackBar.open('projet modifié', 'ok', {
        duration: 2000,
      });
    } else {
      this.projectService.addProject(this.project).subscribe(project => this.router.navigate(['/projects/list']));
    }
  }
}
