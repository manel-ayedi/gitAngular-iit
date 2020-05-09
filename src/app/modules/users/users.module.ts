import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { AddUsersComponent } from './add-users/add-users.component';
import { ViewUsersComponent } from './view-users/view-users.component';
import {SharedModule} from '../../shared/shared.module';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import { UsernameExistDirective } from './username-exist.directive';


@NgModule({
  declarations: [UsersComponent, ListUsersComponent, AddUsersComponent, ViewUsersComponent, UsernameExistDirective],
  imports: [
    CommonModule,
    UsersRoutingModule,
    SharedModule,
    MatSelectModule,
    MatTableModule,
    MatIconModule
  ]
})
export class UsersModule { }
