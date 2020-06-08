import { Component, OnInit } from '@angular/core';
import {ProjectService} from '../../../core/services/project/project.service';
import {Project} from '../../../core/models/project';
import {User} from '../../../core/models/user';
@Component({
  selector: 'app-list-projects',
  templateUrl: './list-projects.component.html',
  styleUrls: ['./list-projects.component.css']
})
export class ListProjectsComponent implements OnInit {

  private projects: User[];
  displayedColumns: string[] = ['name', 'description', 'responsable', 'team', 'action'];

  constructor(private projectService: ProjectService) {
  }

  ngOnInit() {
    // this.projectService.getAllProject().subscribe(projects => {
    //  this.projects = projects;
    //  console.log(this.projects);
    // });
    this.loadProjects();
  }

  loadProjects() {
    this.projectService.getAllProject().subscribe(projects => {
      this.projects = projects;
    });
  }

  deleteProject(id: string) {
    this.projectService.deleteProject(id).subscribe(() => this.loadProjects());
  }

}

