import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksRoutingModule } from './tasks-routing.module';
import { TasksComponent } from './tasks.component';
import {SharedModule} from '../../shared/shared.module';
import { ViewTasksComponent } from './view-tasks/view-tasks.component';
import { AddTasksComponent } from './add-tasks/add-tasks.component';
import {ListTasksComponent} from './list-tasks/list-tasks.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../../app-routing.module';
import { AppComponent } from '../../app.component';

import {DragDropModule} from '@angular/cdk/drag-drop';


@NgModule({
  declarations: [TasksComponent, ViewTasksComponent, AddTasksComponent, ListTasksComponent],
  imports: [
    CommonModule,
    TasksRoutingModule,
    SharedModule,
    BrowserModule,
    AppRoutingModule,
    DragDropModule
  ],
 // providers: [],
  // bootstrap: [AppComponent]
})
export class TasksModule { }
