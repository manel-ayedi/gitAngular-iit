import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjectsComponent } from './projects.component';
import {ListProjectsComponent} from "./list-projects/list-projects.component";
import {AddProjectsComponent} from "./add-projects/add-projects.component";
import {ViewProjectsComponent} from "./view-projects/view-projects.component";

const routes: Routes = [{ path: '', component: ProjectsComponent },
  { path: 'list', component: ListProjectsComponent },
  { path: 'add', component: AddProjectsComponent },
  { path: 'view/:id', component: ViewProjectsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
