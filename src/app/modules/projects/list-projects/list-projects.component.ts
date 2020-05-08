import { Component, OnInit } from '@angular/core';
import {ProjectService} from "../../../core/services/project/project.service";
import {Project} from "../../../core/models/project";

@Component({
  selector: 'app-list-projects',
  templateUrl: './list-projects.component.html',
  styleUrls: ['./list-projects.component.css']
})
export class ListProjectsComponent implements OnInit {

  private projects: Project [];
  displayedColumns: string[] = ['name', 'description', 'responsable', 'team'];
  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.projectService.getAllProject().subscribe(projects => {
      this.projects = projects;
      console.log(this.projects);
    });
  }

}
