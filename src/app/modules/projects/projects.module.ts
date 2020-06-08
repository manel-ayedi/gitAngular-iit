import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects.component';
import {SharedModule} from '../../shared/shared.module';
import { AddProjectsComponent } from './add-projects/add-projects.component';
import { ListProjectsComponent } from './list-projects/list-projects.component';
import { ViewProjectsComponent } from './view-projects/view-projects.component';
import {MatIconModule, MatSnackBar, MatSnackBarModule} from '@angular/material';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [ProjectsComponent, AddProjectsComponent, ListProjectsComponent, ViewProjectsComponent],
    imports: [
        CommonModule,
        ProjectsRoutingModule,
        SharedModule,
        MatIconModule,
        MatTableModule,
        MatIconModule,
        MatSnackBarModule
    ]
})
export class ProjectsModule { }
