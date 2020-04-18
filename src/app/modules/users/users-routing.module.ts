import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersComponent } from './users.component';
import {ListUsersComponent} from "./list-users/list-users.component";
import {AddUsersComponent} from "./add-users/add-users.component";
import {ViewUsersComponent} from "./view-users/view-users.component";

const routes: Routes = [{ path: '', component: UsersComponent },
  { path: 'list', component: ListUsersComponent },
  { path: 'add', component: AddUsersComponent },
  { path: 'view/:id', component: ViewUsersComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
