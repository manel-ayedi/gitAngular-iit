import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { AddUsersComponent } from './add-users/add-users.component';
import { ViewUsersComponent } from './view-users/view-users.component';
import {SharedModule} from "../../shared/shared.module";
import {MatSelectModule} from "@angular/material/select";


@NgModule({
  declarations: [UsersComponent, ListUsersComponent, AddUsersComponent, ViewUsersComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    SharedModule,
    MatSelectModule
  ]
})
export class UsersModule { }
